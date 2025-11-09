import React, { useState } from "react";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";
import { CryptoStatsCard } from "./components/CryptoStatsCard";
import { CryptoTable, CryptoData } from "./components/CryptoTable";
import { CryptoManagementModal } from "./components/CryptoManagementModal";
import { AddCryptoModal } from "./components/AddCryptoModal";

export const CryptocurrencyManagement: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [cryptoData] = useState<CryptoData[]>([
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a52e8303a36b4d134cfde22ee850b4520932e3f5?width=80",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change24h: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "eth",
      name: "ETH",
      symbol: "Ethereum",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a52e8303a36b4d134cfde22ee850b4520932e3f5?width=80",
      status: "Inactive",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change24h: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "usdt",
      name: "USDT",
      symbol: "Tether USD",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a52e8303a36b4d134cfde22ee850b4520932e3f5?width=80",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change24h: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "ada",
      name: "ADA",
      symbol: "Cardano",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a52e8303a36b4d134cfde22ee850b4520932e3f5?width=80",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change24h: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "sol",
      name: "SOL",
      symbol: "Solana",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/a52e8303a36b4d134cfde22ee850b4520932e3f5?width=80",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change24h: "+2.34%",
      lastUpdated: "2 mins ago",
    },
  ]);

  const handleEdit = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  const handleUpdate = (id: string, buyRate: string, sellRate: string) => {
    console.log("Update crypto:", id, buyRate, sellRate);
  };

  const handleDelete = (id: string) => {
    console.log("Delete crypto:", id);
  };

  const handleAdd = (crypto: {
    symbol: string;
    name: string;
    buyRate: string;
    sellRate: string;
    walletAddress: string;
    network: string;
    iconFile?: File;
  }) => {
    console.log("Add new crypto:", crypto);
    // TODO: Implement actual add logic
  };

  const totalCrypto = cryptoData.length;
  const activeCrypto = cryptoData.filter((c) => c.status === "Active").length;
  const inactiveCrypto = cryptoData.filter(
    (c) => c.status === "Inactive",
  ).length;

  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex gap-2 sm:gap-3 md:gap-6 max-w-[1920px] mx-auto flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col gap-0 min-h-screen lg:gap-4 pt-16 sm:pt-20 lg:pt-0 lg:p-6 overflow-y-auto">
          {/* Header */}
          <AdminHeader
            onToggleSidebar={() => setSidebarOpen(true)}
            sidebarOpen={sidebarOpen}
          />

          {/* Content */}
          <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-0 overflow-y-auto">
            {/* Main White Container */}
            <div className="bg-white rounded-lg sm:rounded-[10px] p-3 sm:p-4 md:p-6 lg:p-8 h-full">
              {/* Title Section */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-medium text-black mb-1 sm:mb-2 font-roboto">
                  Cryptocurrency Management
                </h1>
                <p className="text-sm sm:text-base md:text-[17px] font-normal text-[#838383] font-roboto">
                  Add, Delete and Edit Crypto Exchange Rates
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <CryptoStatsCard
                  title="Total Crypto"
                  value={totalCrypto}
                  bgColor="rgba(60, 194, 123, 0.31)"
                  icon={
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M18.6411 14.6349C18.613 14.6226 18.589 14.6023 18.5722 14.5766C18.5555 14.5508 18.5466 14.5208 18.5467 14.49V14.0367C18.5467 13.9114 18.4969 13.7913 18.4084 13.7028C18.3198 13.6142 18.1997 13.5645 18.0744 13.5645C17.9492 13.5645 17.8291 13.6142 17.7405 13.7028C17.652 13.7913 17.6022 13.9114 17.6022 14.0367V14.3515C17.6022 14.3933 17.5856 14.4333 17.5561 14.4628C17.5266 14.4923 17.4865 14.5089 17.4448 14.5089H17.13C17.0882 14.5089 17.0482 14.4923 17.0187 14.4628C16.9891 14.4333 16.9726 14.3933 16.9726 14.3515V14.0367C16.9726 13.9114 16.9228 13.7913 16.8342 13.7028C16.7457 13.6142 16.6256 13.5645 16.5003 13.5645C16.3751 13.5645 16.255 13.6142 16.1664 13.7028C16.0778 13.7913 16.0281 13.9114 16.0281 14.0367V14.3515C16.0281 14.3933 16.0115 14.4333 15.982 14.4628C15.9525 14.4923 15.9124 14.5089 15.8707 14.5089C15.7459 14.5106 15.6268 14.5608 15.5386 14.649C15.4503 14.7373 15.4001 14.8564 15.3984 14.9812V18.7591C15.4001 18.8838 15.4503 19.003 15.5386 19.0912C15.6268 19.1794 15.7459 19.2297 15.8707 19.2313C15.9124 19.2313 15.9525 19.2479 15.982 19.2774C16.0115 19.3069 16.0281 19.347 16.0281 19.3887V19.7035C16.0281 19.8288 16.0778 19.9489 16.1664 20.0375C16.255 20.126 16.3751 20.1758 16.5003 20.1758C16.6256 20.1758 16.7457 20.126 16.8342 20.0375C16.9228 19.9489 16.9726 19.8288 16.9726 19.7035V19.3887C16.9726 19.347 16.9891 19.3069 17.0187 19.2774C17.0482 19.2479 17.0882 19.2313 17.13 19.2313H17.4448C17.4865 19.2313 17.5266 19.2479 17.5561 19.2774C17.5856 19.3069 17.6022 19.347 17.6022 19.3887V19.7035C17.6022 19.8288 17.652 19.9489 17.7405 20.0375C17.8291 20.126 17.9492 20.1758 18.0744 20.1758C18.1997 20.1758 18.3198 20.126 18.4084 20.0375C18.4969 19.9489 18.5467 19.8288 18.5467 19.7035V19.2502C18.5466 19.2195 18.5555 19.1894 18.5722 19.1636C18.589 19.1379 18.613 19.1177 18.6411 19.1054C18.8926 18.9956 19.1068 18.8152 19.2577 18.5861C19.4086 18.357 19.4897 18.0889 19.4912 17.8146C19.4917 17.5069 19.3898 17.2079 19.2015 16.9646C19.1801 16.9378 19.1684 16.9044 19.1684 16.8701C19.1684 16.8358 19.1801 16.8025 19.2015 16.7757C19.3898 16.5323 19.4917 16.2333 19.4912 15.9256C19.4897 15.6513 19.4086 15.3833 19.2577 15.1541C19.1068 14.925 18.8926 14.7446 18.6411 14.6349ZM16.3429 15.6108C16.3429 15.5691 16.3595 15.529 16.389 15.4995C16.4185 15.47 16.4586 15.4534 16.5003 15.4534H18.0744C18.1997 15.4534 18.3198 15.5032 18.4084 15.5917C18.4969 15.6803 18.5467 15.8004 18.5467 15.9256C18.5467 16.0509 18.4969 16.171 18.4084 16.2596C18.3198 16.3481 18.1997 16.3979 18.0744 16.3979H16.5003C16.4586 16.3979 16.4185 16.3813 16.389 16.3518C16.3595 16.3222 16.3429 16.2822 16.3429 16.2405V15.6108ZM18.0744 18.2868H16.5003C16.4586 18.2868 16.4185 18.2702 16.389 18.2407C16.3595 18.2112 16.3429 18.1712 16.3429 18.1294V17.4998C16.3429 17.458 16.3595 17.418 16.389 17.3885C16.4185 17.3589 16.4586 17.3423 16.5003 17.3423H18.0744C18.1997 17.3423 18.3198 17.3921 18.4084 17.4807C18.4969 17.5692 18.5467 17.6893 18.5467 17.8146C18.5467 17.9398 18.4969 18.0599 18.4084 18.1485C18.3198 18.2371 18.1997 18.2868 18.0744 18.2868Z"
                        fill="#3CC27B"
                      />
                      <path
                        d="M24.9935 21.7C25.0064 21.6086 25.0001 21.5155 24.9752 21.4266C24.9503 21.3378 24.9072 21.255 24.8487 21.1837C24.7895 21.1146 24.7162 21.0591 24.6335 21.021C24.5509 20.983 24.4611 20.9633 24.3701 20.9633H24.2127C24.171 20.9633 24.1309 20.9467 24.1014 20.9172C24.0719 20.8877 24.0553 20.8476 24.0553 20.8059V12.7779C24.0553 12.4439 23.9226 12.1236 23.6865 11.8874C23.4503 11.6512 23.13 11.5186 22.796 11.5186H12.092C11.758 11.5186 11.4377 11.6512 11.2015 11.8874C10.9653 12.1236 10.8327 12.4439 10.8327 12.7779V20.8059C10.8327 20.8476 10.8161 20.8877 10.7866 20.9172C10.757 20.9467 10.717 20.9633 10.6753 20.9633H10.6312C10.5402 20.9633 10.4504 20.983 10.3678 21.021C10.2852 21.0591 10.2118 21.1146 10.1527 21.1837C10.0929 21.253 10.049 21.3346 10.0239 21.4227C9.99893 21.5108 9.99343 21.6033 10.0078 21.6937L10.0897 22.1659C10.1495 22.5335 10.3382 22.8678 10.622 23.1089C10.9058 23.35 11.2662 23.4822 11.6386 23.4819H23.3627C23.7351 23.4822 24.0955 23.35 24.3793 23.1089C24.6631 22.8678 24.8518 22.5335 24.9116 22.1659L24.9935 21.7ZM12.092 13.4075C12.092 13.2405 12.1583 13.0804 12.2764 12.9623C12.3945 12.8442 12.5546 12.7779 12.7216 12.7779H22.1664C22.3333 12.7779 22.4935 12.8442 22.6116 12.9623C22.7297 13.0804 22.796 13.2405 22.796 13.4075V20.3336C22.796 20.5006 22.7297 20.6608 22.6116 20.7789C22.4935 20.897 22.3333 20.9633 22.1664 20.9633H12.7216C12.5546 20.9633 12.3945 20.897 12.2764 20.7789C12.1583 20.6608 12.092 20.5006 12.092 20.3336V13.4075Z"
                        fill="#3CC27B"
                      />
                    </svg>
                  }
                />
                <CryptoStatsCard
                  title="Active"
                  value={activeCrypto}
                  bgColor="rgba(60, 194, 123, 0.31)"
                  icon={
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 25C18.4849 25 19.4602 24.806 20.3701 24.4291C21.2801 24.0522 22.1069 23.4997 22.8033 22.8033C23.4997 22.1069 24.0522 21.2801 24.4291 20.3701C24.806 19.4602 25 18.4849 25 17.5C25 16.5151 24.806 15.5398 24.4291 14.6299C24.0522 13.7199 23.4997 12.8931 22.8033 12.1967C22.1069 11.5003 21.2801 10.9478 20.3701 10.5709C19.4602 10.194 18.4849 10 17.5 10C15.5109 10 13.6032 10.7902 12.1967 12.1967C10.7902 13.6032 10 15.5109 10 17.5C10 19.4891 10.7902 21.3968 12.1967 22.8033C13.6032 24.2098 15.5109 25 17.5 25ZM17.3067 20.5333L21.4733 15.5333L20.1933 14.4667L16.61 18.7658L14.7558 16.9108L13.5775 18.0892L16.0775 20.5892L16.7225 21.2342L17.3067 20.5333Z"
                        fill="#3CC27B"
                      />
                    </svg>
                  }
                />
                <CryptoStatsCard
                  title="Inactive"
                  value={inactiveCrypto}
                  bgColor="rgba(253, 189, 189, 0.44)"
                  icon={
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5074 19.2498L21.8853 23.6228C22.1177 23.8548 22.4327 23.9852 22.7613 23.9852C23.0898 23.9852 23.4049 23.8548 23.6372 23.6228C23.8695 23.3907 24 23.076 24 22.7479C24 22.4197 23.8695 22.105 23.6372 21.873L19.2576 17.5L23.6364 13.127C23.7513 13.0122 23.8425 12.8758 23.9047 12.7257C23.9669 12.5756 23.9989 12.4147 23.9989 12.2522C23.9988 12.0898 23.9668 11.9289 23.9045 11.7789C23.8422 11.6288 23.751 11.4925 23.6359 11.3776C23.5209 11.2628 23.3844 11.1717 23.2341 11.1096C23.0838 11.0474 22.9228 11.0155 22.7601 11.0155C22.5975 11.0155 22.4365 11.0476 22.2862 11.1098C22.136 11.172 21.9995 11.2631 21.8845 11.378L17.5074 15.751L13.1295 11.378C13.0153 11.2598 12.8787 11.1655 12.7276 11.1007C12.5766 11.0358 12.4141 11.0016 12.2497 11.0001C12.0853 10.9985 11.9222 11.0298 11.77 11.0919C11.6177 11.154 11.4794 11.2458 11.3631 11.3619C11.2468 11.478 11.1548 11.616 11.0924 11.768C11.0301 11.92 10.9987 12.0829 11 12.2471C11.0014 12.4113 11.0355 12.5737 11.1003 12.7246C11.1651 12.8755 11.2594 13.0121 11.3776 13.1262L15.7572 17.5L11.3785 21.8738C11.2602 21.9879 11.166 22.1245 11.1011 22.2754C11.0363 22.4263 11.0022 22.5887 11.0009 22.7529C10.9995 22.9171 11.0309 23.08 11.0933 23.232C11.1556 23.384 11.2476 23.522 11.3639 23.6381C11.4803 23.7542 11.6186 23.846 11.7708 23.9081C11.923 23.9702 12.0861 24.0015 12.2505 23.9999C12.4149 23.9984 12.5774 23.9642 12.7285 23.8993C12.8795 23.8345 13.0161 23.7402 13.1303 23.622L17.5074 19.2498Z"
                        fill="#FA1818"
                      />
                    </svg>
                  }
                />
                <CryptoStatsCard
                  title="Avg Change"
                  value="45"
                  bgColor="rgba(60, 194, 123, 0.31)"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M25.5 18.5V13.5H20.5"
                        stroke="#3CC27B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.5 13.5L20.5 18.5C19.617 19.383 19.176 19.824 18.635 19.873C18.545 19.881 18.455 19.881 18.365 19.873C17.824 19.823 17.383 19.383 16.5 18.5C15.617 17.617 15.176 17.176 14.635 17.127C14.5452 17.1189 14.4548 17.1189 14.365 17.127C13.824 17.177 13.383 17.617 12.5 18.5L9.5 21.5"
                        stroke="#3CC27B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Table Section */}
              <div className="mb-4 md:mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold sm:font-medium text-black font-roboto">
                    Cryptocurrency Rates
                  </h2>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-9 py-1 bg-[#161616] text-white text-xs sm:text-sm md:text-[15px] font-medium rounded-md h-8 sm:h-9 md:h-[35px] hover:bg-gray-800 active:bg-gray-900 transition-colors font-roboto leading-tight md:leading-[33px] w-full sm:w-auto justify-center"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M7.25 0C7.94 0 8.5 0.56 8.5 1.25V6H13.25C13.5815 6 13.8995 6.1317 14.1339 6.36612C14.3683 6.60054 14.5 6.91848 14.5 7.25C14.5 7.58152 14.3683 7.89946 14.1339 8.13388C13.8995 8.3683 13.5815 8.5 13.25 8.5H8.5V13.25C8.5 13.5815 8.3683 13.8995 8.13388 14.1339C7.89946 14.3683 7.58152 14.5 7.25 14.5C6.91848 14.5 6.60054 14.3683 6.36612 14.1339C6.1317 13.8995 6 13.5815 6 13.25V8.5H1.25C0.918479 8.5 0.600537 8.3683 0.366117 8.13388C0.131696 7.89946 0 7.58152 0 7.25C0 6.91848 0.131696 6.60054 0.366117 6.36612C0.600537 6.1317 0.918479 6 1.25 6H6V1.25C6 0.56 6.56 0 7.25 0Z"
                        fill="white"
                      />
                    </svg>
                    Add Currency
                  </button>
                </div>
                <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                  <CryptoTable data={cryptoData} onEdit={handleEdit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {selectedCrypto && (
        <CryptoManagementModal
          crypto={selectedCrypto}
          onClose={() => setSelectedCrypto(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}

      {/* Add Modal */}
      {showAddModal && (
        <AddCryptoModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};
