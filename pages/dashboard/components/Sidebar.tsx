import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TrendingUp,
  Wallet,
  CreditCard,
  History,
  Shield,
  User,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Update desktop state on window resize
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 768;
      setIsDesktop(newIsDesktop);
      // If resizing from mobile to desktop, ensure sidebar is visible
      if (newIsDesktop && !isOpen) {
        onClose(); // This will trigger parent to set isOpen to true if needed
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/dashboard" },
    { icon: TrendingUp, label: "Buy / Sell Crypto", href: "/buy-crypto" },
    { icon: Wallet, label: "Deposit/Withdraw", href: "/deposit-withdraw" },
    { icon: Wallet, label: "My Wallet", href: "/dashboard/my-wallet" },
    { icon: CreditCard, label: "Payment Methods", href: "/payment-methods" },
    { icon: History, label: "History", href: "/history" },
    { icon: Shield, label: "Crypto Access", href: "/crypto-access" },
    { icon: User, label: "My Profile", href: "/profile" },
  ];

  const cryptoOperations = [
    { label: "Deposit Crypto", href: "/deposit-crypto" },
    { label: "Withdraw Crypto", href: "/withdraw-crypto" },
    { label: "Buy Crypto", href: "/buy-crypto" },
    { label: "Sell Crypto", href: "/sell-crypto" },
  ];

  // Desktop always shows sidebar, mobile toggles it
  const shouldShowSidebar = isDesktop || isOpen;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen md:h-auto w-72 sm:w-80 md:w-64 bg-white rounded-r-lg md:rounded-lg shadow-lg md:shadow-none overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out
          ${shouldShowSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="bg-[#3CC27B] px-5 md:px-6 py-4 flex items-center gap-3 text-white sticky top-0 rounded-tr-lg md:rounded-t-lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z"
              fill="white"
            />
          </svg>
          <span className="text-base md:text-lg font-semibold">Dashboard</span>
        </div>

        {/* Navigation */}
        <nav className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm md:text-base ${
                  isActive
                    ? "bg-[#3CC27B] text-white"
                    : "text-black hover:bg-gray-100 hover:text-[#3CC27B]"
                }`}
              >
                <Icon className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 md:p-6 border-t border-gray-200">
          <Link
            to="/"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 justify-center px-4 py-2 bg-[#EBEBEB] rounded-md text-black text-sm md:text-base hover:bg-gray-300 transition-colors"
          >
            <span>Logout</span>
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}
