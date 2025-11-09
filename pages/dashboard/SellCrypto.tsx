import { Bell, ArrowUpDown, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function SellCrypto() {
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState("Ethereum (ETH)");
  const [amountToSell, setAmountToSell] = useState("0.02");
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

  const handleSellSubmit = () => {
    // In a real app, submit to API first
    console.log("Sell crypto:", {
      selectedCrypto,
      amountToSell,
      youReceiveAmount,
    });
    // Navigate to sell success page
    navigate("/sell-success");
  };

  const handleSwap = () => {
    const temp = amountToSell;
    setAmountToSell(youReceiveAmount);
    setYouReceiveAmount(temp);
  };

  const handleCryptoSelect = (crypto: string) => {
    setSelectedCrypto(crypto);
    setShowCryptoDropdown(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-20 sm:pb-12 md:pb-0">
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
        <div className="flex-1 space-y-4 md:space-y-6">
          <div className="bg-white rounded-lg md:rounded-[10px] p-4 md:p-6 lg:p-8">
            <div className="relative mb-6 md:mb-8">
              <div className="w-full h-[45px] md:h-[51px] bg-[#F0F0F0] rounded-md"></div>
              <div className="absolute top-1 right-1 w-[calc(50%-4px)] h-[37px] md:h-[43px] bg-white rounded"></div>
              <div className="absolute inset-0 flex">
                <Link
                  to="/buy-crypto"
                  className="flex-1 flex items-center justify-center text-sm md:text-base lg:text-xl font-medium text-gray-900"
                >
                  Buy Crypto
                </Link>
                <button
                  onClick={handleSellSubmit}
                  className="flex-1 text-sm md:text-base lg:text-xl font-medium text-gray-900 hover:text-[#3CC27B] transition-colors"
                >
                  Sell Crypto
                </button>
              </div>
            </div>

            <p className="text-[#838383] text-center text-xs md:text-sm lg:text-[17px] mb-6 md:mb-8">
              Convert your cryptocurrency to INR instantly
            </p>

            <div className="bg-gradient-to-r from-[#3CC27B] to-[#00602D] rounded-lg md:rounded-[10px] p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
              <div className="text-center">
                <p className="text-white text-xs md:text-sm lg:text-xl font-medium mb-1 md:mb-2">
                  Available Balance
                </p>
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
                  0.05432100 ETH
                </h2>
                <p className="text-white text-xs md:text-base lg:text-xl">
                  ≈ ₹10,049.385
                </p>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <label className="block text-sm md:text-base lg:text-[17px] font-medium text-black mb-2 md:mb-3">
                Select Cryptocurrency
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowCryptoDropdown(!showCryptoDropdown)}
                  className="w-full h-[45px] md:h-[51px] bg-[#F0F0F0] rounded-md px-4 md:px-7 flex items-center justify-between hover:bg-[#E8E8E8] transition-colors"
                >
                  <span className="text-xs md:text-sm lg:text-[13px] font-medium text-black truncate">
                    {selectedCrypto}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 md:w-4 md:h-4 text-black flex-shrink-0 transition-transform ${
                      showCryptoDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showCryptoDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#CACACA] rounded-md shadow-lg z-10">
                    {cryptoOptions.map((crypto) => (
                      <button
                        key={crypto}
                        onClick={() => handleCryptoSelect(crypto)}
                        className={`w-full text-left px-4 md:px-7 py-3 md:py-4 text-xs md:text-sm lg:text-[13px] font-medium transition-colors ${
                          selectedCrypto === crypto
                            ? "bg-[#3CC27B]/20 text-[#3CC27B]"
                            : "text-black hover:bg-[#F0F0F0]"
                        }`}
                      >
                        {crypto}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 relative">
              <div>
                <label className="block text-sm md:text-base lg:text-[17px] font-medium text-black mb-2 md:mb-3">
                  Amount To Sell
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={amountToSell}
                    onChange={(e) => setAmountToSell(e.target.value)}
                    className="w-full h-[45px] md:h-[51px] bg-[#F0F0F0] border border-[#CACACA] rounded-md px-4 md:px-7 text-xs md:text-sm lg:text-[15px] font-bold text-[#8E8E8E]"
                  />
                  <span className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 text-xs md:text-[13px] text-[#717171]">
                    ETH
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <button
                  onClick={handleSwap}
                  className="w-9 md:w-11 h-9 md:h-11 rounded-full bg-gradient-to-br from-[#3CC27B] to-[#1C5C3A] flex items-center justify-center hover:scale-105 transition-transform shadow-lg active:scale-95"
                  title="Swap amounts"
                >
                  <ArrowUpDown className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </button>
              </div>

              <div>
                <label className="block text-sm md:text-base lg:text-[17px] font-medium text-black mb-2 md:mb-3">
                  You will Receive
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={youReceiveAmount}
                    onChange={(e) => setYouReceiveAmount(e.target.value)}
                    className="w-full h-[45px] md:h-[51px] bg-[#F0F0F0] border border-[#CACACA] rounded-md px-4 md:px-7 text-xs md:text-sm lg:text-[15px] font-bold text-[#8E8E8E]"
                  />
                  <span className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 text-xs md:text-[13px] text-[#717171]">
                    INR
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[#838383] text-center text-xs md:text-sm lg:text-[17px] mb-6 md:mb-8">
              1 ETH = ₹1,85,000
            </p>

            <Link
              to="/sell-success"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 md:py-4 rounded-md border border-[#C3C3C3] hover:bg-black/90 transition-colors mb-6 md:mb-8"
            >
              <span className="text-xs md:text-sm lg:text-[15px] font-medium">
                Continue To Sell
              </span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>

            <div className="border-l-2 border-[#FA1818] bg-[rgba(253,189,189,0.19)] rounded-lg md:rounded-[10px] p-4 md:p-6">
              <h3 className="text-xs md:text-sm lg:text-[15px] font-medium text-black mb-4 md:mb-6">
                Purchase Summary
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-light">
                    Cryptocurrency:
                  </span>
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-medium text-right">
                    Ethereum (ETH)
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-light">
                    Crypto Amount:
                  </span>
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-medium text-right">
                    0.02000000 ETH
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-light">
                    Exchange Rate:
                  </span>
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-medium text-right">
                    ₹1,85,000
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-light">
                    Trading Fee (0.5%):
                  </span>
                  <span className="text-xs md:text-sm lg:text-[14px] text-black font-medium text-right">
                    ₹18.50
                  </span>
                </div>
                <div className="border-t border-[#EDEDED] pt-2 md:pt-3 mt-2 md:mt-3">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs md:text-sm lg:text-[14px] text-black font-light">
                      You Will Receive:
                    </span>
                    <span className="text-xs md:text-sm lg:text-[14px] text-[#3CC27B] font-medium">
                      ₹3,681.50
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[368px] space-y-3 md:space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm md:text-base lg:text-[17px] font-medium text-black">
              Recent Transactions
            </h3>
            <button className="px-2 md:px-3 py-1 bg-black text-white rounded text-[10px] md:text-xs whitespace-nowrap">
              view all
            </button>
          </div>
          <div className="space-y-2 md:space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg border border-[#D9D9D9] p-3 md:p-4"
              >
                <p className="text-sm md:text-base font-bold text-black">
                  Buy BTC
                </p>
                <p className="text-[10px] md:text-xs text-black font-light mt-1">
                  2024-12-20 14:30
                </p>
                <p className="text-[10px] md:text-xs text-black font-light">
                  0x1234...5678
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
