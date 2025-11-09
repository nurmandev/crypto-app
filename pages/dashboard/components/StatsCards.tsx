import { ArrowUpRight } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <div className="bg-white rounded-lg border border-[#D4D4D4] p-3 md:p-5 flex flex-col items-start justify-between gap-2">
        <div className="flex-1 w-full">
          <p className="text-[10px] md:text-sm text-gray-700 mb-1">
            Available to Trade
          </p>
          <p className="text-sm md:text-lg font-medium text-black">
            ₹25,430.00
          </p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center self-end">
          <span className="text-xs md:text-lg">₹</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#D4D4D4] p-3 md:p-5 flex flex-col items-start justify-between gap-2">
        <div className="flex-1 w-full">
          <p className="text-[10px] md:text-sm text-gray-700 mb-1">
            Today's P&L
          </p>
          <p className="text-sm md:text-lg font-medium text-[#3CC27B]">
            +₹2,340
          </p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#3CC27B]/20 flex items-center justify-center self-end">
          <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4 text-[#3CC27B]" />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#D4D4D4] p-3 md:p-5 flex flex-col items-start justify-between gap-2">
        <div className="flex-1 w-full">
          <p className="text-[10px] md:text-sm text-gray-700 mb-1">
            Crypto Holdings
          </p>
          <p className="text-sm md:text-lg font-medium text-black">20 Coins</p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center self-end">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-[#D4D4D4] p-3 md:p-5 flex flex-col items-start justify-between gap-2">
        <div className="flex-1 w-full">
          <p className="text-[10px] md:text-sm text-gray-700 mb-1">
            Crypto Holdings
          </p>
          <p className="text-sm md:text-lg font-medium text-black">20 Coins</p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center self-end">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
