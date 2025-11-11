import React from "react";

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  // Legacy prop name used across the codebase in some pages
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onToggleSidebar,
  onMenuClick,
  sidebarOpen = false,
}) => {
  // support both prop names for backwards compatibility
  const toggleSidebar = onToggleSidebar ?? onMenuClick;
  return (
    <header className="h-12 sm:h-14 md:h-[75px] bg-white flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 gap-2 sm:gap-3 md:gap-4 border-b border-[#E0E0E0] flex-shrink-0">
      {/* Hamburger Menu - Mobile Only (Hidden when sidebar is open) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleSidebar?.();
        }}
        className={`lg:hidden p-2 hover:bg-gray-100 rounded transition-colors ${
          sidebarOpen ? "hidden" : "flex"
        }`}
        aria-label="Toggle sidebar"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H21M3 12H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Logo - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:flex items-center gap-8">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/11defb5986d183feab640f3655fb16c73cd57258?width=208"
          alt="Logo"
          className="h-6 sm:h-8 w-auto"
        />
      </div>

      {/* Center Title - Responsive size */}
      <h1
        className="text-lg sm:text-2xl lg:text-[30px] font-normal text-black flex-1 text-center sm:flex-none"
        style={{
          fontFamily: "Russo One, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        Dashboard
      </h1>

      {/* Right Section - Stack on mobile, flex on desktop */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Go to Home Button - Hidden on mobile, visible on tablet+ */}
        <button className="hidden sm:flex px-4 sm:px-6 lg:px-9 py-1 bg-[#161616] text-white text-xs sm:text-sm lg:text-[15px] rounded-md h-[37px] items-center justify-center hover:bg-[#2a2a2a] transition-colors whitespace-nowrap">
          Go to Home
        </button>

        {/* Profile Picture */}
        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          </svg>
        </div>

        {/* Notification Bell */}
        <button className="relative p-1 sm:p-0 hover:opacity-70 transition-opacity flex-shrink-0">
          <svg
            width="16"
            height="18"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          >
            <path
              d="M12.4828 18.7C13.4437 18.7 13.9514 19.8264 13.3104 20.5348C12.8937 20.9958 12.3834 21.3645 11.813 21.617C11.2426 21.8695 10.6248 22 10 22C9.37521 22 8.75743 21.8695 8.18701 21.617C7.61659 21.3645 7.10635 20.9958 6.6896 20.5348C6.0764 19.8572 6.51408 18.7979 7.3939 18.7077L7.51609 18.7011L12.4828 18.7ZM10 0C11.5086 0 12.7839 0.9933 13.1938 2.3551L13.2449 2.5432L13.2538 2.5905C14.4786 3.27438 15.5223 4.23595 16.2993 5.39638C17.0763 6.5568 17.5645 7.88305 17.724 9.2664L17.7551 9.5821L17.7762 9.9V13.1241L17.7995 13.2737C17.9516 14.0842 18.4046 14.809 19.0692 15.3054L19.2547 15.4341L19.4347 15.543C20.3901 16.0787 20.0568 17.4856 19.0159 17.5934L18.887 17.6H1.11299C-0.0289934 17.6 -0.427799 16.0996 0.565327 15.543C0.988604 15.3058 1.35432 14.9798 1.63681 14.5877C1.9193 14.1957 2.11171 13.7472 2.20054 13.2737L2.22387 13.1164L2.22498 9.8494C2.29271 8.41267 2.71505 7.01427 3.45504 5.77661C4.19502 4.53896 5.23009 3.49977 6.46965 2.75L6.74514 2.5894L6.75625 2.5421C6.91295 1.88411 7.26996 1.28965 7.77898 0.83913C8.288 0.388606 8.92448 0.103753 9.60232 0.0230999L9.8045 0.00439994L10 0Z"
              fill="#C7C7C7"
            />
          </svg>
          <div className="absolute top-0 right-0 w-[4px] h-[4px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#3CC27B]"></div>
        </button>
      </div>
    </header>
  );
};
