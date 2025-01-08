import { TrendingDown, TrendingUp } from "lucide-react";
import { StatisticsTypes } from "./components/StatisticsBox";
import { LabelTypes, TableDetailsTypes } from "@/utils/types";

export const statisticsData: StatisticsTypes = {
  data: [
    {
      title: "Total sessions",
      value: 1800,
      detail: { trend: "up", trendMsg: "+2.6% than last month" },
      graph: TrendingUp,
    },
    {
      title: "Average sessions per user",
      value: 2,
      detail: { trend: "down", trendMsg: "- 0.53% than last month" },
      graph: TrendingDown,
    },
    {
      title: "Total tokens used",
      value: 12000,
      detail: { trend: "down", trendMsg: "- 2% than last month" },
      graph: TrendingDown,
    },
    {
      title: "Average token used",
      value: 90,
      detail: { trend: "up", trendMsg: " 0.53% than last month" },
      graph: TrendingUp,
    },
  ],
};

export const analyticsTabs: LabelTypes[] = [
  { label: "3 months ago", active: true },
  { label: "2 months ago", active: false },
  { label: "Last month", active: false },
];

export const analyticsSessionsTitles: string[] = ["Name", "Total sessions"];

export const analyticsSessionsDetails: TableDetailsTypes[] = [
  {
    id: "0",
    name: "Alex Johnson",
    totalSessions: "60",
  },
  {
    id: "1",
    name: "Maria Rodriguez",
    totalSessions: "500",
  },
  {
    id: "2",
    name: "Chris Thompson",
    totalSessions: "1000",
  },
];

export const numOfCallsforServiceTitles = ["Name", "Open AI", "Palm"];

export const numOfCallsforServiceDets = [
  {
    id: "0",
    name: "Alex Johnson",
    openAI: "500",
    palm: "261",
  },
  {
    id: "1",
    name: "Maria Rodriguez",
    openAI: "500",
    palm: "261",
  },
  {
    id: "2",
    name: "Chris Thompson",
    openAI: "500",
    palm: "261",
  },
];
