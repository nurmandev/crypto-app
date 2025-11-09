import { Button } from "@/components/ui/button";
// import Particles from "@/components/Particles";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  ShoppingCart,
  Repeat,
  Wallet,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesLoad from "../components/ParticlesLoad";
import BottomNav from "../components/BottomNav";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How Does It Works?",
    answer:
      "Our platform makes it simple to buy and sell cryptocurrency. Sign up, verify your identity, add a payment method, and start trading instantly. We handle the technical details while you focus on your investments.",
  },
  {
    id: 2,
    question: "About USDT MPAY?",
    answer:
      "USDT MPAY is a secure cryptocurrency exchange platform designed for Indian users. We offer instant deposits via UPI, bank-level security, real-time pricing, and support for multiple cryptocurrencies.",
  },
  {
    id: 3,
    question: "What we offer to you?",
    answer:
      "We offer buy/sell services for 700+ cryptocurrencies, instant UPI withdrawals, secure wallets, real-time market data, low trading fees, and 24/7 customer support.",
  },
  {
    id: 4,
    question: "How To Sell Crypto Currency?",
    answer:
      "Open your wallet, select the cryptocurrency you want to sell, enter the amount, review the conversion rate, and confirm. The rupees will be credited to your bank account instantly.",
  },
  {
    id: 5,
    question: "What Is a Crypto Currency Exchange?",
    answer:
      "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital assets. It acts as an intermediary, matching buyers and sellers while providing secure storage and instant transaction processing.",
  },
  {
    id: 6,
    question: "How To Cash Out Wallet Funds?",
    answer:
      "Navigate to your wallet, select the cryptocurrency, click 'Withdraw to Bank', enter your bank details, and confirm. Transfers typically complete within minutes during business hours.",
  },
  {
    id: 7,
    question: "How To Buy Crypto Currencies On Usdtmpay?",
    answer:
      "Go to the Buy section, select your cryptocurrency, enter the amount in INR, choose your payment method (UPI/Bank), and complete the transaction. Your crypto will be credited instantly to your wallet.",
  },
  {
    id: 8,
    question: "How To Add Funds To Your MPAY Wallet?",
    answer:
      "Open the Wallet section, click 'Add Funds', select your payment method, enter the amount, and complete the payment process. Funds are credited immediately to your MPAY wallet.",
  },
  {
    id: 9,
    question: "How To Transfer Wallet Funds?",
    answer:
      "Go to Transfer, select the recipient's MPAY account or wallet address, enter the amount, and confirm. Transfers complete instantly with full encryption for security.",
  },
  {
    id: 10,
    question: "How to Reach Out Support Team?",
    answer:
      "You can contact our support team via email at support@cryptotrade.in, call +91 80-0000-0000, or visit our help center. Our team responds within 24 hours for all inquiries.",
  },
];

