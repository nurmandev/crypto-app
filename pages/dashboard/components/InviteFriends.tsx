import { User } from "lucide-react";

export default function InviteFriends() {
  const referrals = [
    {
      status: "Completed",
      color: "bg-[#BDFDDB]",
      textColor: "text-[#1C5C3A]",
    },
    {
      status: "Pending",
      color: "bg-[#FBD25F]/65",
      textColor: "text-black",
    },
    {
      status: "Completed",
      color: "bg-[#BDFDDB]",
      textColor: "text-[#1C5C3A]",
    },
    {
      status: "Completed",
      color: "bg-[#BDFDDB]",
      textColor: "text-[#1C5C3A]",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 md:gap-3 mb-4">
        <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#3CC27B] flex items-center justify-center flex-shrink-0">
          <User className="w-3 md:w-4 h-3 md:h-4 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-medium text-black">
          Invite Friends and Earn
        </h3>
      </div>

      <p className="text-xs md:text-sm text-gray-600 mb-4">
        Earn ₹500 Fix Bonus on Each referal
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center justify-between p-3 md:p-4 bg-[#FAFAFA] rounded-lg border border-[#DBDBDB] mb-4">
        <div>
          <p className="text-xs md:text-sm font-medium text-black mb-1">
            Your Earnings
          </p>
          <p className="text-base md:text-lg font-bold text-[#3CC27B]">
            ₹12,450
          </p>
        </div>
        <button className="px-3 md:px-4 py-2 bg-black text-white rounded text-xs md:text-sm hover:bg-gray-900 transition-colors whitespace-nowrap w-full sm:w-auto">
          Refer Now
        </button>
      </div>

      <h4 className="text-base md:text-lg font-medium text-black mb-3">
        Recent Referrals
      </h4>

      <div className="space-y-2">
        {referrals.map((ref, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-[#F6F6F6] rounded-lg"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-bold text-black">
                Sarah Smith
              </p>
              <p className="text-xs text-gray-600">s***@email.com</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <div
                className={`px-2 md:px-3 py-1 ${ref.color} rounded text-xs ${ref.textColor}`}
              >
                {ref.status}
              </div>
              <div className="text-right">
                <p className="text-sm md:text-lg font-medium text-black">
                  ₹500
                </p>
                <p className="text-xs text-gray-600">2024-01-18</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
