export default function LivePriceMarkets() {
  const charts = [
    {
      name: "ETH",
      fullName: "Ethereum",
      price: "₹234,567",
      change: "-3.14%",
      bgColor: "bg-gray-800",
      changeColor: "bg-[#FDBDBD]",
      lineColor: "#FA1818",
      isPositive: false,
    },
    {
      name: "Sol",
      fullName: "Solana",
      price: "₹4,123,456",
      change: "+3.14%",
      bgColor: "bg-purple-600",
      changeColor: "bg-[#BDFDDB]",
      lineColor: "#3CC27B",
      isPositive: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-medium text-black">
          Live Price Markets
        </h2>
        <button className="px-3 md:px-4 py-2 bg-black text-white rounded text-xs md:text-sm hover:bg-gray-900 transition-colors whitespace-nowrap">
          See All Charts
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {charts.map((chart) => (
          <div key={chart.name} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`${chart.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {chart.name === "Sol" ? "S" : "E"}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-base md:text-lg text-black">
                    {chart.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {chart.fullName}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-auto text-right sm:text-right">
                <p className="font-medium text-base md:text-lg text-black">
                  {chart.price}
                </p>
                <div
                  className={`${chart.changeColor} inline-flex items-center px-2 py-1 rounded text-xs mt-1 sm:mt-0`}
                >
                  <span className="text-black">{chart.change}</span>
                </div>
              </div>
            </div>

            <div className="h-32 md:h-40 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden">
              <svg
                className="w-full h-full p-3 md:p-4"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <path
                  d={
                    chart.isPositive
                      ? "M0,80 Q75,60 150,70 T300,40"
                      : "M0,50 Q75,10 150,40 T300,30"
                  }
                  fill="none"
                  stroke={chart.lineColor}
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>9:00</span>
              <span>10:00</span>
              <span>11:00</span>
              <span>12:00</span>
              <span className="hidden sm:inline">1:00</span>
              <span className="hidden sm:inline">2:00</span>
              <span className="hidden sm:inline">3:00</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-[#3CC27B]"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
