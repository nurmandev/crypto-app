import { Bell, ArrowUpDown, ArrowRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function BuyCrypto() {
  const [selectedTab, setSelectedTab] = useState("buy");
  const [selectedCrypto, setSelectedCrypto] = useState("Ethereum (ETH)");
  const [youPayAmount, setYouPayAmount] = useState("0.02");
  const [youReceiveAmount, setYouReceiveAmount] = useState("3681.50");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);

  const cryptoOptions = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Cardano (ADA)",
    "Ripple (XRP)",
    "Litecoin (LTC)",
  ];

  const handleSwap = () => {
    const temp = youPayAmount;
    setYouPayAmount(youReceiveAmount);
    setYouReceiveAmount(temp);
  };

  const handleCryptoSelect = (crypto: string) => {
    setSelectedCrypto(crypto);
    setShowCryptoDropdown(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-20 sm:pb-12 md:pb-0">
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-2 md:mt-3 flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 min-w-0">
          <div className="pb-3">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr,368px] gap-4">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-8">
                  <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                    {selectedTab === "buy" ? "Buy" : "Sell"} Cryptocurrency
                  </h1>
                  <p className="text-gray-600">
                    Exchange INR for cryptocurrency instantly with best market
                    rates
                  </p>
                </div>

                <div className="relative mb-8">
                  <div className="w-full h-[51px] bg-gray-50 rounded-lg"></div>
                  <div className={`absolute top-1 ${selectedTab === "buy" ? "left-1" : "right-1"} w-[calc(50%-4px)] h-[43px] bg-white rounded-md shadow-sm transition-all duration-300`}></div>
                  <div className="absolute inset-0 flex">
                    <button
                      onClick={() => setSelectedTab("buy")}
                      className="flex-1 text-base font-medium text-gray-900"
                    >
                      Buy Crypto
                    </button>
                    <button
                      onClick={() => setSelectedTab("sell")}
                      className="flex-1 flex items-center justify-center text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Sell Crypto
                    </button>
                  </div>
                </div>

                <p className="text-[#838383] text-center text-xs md:text-sm lg:text-[17px] mb-6 md:mb-8">
                  {selectedTab === "buy" ? "Exchange INR for cryptocurrency instantly" : "Convert your cryptocurrency to INR instantly"}
                </p>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Select Cryptocurrency
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowCryptoDropdown(!showCryptoDropdown)}
                      className="w-full h-[51px] bg-gray-50 rounded-lg px-4 flex items-center justify-between hover:bg-gray-100 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {selectedCrypto}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                          showCryptoDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showCryptoDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                        {cryptoOptions.map((crypto) => (
                          <button
                            key={crypto}
                            onClick={() => handleCryptoSelect(crypto)}
                            className={`w-full text-left px-4 py-3.5 text-sm font-medium transition-colors ${
                              selectedCrypto === crypto
                                ? "bg-primary/10 text-primary"
                                : "text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {crypto}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-900">
                      {selectedTab === "buy" ? "Amount To Sell" : "Amount To Sell"}
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={youPayAmount}
                        onChange={(e) => setYouPayAmount(e.target.value)}
                        className="flex-1 h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {/* <button
                        onClick={handleSwap}
                        className="w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg active:scale-95 flex-shrink-0"
                        title="Swap amounts"
                      >
                        <ArrowUpDown className="w-5 h-5 text-white" />
                      </button> */}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-900">
                      {selectedTab === "buy" ? "You will Receive" : "You will Receive"}
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={youReceiveAmount}
                        onChange={(e) => setYouReceiveAmount(e.target.value)}
                        className="flex-1 h-[40px] bg-white border border-gray-300 rounded-lg px-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-green-900">
                          {selectedTab === "buy" ? "INR" : "ADA"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8 text-xs text-gray-600">
                  <span>1 {selectedTab === "buy" ? "ETH" : "ADA"} = ₹{selectedTab === "buy" ? "1,85,000" : "28"}</span>
                </div>

                <Link
                  to="/payment-method"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white h-12 rounded-lg transition-colors mb-8 group"
                >
                  <span className="text-sm font-medium">
                    Continue To Payment
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="border-l-4 border-primary/40 bg-primary/5 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-6">
                    Purchase Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Cryptocurrency
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        Ethereum (ETH)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Crypto Amount
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        0.02000000 ETH
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Exchange Rate
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        ₹1,85,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Trading Fee (0.5%)
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        ₹18.50
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Total To Pay
                        </span>
                        <span className="text-base font-semibold text-primary">
                          ₹3,681.50
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
        </div>
      </div>
    </div>
  );
}
