import React, { useState } from "react";
import { CryptoData } from "./CryptoTable";

interface CryptoManagementModalProps {
  crypto: CryptoData | null;
  onClose: () => void;
  onUpdate: (id: string, buyRate: string, sellRate: string) => void;
  onDelete: (id: string) => void;
}

export const CryptoManagementModal: React.FC<CryptoManagementModalProps> = ({
  crypto,
  onClose,
  onUpdate,
  onDelete,
}) => {
  const [buyRate, setBuyRate] = useState(
    crypto?.buyRate.replace("₹", "").replace(",", "") || "",
  );
  const [sellRate, setSellRate] = useState(
    crypto?.sellRate.replace("₹", "").replace(",", "") || "",
  );

  if (!crypto) return null;

  const handleUpdate = () => {
    if (crypto) {
      onUpdate(crypto.id, buyRate, sellRate);
      onClose();
    }
  };

  const handleDelete = () => {
    if (
      crypto &&
      window.confirm(`Are you sure you want to delete ${crypto.name}?`)
    ) {
      onDelete(crypto.id);
      onClose();
    }
  };

  return (
    <>
      {/* Overlay with Backdrop Blur */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/40 to-black/20 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-2xl p-4 sm:p-5 md:p-[30px] w-full max-w-[553px] flex flex-col gap-4 sm:gap-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-[16px] sm:text-[17px] font-semibold sm:font-medium leading-tight sm:leading-[33px] text-black font-roboto">
              {crypto.name} ({crypto.symbol}) Management
            </h2>

            {/* Current States Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-3">
              {/* Left Column */}
              <div>
                <h3 className="text-[15px] sm:text-[17px] font-semibold sm:font-medium leading-tight sm:leading-[33px] text-black mb-2 sm:mb-3 font-roboto">
                  Current States:
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      Buy Rate:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-black font-roboto text-right">
                      {crypto.buyRate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      Sell Rate:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-black font-roboto text-right">
                      {crypto.sellRate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      24h Change:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-[#3CC27B] font-roboto text-right">
                      {crypto.change24h}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-[15px] sm:text-[17px] font-semibold sm:font-medium leading-tight sm:leading-[33px] text-black mb-2 sm:mb-3 font-roboto">
                  Status & Settings
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      Status:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-black font-roboto text-right">
                      {crypto.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      Last Updated:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-black font-roboto text-right">
                      {crypto.lastUpdated}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[13px] sm:text-sm font-light text-black font-roboto">
                      Symbol:
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-black font-roboto text-right">
                      {crypto.symbol}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="space-y-3 sm:space-y-4 border-t border-[#E0E0E0] pt-3 sm:pt-4">
            <h3 className="text-[15px] sm:text-[17px] font-semibold sm:font-medium leading-tight sm:leading-[33px] text-black font-roboto">
              Quick Actions
            </h3>

            {/* Update Buy Rate */}
            <div>
              <label className="text-[13px] sm:text-[15px] font-medium text-black mb-2 block font-roboto">
                Update Buy Rate (₹)
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={buyRate}
                  onChange={(e) =>
                    setBuyRate(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="4123456"
                  className="flex-1 h-[44px] sm:h-[51px] px-4 sm:px-6 rounded-lg sm:rounded-[5px] border border-[#E0E0E0] bg-[#F9F9F9] text-[13px] sm:text-[15px] font-medium text-[#666] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                />
                <button
                  onClick={handleUpdate}
                  className="px-4 sm:px-[60px] h-[44px] sm:h-[51px] bg-black text-white text-[13px] sm:text-[15px] font-medium rounded-lg sm:rounded-md border border-[#C3C3C3] hover:bg-gray-800 transition-colors font-roboto leading-tight sm:leading-[33px] whitespace-nowrap"
                >
                  Update
                </button>
              </div>
            </div>

            {/* Update Sell Rate */}
            <div>
              <label className="text-[13px] sm:text-[15px] font-medium text-black mb-2 block font-roboto">
                Update Sell Rate (₹)
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={sellRate}
                  onChange={(e) =>
                    setSellRate(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="4123456"
                  className="flex-1 h-[44px] sm:h-[51px] px-4 sm:px-6 rounded-lg sm:rounded-[5px] border border-[#E0E0E0] bg-[#F9F9F9] text-[13px] sm:text-[15px] font-medium text-[#666] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                />
                <button
                  onClick={handleUpdate}
                  className="px-4 sm:px-[60px] h-[44px] sm:h-[51px] bg-black text-white text-[13px] sm:text-[15px] font-medium rounded-lg sm:rounded-md border border-[#C3C3C3] hover:bg-gray-800 transition-colors font-roboto leading-tight sm:leading-[33px] whitespace-nowrap"
                >
                  Update
                </button>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-4 sm:px-[60px] h-[44px] sm:h-9 bg-[#FA1818] text-white text-[13px] sm:text-[15px] font-medium rounded-lg sm:rounded-md border border-[#C3C3C3] hover:bg-[#d81414] transition-colors font-roboto leading-tight sm:leading-[33px]"
            >
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 14C1.8375 14 1.4845 13.8478 1.191 13.5434C0.8975 13.2391 0.7505 12.8727 0.75 12.4444V2.33333H0V0.777778H3.75V0H8.25V0.777778H12V2.33333H11.25V12.4444C11.25 12.8722 11.1033 13.2386 10.8097 13.5434C10.5162 13.8483 10.163 14.0005 9.75 14H2.25ZM9.75 2.33333H2.25V12.4444H9.75V2.33333ZM3.75 10.8889H5.25V3.88889H3.75V10.8889ZM6.75 10.8889H8.25V3.88889H6.75V10.8889Z"
                  fill="white"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
