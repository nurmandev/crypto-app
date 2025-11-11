import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./dashboard/components/DashboardHeader";
import Sidebar from "./dashboard/components/Sidebar";

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 sm:pb-12 md:pb-0">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-2 md:mt-3 flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0 hidden md:block">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>

        {/* Mobile Sidebar - only render when open to avoid layout shift */}
        {isSidebarOpen && (
          <>
            <Sidebar isOpen={true} onClose={() => setIsSidebarOpen(false)} />
            <div
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-30 transition-opacity duration-300"
              onClick={() => setIsSidebarOpen(false)}
            />
          </>
        )}

        <div className="flex-1 min-w-0">
          <div className="pb-3">
            {/* Payment Method Selection Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                  Choose Payment Method
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Select how you'd like to pay for your crypto
                </p>
              </div>

              {/* Payment Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8">
                {[
                  {
                    id: "upi",
                    icon: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#10b981"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M20 6H12C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8V24C10 24.5304 10.2107 25.0391 10.5858 25.4142C10.9609 25.7893 11.4696 26 12 26H20C20.5304 26 21.0391 25.7893 21.4142 25.4142C21.7893 25.0391 22 24.5304 22 24V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6ZM17 25H15V24H17V25ZM20 23H12V9H20V23Z"
                          fill="#059669"
                        />
                      </svg>
                    ),
                    title: "UPI Payment",
                    description: "Pay using UPI apps like GPay, PhonePe, Paytm",
                    processingTime: "Instant",
                    fees: "0%",
                  },
                  {
                    id: "netbanking",
                    icon: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#10b981"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M16 5.5L6.5 10.5V12.5H25.5V10.5M20.5 14.5V21.5H23.5V14.5M6.5 26.5H25.5V23.5H6.5M14.5 14.5V21.5H17.5V14.5M8.5 14.5V21.5H11.5V14.5H8.5Z"
                          stroke="#059669"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    ),
                    title: "Net Banking",
                    description: "Direct bank transfers via net banking",
                    processingTime: "2-5 min",
                    fees: "0%",
                  },
                  {
                    id: "card",
                    icon: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#10b981"
                          fillOpacity="0.2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.1842 8.666L16.0002 8.5L8.81619 8.666C8.11197 8.68054 7.43432 8.9376 6.89762 9.39377C6.36092 9.84995 5.99803 10.4773 5.87019 11.17C5.28285 14.3632 5.28285 17.6368 5.87019 20.83C5.99799 21.5225 6.36074 22.1498 6.89723 22.6059C7.43373 23.0621 8.11114 23.3192 8.81519 23.334L16.0002 23.5L23.1842 23.334C23.8882 23.3192 24.5657 23.0621 25.1022 22.6059C25.6386 22.1498 26.0014 21.5225 26.1292 20.83C26.7165 17.6368 26.7165 14.3632 26.1292 11.17C26.0014 10.4775 25.6386 9.85024 25.1022 9.39409C24.5657 8.93793 23.8882 8.68077 23.1842 8.666ZM25.0002 15C25.0002 15.2652 24.8948 15.5196 24.7073 15.7071C24.5198 15.8946 24.2654 16 24.0002 16H8.00019C7.73498 16 7.48062 15.8946 7.29309 15.7071C7.10555 15.5196 7.00019 15.2652 7.00019 15C7.00019 14.7348 7.10555 14.4804 7.29309 14.2929C7.48062 14.1054 7.73498 14 8.00019 14H24.0002C24.2654 14 24.5198 14.1054 24.7073 14.2929C24.8948 14.4804 25.0002 14.7348 25.0002 15Z"
                          fill="#059669"
                        />
                      </svg>
                    ),
                    title: "Debit / Credit Card",
                    description: "Visa, Mastercard, Rupay accepted",
                    processingTime: "Instant",
                    fees: "2.5%",
                  },
                  {
                    id: "wallet",
                    icon: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#10b981"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M16 5.5L6.5 10.5V12.5H25.5V10.5M20.5 14.5V21.5H23.5V14.5M6.5 26.5H25.5V23.5H6.5M14.5 14.5V21.5H17.5V14.5M8.5 14.5V21.5H11.5V14.5H8.5Z"
                          stroke="#059669"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    ),
                    title: "Wallet Balance",
                    description: "Use your existing wallet balance",
                    processingTime: "Instant",
                    fees: "0%",
                  },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`relative p-4 sm:p-5 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedMethod === method.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    {selectedMethod === method.id && (
                      <div className="absolute top-3 right-3 bg-primary rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">{method.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                          {method.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                          <div>
                            <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">
                              Processing Time
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-1">
                              {method.processingTime}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">
                              Fees
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-1">
                              {method.fees}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/dashboard/buy-crypto"
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-gray-700 text-sm sm:text-base font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden xs:inline">Back to Order Details</span>
                  <span className="inline xs:hidden">Back</span>
                </Link>

                <button
                  disabled={!selectedMethod}
                  className={`w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                    selectedMethod
                      ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Recent Transactions */}
        <div className="w-full xl:w-[368px] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Recent Transactions
            </h3>
            <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      Buy BTC
                    </h4>
                    <p className="text-xs text-gray-500">
                      2024-12-20 14:30
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500">ID:</span>
                  <code className="font-mono text-gray-900">
                    0x1234...5678
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
