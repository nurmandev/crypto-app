import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UserData } from "./UsersTableRow";
import { ChevronDown } from "lucide-react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [formData, setFormData] = useState({
    network: "TRC20",
    email: "",
    phone: "+91 9876543210",
    address: "123 Main St, Mumbai, Maharashtra",
    accountStatus: "Active",
    verificationStatus: "Verified",
    inrBalance: "4,50,000",
    bitcoin: "0.05234",
    ethereum: "1.2345",
    cardano: "1500",
    tether: "100",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email,
        accountStatus: user.status,
        verificationStatus: user.verification,
        inrBalance: user.balance.replace("₹", ""),
      }));
    }
  }, [user]);

  if (!user) return null;

  const handleSave = () => {
    console.log("Saving user data:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-2xl lg:max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-[15px] border-none shadow-lg max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Edit User - {user.name}</DialogTitle>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
          <h2 className="text-base sm:text-lg md:text-[17px] font-medium text-black leading-tight">
            Edit User - {user.name}
          </h2>

          {/* Personal Information and Account Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-x-12">
            {/* Personal Information */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-base sm:text-lg md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
                Personal Information:
              </h3>

              {/* Select Network */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Select Nework
                </label>
                <div className="relative">
                  <select
                    value={formData.network}
                    onChange={(e) =>
                      setFormData({ ...formData, network: e.target.value })
                    }
                    className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
                  >
                    <option value="TRC20">TRC20</option>
                    <option value="ERC20">ERC20</option>
                    <option value="BEP20">BEP20</option>
                  </select>
                  <ChevronDown className="absolute right-4 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 w-3 sm:w-3 md:w-[13px] h-2 sm:h-2 md:h-[10px] pointer-events-none text-black" />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Address
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows={4}
                  className="w-full min-h-[88px] sm:min-h-[94px] md:min-h-[99px] px-4 sm:px-5 md:px-[29px] py-3 sm:py-3.5 md:py-4 rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] resize-none focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
            </div>

            {/* Account Settings */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-base sm:text-lg md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
                Account Settings:
              </h3>

              {/* Account Status */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Account Status
                </label>
                <div className="relative">
                  <select
                    value={formData.accountStatus}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accountStatus: e.target.value,
                      })
                    }
                    className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                  <ChevronDown className="absolute right-4 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 w-3 sm:w-3 md:w-[13px] h-2 sm:h-2 md:h-[10px] pointer-events-none text-black" />
                </div>
              </div>

              {/* Verification Status */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Verification Status
                </label>
                <div className="relative">
                  <select
                    value={formData.verificationStatus}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        verificationStatus: e.target.value,
                      })
                    }
                    className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
                  >
                    <option value="Verified">Verified</option>
                    <option value="Pending">Pending</option>
                    <option value="Unverified">Unverified</option>
                  </select>
                  <ChevronDown className="absolute right-4 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 w-3 sm:w-3 md:w-[13px] h-2 sm:h-2 md:h-[10px] pointer-events-none text-black" />
                </div>
              </div>

              {/* INR Balance */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  INR Balance (₹)
                </label>
                <input
                  type="text"
                  value={formData.inrBalance}
                  onChange={(e) =>
                    setFormData({ ...formData, inrBalance: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
            </div>
          </div>

          {/* Crypto Holdings */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="text-base sm:text-lg md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
              Crypto Holdings:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-x-3">
              {/* Bitcoin */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Bitcoin (BTC)
                </label>
                <input
                  type="text"
                  value={formData.bitcoin}
                  onChange={(e) =>
                    setFormData({ ...formData, bitcoin: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Ethereum */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Ethereum (ETH)
                </label>
                <input
                  type="text"
                  value={formData.ethereum}
                  onChange={(e) =>
                    setFormData({ ...formData, ethereum: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Cardano */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Cardano (ADA)
                </label>
                <input
                  type="text"
                  value={formData.cardano}
                  onChange={(e) =>
                    setFormData({ ...formData, cardano: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Tether USDT */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-[15px] font-medium text-black block">
                  Tether USDT (USDT)
                </label>
                <input
                  type="text"
                  value={formData.tether}
                  onChange={(e) =>
                    setFormData({ ...formData, tether: e.target.value })
                  }
                  className="w-full h-[44px] sm:h-[48px] md:h-[51px] px-4 sm:px-5 md:px-[29px] rounded-[5px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-xs sm:text-sm md:text-[15px] font-medium text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
            <button
              onClick={handleSave}
              className="w-full xs:w-auto h-[40px] sm:h-[42px] md:h-9 flex items-center justify-center px-4 sm:px-6 md:px-[60px] bg-black text-white text-xs sm:text-sm md:text-[15px] font-medium rounded-md border-[0.5px] border-[#C3C3C3] hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="w-full xs:w-auto h-[40px] sm:h-[42px] md:h-9 flex items-center justify-center px-4 sm:px-6 md:px-[60px] bg-white text-black text-xs sm:text-sm md:text-[15px] font-medium rounded-md border-[0.5px] border-[#C3C3C3] hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
