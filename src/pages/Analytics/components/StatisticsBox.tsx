import { LucideIcon } from "lucide-react";

export interface StatisticsTypes {
  data: {
    title: string;
    value: number;
    detail: { trend?: "up" | "down"; trendMsg: string };
    graph?: LucideIcon;
  }[];
}

const StatisticsBox: React.FC<StatisticsTypes> = ({ data }) => {
  return (
    <div className="gap-4 flex overflow-scroll">
      {data.map((item, index) => (
        <div
          className="px-4 py-7 space-y-2 rounded-lg text-gray-500 flex flex-col border min-w-64 shadow-md"
          key={index}
        >
          <p className="text-sm ">{item.title}</p>
          <p className="text-3xl font-bold text-black">{item.value}</p>
          <p className="text-xs flex items-center gap-1">
            {item.graph && item.detail.trend && (
              <span>
                {item.detail.trend === "up" ? (
                  <item.graph className="text-[#84CC16]" size={15} />
                ) : (
                  <item.graph className="text-red-600" size={15} />
                )}
              </span>
            )}
            {item.detail.trendMsg}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsBox;
