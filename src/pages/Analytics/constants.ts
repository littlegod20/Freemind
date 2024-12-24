import { TrendingDown, TrendingUp } from "lucide-react";
import { StatisticsTypes } from "./components/StatisticsBox";

const statisticsData: StatisticsTypes = {
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

export default statisticsData;
