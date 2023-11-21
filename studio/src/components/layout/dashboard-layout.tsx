import { Component2Icon } from "@radix-ui/react-icons";
import { addDays, formatDistance } from "date-fns";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import {
  IoKeyOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { PiGear, PiGraphLight } from "react-icons/pi";
import { PageHeader } from "./head";
import { LayoutProps } from "./layout";
import { SideNav, NavLink } from "./sidenav";
import { TitleLayout } from "./title-layout";

export const DashboardLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const organizationSlug = router.query.organizationSlug as string;

  const links: NavLink[] = useMemo(() => {
    const basePath = `/${organizationSlug}`;

    return [
      {
        title: "Overview",
        href: basePath + "/graphs",
        icon: <PiGraphLight size="1.2em" />,
      },
      {
        title: "Subgraphs",
        href: basePath + "/subgraphs",
        icon: <Component2Icon />,
      },
    ];
  }, [organizationSlug]);

  return (
    <div className="2xl:flex 2xl:flex-1 2xl:flex-col 2xl:items-center">
      <div className="flex min-h-screen w-full flex-1 flex-col bg-background font-sans antialiased lg:grid lg:grid-cols-[auto_1fr] lg:divide-x">
        <SideNav links={links}>{children}</SideNav>
        <main className="flex-1 pt-4 lg:pt-0">{children}</main>
      </div>
    </div>
  );
};

export const getDashboardLayout = (
  page: React.ReactNode,
  title: string,
  subtitle: string,
  items?: React.ReactNode,
) => {
  return (
    <DashboardLayout>
      <PageHeader title={`Dashboard | ${title}`}>
        <TitleLayout title={title} subtitle={subtitle} items={items}>
          {page}
        </TitleLayout>
      </PageHeader>
    </DashboardLayout>
  );
};
