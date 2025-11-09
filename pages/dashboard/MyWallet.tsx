import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Lock, ChevronRight, Copy, Eye, Plus, X } from "lucide-react";

interface CryptoHolding {
  name: string;
  amount: string;
  inrValue: string;
  icon: string;
  address: string;
  exchangeRate: string;
}

export default function MyWallet() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState<string[]>(["", "", "", "", "", ""]);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoHolding | null>(
    null,
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handlePinChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    const pinString = newPin.join("");
    console.log("Current PIN:", pinString);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const newPin = [...pin];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newPin[index] = char;
      }
    });
    setPin(newPin);

    console.log("Current PIN:", newPin.join(""));

    const nextEmptyIndex = newPin.findIndex((p) => !p);
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : 5;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleUnlock = () => {
    const fullPin = pin.join("");
    console.log("Unlocking wallet with PIN:", fullPin);

    if (fullPin.length === 6) {
      console.log("Wallet unlocked!");
      setIsUnlocked(true);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const cryptoHoldings: CryptoHolding[] = [
    {
      name: "Usdt",
      amount: "300 USDT",
      inrValue: "₹24,000.00",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      exchangeRate: "1 USDT = ₹90.00",
    },
    {
      name: "Bitcoin",
      amount: "0.05234 BTC",
      inrValue: "₹24,000.00",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      exchangeRate: "1 BTC = ₹85,00,000.00",
    },
    {
      name: "Ethereum",
      amount: "1.2345 ETH",
      inrValue: "₹24,000.00",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
      address: "0x742d35Cc6635C0532925a3b8D22Ad5B73e9B6547",
      exchangeRate: "1 ETH = ₹3,50,000.00",
    },
    {
      name: "Cardano",
      amount: "1500 ADA",
      inrValue: "₹24,000.00",
      icon: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
      address: "addr1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh0fxy2kg",
      exchangeRate: "1 ADA = ₹35.00",
    },
  ];

  const walletAddresses = [
    {
      label: "BTC Address",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    },
    {
      label: "Ada Address",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    },
    {
      label: "BTC Address",
      address: "addr1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh0fxy2kg",
    },
    {
      label: "ETH Address",
      address: "0x742d35Cc6635C0532925a3b8D22Ad5B73e9B6547",
    },
    {
      label: "BTC Address",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    },
    {
      label: "BTC Address",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    },
  ];

  const transactions = [
    {
      type: "Buy BTC",
      date: "2024-12-20 14:30",
      txId: "0x1234...5678",
      amount: "0.012 BTC",
      inr: "₹52,345",
    },
    {
      type: "Buy BTC",
      date: "2024-12-20 14:30",
      txId: "0x1234...5678",
      amount: "0.012 BTC",
      inr: "₹52,345",
    },
    {
      type: "Buy BTC",
      date: "2024-12-20 14:30",
      txId: "0x1234...5678",
      amount: "0.012 BTC",
      inr: "₹52,345",
    },
  ];

  const assetAllocation = [
    { name: "INR", percentage: "5.3%", color: "#3CC27B" },
    { name: "BTC", percentage: "25.4%", color: "#3CC27B" },
    { name: "ETH", percentage: "34.1%", color: "#3CC27B" },
    { name: "ADA", percentage: "7.7%", color: "#3CC27B" },
    { name: "USDT", percentage: "27.5", color: "#3CC27B" },
  ];

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
        <DashboardHeader
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isMenuOpen={isSidebarOpen}
        />

        <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#FDBDBD]/45 flex items-center justify-center">
                    <Lock className="w-6 sm:w-8 h-6 sm:h-8 text-[#FA1818]" />
                  </div>
                </div>

                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-1 sm:mb-2">
                  Wallet Locked
                </h1>

                <p className="text-[#838383] text-center mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
                  Enter your PIN to access your wallet
                </p>

                <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 overflow-x-auto px-2">
                  {pin.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handlePinChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-center text-base sm:text-lg md:text-xl font-bold text-[#8E8E8E] border border-[#CACACA] rounded bg-[#F0F0F0] focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all flex-shrink-0"
                      placeholder="2"
                    />
                  ))}
                </div>

                <button
                  onClick={handleUnlock}
                  disabled={pin.join("").length !== 6}
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 bg-black text-white rounded-md border border-[#C3C3C3] hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-3 sm:mb-4"
                >
                  <span className="text-xs sm:text-sm md:text-base">
                    Unlock Wallet
                  </span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                <div className="text-center space-y-2 sm:space-y-3">
                  <p className="text-[#838383] text-[10px] sm:text-xs md:text-sm">
                    Don't have a PIN set up?
                  </p>
                  <button
                    onClick={() => navigate("/wallet-security")}
                    className="text-[#3CC27B] font-bold text-[10px] sm:text-xs md:text-sm hover:underline"
                  >
                    Go to Wallet Security to set up PIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        <div className="flex-1 space-y-6">
          {/* Wallet Balance & Asset Value Card */}
          <div className="rounded-lg bg-gradient-to-r from-[#3CC27B] to-[#00602D] p-4 sm:p-6 md:p-8 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1 sm:mb-2">
                  Wallet Balance
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  ₹45,230.5
                </p>
              </div>
              <div>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1 sm:mb-2">
                  Asset Value
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  $1,00,000
                </p>
              </div>
            </div>

            {/* Eye Icon */}
            <div className="flex justify-end mb-3 sm:mb-4">
              <Eye className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>

            {/* Spending Limits */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-3 sm:mb-4">
              Daily and Monthly Spending Limits
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Daily Limit */}
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 md:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    Daily Limit
                  </span>
                  <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    ₹15,420 / ₹50,000
                  </span>
                </div>
                <div className="w-full h-4 bg-white rounded-full mb-2">
                  <div
                    className="h-3 bg-[#3CC27B] rounded-full mt-0.5 ml-0.5"
                    style={{ width: "46%" }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm">
                  ₹34,580 remaining today
                </p>
              </div>

              {/* Monthly Limit */}
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 md:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    Monthly Limit
                  </span>
                  <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                    ₹15,420 / ₹50,000
                  </span>
                </div>
                <div className="w-full h-4 bg-white rounded-full mb-2">
                  <div
                    className="h-3 bg-[#3CC27B] rounded-full mt-0.5 ml-0.5"
                    style={{ width: "46%" }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm">
                  ₹34,580 remaining today
                </p>
              </div>
            </div>
          </div>

          {/* Asset Allocation */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-black mb-6">
              Asset Allocation
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {assetAllocation.map((asset, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-[5px] sm:border-[7px] border-[#3CC27B] bg-white shadow-lg flex items-center justify-center">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#3CC27B]">
                      {asset.name === "INR"
                        ? "₹"
                        : asset.name === "BTC"
                          ? "₿"
                          : asset.name === "ETH"
                            ? "Ξ"
                            : asset.name === "ADA"
                              ? "₳"
                              : "₮"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">
                    {asset.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                    {asset.percentage}
                  </p>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-[5px] sm:border-[7px] border-[#3CC27B] bg-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                  <Plus className="w-7 sm:w-8 md:w-10 lg:w-10 h-7 sm:h-8 md:h-10 lg:h-10 text-[#3CC27B]" />
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#3CC27B] text-center">
                  Add Crypto
                </p>
              </div>
            </div>
          </div>

          {/* My Holdings */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-4 sm:mb-6">
              My Holdings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {cryptoHoldings.map((holding, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCrypto(holding)}
                  className="bg-white rounded-lg p-3 sm:p-4 flex flex-col gap-2 border border-[#D4D4D4] hover:border-[#3CC27B] hover:shadow-md transition-all cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-black">
                        {holding.name}
                      </p>
                      <p className="text-sm sm:text-base md:text-base font-medium text-black truncate">
                        {holding.amount}
                      </p>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3CC27B] font-medium truncate">
                    ₹ INR Value: {holding.inrValue}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-4 sm:mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              <Link
                to="/deposit-fund"
                className="bg-white rounded-lg p-3 sm:p-5 md:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:shadow-lg transition"
              >
                <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-[#3CC27B]/30 flex items-center justify-center">
                  <svg
                    className="w-4 sm:w-6 h-4 sm:h-6 text-[#3CC27B]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 32H31V29.4118H13V32ZM31 17.7647H25.8571V10H18.1429V17.7647H13L22 26.8235L31 17.7647Z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Deposit Fund
                </p>
              </Link>

              <Link
                to="/withdraw-fund"
                className="bg-white rounded-lg p-3 sm:p-5 md:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:shadow-lg transition"
              >
                <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-[#3CC27B]/30 flex items-center justify-center">
                  <svg
                    className="w-4 sm:w-6 h-4 sm:h-6 text-[#3CC27B]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M31 9.99979L13 9.99979L13 12.5712L31 12.5712L31 9.99979ZM13 24.1427L18.1429 24.1426L18.1429 31.8569L25.8571 31.8569L25.8571 24.1426L31 24.1426L22 15.1427L13 24.1427Z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Withdraw Fund
                </p>
              </Link>

              <Link
                to="/deposit-crypto"
                className="bg-white rounded-lg p-3 sm:p-5 md:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:shadow-lg transition"
              >
                <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-[#3CC27B]/30 flex items-center justify-center">
                  <svg
                    className="w-4 sm:w-6 h-4 sm:h-6 text-[#3CC27B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22.2614 33.3988C29.9816 34.7652 31.8881 23.9142 24.1679 22.5462M22.2614 33.3988L13 31.7585M22.2614 33.3988L21.7189 36.5M17.9921 21.4538L24.1695 22.5462C31.8897 23.9142 33.7962 13.0617 26.0744 11.6953L16.8099 10.0549M26.0729 11.6953L26.6185 8.59407M15.5399 35.4059L20.4411 7.5" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Deposit Crypto
                </p>
              </Link>

              <Link
                to="/withdraw-crypto"
                className="bg-white rounded-lg p-3 sm:p-5 md:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:shadow-lg transition"
              >
                <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-[#3CC27B]/30 flex items-center justify-center">
                  <svg
                    className="w-4 sm:w-6 h-4 sm:h-6 text-[#3CC27B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M16.7468 14.5H13.7468C13.349 14.5 12.9674 14.658 12.6861 14.9393C12.4048 15.2206 12.2468 15.6022 12.2468 16V26.5M12.2468 26.5H31.7468M12.2468 26.5L10.7968 30.636C10.7416 30.8567 10.7373 31.0871 10.7843 31.3098C10.8313 31.5324 10.9283 31.7414 11.068 31.921C11.2077 32.1006 11.3864 32.2461 11.5907 32.3464C11.7949 32.4467 12.0193 32.4992 12.2468 32.5H31.7468C31.9747 32.5 32.1997 32.448 32.4046 32.348C32.6094 32.248 32.7888 32.1027 32.929 31.923C33.0693 31.7433 33.1668 31.534 33.214 31.311C33.2613 31.088 33.2571 30.8571 33.2018 30.636L31.7468 26.5M31.7468 26.5V16C31.7468 15.6022 31.5888 15.2206 31.3074 14.9393C31.0261 14.658 30.6446 14.5 30.2468 14.5H27.9968M21.2468 29.5H23.4968" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Withdraw Crypto
                </p>
              </Link>
            </div>
          </div>

          {/* Wallet Addresses */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-4 sm:mb-6">
              Wallet Addresses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {walletAddresses.map((wallet, index) => (
                <div
                  key={index}
                  className="rounded-lg border-[1.5px] sm:border-[1.7px] border-dashed border-[#CACACA] bg-[#F0F0F0] p-3 sm:p-4 md:p-6 flex items-start sm:items-center justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black mb-1 sm:mb-2">
                      {wallet.label}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#8E8E8E] truncate">
                      {wallet.address}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(wallet.address)}
                    className="flex-shrink-0 text-black hover:text-[#3CC27B] transition"
                    title="Copy address"
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-4 sm:mb-6">
              Recent Transactions
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {transactions.map((tx, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-[#D9D9D9] p-3 sm:p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-bold text-black mb-1">
                      {tx.type}
                    </p>
                    <p className="text-[10px] sm:text-xs text-black mb-1">
                      {tx.date}
                    </p>
                    <p className="text-[10px] sm:text-xs text-black truncate">
                      {tx.txId}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="px-2 sm:px-3 py-1 bg-[#BDFDDB] text-[#1C5C3A] text-[10px] sm:text-xs rounded whitespace-nowrap">
                      Completed
                    </span>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black">
                        {tx.amount}
                      </p>
                      <p className="text-[10px] sm:text-xs text-black">
                        {tx.inr}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crypto Popup Modal */}
        {selectedCrypto && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCrypto(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-black transition"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Crypto Info */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black truncate">
                    {selectedCrypto.amount}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-black mb-4 sm:mb-6">
                ₹ INR Value: {selectedCrypto.inrValue}
              </p>

              {/* Address Section */}
              <div className="rounded-lg border-[1.5px] sm:border-[1.7px] border-dashed border-[#CACACA] bg-[#F0F0F0] p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 relative">
                <p className="text-sm sm:text-base md:text-lg font-medium text-black mb-1 sm:mb-2">
                  {selectedCrypto.name === "Usdt"
                    ? "USDT"
                    : selectedCrypto.name === "Bitcoin"
                      ? "BTC"
                      : selectedCrypto.name === "Ethereum"
                        ? "ETH"
                        : "ADA"}{" "}
                  Address
                </p>
                <p className="text-[10px] sm:text-sm md:text-base text-[#8E8E8E] mb-3 sm:mb-4 break-all pr-8">
                  {selectedCrypto.address}
                </p>
                <button
                  onClick={() => copyToClipboard(selectedCrypto.address)}
                  className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 text-black hover:text-[#3CC27B] transition"
                  title="Copy address"
                >
                  <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Sell Button */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <button className="w-full py-2.5 sm:py-3 md:py-4 bg-[#FA1818] text-white rounded-md font-medium text-xs sm:text-sm md:text-base hover:bg-[#E01010] transition-colors">
                  Sell{" "}
                  {selectedCrypto.name === "Usdt"
                    ? "USDT"
                    : selectedCrypto.name === "Bitcoin"
                      ? "BTC"
                      : selectedCrypto.name === "Ethereum"
                        ? "ETH"
                        : "ADA"}
                </button>

                {/* Exchange Rate */}
                <p className="text-[10px] sm:text-xs md:text-sm text-[#838383]">
                  Exchange Value:{" "}
                  <span className="text-black">
                    {selectedCrypto.exchangeRate}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
