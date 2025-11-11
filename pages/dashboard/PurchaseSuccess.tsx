import { useState } from "react";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar"; // ✅ Make sure Sidebar is correctly imported

export default function PurchaseSuccess() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* Header */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-2 md:mt-3 flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Purchase Success Section */}
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[10px] p-6 md:p-8 shadow-sm">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-11 h-11 rounded-full bg-[rgba(60,194,123,0.31)] flex items-center justify-center p-2.5">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 25C14.1415 25 15.767 24.6767 17.2835 24.0485C18.8001 23.4203 20.1781 22.4996 21.3388 21.3388C22.4996 20.1781 23.4203 18.8001 24.0485 17.2835C24.6767 15.767 25 14.1415 25 12.5C25 10.8585 24.6767 9.233 24.0485 7.7165C23.4203 6.19989 22.4996 4.82193 21.3388 3.66116C20.1781 2.50039 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0C9.18479 0 6.00537 1.31696 3.66116 3.66116C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66116 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM12.1778 17.5556L19.1222 9.22222L16.9889 7.44444L11.0167 14.6097L7.92639 11.5181L5.9625 13.4819L10.1292 17.6486L11.2042 18.7236L12.1778 17.5556Z"
                        fill="#3CC27B"
                      />
                    </svg>
                  </div>
                </div>

                {/* Success Message */}
                <h2 className="text-xl font-semibold text-black text-center mb-2">
                  Purchase Successful!
                </h2>
                <p className="text-[#838383] text-sm md:text-base text-center mb-8">
                  Use your existing INR wallet balance
                </p>

                {/* Amount Display */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    +0.000008500 ETH
                  </h1>
                  <p className="text-lg font-normal text-black">≈ ₹4</p>
                </div>

                <div className="w-full h-px bg-[#EDEDED] mb-8" />

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Transaction Details */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-black">
                      Transaction Details:
                    </h3>
                    <div className="space-y-3">
                      <DetailRow
                        label="Transaction ID:"
                        value="CT17565429468713XMCHMUIN"
                        showCopy
                      />
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-xs text-black flex-shrink-0">
                          Transaction Type:
                        </span>
                        <div className="px-2.5 py-1 bg-[#F6F6F6] rounded-full">
                          <span className="text-[10px] font-normal text-black">
                            Sale
                          </span>
                        </div>
                      </div>
                      <DetailRow
                        label="Payment Method:"
                        value="wallet_credit"
                      />
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-black">
                      Financial Breakdown
                    </h3>
                    <div className="space-y-3">
                      <DetailRow label="Price per ADA:" value="₹45.67" />
                      <DetailRow label="Amount:" value="0.08758485 ADA" />
                      <DetailRow label="Subtotal:" value="₹4" />
                      <DetailRow label="Trading Fee:" value="₹0.00" />
                      <div className="w-full h-px bg-[#EDEDED]" />
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-black">
                          Total Paid:
                        </span>
                        <span className="text-xs font-medium text-[#3CC27B]">
                          ₹3,681.50
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Notification */}
                <div className="bg-[#EDF9F3] border-l-4 border-[#3CC27B] rounded-[13px] p-5">
                  <h4 className="text-sm font-medium text-black mb-2">
                    Transaction Details
                  </h4>
                  <p className="text-xs font-light text-black">
                    Your INR has been credited to your wallet. The transaction
                    is complete and verified.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="w-full lg:w-[368px] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-black">
                  Recent Transactions
                </h3>
                <button className="px-2 py-1 bg-black text-white rounded text-xs hover:bg-gray-900 transition">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {transactions.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-md border border-[#D9D9D9] p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-black mb-1">
                        {t.title}
                      </h4>
                      <p className="text-xs text-black mb-1">{t.date}</p>
                      <p className="text-xs text-black">{t.address}</p>
                    </div>
                    <div className="px-3 py-1 bg-[#BDFDDB] rounded">
                      <span className="text-[10px] text-[#1C5C3A]">
                        {t.status}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-medium text-black">
                        {t.amount}
                      </p>
                      <p className="text-xs text-black">{t.fiat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- DetailRow Subcomponent ---------------------------- */
interface DetailRowProps {
  label: string;
  value: string;
  showCopy?: boolean;
}

function DetailRow({ label, value, showCopy = false }: DetailRowProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex justify-between items-start gap-2">
      <span className="text-xs md:text-sm text-black">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm font-medium text-black text-right break-all">
          {value}
        </span>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded transition"
            aria-label="Copy transaction ID"
          >
            <Copy className="w-3.5 h-3.5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
