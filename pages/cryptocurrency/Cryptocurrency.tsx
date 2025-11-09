import React, { useState } from "react";
import { AdminHeader } from "../admin/components/AdminHeader";
import { AdminSidebar } from "../admin/components/AdminSidebar";
import { CryptoTable, CryptoData } from "./components/CryptoTable";
import { CryptoPagination } from "./components/CryptoPagination";
import { CryptoStatusFilter } from "./components/CryptoStatusFilter";

export const Cryptocurrency: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const itemsPerPage = 10;

  const cryptoData: CryptoData[] = [
    {
      id: "1",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db071f8539bfbc60a843e3a379063391adebf67?width=80",
      name: "Bitcoin",
      symbol: "BTC",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "2",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db071f8539bfbc60a843e3a379063391adebf67?width=80",
      name: "Ethereum",
      symbol: "ETH",
      status: "Inactive",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "3",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db071f8539bfbc60a843e3a379063391adebf67?width=80",
      name: "Tether USD",
      symbol: "USDT",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "4",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db071f8539bfbc60a843e3a379063391adebf67?width=80",
      name: "Cardano",
      symbol: "ADA",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change: "+2.34%",
      lastUpdated: "2 mins ago",
    },
    {
      id: "5",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db071f8539bfbc60a843e3a379063391adebf67?width=80",
      name: "Solana",
      symbol: "SOL",
      status: "Active",
      buyRate: "₹4,123,456",
      sellRate: "₹4,100,000",
      change: "+2.34%",
      lastUpdated: "2 mins ago",
    },
  ];

  const filteredCrypto =
    selectedStatus === "all"
      ? cryptoData
      : cryptoData.filter(
          (c) => c.status.toLowerCase() === selectedStatus.toLowerCase(),
        );

  const totalPages = Math.ceil(filteredCrypto.length / itemsPerPage);
  const paginatedCrypto = filteredCrypto.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleEdit = (id: string) => {
    console.log("Edit crypto:", id);
  };

  const handleAddCurrency = () => {
    console.log("Add currency clicked");
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1920px] mx-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader />

          <div className="bg-white rounded-[10px] p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-xl md:text-[20px] font-medium text-black mb-2">
                Cryptocurrency Management
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] text-[#838383]">
                Add, Delete and Edit Crypto Exchange Rates
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
              <CryptoStatusFilter
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
              />

              <button
                onClick={handleAddCurrency}
                className="inline-flex px-6 sm:px-9 py-0.5 justify-center items-center gap-2 rounded-md bg-[#161616] text-white font-roboto text-[15px] font-medium leading-[33px] h-[35px] hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 0C7.94 0 8.5 0.56 8.5 1.25V6H13.25C13.5815 6 13.8995 6.1317 14.1339 6.36612C14.3683 6.60054 14.5 6.91848 14.5 7.25C14.5 7.58152 14.3683 7.89946 14.1339 8.13388C13.8995 8.3683 13.5815 8.5 13.25 8.5H8.5V13.25C8.5 13.5815 8.3683 13.8995 8.13388 14.1339C7.89946 14.3683 7.58152 14.5 7.25 14.5C6.91848 14.5 6.60054 14.3683 6.36612 14.1339C6.1317 13.8995 6 13.5815 6 13.25V8.5H1.25C0.918479 8.5 0.600537 8.3683 0.366117 8.13388C0.131696 7.89946 0 7.58152 0 7.25C0 6.91848 0.131696 6.60054 0.366117 6.36612C0.600537 6.1317 0.918479 6 1.25 6H6V1.25C6 0.56 6.56 0 7.25 0Z"
                    fill="white"
                  />
                </svg>
                Add Currency
              </button>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="sm:px-0 px-4">
                <CryptoTable data={paginatedCrypto} onEdit={handleEdit} />
              </div>
            </div>

            <CryptoPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredCrypto.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrency;