export default function Index() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-[60px] sm:pb-0">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-20 lg:pb-28 overflow-hidden min-h-auto md:min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>

        <ParticlesLoad />
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#BDFDDB] rounded-full px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-1.5 sm:py-2 mb-6 xs:mb-8">
              <Rocket className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-[#3CC27B] flex-shrink-0" />
              <span className="text-[#0A7741] text-[11px] xs:text-xs sm:text-sm md:text-[15px] whitespace-nowrap">
                India's Fastest Growing Crypto Trading Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal mb-4 xs:mb-6 leading-[1.2]">
              <span className="text-[#161616] font-['Russo_One']">
                Buy & Sell Crypto{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#161616] to-[#27BF73] bg-clip-text text-transparent font-['Russo_One']">
                Instantly
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-900 max-w-2xl md:max-w-3xl mx-auto mb-8 xs:mb-10 leading-relaxed">
              The Top Best Secure Exchanging Platform For Your Cryptocurrency
              Providing Services Globally For Buying, Selling, Transferring, and
              Storing Your Digital Asset.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mb-8 xs:mb-10">
              <Link to="/login">
                <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-6 xs:px-10 sm:px-12 h-[44px] xs:h-[48px] sm:h-[52px] text-xs xs:text-sm sm:text-base font-medium rounded-md shadow-sm hover:shadow transition-all">
                  Buy Crypto Now
                </Button>
              </Link>

              <Link to="/login">
                <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-6 xs:px-10 sm:px-12 h-[44px] xs:h-[48px] sm:h-[52px] text-xs xs:text-sm sm:text-base font-medium rounded-md shadow-sm hover:shadow transition-all">
                  Sell Your Crypto
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 text-[11px] xs:text-xs sm:text-sm text-gray-900">
              <div className="flex items-center -space-x-1.5 xs:-space-x-2">
                {["sarah", "john", "emma", "michael"].map((name, i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&scale=80`}
                    alt={`User ${i + 1}`}
                    className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 rounded-full border border-white xs:border-2 ring-1 ring-gray-100 object-cover"
                  />
                ))}
              </div>
              <span className="font-medium whitespace-nowrap text-gray-700">
                Join 10,000+ traders
              </span>
              <div className="flex gap-0.5 xs:gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-[#FBD25F] text-xs xs:text-sm">
                    ★
                  </span>
                ))}
                <span className="text-gray-300 text-xs xs:text-sm">★</span>
              </div>
              <span className="font-medium whitespace-nowrap text-gray-700">
                4.5/5 Ratings
              </span>
            </div>
          </div>

          {/* Phone Mockups with Side Elements */}
          <div className="relative mt-8 md:mt-12 lg:mt-16">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Crypto Icons - Hidden on mobile */}
              <div className="hidden lg:flex flex-col items-end justify-center gap-8 pr-6">
                {[
                  { icon: "/images/btc.png", label: "BTC", width: "179px" },
                  { icon: "/images/trx.png", label: "TRX", width: "115px" },
                  { icon: "/images/crypto-icons/usdt.svg", label: "USDT", width: "219px" },
                  { icon: "/images/sol.png", label: "SOL", width: "272px" },
                  { icon: "/images/dog.png", label: "DOGE", width: "159px" },
                ].map((crypto, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-[94px] h-[94px] rounded-full bg-white shadow-[6px_-1px_34px_0_rgba(164,164,164,0.25)] p-[10px]">
                      <img
                        src={crypto.icon}
                        alt={crypto.label}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <svg
                      className="flex-shrink-0"
                      style={{ width: crypto.width, height: '2px' }}
                      viewBox={`0 0 ${parseInt(crypto.width)} 2`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id={`gradient-${idx}`} x1="0" y1="1.5" x2={parseInt(crypto.width)} y2="1.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3CC27B"/>
                          <stop offset="1" stopColor="#1C5C3A" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path
                        d={`M0 1L${parseInt(crypto.width)} 1`}
                        stroke={`url(#gradient-${idx})`}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Center Phone Mockups */}
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9dd109c9d143e344a1e0cde3ee5ac1081bb25d1c?width=2260"
                    alt="Mobile App Preview"
                    className="w-full drop-shadow-[81px_0_44px_0_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>

              {/* Right Transaction Info - Hidden on mobile */}
              <div className="hidden lg:flex flex-col gap-4 text-sm pl-6">
                {[
                  { amount: "100", symbol: "USDT", price: "₹8,200" },
                  { amount: "100", symbol: "USDT", price: "₹8,200" },
                  { amount: "100", symbol: "USDT", price: "₹8,200" },
                  { amount: "100", symbol: "USDT", price: "₹8,200" },
                  { amount: "100", symbol: "USDT", price: "₹8,200" },
                ].map((transaction, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[3px] px-[14px] py-[11px] flex flex-col gap-[-11px]"
                  >
                    <div className="text-[13px] leading-[33px]">
                      <span className="font-normal text-black">Sold {transaction.amount} </span>
                      <span className="font-bold text-black">{transaction.symbol}</span>
                      <span className="font-normal text-black"> for </span>
                      <span className="font-bold text-[#3CC27B]">{transaction.price}</span>
                    </div>
                    <div className="text-[13px] leading-[33px] text-black font-normal">
                      {transaction.price} has been received in your wallet
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#3CC27B] to-[#00602D] relative overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Stats Cards */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: "10K +", label: "Active Users" },
                { value: "₹500+", label: "Trading Volume" },
                { value: "700+", label: "Crypto Coins" },
                { value: "1.3B+", label: "Cash Out" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 text-center"
                >
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1 xs:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white text-[12px] xs:text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bitcoin Image */}
            <div className="flex justify-center lg:justify-end relative flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b234ffe9ebcbed92046a393a086f19e7a0a49a6b"
                alt="Bitcoin Coin"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E9E9E9] rounded-full px-4 py-1.5 mb-4 xs:mb-6">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F9AA4B] to-[#F7931A]"></div>
              <span className="text-[#646464] text-[12px] xs:text-[13px] sm:text-[15px]">
                CRYPTO WALLET & SERVICES
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] text-[#161616] mb-3 xs:mb-4">
              Explore Services & Crypto Wallet
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
              We Bring Together Dynamic Mix Of Services & Crypto Wallet That Are
              Thoughtfully Designed To Make Your Crypto Exchange Easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: "Buy Crypto",
                description:
                  "Easily purchase your favorite cryptocurrencies in just a few clicks.",
              },
              {
                icon: Repeat,
                title: "Sell Crypto",
                description:
                  "Securely sell your crypto and get instant payouts.",
              },
              {
                icon: Wallet,
                title: "Wallet",
                description:
                  "Easily purchase your favorite cryptocurrencies in just a few clicks.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 mb-2 xs:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm xs:text-base text-gray-900 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Markets Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E9E9E9] rounded-full px-4 py-1.5 mb-4 xs:mb-6">
              <TrendingUp className="w-4 h-4 text-[#3CC27B]" />
              <span className="text-[#646464] text-[12px] xs:text-[13px] sm:text-[15px]">
                Live Crypto Pricings and Charts
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] text-[#161616] mb-3 xs:mb-4">
              Live Crypto Markets
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
              Track real-time cryptocurrency prices and buy or sell with just a
              few clicks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto mb-8 xs:mb-10 md:mb-12">
            {[
              {
                name: "BTC",
                fullName: "Bitcoin",
                price: "₹4,123,456",
                change: "+3.14%",
                positive: true,
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/0e8162b931ac7a269c2579324248c37d54f60538",
              },
              {
                name: "ETH",
                fullName: "Ethereum",
                price: "₹234,567",
                change: "-3.14%",
                positive: false,
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/586cb756bb32c4c0a1b9f3acdf050b6e7a79f092",
              },
              {
                name: "Sol",
                fullName: "Solana",
                price: "₹4,123,456",
                change: "+3.14%",
                positive: true,
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/78c2531224f8fdb3c88b395fccd81b321f38fdd4",
              },
              {
                name: "Doge",
                fullName: "Doge",
                price: "₹4,123,456",
                change: "+3.14%",
                positive: true,
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/bebc11cac502e1e56ffd9ff4f0f72a172b01b7e2",
              },
            ].map((crypto, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-100 p-3 xs:p-4 md:p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3 xs:mb-4">
                  <div className="flex items-center gap-2 xs:gap-3 min-w-0">
                    <img
                      src={crypto.icon}
                      alt={crypto.name}
                      className="w-8 xs:w-10 h-8 xs:h-10 rounded-full flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-sm xs:text-base text-gray-900">
                        {crypto.name}
                      </div>
                      <div className="text-[11px] xs:text-[13px] text-gray-600 truncate">
                        {crypto.fullName}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[13px] xs:text-[15px] md:text-[17px] font-medium text-gray-900">
                      {crypto.price}
                    </div>
                    <span
                      className={`inline-block px-2 xs:px-2.5 py-0.5 xs:py-1 rounded text-[10px] xs:text-[12px] md:text-[13px] ${
                        crypto.positive
                          ? "bg-[#BDFDDB] text-gray-900"
                          : "bg-[#FDBDBD] text-gray-900"
                      }`}
                    >
                      {crypto.change}
                    </span>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-20 xs:h-24 relative">
                  <svg viewBox="0 0 280 80" className="w-full h-full">
                    <path
                      d={
                        crypto.positive
                          ? "M0,60 Q30,40 60,50 T120,30 T180,45 T240,25 L240,80 L0,80 Z"
                          : "M0,20 Q30,40 60,30 T120,50 T180,35 T240,55 L240,80 L0,80 Z"
                      }
                      fill={
                        crypto.positive
                          ? "rgba(60, 194, 123, 0.1)"
                          : "rgba(250, 24, 24, 0.1)"
                      }
                      stroke={crypto.positive ? "#3CC27B" : "#FA1818"}
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] xs:text-[13px] text-gray-400 mt-2">
                  <span>9:00</span>
                  <span>12:00</span>
                  <span>3:00</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[11px] xs:text-xs sm:text-[13px] text-gray-900 mb-4 xs:mb-6">
              Join thousands of traders • Get started with just ₹100
            </p>
            <Button className="bg-black hover:bg-black/90 text-white px-8 xs:px-10 sm:px-12 h-[40px] xs:h-[44px] sm:h-[51px] rounded-md inline-flex items-center gap-2 text-xs sm:text-sm">
              Start Crypto Deposit Now
              <ChevronRight className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Buy/Sell Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-r from-[#3CC27B] to-[#00602D] relative overflow-visible">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center relative">
              {/* Left Content */}
              <div className="text-white order-2 md:order-1">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] mb-4 xs:mb-6">
                  Buy & Sell Crypto At Any INR Rate
                </h2>
                <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
                  We're proud to be working with these incredible traders, and
                  thankful for their feedback, suggestions, and support.
                </p>
              </div>

              {/* Right Form Panels - Overlapping Cards */}
              <div className="relative order-1 md:order-2 h-80 md:h-80 lg:h-96">
                {/* Buy Crypto Form - Left Card */}
                <div className="absolute left-0 top-0 w-56 md:w-52 lg:w-64 bg-white rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl z-10">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                    Buy Crypto
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="text-xs text-gray-600">
                      Real-time conversion rates
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Select Cryptocurrency
                      </label>
                      <input
                        type="text"
                        placeholder="USDT"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border border-gray-200"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Select Network
                      </label>
                      <input
                        type="text"
                        placeholder="BNB"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border border-gray-200"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Enter Amount (USDT)
                      </label>
                      <input
                        type="text"
                        placeholder="150"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border-2 border-[#3CC27B]"
                      />
                    </div>
                    <button className="w-full mt-2 md:mt-3 text-[#3CC27B] font-medium text-xs">
                      Continue to Buy →
                    </button>
                  </div>
                </div>

                {/* Sell Crypto Form - Right Card (Overlapping) */}
                <div className="absolute right-0 bottom-0 w-56 md:w-52 lg:w-64 bg-white rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl z-20">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                    Sell Crypto
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="text-xs text-gray-600">
                      Real-time conversion rates
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Select Cryptocurrency
                      </label>
                      <input
                        type="text"
                        placeholder="USDT"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border border-gray-200"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Select Network
                      </label>
                      <input
                        type="text"
                        placeholder="BNB"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border border-gray-200"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-gray-600">
                        Enter Amount (USDT)
                      </label>
                      <input
                        type="text"
                        placeholder="150"
                        className="w-full px-2 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded text-xs border-2 border-[#3CC27B]"
                      />
                    </div>
                    <button className="w-full mt-2 md:mt-3 text-[#3CC27B] font-medium text-xs">
                      Continue to Sell →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] text-[#161616] mb-3 xs:mb-4">
              Don't just take our word for it
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
              We're proud to be working with these incredible traders, and
              thankful for their feedback, suggestions, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`bg-white rounded-lg p-4 md:p-6 ${i === 4 ? "border-2 border-[#3CC27B] shadow-xl" : "shadow-md"}`}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="font-medium text-[13px] md:text-[15px]">
                      Sarah Johnson
                    </div>
                    <div className="text-[12px] md:text-[13px] text-gray-600">
                      @sarahtrades
                    </div>
                  </div>
                  <Twitter className="w-3 md:w-4 h-3 md:h-4 ml-auto flex-shrink-0" />
                </div>
                <p className="text-[13px] md:text-[15px] text-gray-900 mb-4 leading-relaxed">
                  "The platform is incredibly user-friendly and the instant
                  buy/sell feature has saved me so much time. Best trading
                  experience I've had in 3 years!"
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((j) => (
                    <span key={j} className="text-[#F9AA4B] text-sm">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-300 text-sm">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] text-[#161616] mb-3 xs:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
              A List Of Question and Answers Related To A Specific Topic,
              Product, Services & Common Customer Inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-6xl mx-auto">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-md border border-gray-200 overflow-hidden hover:border-[#3CC27B] transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-3 md:p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-medium text-xs md:text-base text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 md:w-5 h-4 md:h-5 text-gray-900 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      expandedId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="border-t border-gray-200 p-3 md:p-5 bg-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-['Russo_One'] text-white mb-4 xs:mb-6">
            Ready to Start Trading Crypto?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-white max-w-3xl mx-auto mb-8 xs:mb-10">
            Join thousands of traders buying and selling cryptocurrencies on
            India's most trusted platform
          </p>
          <Button className="bg-white hover:bg-gray-100 text-[#161616] px-8 xs:px-10 sm:px-14 h-[40px] xs:h-[44px] sm:h-[51px] text-xs xs:text-sm sm:text-[15px] font-medium rounded-md">
            Buy Crypto Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Extra padding for mobile to account for bottom nav */}
      <div className="h-16 block sm:hidden"></div>
    </div>
  );
}
