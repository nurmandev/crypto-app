import { Link } from "react-router-dom";
import { Home, BarChart3, Wallet, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex items-center justify-around h-20 sm:h-16">
        {/* Home */}
        <Link
          to="/dashboard"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-gray-500 hover:text-[#3CC27B] transition-colors"
        >
          <Home className="w-6 h-6 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-[11px] font-medium">Home</span>
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-[#3CC27B] transition-colors"
        >
          <BarChart3 className="w-6 h-6 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-[11px] font-medium">Dashboard</span>
        </Link>

        {/* Wallet */}
        <Link
          to="/dashboard/my-wallet"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-gray-500 hover:text-[#3CC27B] transition-colors"
        >
          <Wallet className="w-6 h-6 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-[11px] font-medium">Wallet</span>
        </Link>

        {/* Me/Profile */}
        <Link
          to="/profile"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-gray-500 hover:text-[#3CC27B] transition-colors"
        >
          <User className="w-6 h-6 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-[11px] font-medium">Me</span>
        </Link>
      </div>
    </div>
  );
}
