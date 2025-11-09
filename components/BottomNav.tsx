import { Link } from "react-router-dom";
import { Home, CreditCard, PieChart, Wallet, UserCircle } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 block sm:hidden z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/" className="flex flex-col items-center">
          <Home className="w-5 h-5 text-[#3CC27B]" />
          <span className="text-xs mt-1 text-gray-600">Home</span>
        </Link>
        <Link to="/buy-crypto" className="flex flex-col items-center">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Buy</span>
        </Link>
        <Link to="/markets" className="flex flex-col items-center">
          <PieChart className="w-5 h-5 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Markets</span>
        </Link>
        <Link to="/wallet" className="flex flex-col items-center">
          <Wallet className="w-5 h-5 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Wallet</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <UserCircle className="w-5 h-5 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Profile</span>
        </Link>
      </div>
    </div>
  );
}
