import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function DepositWithdraw() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const options = [
    {
      title: "Deposit Fund",
      description: "Add money to your wallet using Different Methods",
      badge: "Instant",
      icon: (
        <svg
          width="44"
          height="42"
          viewBox="0 0 44 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44"
            height="42"
            rx="21"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M13 32H31V29.4118H13V32ZM31 17.7647H25.8571V10H18.1429V17.7647H13L22 26.8235L31 17.7647Z"
            fill="#3CC27B"
          />
        </svg>
      ),
      highlighted: true,
    },
    {
      title: "Withdraw Fund",
      description: "Transfer Money to your bank account, UPI, etc",
      badge: "Admin Approval",
      icon: (
        <svg
          width="44"
          height="42"
          viewBox="0 0 44 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44"
            height="41.8571"
            rx="20.9286"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M31 10L13 10L13 12.5715L31 12.5715L31 10ZM13 24.1429L18.1429 24.1429L18.1429 31.8572L25.8571 31.8572L25.8571 24.1429L31 24.1429L22 15.1429L13 24.1429Z"
            fill="#3CC27B"
          />
        </svg>
      ),
      highlighted: false,
    },
    {
      title: "Deposit Crypto",
      description: "Receive cryptocurrency from external wallet",
      badge: "Multiple Networks",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44"
            height="44"
            rx="22"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M22.2614 33.3988C29.9816 34.7652 31.8881 23.9142 24.1679 22.5462M22.2614 33.3988L13 31.7585M22.2614 33.3988L21.7189 36.5M17.9921 21.4538L24.1695 22.5462C31.8897 23.9142 33.7962 13.0617 26.0744 11.6953L16.8099 10.0549M26.0729 11.6953L26.6185 8.59407M15.5399 35.4059L20.4411 7.5"
            stroke="#3CC27B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      highlighted: false,
    },
    {
      title: "Withdraw Crypto",
      description: "Withdraw cryptocurrency to external wallet",
      badge: "Admin Approval",
      icon: (
        <svg
          width="44"
          height="43"
          viewBox="0 0 44 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44"
            height="42.5"
            rx="21.25"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M16.7468 14.5H13.7468C13.349 14.5 12.9674 14.658 12.6861 14.9393C12.4048 15.2206 12.2468 15.6022 12.2468 16V26.5M12.2468 26.5H31.7468M12.2468 26.5L10.7968 30.636C10.7416 30.8567 10.7373 31.0871 10.7843 31.3098C10.8313 31.5324 10.9283 31.7414 11.068 31.921C11.2077 32.1006 11.3864 32.2461 11.5907 32.3464C11.7949 32.4467 12.0193 32.4992 12.2468 32.5H31.7468C31.9747 32.5 32.1997 32.448 32.4046 32.348C32.6094 32.248 32.7888 32.1027 32.929 31.923C33.0693 31.7433 33.1668 31.534 33.214 31.311C33.2613 31.088 33.2571 30.8571 33.2018 30.636L31.7468 26.5M31.7468 26.5V16C31.7468 15.6022 31.5888 15.2206 31.3074 14.9393C31.0261 14.658 30.6446 14.5 30.2468 14.5H27.9968M21.2468 29.5H23.4968"
            stroke="#3CC27B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7461 16H22.9331M21.9961 11.5V10M21.9961 22V20.5M22.7461 20.5C23.3428 20.5 23.9151 20.2629 24.3371 19.841C24.759 19.419 24.9961 18.8467 24.9961 18.25C24.9961 17.6533 24.759 17.081 24.3371 16.659C23.9151 16.2371 23.3428 16 22.7461 16C23.3428 16 23.9151 15.7629 24.3371 15.341C24.759 14.919 24.9961 14.3467 24.9961 13.75C24.9961 13.1533 24.759 12.581 24.3371 12.159C23.9151 11.7371 23.3428 11.5 22.7461 11.5H19.7461V20.5H22.7461Z"
            stroke="#3CC27B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      highlighted: false,
    },
  ];

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
              Deposit & Withdraw
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal mb-6 md:mb-8 lg:mb-12">
              Scan the QR code with any UPI app to complete payment
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {options.map((option, index) => {
                const getLink = () => {
                  if (option.title === "Deposit Fund") return "/deposit-fund";
                  if (option.title === "Withdraw Fund") return "/withdraw-fund";
                  if (option.title === "Deposit Crypto")
                    return "/deposit-crypto";
                  if (option.title === "Withdraw Crypto")
                    return "/withdraw-crypto-form";
                  return "#";
                };

                return (
                  <Link key={index} to={getLink()} className="block">
                    <OptionCard
                      title={option.title}
                      description={option.description}
                      badge={option.badge}
                      icon={option.icon}
                      highlighted={option.highlighted}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OptionCardProps {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}

function OptionCard({
  title,
  description,
  badge,
  icon,
  highlighted = false,
}: OptionCardProps) {
  return (
    <div
      className={`flex flex-col justify-center items-start gap-4 md:gap-6 p-5 md:p-7 lg:p-9 rounded-[10px] transition-all hover:shadow-lg ${
        highlighted
          ? "border-[0.5px] border-[#3CC27B] bg-[#F8F8F8] shadow-[3px_4px_12px_0_rgba(0,0,0,0.16)]"
          : "bg-[#F8F8F8]"
      }`}
    >
      <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[18px] w-full">
        {/* Icon */}
        <div className="flex-shrink-0">{icon}</div>

        {/* Title and Badge */}
        <div className="flex justify-between items-center w-full gap-3">
          <h3 className="text-base md:text-[17px] font-medium text-black">
            {title}
          </h3>
          <div className="px-2 md:px-[10px] py-1 bg-[rgba(60,194,123,0.31)] rounded-[23px] flex-shrink-0">
            <span className="text-[8px] font-normal text-black whitespace-nowrap">
              {badge}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base lg:text-[17px] font-normal text-[#838383] w-full">
        {description}
      </p>
    </div>
  );
}
