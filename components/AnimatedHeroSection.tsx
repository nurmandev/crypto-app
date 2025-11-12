import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import ParticlesLoad from "./ParticlesLoad";

const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Link = ({ children, to, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

export default function AnimatedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-20 lg:pb-28 overflow-hidden min-h-auto md:min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>

      <ParticlesLoad />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Hero Content */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .gradient-shimmer {
          background: linear-gradient(
            90deg,
            #161616 0%,
            #27BF73 50%,
            #161616 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1600 { animation-delay: 1.6s; }
        
        .opacity-0 { opacity: 0; }
      `}</style>

        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-1.5 xs:gap-2 bg-[#BDFDDB] rounded-full px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-1.5 sm:py-2 mb-6 xs:mb-8 transition-all duration-300 hover:scale-105 hover:shadow-lg ${isVisible ? "animate-fade-in-scale opacity-0" : ""}`}
            >
              <Rocket className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-[#3CC27B] flex-shrink-0" />
              <span className="text-[#0A7741] text-[11px] xs:text-xs sm:text-sm md:text-[15px] whitespace-nowrap">
                India's Fastest Growing Crypto Trading Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal mb-4 xs:mb-6 leading-[1.2]">
              <span
                className={`text-[#161616] font-['Russo_One'] block ${isVisible ? "animate-fade-in-up opacity-0 delay-200" : ""}`}
              >
                Buy & Sell Crypto{" "}
              </span>
              <span className="bg-gradient-to-r from-[#161616] to-[#27BF73] bg-clip-text text-transparent font-['Russo_One']">
                Instantly
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-xs xs:text-sm sm:text-base md:text-lg text-gray-900 max-w-2xl md:max-w-3xl mx-auto mb-8 xs:mb-10 leading-relaxed ${isVisible ? "animate-fade-in-up opacity-0 delay-600" : ""}`}
            >
              The Top Best Secure Exchanging Platform For Your Cryptocurrency
              Providing Services Globally For Buying, Selling, Transferring, and
              Storing Your Digital Asset.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mb-8 xs:mb-10 ${isVisible ? "animate-fade-in-up opacity-0 delay-800" : ""}`}
            >
              <Link to="/login">
                <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-6 xs:px-10 sm:px-12 h-[44px] xs:h-[48px] sm:h-[52px] text-xs xs:text-sm sm:text-base font-medium rounded-md shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#3CC27B]">
                  Buy Crypto Now
                </Button>
              </Link>

              <Link to="/login">
                <Button className="bg-white hover:bg-gray-50 text-[#161616] border border-gray-300 px-6 xs:px-10 sm:px-12 h-[44px] xs:h-[48px] sm:h-[52px] text-xs xs:text-sm sm:text-base font-medium rounded-md shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#3CC27B]">
                  Sell Your Crypto
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div
              className={`flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 text-[11px] xs:text-xs sm:text-sm text-gray-900 ${isVisible ? "animate-fade-in-up opacity-0 delay-1000" : ""}`}
            >
              <div className="flex items-center -space-x-1.5 xs:-space-x-2">
                {["sarah", "john", "emma", "michael"].map((name, i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&scale=80`}
                    alt={`User ${i + 1}`}
                    className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 rounded-full border border-white xs:border-2 ring-1 ring-gray-100 object-cover transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                ))}
              </div>
              <span className="font-medium whitespace-nowrap text-gray-700">
                Join 10,000+ traders
              </span>
              <div className="flex gap-0.5 xs:gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="text-[#FBD25F] text-xs xs:text-sm animate-pulse-subtle"
                  >
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
              {/* Left Crypto Icons */}
              <div className="hidden lg:flex flex-col items-end justify-center gap-8 pr-6">
                {[
                  {
                    icon: "/images/btc.png",
                    label: "BTC",
                    width: "179px",
                  },
                  {
                    icon: "/images/trx.png",
                    label: "TRX",
                    width: "115px",
                  },
                  {
                    icon: "/images/crypto-icons/usdt.svg",
                    label: "USDT",
                    width: "219px",
                  },
                  {
                    icon: "/images/sol.png",
                    label: "SOL",
                    width: "272px",
                  },
                  {
                    icon: "/images/dog.png",
                    label: "DOGE",
                    width: "159px",
                  },
                ].map((crypto, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 ${isVisible ? "animate-slide-in-left opacity-0" : ""} delay-${1200 + idx * 100}`}
                  >
                    <div
                      className="flex items-center justify-center w-[94px] h-[94px] rounded-full bg-white shadow-[6px_-1px_34px_0_rgba(164,164,164,0.25)] p-[10px] transition-all duration-300 hover:scale-110 hover:shadow-xl animate-float"
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                      <img
                        src={crypto.icon}
                        alt={crypto.label}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <svg
                      className="flex-shrink-0"
                      style={{ width: crypto.width, height: "2px" }}
                      viewBox={`0 0 ${parseInt(crypto.width)} 2`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id={`gradient-${idx}`}
                          x1="0"
                          y1="1.5"
                          x2={parseInt(crypto.width)}
                          y2="1.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3CC27B" />
                          <stop
                            offset="1"
                            stopColor="#1C5C3A"
                            stopOpacity="0"
                          />
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
              <div
                className={`flex justify-center items-center ${isVisible ? "animate-fade-in-scale opacity-0 delay-1000" : ""}`}
              >
                <div className="relative w-full max-w-[500px] animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3CC27B] to-[#27BF73] rounded-[40px] blur-3xl opacity-20"></div>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9dd109c9d143e344a1e0cde3ee5ac1081bb25d1c?width=2260"
                    alt="Mobile App Preview"
                    className="w-full drop-shadow-[81px_0_44px_0_rgba(0,0,0,0.25)] relative z-10 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Transaction Info */}
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
                    className={`bg-white rounded-[3px] px-[14px] py-[11px] flex flex-col gap-[-11px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-l-4 hover:border-[#3CC27B] ${isVisible ? "animate-slide-in-right opacity-0" : ""} delay-${1200 + idx * 100}`}
                  >
                    <div className="text-[13px] leading-[33px]">
                      <span className="font-normal text-black">
                        Sold {transaction.amount}{" "}
                      </span>
                      <span className="font-bold text-black">
                        {transaction.symbol}
                      </span>
                      <span className="font-normal text-black"> for </span>
                      <span className="font-bold text-[#3CC27B]">
                        {transaction.price}
                      </span>
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
      </div>
    </section>
  );
}
