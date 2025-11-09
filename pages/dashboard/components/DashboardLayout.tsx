import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* Header */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      {/* Layout Container */}
      <div className="flex flex-1 flex-col md:flex-row md:gap-6 mt-4 md:mt-6 px-4 md:px-6 lg:px-12">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          {/* Sidebar always open on desktop */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 mt-4 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
