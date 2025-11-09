import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import StatsCards from "./components/StatsCards";
import CryptoHoldings from "./components/CryptoHoldings";
import LivePriceMarkets from "./components/LivePriceMarkets";
import MoreServices from "./components/MoreServices";
import RightSidebar from "./components/RightSidebar";
import BottomNav from "./components/BottomNav";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-20 sm:pb-12 md:pb-0">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="relative flex pt-6 md:pt-8">
        {/* Sidebar Navigation - Hidden by default on mobile */}
        <div
          className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-white/95 backdrop-blur-sm transform transition-all duration-300 
          shadow-xl overflow-y-auto border-r border-gray-100
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:w-64
        `}
        >
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <div className="container mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-6">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr,340px] gap-6">
              {/* Main Content */}
              <div className="space-y-6">
                {/* Balance Card */}
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <BalanceCard />
                </div>

                {/* More Coming Soon */}
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <MoreServices />
                </div>

                {/* Stats Cards */}
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <StatsCards />
                </div>

                {/* Your Crypto Holdings */}
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <CryptoHoldings />
                </div>

                {/* Live Price Markets - Hidden on mobile */}
                <div className="hidden sm:block overflow-x-auto -mx-4 px-4 pb-4">
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <LivePriceMarkets />
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Hidden on mobile, shown on xl breakpoint */}
              <div className="hidden xl:block">
                <div className="sticky top-6 space-y-6">
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <RightSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav />
    </div>
  );
}
