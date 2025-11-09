import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  variant?: "default" | "success" | "danger";
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  trend,
  variant = "default",
}) => {
  const getTrendColor = () => {
    if (trend?.startsWith("+")) return "text-[#3CC27B]";
    if (trend?.startsWith("-")) return "text-red-500";
    return "text-gray-500";
  };

  return (
    <div className="flex w-full md:w-[286px] h-[109px] px-3 py-2.5 justify-center items-center gap-8 rounded-[10px] border border-[#D4D4D4] bg-white">
      <div className="flex flex-col items-start justify-start gap-0">
        <div className="text-black font-inter text-sm font-normal leading-[33px]">
          {title}
        </div>
        <div className="flex items-baseline gap-2">
          <div className="text-black font-roboto text-xl font-bold leading-[33px]">
            {value}
          </div>
        </div>
        {trend && (
          <div
            className={`font-roboto text-xs font-medium leading-[33px] ${getTrendColor()}`}
          >
            {trend}
          </div>
        )}
      </div>
      <div className="flex h-[35px] w-[35px] p-2.5 justify-center items-center rounded-full bg-[rgba(60,194,123,0.31)]">
        {icon}
      </div>
    </div>
  );
};
