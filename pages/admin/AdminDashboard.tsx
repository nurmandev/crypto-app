import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  FileText,
  Upload,
  ArrowUpDown,
} from "lucide-react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { StatsCard } from "./components/StatsCard";
import { UserDistributionChart } from "./components/UserDistributionChart";
import { PlatformCryptoPortfolio } from "./components/PlatformCryptoPortfolio";
import { TransactionChart } from "./components/TransactionChart";
import { ProfitCard } from "./components/ProfitCard";
import { RecentTransactionItem } from "./components/RecentTransactionItem";
import { SystemStatusItem } from "./components/SystemStatusItem";
import { AreaChart } from "./components/AreaChart";

export const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const stats = [
    {
      title: "Total Users",
      value: "15,420",
      icon: Users,
      trend: { percentage: 12, isPositive: true },
      color: "blue" as const,
    },
    {
      title: "Active Users",
      value: "8,765",
      icon: Users,
      trend: { percentage: 8, isPositive: true },
      color: "green" as const,
    },
    {
      title: "Total Volume",
      value: "₹12.4M",
      icon: DollarSign,
      trend: { percentage: 25, isPositive: true },
      color: "green" as const,
    },
    {
      title: "Pending Requests",
      value: "45",
      icon: FileText,
      trend: { percentage: 0, isPositive: false },
      color: "orange" as const,
    },
  ];

  const profitCards = [
    {
      title: "Total Monthly Profit",
      amount: "₹622,500",
      icon: DollarSign,
      bgColor: "#E0FCE9",
      textColor: "#3CC27B",
    },
    {
      title: "Trading Fees",
      amount: "₹425,000",
      icon: TrendingUp,
      bgColor: "#DFECFE",
      textColor: "#5F5BE3",
    },
    {
      title: "Withdrawal Fees",
      amount: "₹125,000",
      icon: Upload,
      bgColor: "#F4EAFF",
      textColor: "#B674FF",
    },
    {
      title: "Exchange Fees",
      amount: "₹180,000",
      icon: ArrowUpDown,
      bgColor: "#FFEDD5",
      textColor: "#3CC27B",
    },
  ];

  const recentTransactions = [
    {
      email: "john.doe@email.com",
      action: "Buy 0.05 BTC",
      amount: "₹200,000",
      timeAgo: "2 mins ago",
    },
    {
      email: "john.doe@email.com",
      action: "Buy 0.05 BTC",
      amount: "₹200,000",
      timeAgo: "2 mins ago",
    },
    {
      email: "john.doe@email.com",
      action: "Buy 0.05 BTC",
      amount: "₹200,000",
      timeAgo: "2 mins ago",
    },
  ];

  const systemStatus = [
    { label: "Server Uptime", value: "99%" },
    { label: "Active Connections", value: "1240" },
    { label: "Avg Response Time", value: "125ms" },
    { label: "Error Rate", value: "0.02%" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 lg:hidden z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          {/* Content */}
          <div className="px-3 sm:px-4 md:px-6 lg:px-0">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat) => (
                <StatsCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend.percentage > 0 ? stat.trend : undefined}
                  color={stat.color}
                />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <UserDistributionChart />
              <AreaChart />
              <PlatformCryptoPortfolio />
            </div>

            {/* Transaction Chart */}
            <div className="mb-8">
              <TransactionChart />
            </div>

            {/* Platform Profit Overview */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[20px] font-medium text-black">
                  Platform Profit Overview
                </h2>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-[#3CC27B]/30 text-black">
                  +8.5% this month
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {profitCards.map((card) => (
                  <ProfitCard
                    key={card.title}
                    title={card.title}
                    amount={card.amount}
                    icon={card.icon}
                    bgColor={card.bgColor}
                    textColor={card.textColor}
                  />
                ))}
              </div>
            </div>

            {/* Recent Transactions & System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[20px] font-medium text-black">
                    Recent transactions
                  </h2>
                  <button className="px-2.5 py-1.5 bg-black text-white text-xs rounded">
                    view all
                  </button>
                </div>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <RecentTransactionItem
                      key={index}
                      email={transaction.email}
                      action={transaction.action}
                      amount={transaction.amount}
                      timeAgo={transaction.timeAgo}
                    />
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-[20px] font-medium text-black mb-4">
                  System Status
                </h2>
                <div className="space-y-2">
                  {systemStatus.map((status, index) => (
                    <SystemStatusItem
                      key={index}
                      label={status.label}
                      value={status.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
