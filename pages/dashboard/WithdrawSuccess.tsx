import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function WithdrawSuccess() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Mock transaction data - can be passed via route state or API
  const transactionData = {
    amount: "-100 USDT",
    cryptocurrency: "USDT",
    network: "TRC20",
    withdrawAmount: "100 USDT",
    status: "Pending",
    processedAt: "9/1/2025, 8:53:22 AM",
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
          <div className="bg-white rounded-[10px] p-8 md:p-12 lg:p-16 flex flex-col items-center">
            {/* Success Icon */}
            <div className="w-[45px] h-[45px] rounded-full bg-[rgba(60,194,123,0.31)] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#3CC27B]" />
            </div>

            {/* Success Message */}
            <h2 className="text-lg md:text-xl lg:text-[20px] font-semibold text-black text-center mb-2">
              Withdraw Request Sent
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal text-center mb-8">
              Your crypto Withdrawal will be verified and processed
            </p>

            {/* Divider */}
            <div className="w-full h-[0.7px] bg-[#EDEDED] mb-8" />

            {/* Amount Display */}
            <p className="text-4xl md:text-5xl lg:text-[50px] font-bold text-black text-center mb-8">
              {transactionData.amount}
            </p>

            {/* Transaction Details */}
            <div className="w-full max-w-[600px] space-y-6">
              <h3 className="text-sm md:text-[15px] font-medium text-black leading-[33px]">
                Transaction Details:
              </h3>

              <div className="space-y-4">
                <DetailRow
                  label="Cryptocurrency:"
                  value={transactionData.cryptocurrency}
                />
                <DetailRow label="Network:" value={transactionData.network} />
                <DetailRow
                  label="Amount:"
                  value={transactionData.withdrawAmount}
                  multiline
                />

                {/* Status with Badge */}
                <div className="flex justify-between items-center gap-4">
                  <span className="text-xs md:text-[14px] font-light text-black">
                    Status:
                  </span>
                  <div className="inline-flex items-center justify-center px-2.5 py-1 rounded-[23px] bg-[#FBD25F]">
                    <span className="text-[8px] font-normal text-black">
                      {transactionData.status}
                    </span>
                  </div>
                </div>

                <DetailRow
                  label="Processed At:"
                  value={transactionData.processedAt}
                  multiline
                />
              </div>
            </div>

            {/* Info Box */}
            <div className="w-full max-w-[792px] mt-8 p-6 md:p-8 rounded-[13px] border-l-2 border-[#3CC27B] bg-[#EDF9F3]">
              <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-2">
                Transaction Details
              </h4>
              <p className="text-xs md:text-[13px] font-light text-black leading-[25px]">
                Your USDT has been added to your wallet. You can now trade,
                withdraw, or hold your crypto assets.
              </p>
            </div>

            {/* Back to Dashboard Link */}
            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 text-xs md:text-[14px] font-medium text-black hover:text-[#3CC27B] transition-colors"
            >
              Back to Dashboard
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
  multiline?: boolean;
}

function DetailRow({ label, value, multiline = false }: DetailRowProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs md:text-[14px] font-light text-black flex-shrink-0">
        {label}
      </span>
      <span
        className={`text-xs md:text-[14px] font-medium text-black text-right ${
          multiline ? "leading-5" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
