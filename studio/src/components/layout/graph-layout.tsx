import {
  ChartBarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {
  Component2Icon,
  HomeIcon,
  PlayIcon,
  FileTextIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getFederatedGraphByName } from "@wundergraph/cosmo-connect/dist/platform/v1/platform-PlatformService_connectquery";
import { GetFederatedGraphByNameResponse } from "@wundergraph/cosmo-connect/dist/platform/v1/platform_pb";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { PiGitBranch } from "react-icons/pi";
import { EmptyState } from "../empty-state";
import { Button } from "../ui/button";
import { Loader } from "../ui/loader";
import { LayoutProps } from "./layout";
import { Nav, NavLink } from "./nav";
import { EnumStatusCode } from "@wundergraph/cosmo-connect/dist/common/common_pb";
import { addDays, formatDistance } from "date-fns";
import { UserContext } from "../app-provider";
import { calURL } from "@/lib/constants";
import Link from "next/link";
import { MdDevices } from "react-icons/md";

const icons: { [key: string]: ReactNode } = {
  Overview: <HomeIcon />,
  Subgraphs: <Component2Icon />,
  Explorer: <PlayIcon />,
  Schema: <FileTextIcon />,
  Changelog: <PiGitBranch />,
  Checks: <CheckCircledIcon />,
  Analytics: <ChartBarIcon className="h-4 w-4" />,
  Clients: <MdDevices className="h-4 w-4" />,
};

export interface GraphContextProps {
  graph: GetFederatedGraphByNameResponse["graph"];
  subgraphs: GetFederatedGraphByNameResponse["subgraphs"];
  graphToken: string;
}

export const GraphContext = createContext<GraphContextProps | undefined>(
  undefined,
);

const GraphLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const organizationSlug = router.query.organizationSlug as string;
  const slug = router.query.slug as string;
  const user = useContext(UserContext);

  const { data, isLoading, error, refetch } = useQuery(
    getFederatedGraphByName.useQuery({
      name: slug,
    }),
  );

  const graphContextData = useMemo(() => {
    if (!data) {
      return undefined;
    }
    return {
      graph: data.graph,
      subgraphs: data.subgraphs,
      graphToken: data.graphToken,
    };
  }, [data]);

  const links: NavLink[] = useMemo(() => {
    const basePath = `/${organizationSlug}/graph/${slug}`;

    return [
      { title: "Overview", href: basePath, icon: <HomeIcon /> },
      {
        title: "Subgraphs",
        href: basePath + "/subgraphs",
        icon: <Component2Icon />,
      },
      {
        title: "Playground",
        href: basePath + "/playground",
        icon: <PlayIcon />,
      },
      {
        title: "Schema",
        href: basePath + "/schema",
        matchExact: false,
        icon: <FileTextIcon />,
      },
      {
        title: "Clients",
        href: basePath + "/clients",
        icon: <MdDevices className="h-4 w-4" />,
      },
      {
        title: "Analytics",
        href: basePath + "/analytics",
        matchExact: false,
        icon: <ChartBarIcon className="h-4 w-4" />,
      },
      {
        title: "Changelog",
        href: basePath + "/changelog",
        icon: <PiGitBranch />,
      },
      {
        title: "Checks",
        href: basePath + "/checks",
        matchExact: false,
        icon: <CheckCircledIcon />,
      },
    ];
  }, [slug, organizationSlug]);

  let render: React.ReactNode;

  if (isLoading) {
    render = <Loader fullscreen />;
  } else if (error || data?.response?.code !== EnumStatusCode.OK) {
    render = (
      <div className="my-auto">
        <EmptyState
          icon={<ExclamationTriangleIcon />}
          title="Could not retrieve your federated graph"
          description={
            data?.response?.details || error?.message || "Please try again"
          }
          actions={<Button onClick={() => refetch()}>Retry</Button>}
        />
      </div>
    );
  } else {
    render = (
      <GraphContext.Provider value={graphContextData}>
        {children}
      </GraphContext.Provider>
    );
  }

  return (
    <div className="2xl:flex 2xl:flex-1 2xl:flex-col 2xl:items-center">
      <div className="min-h-screen w-full max-w-screen-4xl bg-background font-sans antialiased">
        <Nav links={links}>{render}</Nav>
      </div>
    </div>
  );
};

export const getGraphLayout = (page: React.ReactNode) => {
  return <GraphLayout>{page}</GraphLayout>;
};
