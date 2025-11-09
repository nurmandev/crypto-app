import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function DepositFund() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const paymentDetails = {
    merchant: "Usdtmpay",
    upiId: "Usdtmpay@ybl",
    transactionId: "CT1756489038983",
    amount: "₹3,681.50",
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
        <div className="flex-1 max-w-[1234px]">
          <div className="bg-white rounded-[10px] p-6 md:p-8 lg:p-10 shadow-sm">
            {/* Header */}
            <h2 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-1 md:mb-2">
              Deposit Fund
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal mb-8 md:mb-10 lg:mb-14">
              Add money to yur wallet
            </p>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              {/* Left Column - QR Code */}
              <div className="bg-white border-[0.6px] border-[#E3E3E3] rounded-[13px] p-6 md:p-8 flex flex-col items-center justify-center">
                {/* QR Code */}
                <div className="mb-6 md:mb-8">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/823afdf4defe66d5effc071788589477bf0342b7?width=488"
                    alt="QR Code for payment"
                    className="w-48 h-48 md:w-56 md:h-56 lg:w-[244px] lg:h-[244px]"
                  />
                </div>

                {/* Amount Display */}
                <div className="text-center">
                  <p className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-1">
                    Amount To Deposit
                  </p>
                  <p className="text-base md:text-[17px] font-bold text-[#3CC27B] leading-[33px]">
                    Rs.3,681
                  </p>
                </div>
              </div>

              {/* Right Column - Payment Details */}
              <div className="bg-[#EDF9F3] border-l-[1px] border-[#3CC27B] rounded-[13px] p-6 md:p-8 flex flex-col">
                {/* Payment Details Header */}
                <h3 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-4 md:mb-6">
                  Payment Details:
                </h3>

                {/* Details Grid */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <DetailRow
                    label="Merchant:"
                    value={paymentDetails.merchant}
                  />
                  <DetailRow label="UPI ID:" value={paymentDetails.upiId} />
                  <DetailRow
                    label="Transaction ID:"
                    value={paymentDetails.transactionId}
                  />
                </div>

                {/* Divider */}
                <div className="w-full h-[0.7px] bg-[#EDEDED] mb-4 md:mb-5" />

                {/* Total Amount */}
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <span className="text-xs md:text-[14px] font-normal text-black">
                    Total Amount:
                  </span>
                  <span className="text-xs md:text-[14px] font-medium text-[#3CC27B]">
                    {paymentDetails.amount}
                  </span>
                </div>

                {/* Instructions */}
                <p className="text-xs md:text-[14px] font-light text-black leading-[25px] mb-6 md:mb-8">
                  Complete the payment within 15 minutes. Your crypto will be
                  credited instantly after payment confirmation.
                </p>

                {/* Verification Code Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="share 12 Digit UPI Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full h-[51px] px-3 md:px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-xs md:text-[13px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors pr-16"
                  />
                  <button className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-xs md:text-[13px] font-semibold text-[#8E8E8E] hover:text-[#3CC27B] transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <Link
              to="/deposit-withdraw"
              className="inline-flex items-center gap-2 text-black text-xs md:text-[12px] font-medium hover:text-[#3CC27B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Payment Methods</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs md:text-[14px] font-light text-black flex-shrink-0">
        {label}
      </span>
      <span className="text-xs md:text-[14px] font-medium text-black text-right break-all">
        {value}
      </span>
    </div>
  );
}
