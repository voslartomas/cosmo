import useWindowSize from "@/hooks/use-window-size";
import { dateFormatter, useChartData } from "@/lib/insights-helpers";
import { cn } from "@/lib/utils";
import { formatMetric, formatPercentMetric } from "@/lib/format-metric";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getDashboardAnalyticsView } from "@wundergraph/cosmo-connect/dist/platform/v1/platform-PlatformService_connectquery";
import {
  OperationRequestCount,
  RequestSeriesItem,
} from "@wundergraph/cosmo-connect/dist/platform/v1/platform_pb";
import { useId, useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import BarList from "./analytics/barlist";
import { EmptyState } from "./empty-state";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Loader } from "./ui/loader";
import { Separator } from "./ui/separator";
import { EnumStatusCode } from "@wundergraph/cosmo-connect/dist/common/common_pb";
import { useRouter } from "next/router";
import { constructAnalyticsTableQueryState } from "./analytics/constructAnalyticsTableQueryState";
import { ChartTooltip } from "./analytics/charts";

const valueFormatter = (number: number) => `${formatMetric(number)}`;

const RequestChart = ({
  requestSeries,
}: {
  requestSeries: RequestSeriesItem[];
}) => {
  const categorized = useMemo(() => {
    let success = 0;
    let error = 0;
    requestSeries.forEach((o) => {
      success += o.totalRequests - o.erroredRequests;
      error += o.erroredRequests;
    });

    return {
      success,
      error,
    };
  }, [requestSeries]);

  const count = requestSeries.reduce((accumulator, operation) => {
    return accumulator + operation.totalRequests;
  }, 0);

  const { isMobile } = useWindowSize();

  const { data, ticks, domain, timeFormatter } = useChartData(
    7 * 24,
    requestSeries,
  );

  const color1 = useId();
  const color2 = useId();

  const requestsColor = "hsl(var(--chart-primary))";

  return (
    <div className="flex h-full w-full flex-col gap-y-8 rounded-md border p-4 lg:w-3/5 lg:gap-y-4">
      <div className="flex flex-col gap-x-6 gap-y-2 md:flex-row md:items-center">
        <h2 className="flex items-center gap-x-2">
          <span>Requests</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-xs text-muted-foreground">1 Week</span>
        </h2>
        <div className="flex items-center gap-x-2 text-sm md:ml-auto">
          <div className="h-3 w-3 rounded-full bg-sky-500" />
          Total
          <Badge variant="secondary">{formatMetric(count)}</Badge>
        </div>
        <div className="flex items-center gap-x-2 text-sm">
          <div className="h-3 w-3 rounded-full bg-destructive/75" />
          Errored
          <Badge variant="secondary">
            {formatPercentMetric((categorized.error / (count || 1)) * 100)} (
            {formatMetric(categorized.error)})
          </Badge>
        </div>
      </div>
      <ResponsiveContainer
        width={"100%"}
        height={200}
        className="my-auto text-xs"
      >
        <AreaChart
          data={data}
          margin={isMobile ? undefined : { right: 60, top: 10 }}
        >
          <defs>
            <linearGradient id={color1} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id={color2} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            domain={domain}
            ticks={ticks}
            tickFormatter={timeFormatter}
            type="number"
            axisLine={false}
          />
          <YAxis
            tickFormatter={valueFormatter}
            dataKey="totalRequests"
            axisLine={false}
            tickLine={false}
            interval={1}
            hide={isMobile}
          />
          <CartesianGrid strokeDasharray="3 3" className="stroke-secondary" />

          <ChartTooltip formatter={valueFormatter} />

          <Area
            name="Total requests"
            type="monotone"
            dataKey="totalRequests"
            stroke={requestsColor}
            fill={`url(#${color1})`}
          />
          <Area
            name="Errors"
            type="monotone"
            dataKey="erroredRequests"
            stroke="#ef4444"
            fill={`url(#${color2})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const MostRequested = ({ data }: { data: OperationRequestCount[] }) => {
  const { asPath } = useRouter();

  const operations = useMemo(() => {
    return data.map((d) => {
      const filterQueryParam = constructAnalyticsTableQueryState({
        operationName: d.operationName,
        operationHash: d.operationHash,
      });
      const currentPath = asPath.split?.("#")?.[0]?.split?.("?")?.[0];

      return {
        hash: d.operationHash,
        name: d.operationName || "-",
        value: d.totalRequests,
        href: `${currentPath}/analytics${filterQueryParam}`,
      };
    });
  }, [data, asPath]);

  return (
    <div className="flex h-full w-full flex-col gap-y-4 rounded-md border p-4 lg:w-2/5">
      <h2 className="flex items-center gap-x-2">
        <span>Top 5 Operations</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-xs text-muted-foreground">1 Week</span>
      </h2>
      <BarList
        rowClassName="bg-purple-400/20"
        data={operations.map((op) => ({
          ...op,
          name: (
            <div className="flex">
              <span className="w-16 text-muted-foreground">
                {op.hash.slice(0, 6)}
              </span>
              <span className="truncate">{op.name}</span>
            </div>
          ),
          key: op.name,
        }))}
        showAnimation={true}
        valueFormatter={valueFormatter}
      />
    </div>
  );
};

export const OperationsOverview = ({
  federatedGraphName,
}: {
  federatedGraphName: string;
}) => {
  const { data, isLoading, error, refetch } = useQuery(
    getDashboardAnalyticsView.useQuery({
      federatedGraphName,
    }),
  );

  if (isLoading) {
    return (
      <div className="order-2 h-72 w-full border lg:order-last">
        <Loader fullscreen />
      </div>
    );
  }

  if (error || data?.response?.code !== EnumStatusCode.OK) {
    return (
      <EmptyState
        className="order-2 h-72 border lg:order-last"
        icon={<ExclamationTriangleIcon />}
        title="Could not retrieve weekly analytics data"
        description={
          data?.response?.details || error?.message || "Please try again"
        }
        actions={<Button onClick={() => refetch()}>Retry</Button>}
      />
    );
  }

  return (
    <div className="order-2 flex w-full flex-col items-center gap-4 lg:order-last lg:flex-row">
      <RequestChart requestSeries={data?.requestSeries ?? []} />
      <MostRequested data={data?.mostRequestedOperations ?? []} />
    </div>
  );
};
