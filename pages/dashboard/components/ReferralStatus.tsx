export default function ReferralStatus() {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h3 className="text-lg md:text-xl font-medium text-black mb-4 md:mb-6">
        Referral Status
      </h3>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 md:w-40 h-32 md:h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EF4444"
              strokeWidth="20"
              strokeDasharray="75 251"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="20"
              strokeDasharray="63 251"
              strokeDashoffset="-75"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10B981"
              strokeWidth="20"
              strokeDasharray="113 251"
              strokeDashoffset="-138"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-black">14</p>
              <p className="text-xs md:text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 md:space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10B981] rounded-sm flex-shrink-0"></div>
            <span className="text-xs md:text-sm text-black">Successful</span>
          </div>
          <span className="text-xs md:text-sm font-medium text-black">8</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F59E0B] rounded-sm flex-shrink-0"></div>
            <span className="text-xs md:text-sm text-black">Pending</span>
          </div>
          <span className="text-xs md:text-sm font-medium text-black">4</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#EF4444] rounded-sm flex-shrink-0"></div>
            <span className="text-xs md:text-sm text-black">Failed</span>
          </div>
          <span className="text-xs md:text-sm font-medium text-black">2</span>
        </div>
      </div>
    </div>
  );
}
