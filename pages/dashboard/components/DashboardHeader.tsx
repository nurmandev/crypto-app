import { Link } from "react-router-dom";
import { Bell, Menu, X, User } from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export default function DashboardHeader({
  onMenuToggle,
  isMenuOpen,
}: DashboardHeaderProps) {
  return (
    <header className="bg-white rounded-lg mx-3 sm:mx-4 md:mx-6 lg:mx-12 mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center justify-between shadow-sm sticky top-2 sm:top-4 md:top-6 z-40">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-7 sm:h-8 md:h-10 w-auto object-contain"
        />
      </Link>

      {/* Center Title */}
      <h1 className="hidden sm:block text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Russo_One'] text-black absolute left-1/2 transform -translate-x-1/2">
        Dashboard
      </h1>

      {/* Right Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
        {/* Go to Home */}
        <Link
          to="/"
          className="hidden xs:inline-block sm:inline-block px-2.5 sm:px-3 md:px-5 lg:px-7 py-1 sm:py-1.5 md:py-2 bg-[#161616] text-white text-[10px] sm:text-xs md:text-sm lg:text-[15px] font-medium rounded-md hover:bg-black/80 transition-colors whitespace-nowrap"
        >
          Go to Home
        </Link>

        {/* User Icon - Links to Profile */}
        <Link
          to="/profile"
          className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-[#D9D9D9] hover:bg-gray-400 transition-colors flex items-center justify-center hover:scale-105"
          title="Go to Profile"
        >
          <User className="w-4 sm:w-4.5 md:w-5 h-4 sm:h-4.5 md:h-5 text-gray-600" />
        </Link>

        {/* Notification Bell - Links to notifications area (could be dashboard) */}
        <Link
          to="/dashboard"
          className="relative hover:opacity-80 transition-opacity hover:scale-110 inline-block"
          title="View Notifications"
        >
          <Bell className="w-4 sm:w-4.5 md:w-5 h-4 sm:h-4.5 md:h-5 text-[#C7C7C7]" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#3CC27B] rounded-full animate-pulse"></span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className="md:hidden hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}
