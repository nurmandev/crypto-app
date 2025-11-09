import React, { useState } from "react";

interface AddCryptoModalProps {
  onClose: () => void;
  onAdd: (crypto: {
    symbol: string;
    name: string;
    buyRate: string;
    sellRate: string;
    walletAddress: string;
    network: string;
    iconFile?: File;
  }) => void;
}

export const AddCryptoModal: React.FC<AddCryptoModalProps> = ({
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    symbol: "",
    name: "",
    buyRate: "",
    sellRate: "",
    walletAddress: "",
    network: "",
  });
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string>("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIconFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (
      !formData.symbol ||
      !formData.name ||
      !formData.buyRate ||
      !formData.sellRate ||
      !formData.walletAddress ||
      !formData.network
    ) {
      alert("Please fill in all required fields");
      return;
    }

    onAdd({
      ...formData,
      iconFile: iconFile || undefined,
    });
    onClose();
  };

  return (
    <>
      {/* Overlay with Backdrop Blur */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/40 to-black/20 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-[873px] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header with Gradient Background */}
          <div className="bg-gradient-to-r from-[#3CC27B] via-[#35b870] to-[#2fa866] px-5 sm:px-[30px] py-6 sm:py-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h2 className="text-[22px] sm:text-[26px] font-bold text-white font-roboto">
                Add New Cryptocurrency
              </h2>
              <p className="text-white/85 text-sm font-roboto mt-2">
                Enter the details to add a new cryptocurrency to the platform
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-5 md:p-[30px] overflow-y-auto flex-1">
            {/* Form Grid - 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-5 sm:gap-y-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Symbol */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Symbol <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.symbol}
                    onChange={(e) =>
                      handleInputChange("symbol", e.target.value.toUpperCase())
                    }
                    placeholder="BTC"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Bitcoin"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Buy Rate */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Buy Rate (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.buyRate}
                    onChange={(e) =>
                      handleInputChange(
                        "buyRate",
                        e.target.value.replace(/[^0-9]/g, ""),
                      )
                    }
                    placeholder="4123456"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Sell Rate */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Sell Rate (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sellRate}
                    onChange={(e) =>
                      handleInputChange(
                        "sellRate",
                        e.target.value.replace(/[^0-9]/g, ""),
                      )
                    }
                    placeholder="4100000"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Icon Upload */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Set Currency Icon/Image
                  </label>
                  <div className="relative w-full h-[44px] sm:h-[48px] rounded-lg border-2 border-dashed border-[#E0E0E0] bg-white hover:bg-[#F9F9F9] hover:border-[#3CC27B] transition-all flex items-center px-3 sm:px-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14H15L11.14 8.86Z"
                        fill="#8E8E8E"
                      />
                    </svg>
                    <span className="ml-auto text-[11px] sm:text-[15px] font-medium text-[#515151] font-roboto truncate px-2">
                      {iconFile ? iconFile.name : "Upload"}
                    </span>
                  </div>
                  {iconPreview && (
                    <div className="mt-2 sm:mt-3">
                      <img
                        src={iconPreview}
                        alt="Icon preview"
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg object-cover shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5 sm:space-y-6">
                {/* Wallet Address */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Wallet Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.walletAddress}
                    onChange={(e) =>
                      handleInputChange("walletAddress", e.target.value)
                    }
                    placeholder="dsadsad78rguf887gefwef7gwe8f87492r"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Network */}
                <div>
                  <label className="text-[13px] sm:text-[15px] font-semibold text-black mb-2 sm:mb-3 block font-roboto">
                    Network <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.network}
                    onChange={(e) =>
                      handleInputChange("network", e.target.value)
                    }
                    placeholder="Bitcoin network"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 rounded-lg border border-[#E0E0E0] bg-white text-[13px] sm:text-[15px] font-medium text-black placeholder:text-[#999] font-roboto focus:outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Info Box */}
                <div className="mt-4 sm:mt-8 p-3 sm:p-4 bg-gradient-to-br from-[#3CC27B]/5 to-[#2fa866]/5 border border-[#3CC27B]/20 rounded-lg">
                  <p className="text-[12px] sm:text-[13px] text-[#555] font-roboto leading-relaxed">
                    <span className="font-semibold text-black">Note:</span> All
                    fields marked with
                    <span className="text-red-500 font-bold"> * </span>
                    are required. Make sure the wallet address and network
                    details are accurate.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#E0E0E0]">
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 sm:px-8 h-[40px] sm:h-[44px] bg-gradient-to-r from-[#3CC27B] to-[#2fa866] text-white text-[13px] sm:text-[15px] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#3CC27B]/30 hover:-translate-y-0.5 transition-all active:scale-95 font-roboto"
              >
                Add Cryptocurrency
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 sm:px-8 h-[40px] sm:h-[44px] bg-white text-black text-[13px] sm:text-[15px] font-semibold rounded-lg border border-[#E0E0E0] hover:bg-gray-50 hover:border-[#3CC27B]/30 transition-all active:scale-95 font-roboto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
