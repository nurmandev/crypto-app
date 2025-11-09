import { Plus } from "lucide-react";

export default function CryptoHoldings() {
  return (
    <div className="bg-white rounded-lg p-3 md:p-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-6">
        <h2 className="text-base md:text-2xl font-medium text-black">
          My Crypto Holdings
        </h2>

        <button className="flex items-center gap-1.5 px-2.5 md:px-4 py-1.5 md:py-2 bg-black text-white rounded text-[10px] md:text-sm hover:bg-gray-900 transition-colors whitespace-nowrap">
          <Plus className="w-3 md:w-4 h-3 md:h-4" />
          <span>Add Crypto</span>
        </button>
      </div>

      <div className="space-y-2.5 md:space-y-3">
        {[
          {
            name: "ETH",
            fullName: "Ethereum",
            value: "₹3,82,031.29",
            change: "+3.14%",
            bgColor: "bg-gray-700",
          },
          {
            name: "BTC",
            fullName: "Bitcoin",
            value: "₹98,33,924.10",
            change: "+3.14%",
            bgColor: "bg-orange-500",
          },
          {
            name: "TRX",
            fullName: "Tron",
            value: "₹18.88",
            change: "+3.14%",
            bgColor: "bg-red-500",
          },
          {
            name: "USDT",
            fullName: "Tether USDT",
            value: "₹88.16",
            change: "+3.14%",
            bgColor: "bg-teal-500",
          },
          {
            name: "SOL",
            fullName: "Solana",
            value: "₹4,123,456",
            change: "+3.14%",
            bgColor: "bg-purple-500",
          },
        ].map((crypto) => (
          <div
            key={crypto.name}
            className="flex flex-row items-center justify-between gap-3 p-2.5 md:p-4 rounded-lg border border-[#D4D4D4] hover:border-[#3CC27B] transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={`w-8 md:w-10 h-8 md:h-10 rounded-full ${crypto.bgColor} flex items-center justify-center text-white font-bold text-xs md:text-sm`}
              >
                {crypto.name}
              </div>

              <div className="min-w-0">
                <p className="font-bold text-sm md:text-lg text-black">
                  {crypto.name}
                </p>
                <p className="text-[10px] md:text-sm text-gray-600">
                  {crypto.fullName}
                </p>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="font-medium text-sm md:text-lg text-black">
                {crypto.value}
              </p>
              <div className="inline-flex items-center px-1.5 md:px-2 py-0.5 md:py-1 bg-[#BDFDDB] rounded text-[9px] md:text-xs mt-0.5">
                <span className="text-black">{crypto.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
