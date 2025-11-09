import React from "react";

export const PlatformCryptoPortfolio: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">
        Platform Crypto Portfolio
      </h3>

      <div className="flex flex-col items-center gap-8">
        {/* Donut Chart */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="flex-shrink-0"
        >
          {/* Active Users 49% - Green */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#10B981"
            strokeWidth="28"
            strokeDasharray="122 250"
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
          />

          {/* Bitcoin 45.2% - Orange */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="28"
            strokeDasharray="113 250"
            strokeDashoffset="-122"
            transform="rotate(-90 100 100)"
          />

          {/* Ethereum 28.5% - Blue */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#627EEA"
            strokeWidth="28"
            strokeDasharray="71 250"
            strokeDashoffset="-235"
            transform="rotate(-90 100 100)"
          />

          {/* Cardano 6.8% - Dark Blue */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#0033AD"
            strokeWidth="28"
            strokeDasharray="17 250"
            strokeDashoffset="-306"
            transform="rotate(-90 100 100)"
          />

          {/* Others 4.2% - Gray */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#6B7280"
            strokeWidth="28"
            strokeDasharray="10 250"
            strokeDashoffset="-323"
            transform="rotate(-90 100 100)"
          />

          {/* Inner white circle */}
          <circle cx="100" cy="100" r="50" fill="white" />
        </svg>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10B981]" />
            <span className="text-[13px] text-[#10B981]">Active Users 49%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#0033AD]" />
            <span className="text-[13px] text-[#0033AD]">Cardano 6.8%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F59E0B]" />
            <span className="text-[13px] text-[#F59E0B]">Bitcoin 45.2%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#627EEA]" />
            <span className="text-[13px] text-[#627EEA]">Ethereum 28.5%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#6B7280]" />
            <span className="text-[13px] text-[#6B7280]">Others 4.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
