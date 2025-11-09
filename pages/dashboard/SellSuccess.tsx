import { Link } from "react-router-dom";
import { Bell, Copy } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function SellSuccess() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const transactionId = "CT17565429468713XMCHMUIN";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transactionId);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-[10px] p-8">
            {/* Success Icon & Message */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-11 h-11 rounded-full bg-[#3CC27B]/20 flex items-center justify-center mb-4">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="45"
                    height="45"
                    rx="22.5"
                    fill="#3CC27B"
                    fillOpacity="0.31"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5 35C24.1415 35 25.767 34.6767 27.2835 34.0485C28.8001 33.4203 30.1781 32.4996 31.3388 31.3388C32.4996 30.1781 33.4203 28.8001 34.0485 27.2835C34.6767 25.767 35 24.1415 35 22.5C35 20.8585 34.6767 19.233 34.0485 17.7165C33.4203 16.1999 32.4996 14.8219 31.3388 13.6612C30.1781 12.5004 28.8001 11.5797 27.2835 10.9515C25.767 10.3233 24.1415 10 22.5 10C19.1848 10 16.0054 11.317 13.6612 13.6612C11.317 16.0054 10 19.1848 10 22.5C10 25.8152 11.317 28.9946 13.6612 31.3388C16.0054 33.683 19.1848 35 22.5 35ZM22.1778 27.5556L29.1222 19.2222L26.9889 17.4444L21.0167 24.6097L17.9264 21.5181L15.9625 23.4819L20.1292 27.6486L21.2042 28.7236L22.1778 27.5556Z"
                    fill="#3CC27B"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-semibold text-black mb-2">
                Sell Successful!
              </h2>
              <p className="text-[#838383] text-[17px]">
                Your crypto sale has been completed successfully
              </p>
            </div>

            {/* Amount Display */}
            <div className="text-center mb-8 pb-8 border-b border-[#EDEDED]">
              <h3 className="text-5xl font-bold text-black mb-2">
                -0.08758485 ADA
              </h3>
              <p className="text-xl text-black">≈ ₹4</p>
            </div>

            {/* Transaction & Financial Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Transaction Details */}
              <div>
                <h3 className="text-[15px] font-medium text-black leading-[33px] mb-4">
                  Transaction Details:
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Transaction ID:
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] text-black font-medium">
                        {transactionId}
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className="text-black hover:text-[#3CC27B] transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Transaction Type:
                    </span>
                    <span className="px-3 py-1 bg-[#F6F6F6] rounded-full text-[8px] text-black">
                      Sale
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Payment Method:
                    </span>
                    <span className="text-[14px] text-black font-medium">
                      wallet_credit
                    </span>
                  </div>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div>
                <h3 className="text-[15px] font-medium text-black leading-[33px] mb-4">
                  Financial Breakdown
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Price per ADA:
                    </span>
                    <span className="text-[14px] text-black font-medium">
                      ₹45.67
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Amount:
                    </span>
                    <span className="text-[14px] text-black font-medium">
                      0.08758485 ADA
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Subtotal:
                    </span>
                    <span className="text-[14px] text-black font-medium">
                      ₹4
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black font-light">
                      Trading Fee:
                    </span>
                    <span className="text-[14px] text-black font-medium">
                      ₹0.00
                    </span>
                  </div>

                  <div className="border-t border-[#EDEDED] pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] text-black font-semibold">
                        Total Paid:
                      </span>
                      <span className="text-[14px] text-[#3CC27B] font-medium">
                        ₹3,681.50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message Box */}
            <div className="border-l-2 border-[#3CC27B] bg-[#EDF9F3] rounded-[13px] p-6">
              <h3 className="text-[15px] font-medium text-black leading-[33px] mb-2">
                Transaction Details
              </h3>
              <p className="text-[13px] text-black font-light leading-[25px]">
                Your INR has been credited to your wallet. The transaction is
                complete and verified.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[368px] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-medium text-black">
              Recent Transactions
            </h3>
            <button className="px-3 py-1 bg-black text-white rounded text-xs">
              view all
            </button>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg border border-[#D9D9D9] p-4"
              >
                <p className="text-base font-bold text-black">Buy BTC</p>
                <p className="text-xs text-black font-light mt-1">
                  2024-12-20 14:30
                </p>
                <p className="text-xs text-black font-light">0x1234...5678</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
