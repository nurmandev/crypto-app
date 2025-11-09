import React from "react";

export const TransactionChart: React.FC = () => {
  const data = [
    { label: "Deposits", crypto: 45, inr: 35 },
    { label: "Trades", crypto: 90, inr: 65 },
    { label: "Support", crypto: 12, inr: 7 },
    { label: "KYC", crypto: 20, inr: 15 },
  ];

  const maxValue = 100;
  const width = 600;
  const height = 300;
  const padding = { top: 30, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const barGroupWidth = chartWidth / data.length;
  const barWidth = barGroupWidth * 0.35;
  const barGap = 8;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-6">
        User Distribution
      </h3>

      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line
              x1={padding.left}
              y1={padding.top + (i * chartHeight) / 4}
              x2={width - padding.right}
              y2={padding.top + (i * chartHeight) / 4}
              stroke="#E5E7EB"
              strokeDasharray="3,3"
            />
            <text
              x={padding.left - 10}
              y={padding.top + (i * chartHeight) / 4 + 4}
              textAnchor="end"
              fontSize="12"
              fill="#6B7280"
            >
              {maxValue - (i * maxValue) / 4}
            </text>
          </g>
        ))}

        {/* Y-axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={padding.top + chartHeight}
          stroke="#E5E7EB"
          strokeWidth="1"
        />

        {/* X-axis */}
        <line
          x1={padding.left}
          y1={padding.top + chartHeight}
          x2={width - padding.right}
          y2={padding.top + chartHeight}
          stroke="#E5E7EB"
          strokeWidth="1"
        />

        {/* Bars */}
        {data.map((item, groupIndex) => {
          const groupX =
            padding.left + groupIndex * barGroupWidth + barGroupWidth / 2;
          const cryptoHeight = (item.crypto / maxValue) * chartHeight;
          const inrHeight = (item.inr / maxValue) * chartHeight;

          return (
            <g key={groupIndex}>
              {/* Crypto bar (Green) */}
              <rect
                x={groupX - barWidth - barGap / 2}
                y={padding.top + chartHeight - cryptoHeight}
                width={barWidth}
                height={cryptoHeight}
                fill="#10B981"
                rx="2"
              />

              {/* INR bar (Blue) */}
              <rect
                x={groupX + barGap / 2}
                y={padding.top + chartHeight - inrHeight}
                width={barWidth}
                height={inrHeight}
                fill="#627EEA"
                rx="2"
              />

              {/* Label */}
              <text
                x={groupX}
                y={padding.top + chartHeight + 25}
                textAnchor="middle"
                fontSize="13"
                fill="#6B7280"
                fontWeight="500"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g>
          {/* Crypto legend */}
          <rect
            x={padding.left}
            y={height - 30}
            width="12"
            height="12"
            fill="#10B981"
            rx="2"
          />
          <text
            x={padding.left + 18}
            y={height - 20}
            fontSize="13"
            fill="#10B981"
          >
            Crypto Transactions
          </text>

          {/* INR legend */}
          <rect
            x={padding.left + 180}
            y={height - 30}
            width="12"
            height="12"
            fill="#627EEA"
            rx="2"
          />
          <text
            x={padding.left + 198}
            y={height - 20}
            fontSize="13"
            fill="#627EEA"
          >
            INR Transactions
          </text>
        </g>
      </svg>
    </div>
  );
};
