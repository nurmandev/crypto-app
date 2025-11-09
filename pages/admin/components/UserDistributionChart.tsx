import React from "react";

export const UserDistributionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">
        User Distribution
      </h3>

      <div className="flex flex-col items-center gap-8">
        {/* Donut Chart */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="flex-shrink-0"
        >
          <defs>
            <circle
              id="donut"
              cx="100"
              cy="100"
              r="70"
              fill="none"
              strokeWidth="30"
            />
          </defs>

          {/* Active Users 49% - Green */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#10B981"
            strokeWidth="30"
            strokeDasharray="122 250"
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
          />

          {/* Pending Verification 20% - Orange */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="30"
            strokeDasharray="50 250"
            strokeDashoffset="-122"
            transform="rotate(-90 100 100)"
          />

          {/* Inactive Users 40% - Gray */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#6B7280"
            strokeWidth="30"
            strokeDasharray="100 250"
            strokeDashoffset="-172"
            transform="rotate(-90 100 100)"
          />

          {/* Suspended 2% - Red */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#EF4444"
            strokeWidth="30"
            strokeDasharray="5 250"
            strokeDashoffset="-272"
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
            <div className="w-3 h-3 bg-[#EF4444]" />
            <span className="text-[13px] text-[#EF4444]">Suspended 2%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F59E0B]" />
            <span className="text-[13px] text-[#F59E0B]">
              Pending Verification 20%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#6B7280]" />
            <span className="text-[13px] text-[#6B7280]">
              Inactive Users 40%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
