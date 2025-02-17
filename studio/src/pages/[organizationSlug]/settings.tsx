import { UserContext } from "@/components/app-provider";
import { getDashboardLayout } from "@/components/layout/dashboard-layout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CLI } from "@/components/ui/cli";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { SubmitHandler, useZodForm } from "@/hooks/use-form";
import { docsBaseURL } from "@/lib/constants";
import { NextPageWithLayout } from "@/lib/page";
import { cn } from "@/lib/utils";
import { MinusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EnumStatusCode } from "@wundergraph/cosmo-connect/dist/common/common_pb";
import {
  createOIDCProvider,
  deleteOIDCProvider,
  deleteOrganization,
  getOIDCProvider,
  leaveOrganization,
  updateOrganizationDetails,
} from "@wundergraph/cosmo-connect/dist/platform/v1/platform-PlatformService_connectquery";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { z } from "zod";

const OrganizationDetails = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  const schema = z.object({
    organizationName: z
      .string()
      .min(3, {
        message: "Organization name must be a minimum of 3 characters",
      })
      .max(32, { message: "Organization name must be maximum 32 characters" }),
    organizationSlug: z
      .string()
      .toLowerCase()
      .regex(
        new RegExp("^[a-z0-9]+(?:-[a-z0-9]+)*$"),
        "Slug should start and end with an alphanumeric character. Spaces and special characters other that hyphen not allowed.",
      )
      .min(3, {
        message: "Organization slug must be a minimum of 3 characters",
      })
      .max(24, { message: "Organization slug must be maximum 24 characters" }),
  });

  type OrganizationDetailsInput = z.infer<typeof schema>;

  const form = useZodForm<OrganizationDetailsInput>({
    schema,
    mode: "onChange",
  });

  useEffect(() => {
    if (!user?.currentOrganization) return;

    form.setValue("organizationName", user.currentOrganization.name);
    form.setValue("organizationSlug", user.currentOrganization.slug);
  }, [form, user?.currentOrganization]);

  const { mutate, isPending } = useMutation(
    updateOrganizationDetails.useMutation(),
  );

  const { toast } = useToast();

  const onSubmit: SubmitHandler<OrganizationDetailsInput> = (data) => {
    mutate(
      {
        userID: user?.id,
        organizationName: data.organizationName,
        organizationSlug: data.organizationSlug,
      },
      {
        onSuccess: (d) => {
          if (d.response?.code === EnumStatusCode.OK) {
            router.replace(`/${data.organizationSlug}/settings`);
            toast({
              description: "Organization details updated successfully.",
              duration: 3000,
            });
          } else if (d.response?.details) {
            toast({ description: d.response.details, duration: 3000 });
          }
        },
        onError: (error) => {
          toast({
            description:
              "Could not update the organization details. Please try again.",
            duration: 3000,
          });
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="organizationName"
          defaultValue={user?.currentOrganization.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is the visible name of your organization within WunderGraph
                Cosmo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organizationSlug"
          defaultValue={user?.currentOrganization.slug}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is the URL namespace of the organization within WunderGraph
                Cosmo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="ml-auto"
          isLoading={isPending}
          type="submit"
          disabled={
            !form.formState.isValid ||
            !user?.currentOrganization.roles.includes("admin")
          }
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

interface Mapper {
  dbRole: string;
  ssoGroup: string;
}

type MapperInput = Mapper & {
  id: number;
};

const dbRoleOptions = ["Admin", "Developer", "Viewer"];
const createMapperSchema = z.object({
  dbRole: z.string().min(1).default(dbRoleOptions[0]),
  ssoGroup: z.string().min(1, { message: "Please enter a value" }),
});

const saveSchema = z.array(createMapperSchema).min(1);

const NewMapper = ({
  remove,
  onChange,
  mapper,
}: {
  remove: () => void;
  onChange: (secret: Mapper) => void;
  mapper: Mapper;
}) => {
  type CreateMapperFormInput = z.infer<typeof createMapperSchema>;
  const [dbRole, setDbRole] = useState(dbRoleOptions[0]);

  const {
    register,
    formState: { errors },
  } = useZodForm<CreateMapperFormInput>({
    mode: "onChange",
    schema: createMapperSchema,
  });

  return (
    <div className="flex items-center gap-x-3">
      <div className="grid flex-1 grid-cols-6 gap-x-2">
        <div className="col-span-3">
          <Select
            value={dbRole}
            onValueChange={(value) => {
              onChange({
                dbRole: value,
                ssoGroup: mapper.ssoGroup,
              });
              setDbRole(value);
            }}
            {...register("dbRole")}
          >
            <SelectTrigger value={dbRole} className="w-[200px] lg:w-full">
              <SelectValue aria-label={dbRole}>{dbRole}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {dbRoleOptions.map((option) => {
                return (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {errors.dbRole && (
            <span className="px-2 text-xs text-destructive">
              {errors.dbRole.message}
            </span>
          )}
        </div>
        <div className="col-span-3">
          <Input
            className="w-full"
            type="text"
            placeholder="groupName or regex"
            {...register("ssoGroup")}
            onInput={(e) => {
              onChange({
                dbRole: mapper.dbRole,
                ssoGroup: e.currentTarget.value,
              });
            }}
          />
          {errors.ssoGroup && (
            <span className="px-2 text-xs text-destructive">
              {errors.ssoGroup.message}
            </span>
          )}
        </div>
      </div>
      <Button
        aria-label="remove"
        size="icon"
        variant="ghost"
        onClick={() => {
          remove();
        }}
      >
        <MinusCircledIcon />
      </Button>
    </div>
  );
};

const AddNewMappers = ({
  mappers,
  updateMappers,
}: {
  mappers: MapperInput[];
  updateMappers: Dispatch<SetStateAction<MapperInput[]>>;
}) => {
  return (
    <>
      {mappers.map((mapper, index) => (
        <NewMapper
          key={mapper.id}
          mapper={mapper}
          remove={() => {
            const newMappers = [...mappers];
            newMappers.splice(index, 1);
            updateMappers(newMappers);
          }}
          onChange={(newMapper) => {
            const newMappers = [...mappers];
            newMappers[index] = { ...newMappers[index], ...newMapper };
            updateMappers(newMappers);
          }}
        />
      ))}
      <Button
        className="flex w-max gap-x-2"
        variant="outline"
        onClick={() => {
          const newMappers = [
            ...mappers,
            {
              id: Date.now(),
              dbRole: dbRoleOptions[0],
              ssoGroup: "",
            },
          ];
          updateMappers(newMappers);
        }}
      >
        <PlusIcon />
        <p>{mappers.length === 0 ? "Add" : "Add another"}</p>
      </Button>
    </>
  );
};

const OpenIDConnectProvider = ({
  currentMode,
}: {
  currentMode: "create" | "map" | "result";
}) => {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [mode, setMode] = useState(currentMode);

  const {
    data: providerData,
    refetch,
    isLoading,
  } = useQuery(getOIDCProvider.useQuery());

  const { mutate, isPending, data } = useMutation(
    createOIDCProvider.useMutation(),
  );

  const { mutate: deleteOidcProvider } = useMutation(
    deleteOIDCProvider.useMutation(),
  );

  const { toast } = useToast();

  const connectOIDCProviderInputSchema = z.object({
    name: z.string().min(1),
    discoveryEndpoint: z.string().startsWith("https://").min(1),
    clientID: z.string().min(1),
    clientSecret: z.string().min(1),
  });

  type ConnectOIDCProviderInput = z.infer<
    typeof connectOIDCProviderInputSchema
  >;

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useZodForm<ConnectOIDCProviderInput>({
    mode: "onBlur",
    schema: connectOIDCProviderInputSchema,
  });

  const [mappers, updateMappers] = useState<MapperInput[]>([
    {
      id: Date.now(),
      dbRole: dbRoleOptions[0],
      ssoGroup: "",
    },
  ]);

  const onSubmit: SubmitHandler<ConnectOIDCProviderInput> = (data) => {
    const groupMappers = mappers.map((m) => {
      return { role: m.dbRole, ssoGroup: m.ssoGroup };
    });

    groupMappers.push({
      role: "Viewer",
      ssoGroup: ".*",
    });

    mutate(
      {
        clientID: data.clientID,
        clientSecrect: data.clientSecret,
        discoveryEndpoint: data.discoveryEndpoint,
        name: data.name,
        mappers: groupMappers,
      },
      {
        onSuccess: (d) => {
          if (d.response?.code === EnumStatusCode.OK) {
            toast({
              description: "OIDC provider connected successfully.",
              duration: 3000,
            });
            setMode("result");
          } else if (d.response?.details) {
            toast({ description: d.response.details, duration: 4000 });
            setMode("create");
            setOpen(false);
          }
        },
        onError: (error) => {
          toast({
            description:
              "Could not connect the oidc provider to the organization. Please try again.",
            duration: 3000,
          });
          setMode("create");
          setOpen(false);
        },
      },
    );
    reset();
    updateMappers([
      {
        id: Date.now(),
        dbRole: dbRoleOptions[0],
        ssoGroup: "",
      },
    ]);
  };

  return (
    <Card>
      <CardHeader className="gap-y-6 md:flex-row">
        <div className="space-y-1.5">
          <CardTitle>Connect OIDC provider</CardTitle>
          <CardDescription>
            Connecting an OIDC provider allows users to automatically log in and
            be a part of this organization.{" "}
            <Link
              href={docsBaseURL + "/studio/sso"}
              className="text-sm text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </Link>
          </CardDescription>
        </div>
        {!isLoading && (
          <>
            {providerData && providerData.name ? (
              <AlertDialog
                open={
                  user?.currentOrganization.roles.includes("admin")
                    ? alertOpen
                    : false
                }
                onOpenChange={setAlertOpen}
              >
                <AlertDialogTrigger asChild>
                  <Button
                    className="md:ml-auto"
                    type="submit"
                    variant="destructive"
                    disabled={
                      !user?.currentOrganization.roles.includes("admin")
                    }
                  >
                    Disconnect
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to disconnect the oidc provider?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-y-1">
                      <p>
                        All members who are connected to the SSO will be logged
                        out and downgraded to the viewer role.
                      </p>
                      <p>Reconnecting will result in a new login url.</p>
                      <p>This action cannot be undone.</p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className={buttonVariants({ variant: "destructive" })}
                      type="button"
                      onClick={() => {
                        deleteOidcProvider(
                          {},
                          {
                            onSuccess: (d) => {
                              if (d.response?.code === EnumStatusCode.OK) {
                                refetch();
                                toast({
                                  description:
                                    "OIDC provider disconnected successfully.",
                                  duration: 3000,
                                });
                              } else if (d.response?.details) {
                                toast({
                                  description: d.response.details,
                                  duration: 4000,
                                });
                              }
                            },
                            onError: (error) => {
                              toast({
                                description:
                                  "Could not disconnect the OIDC provider. Please try again.",
                                duration: 3000,
                              });
                            },
                          },
                        );
                      }}
                    >
                      Disconnect
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <Dialog
                open={open}
                onOpenChange={() => {
                  setOpen(!open);
                  if (open) {
                    setMode("create");
                    refetch();
                  }
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    className="md:ml-auto"
                    type="submit"
                    variant="default"
                  >
                    Connect
                  </Button>
                </DialogTrigger>
                <DialogContent
                  onInteractOutside={(event) => {
                    event.preventDefault();
                  }}
                >
                  {isPending ? (
                    <Loader />
                  ) : (
                    <>
                      <DialogHeader>
                        {mode === "create" && (
                          <>
                            <DialogTitle>
                              Connect OpenID Connect Provider
                            </DialogTitle>
                            <DialogDescription className="flex flex-col gap-y-2">
                              <p>
                                Connecting an OIDC provider to this organization
                                allows users to automatically log in and be part
                                of this organization.
                              </p>
                              <p>
                                Use Okta, Auth0 or any other OAuth2 Open ID
                                Connect compatible provider.
                              </p>
                              <div>
                                <Link
                                  href={docsBaseURL + "/studio/sso"}
                                  className="text-sm text-primary"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Click here{" "}
                                </Link>
                                for the step by step guide to configure your
                                OIDC provider.
                              </div>
                            </DialogDescription>
                          </>
                        )}
                        {mode === "map" && (
                          <>
                            <DialogTitle>Configure group mappers</DialogTitle>
                            <DialogDescription>
                              Map your groups to cosmo roles.
                            </DialogDescription>
                          </>
                        )}
                        {mode === "result" && (
                          <>
                            <DialogTitle>
                              Steps to configure your OIDC provider
                            </DialogTitle>
                          </>
                        )}
                      </DialogHeader>
                      {mode !== "result" ? (
                        <form
                          className="mt-2 flex flex-col gap-y-3"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {mode === "create" && (
                            <>
                              <div className="flex flex-col gap-y-2">
                                <span className="text-sm font-semibold">
                                  Name
                                </span>
                                <Input
                                  className="w-full"
                                  type="text"
                                  {...register("name")}
                                />
                                {errors.name && (
                                  <span className="px-2 text-xs text-destructive">
                                    {errors.name.message}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-y-2">
                                <span className="text-sm font-semibold">
                                  Discovery Endpoint
                                </span>
                                <Input
                                  className="w-full"
                                  type="text"
                                  placeholder="https://hostname/auth/realms/master/.wellknown/openid-configuration"
                                  {...register("discoveryEndpoint")}
                                />
                                {errors.discoveryEndpoint && (
                                  <span className="px-2 text-xs text-destructive">
                                    {errors.discoveryEndpoint.message}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-y-2">
                                <span className="text-sm font-semibold">
                                  Client ID
                                </span>
                                <Input
                                  className="w-full"
                                  type="text"
                                  {...register("clientID")}
                                />
                                {errors.clientID && (
                                  <span className="px-2 text-xs text-destructive">
                                    {errors.clientID.message}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-y-2">
                                <span className="text-sm font-semibold">
                                  Client Secret
                                </span>
                                <Input
                                  className="w-full"
                                  type="password"
                                  {...register("clientSecret")}
                                />
                                {errors.clientSecret && (
                                  <span className="px-2 text-xs text-destructive">
                                    {errors.clientSecret.message}
                                  </span>
                                )}
                              </div>

                              <Button
                                className="mt-2"
                                onClick={() => {
                                  setMode("map");
                                }}
                                disabled={!isValid}
                                variant="default"
                                isLoading={isPending}
                              >
                                Connect
                              </Button>
                            </>
                          )}
                          {mode === "map" && (
                            <>
                              <div className="flex justify-between px-1 text-sm font-bold">
                                <span>Role in cosmo</span>
                                <span className="pr-12">
                                  Group in the provider
                                </span>
                              </div>
                              <AddNewMappers
                                mappers={mappers}
                                updateMappers={updateMappers}
                              />
                              <Button
                                disabled={
                                  !saveSchema.safeParse(mappers).success
                                }
                                variant="default"
                                size="lg"
                                type="submit"
                              >
                                Save
                              </Button>
                            </>
                          )}
                        </form>
                      ) : (
                        <div className="flex flex-col gap-y-2">
                          <div className="flex flex-col gap-y-1">
                            <span>
                              1. Set your OIDC provider sign-in redirect URI as
                            </span>
                            <CLI
                              command={data?.signInURL || ""}
                              spanClassName="w-96"
                            />
                          </div>
                          <div className="flex flex-col gap-y-1">
                            <span>
                              2. Set your OIDC provider sign-out redirect URI as
                            </span>
                            <CLI
                              command={data?.signOutURL || ""}
                              spanClassName="w-96"
                            />
                          </div>

                          <div className="flex flex-col gap-y-1 pt-3">
                            <span>
                              Your users can login to the organization using the
                              below url.
                            </span>
                            <CLI
                              command={data?.loginURL || ""}
                              spanClassName="w-96"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </DialogContent>
              </Dialog>
            )}
          </>
        )}
      </CardHeader>
      {isLoading && <Loader />}
      {!isLoading && providerData && providerData.name && (
        <CardContent className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-2">
            <span className="px-1">OIDC provider</span>
            <CLI command={`https://${providerData.endpoint}`} />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="px-1">Sign in redirect URL</span>
            <CLI command={providerData?.signInRedirectURL || ""} />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="px-1">Sign out redirect URL</span>
            <CLI command={providerData?.signOutRedirectURL || ""} />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="px-1">Login URL</span>
            <CLI command={providerData?.loginURL || ""} />
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const LeaveOrganization = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation(leaveOrganization.useMutation());

  const { toast } = useToast();

  const handleLeaveOrg = () => {
    mutate(
      {
        userID: user?.id,
      },
      {
        onSuccess: (d) => {
          if (d.response?.code === EnumStatusCode.OK) {
            router.reload();
            toast({
              description: "Left the organization successfully.",
              duration: 3000,
            });
          } else if (d.response?.details) {
            toast({ description: d.response.details, duration: 4000 });
          }
        },
        onError: (error) => {
          toast({
            description: "Could not leave the organization. Please try again.",
            duration: 3000,
          });
        },
      },
    );
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader className="gap-y-6 md:flex-row">
        <div className="space-y-1.5">
          <CardTitle>Leave Organization</CardTitle>
          <CardDescription>
            Revokes your access to this organization.
          </CardDescription>
        </div>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button className="md:ml-auto" type="submit" variant="secondary">
              Leave organization
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to leave this organization?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "destructive" })}
                type="button"
                onClick={handleLeaveOrg}
              >
                Leave
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
    </Card>
  );
};

const DeleteOrganization = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const regex = new RegExp(`^${user?.currentOrganization.name}$`);
  const schema = z.object({
    organizationName: z.string().regex(regex, {
      message: "Please enter the organization name as requested.",
    }),
  });

  type DeleteOrgInput = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useZodForm<DeleteOrgInput>({
    schema,
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation(deleteOrganization.useMutation());

  const { toast } = useToast();

  const handleDeleteOrg = () => {
    mutate(
      {
        userID: user?.id,
      },
      {
        onSuccess: (d) => {
          if (d.response?.code === EnumStatusCode.OK) {
            router.reload();
            toast({
              description: "Deleted the organization succesfully.",
              duration: 3000,
            });
          } else if (d.response?.details) {
            toast({ description: d.response.details, duration: 3000 });
          }
        },
        onError: (error) => {
          toast({
            description: "Could not delete the organization. Please try again.",
            duration: 3000,
          });
        },
      },
    );
    setOpen(false);
  };

  return (
    <Card className="border-destructive">
      <CardHeader>
        <CardTitle>Delete Organization</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          The organization will be permanently deleted. This action is
          irreversible and can not be undone.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog
          open={
            user?.currentOrganization.roles.includes("admin") ? open : false
          }
          onOpenChange={setOpen}
        >
          <DialogTrigger
            className={cn({
              "cursor-not-allowed":
                !user?.currentOrganization.roles.includes("admin"),
            })}
            asChild
          >
            <Button
              type="submit"
              variant="destructive"
              className="w-full md:ml-auto md:w-max"
              disabled={!user?.currentOrganization.roles.includes("admin")}
            >
              Delete organization
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete this organization?
              </DialogTitle>
              <span className="text-sm text-muted-foreground">
                This action cannot be undone.
              </span>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleDeleteOrg)} className="mt-2">
              <div className="flex flex-col gap-y-3">
                <span className="text-sm">
                  Enter <strong>{user?.currentOrganization.name}</strong> to
                  confirm you want to delete this organization.
                </span>
                <Input
                  type="text"
                  {...register("organizationName")}
                  autoFocus={true}
                />
                {errors.organizationName && (
                  <span className="px-2 text-xs text-destructive">
                    {errors.organizationName.message}
                  </span>
                )}
                <div className="mt-2 flex justify-end gap-x-4">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    isLoading={isPending}
                    type="submit"
                    disabled={!isValid}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const SettingsDashboardPage: NextPageWithLayout = () => {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col gap-y-4">
      <OrganizationDetails />
      {user && !user.currentOrganization.isPersonal && (
        <>
          <Separator className="my-2" />
          <OpenIDConnectProvider currentMode="create" />
          <Separator className="my-2" />
          <LeaveOrganization />
          <DeleteOrganization />
        </>
      )}
    </div>
  );
};

SettingsDashboardPage.getLayout = (page) => {
  return getDashboardLayout(
    page,
    "Settings",
    "Settings for this organization.",
  );
};

export default SettingsDashboardPage;
