import { Link } from "react-router-dom";
import { Bell, ArrowLeft } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function PaymentMethod() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
            <h2 className="text-xl font-medium text-black mb-2">
              Choose Payment Method
            </h2>
            <p className="text-[#838383] text-[17px] mb-8">
              Select how you'd like to pay for your crypto
            </p>

            {/* Payment Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Link to="/upi-payment">
                <PaymentOption
                  title="UPI Payment"
                  description="Pay Using UPI apps like Gpay, Phonepe, Paytm etc"
                  processingTime="Instant"
                  fees="0%"
                />
              </Link>
              <PaymentOption
                title="Net Banking"
                description="Direct Bank Transfers Via Net Banking"
                processingTime="2 -5 min"
                fees="0%"
              />
              <PaymentOption
                title="Debit / Credit Cart"
                description="Visa, Mastercard, Rupay Accepted"
                processingTime="Instant"
                fees="2.5%"
              />
              <Link to="/wallet-payment">
                <PaymentOption
                  title="Wallet Balance"
                  description="User your existing wallet balance"
                  processingTime="Instant"
                  fees="0%"
                />
              </Link>
            </div>

            {/* Back to Order Details */}
            <Link
              to="/buy-crypto"
              className="flex items-center gap-2 text-black text-xs font-medium hover:text-[#3CC27B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Order Details</span>
            </Link>
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

function PaymentOption({ title, description, processingTime, fees }: any) {
  return (
    <button className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg hover:bg-[#EEEEEE] transition-colors text-left w-full">
      <div className="flex-shrink-0 w-8 h-8 bg-[#3CC27B]/20 rounded-full"></div>

      <div className="flex-1">
        <h3 className="text-[15px] font-medium text-black leading-[33px]">
          {title}
        </h3>
        <p className="text-[14px] font-light text-black leading-[33px]">
          {description}
        </p>

        <div className="mt-3">
          <div className="text-xs">
            <span className="text-black font-light">Processing Time: </span>
            <span className="text-black font-normal">{processingTime}</span>
          </div>
          <div className="text-xs">
            <span className="text-black font-light">Fees: </span>
            <span className="text-black font-normal">{fees}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
