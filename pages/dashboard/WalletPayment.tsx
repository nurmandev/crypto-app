import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

const transactions = [
  {
    title: "Buy BTC",
    date: "2024-12-20 14:30",
    address: "0x1234...5678",
    amount: "0.012 BTC",
    fiat: "₹52,345",
    status: "Completed",
  },
  {
    title: "Buy BTC",
    date: "2024-12-20 14:30",
    address: "0x1234...5678",
    amount: "0.012 BTC",
    fiat: "₹52,345",
    status: "Completed",
  },
  {
    title: "Buy BTC",
    date: "2024-12-20 14:30",
    address: "0x1234...5678",
    amount: "0.012 BTC",
    fiat: "₹52,345",
    status: "Completed",
  },
  {
    title: "Buy BTC",
    date: "2024-12-20 14:30",
    address: "0x1234...5678",
    amount: "0.012 BTC",
    fiat: "₹52,345",
    status: "Completed",
  },
];

export default function WalletPayment() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4 md:space-y-6 max-w-[843px]">
          <div className="bg-white rounded-[10px] p-4 md:p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <h2 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-1 md:mb-2">
              Wallet Payment
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal mb-6 md:mb-8 lg:mb-10">
              Use your existing INR wallet balance
            </p>

            {/* Wallet Balance Details */}
            <div className="space-y-4 mb-6 md:mb-8">
              {/* Current Wallet Balance */}
              <div className="bg-[#F0F0F0] rounded-[10px] p-4 md:p-6 lg:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs md:text-[14px] font-light text-black">
                  Current Wallet Balance:
                </span>
                <span className="text-base md:text-[17px] font-medium text-[#3CC27B]">
                  ₹45,230.50
                </span>
              </div>

              {/* Amount to Deduct */}
              <div className="bg-[rgba(253,189,189,0.56)] rounded-[10px] p-4 md:p-6 lg:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs md:text-[14px] font-light text-black">
                  Amount to Deduct:
                </span>
                <span className="text-base md:text-[17px] font-medium text-[#FA1818] text-right">
                  ₹3,600
                </span>
              </div>

              {/* Remaining Balance */}
              <div className="bg-[#F0F0F0] rounded-[10px] p-4 md:p-6 lg:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs md:text-[14px] font-light text-black">
                  Remaining Balance:
                </span>
                <span className="text-base md:text-[17px] font-medium text-black text-right">
                  ₹45228.50
                </span>
              </div>
            </div>

            {/* Confirm Payment Button */}
            <button className="w-full bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-4 md:px-[60px] py-3 md:py-[9px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-900 transition-colors mb-6 md:mb-8 h-[51px]">
              <span className="text-sm md:text-[15px] font-medium leading-[33px]">
                Confirm Payment From Wallet
              </span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 -3.49691e-07L10 8L2 16L-6.11959e-07 14L6 8L-8.74228e-08 2L2 -3.49691e-07Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Complete Payment Button */}
            <Link
              to="/purchase-success"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-md border border-[#C3C3C3] hover:bg-gray-900 transition-colors mb-4 md:mb-6"
            >
              <span className="text-[15px] font-medium">Payment Completed</span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 -3.49691e-07L10 8L2 16L-6.11959e-07 14L6 8L-8.74228e-08 2L2 -3.49691e-07Z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* Back Button */}
            <Link
              to="/payment-method"
              className="inline-flex items-center gap-2 text-black text-xs md:text-[12px] font-medium hover:text-[#3CC27B] transition-colors"
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M5 10V6H13.92L13.95 3.99H5V0L0 5L5 10Z"
                  fill="currentColor"
                />
              </svg>
              <span>Back to Payment Methods</span>
            </Link>
          </div>
        </div>

        {/* Recent Transactions Sidebar */}
        <div className="w-full lg:w-[368px] space-y-3 md:space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-[17px] font-medium text-black text-center flex-1 lg:text-left">
              Recent Transactions
            </h3>
            <button className="px-2 md:px-[10px] py-1 bg-black text-white rounded text-xs hover:bg-gray-900 transition-colors whitespace-nowrap">
              view all
            </button>
          </div>

          {/* Transaction Cards */}
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-white rounded-[5px] border-[0.5px] border-[#D9D9D9] p-3 md:p-[13px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-[50px]"
              >
                {/* Left Section */}
                <div className="flex-shrink-0 min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-black mb-1 md:mb-[7px]">
                    {transaction.title}
                  </h4>
                  <p className="text-xs font-light text-black mb-1 md:mb-[6px]">
                    {transaction.date}
                  </p>
                  <p className="text-xs font-light text-black">
                    {transaction.address}
                  </p>
                </div>

                {/* Middle - Status Badge */}
                <div className="flex items-center justify-start sm:justify-center flex-shrink-0">
                  <div className="px-[10px] py-[5px] bg-[#BDFDDB] rounded flex items-center justify-center">
                    <span className="text-[10px] font-normal text-[#1C5C3A]">
                      {transaction.status}
                    </span>
                  </div>
                </div>

                {/* Right Section - Amount */}
                <div className="text-left sm:text-right flex-shrink-0 w-full sm:w-auto">
                  <p className="text-base md:text-[17px] font-medium text-black">
                    {transaction.amount}
                  </p>
                  <p className="text-xs font-light text-black text-right">
                    {transaction.fiat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
