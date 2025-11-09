import React from "react";

interface CryptoStatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
}

export const CryptoStatsCard: React.FC<CryptoStatsCardProps> = ({
  title,
  value,
  icon,
  bgColor = "#BDFDDB",
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 px-3 sm:px-[11px] py-3 sm:py-2.5 bg-white rounded-lg sm:rounded-[10px] border border-[#D4D4D4] min-h-[95px] sm:h-[109px]">
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-normal leading-normal sm:leading-[33px] text-[#666] font-inter">
          {title}
        </span>
        <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-normal sm:leading-[33px] text-black font-roboto mt-1">
          {value}
        </span>
      </div>
      <div
        className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-[35px] sm:w-[35px] rounded-full p-2"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
    </div>
  );
};
