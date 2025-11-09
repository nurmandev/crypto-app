import ReferralStatus from "./ReferralStatus";
import InviteFriends from "./InviteFriends";

export default function RightSidebar() {
  return (
    <div className="w-full lg:w-[360px] space-y-4 md:space-y-6">
      {/* Referral Status */}
      <ReferralStatus />

      {/* Invite Friends */}
      <InviteFriends />

      {/* How It Works */}
      <div className="bg-[#3CC27B]/10 rounded-lg p-4 md:p-6">
        <h4 className="text-base md:text-lg font-medium text-black mb-3">
          How It Works:
        </h4>
        <ul className="space-y-2 text-xs md:text-sm text-black">
          <li className="leading-relaxed">
            • Your friend signs up using your link
          </li>
          <li className="leading-relaxed">• They get ₹150 signup bonus</li>
          <li className="leading-relaxed">
            • You earn ₹500 when they verify their account
          </li>
          <li className="leading-relaxed">
            • Bonuses are credited within 24 hours
          </li>
        </ul>
      </div>
    </div>
  );
}
