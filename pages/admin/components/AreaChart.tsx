import React from "react";

export const AreaChart: React.FC = () => {
  const data = [
    { month: "Jan", value: 2000 },
    { month: "Mar", value: 4500 },
    { month: "May", value: 6000 },
    { month: "Jul", value: 8500 },
    { month: "Sep", value: 9500 },
    { month: "Nov", value: 9000 },
  ];

  const maxValue = 10000;
  const width = 500;
  const height = 250;
  const padding = { top: 20, right: 30, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const pointSpacing = chartWidth / (data.length - 1);

  const points = data.map((d, i) => ({
    x: padding.left + i * pointSpacing,
    y: padding.top + chartHeight - (d.value / maxValue) * chartHeight,
    value: d.value,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-[15px] font-medium text-black mb-4">
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
          <line
            key={i}
            x1={padding.left}
            y1={padding.top + (i * chartHeight) / 4}
            x2={width - padding.right}
            y2={padding.top + (i * chartHeight) / 4}
            stroke="#E5E7EB"
            strokeDasharray="5,5"
          />
        ))}

        {/* Y-axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={padding.top + chartHeight}
          stroke="#E5E7EB"
        />

        {/* X-axis */}
        <line
          x1={padding.left}
          y1={padding.top + chartHeight}
          x2={width - padding.right}
          y2={padding.top + chartHeight}
          stroke="#E5E7EB"
        />

        {/* Area */}
        <path d={areaD} fill="#A78BFA" fillOpacity="0.3" />

        {/* Line */}
        <path d={pathD} stroke="#7C3AED" strokeWidth="2" fill="none" />

        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map((i) => (
          <text
            key={i}
            x={padding.left - 10}
            y={padding.top + (i * chartHeight) / 4 + 5}
            textAnchor="end"
            fontSize="12"
            fill="#6B7280"
          >
            {maxValue - (i * maxValue) / 4}
          </text>
        ))}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={points[i].x}
            y={padding.top + chartHeight + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#6B7280"
          >
            {d.month}
          </text>
        ))}
      </svg>
    </div>
  );
};
