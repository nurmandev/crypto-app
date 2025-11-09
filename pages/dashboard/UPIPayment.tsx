import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function UPIPayment() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4 md:space-y-6 max-w-[843px]">
          <div className="bg-white rounded-[10px] p-4 md:p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <h2 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-1 md:mb-2">
              UPI Payment
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal mb-6 md:mb-8 lg:mb-10">
              Scan the QR code with any UPI app to complete payment
            </p>

            {/* Payment Section */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
              {/* QR Code Section */}
              <div className="flex-shrink-0 w-full lg:w-[339px]">
                <div className="bg-white rounded-[13px] border-[0.6px] border-[#E3E3E3] p-4 md:p-6 lg:p-8 flex flex-col items-center">
                  {/* QR Code */}
                  <div className="w-full max-w-[244px] aspect-square mb-4 md:mb-6 flex items-center justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/823afdf4defe66d5effc071788589477bf0342b7?width=488"
                      alt="UPI QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Amount Display */}
                  <div className="text-center w-full">
                    <p className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-0">
                      Amount To Pay
                    </p>
                    <p className="text-base md:text-[17px] font-bold text-[#3CC27B] leading-[33px]">
                      Rs.3,681
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Details Section */}
              <div className="flex-1 max-w-full lg:max-w-[438px]">
                <div className="bg-[#EDF9F3] rounded-[13px] border-l border-[#3CC27B] p-4 md:p-6 lg:p-8 h-full min-h-[366px]">
                  <h3 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-4 md:mb-6">
                    Payment Details:
                  </h3>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {/* Merchant */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-xs md:text-[14px] font-light text-black">
                        Merchant:
                      </span>
                      <span className="text-xs md:text-[14px] font-medium text-black">
                        Usdtmpay
                      </span>
                    </div>

                    {/* UPI ID */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-xs md:text-[14px] font-light text-black">
                        UPI ID:
                      </span>
                      <span className="text-xs md:text-[14px] font-medium text-black">
                        Usdtmpay@ybl
                      </span>
                    </div>

                    {/* Transaction ID */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-xs md:text-[14px] font-light text-black">
                        Transaction ID:
                      </span>
                      <span className="text-xs md:text-[14px] font-medium text-black break-all sm:break-normal">
                        CT1756489038983
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#EDEDED] opacity-70 mb-4 md:mb-5"></div>

                  {/* Total Amount */}
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 mb-6 md:mb-8">
                    <span className="text-xs md:text-[14px] font-normal text-black">
                      Total Amount:
                    </span>
                    <span className="text-xs md:text-[14px] font-medium text-[#3CC27B]">
                      ₹3,681.50
                    </span>
                  </div>

                  {/* Instructions */}
                  <p className="text-xs md:text-[14px] font-light text-black leading-[25px]">
                    Complete the payment within 15 minutes. Your crypto will be
                    credited instantly after payment confirmation.
                  </p>
                </div>
              </div>
            </div>

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
