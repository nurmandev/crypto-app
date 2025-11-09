import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function WithdrawFund() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const availableBalance = 45230.5;
  const minWithdrawal = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal submission
    console.log("Withdrawal request:", { amount, upiId });
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
              Withdraw INR
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal mb-8 md:mb-10 lg:mb-14">
              Add money using UPI payment
            </p>

            {/* Form Container */}
            <div className="max-w-[600px] mx-auto border-[0.5px] border-[#D3D3D3] rounded-lg p-6 md:p-8 lg:p-10">
              {/* Available Balance */}
              <div className="text-center mb-8 md:mb-10 lg:mb-12">
                <h3 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-2 md:mb-3">
                  Available Balance
                </h3>
                <p className="text-3xl md:text-4xl lg:text-[50px] font-bold text-black">
                  ₹
                  {availableBalance.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Amount Input */}
                <div>
                  <label className="block text-base md:text-[17px] font-medium text-black mb-3">
                    Amount (INR)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="300.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full h-[51px] px-4 md:px-[29px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-bold text-black placeholder:text-[#8E8E8E] placeholder:font-bold focus:outline-none focus:border-[#3CC27B] transition-colors pr-16"
                    />
                    <span className="absolute right-4 md:right-[29px] top-1/2 transform -translate-y-1/2 text-xs md:text-[13px] font-normal text-[#717171]">
                      INR
                    </span>
                  </div>
                  <p className="text-xs md:text-[14px] font-normal text-[#838383] mt-2">
                    Minimum withdrawal: ₹{minWithdrawal}
                  </p>
                </div>

                {/* UPI ID Input */}
                <div>
                  <label className="block text-base md:text-[17px] font-medium text-black mb-3">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full h-[51px] px-4 md:px-[29px] py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] placeholder:font-light focus:outline-none focus:border-[#3CC27B] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-4 md:px-[60px] py-3 md:py-[9px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-900 transition-colors h-[51px]"
                >
                  <span className="text-sm md:text-[15px] font-medium leading-[33px]">
                    Submit Withdrawal Request
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

                {/* Admin Approval Notice */}
                <div className="bg-[rgba(253,189,189,0.56)] border-l-2 border-[#FA1818] rounded-[13px] p-6 md:p-8 lg:p-10">
                  <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-1">
                    Admin Approval Required
                  </h4>
                  <p className="text-xs md:text-[13px] font-light text-black leading-[25px]">
                    Withdrawals are reviewed and processed within 24 hours
                  </p>
                </div>
              </form>
            </div>

            {/* Back Button */}
            <Link
              to="/deposit-withdraw"
              className="inline-flex items-center gap-2 text-black text-xs md:text-[12px] font-medium hover:text-[#3CC27B] transition-colors mt-8 md:mt-10"
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
