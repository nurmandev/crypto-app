import React, { useState } from "react";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "Active" | "Disabled";
  limit: {
    min: string;
    max: string;
  };
  fees: string;
  processingTime?: string;
  upiId?: string;
  users: string;
  volume: string;
}

export const PaymentMethods: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null,
  );
  const [qrCodePreview, setQrCodePreview] = useState<string | null>(null);
  const [addQrCodePreview, setAddQrCodePreview] = useState<string | null>(null);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "1",
      name: "UPI (Google Pay, PhonePe, Paytm)",
      description: "Unified Payments Interface for instant INR transfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b4b05425288bd712f9b8242b4ec54b5d99eaaa0?width=80",
      status: "Active",
      limit: { min: "100", max: "100000" },
      fees: "0",
      processingTime: "Instant",
      upiId: "upiid@sbibank",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "2",
      name: "Bank Transfer (IMPS/NEFT)",
      description: "Direct bank transfers via IMPS or NEFT",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/05f69dce74b342ec7e7542328e39eafd0a211cad?width=80",
      status: "Disabled",
      limit: { min: "500", max: "500000" },
      fees: "0",
      processingTime: "1-2 hours",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "3",
      name: "Crypto (USDT Tether)",
      description: "USDT Cryptocurrency transfer",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b67df80ecf07d1e6b2dba2dd757c30dda2e5bda1?width=80",
      status: "Active",
      limit: { min: "1000", max: "1000000" },
      fees: "2",
      processingTime: "10-30 mins",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "4",
      name: "Skrill Wallet",
      description: "Skrill digital wallet transfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/39bc7f7fbab201d2ddf81e65d221a85f20fff91b?width=80",
      status: "Active",
      limit: { min: "100", max: "100000" },
      fees: "2.5",
      processingTime: "Instant",
      users: "1245",
      volume: "₹12.4M",
    },
    {
      id: "5",
      name: "Paypal",
      description: "Paypal Digital Wallet Trasfers",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b4b05425288bd712f9b8242b4ec54b5d99eaaa0?width=80",
      status: "Active",
      limit: { min: "1000", max: "200000" },
      fees: "2.5",
      processingTime: "Instant",
      users: "1245",
      volume: "₹12.4M",
    },
  ];

  const handleEditClick = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setIsEditModalOpen(true);
    setQrCodePreview(
      "https://api.builder.io/api/v1/image/assets/TEMP/0fb5c6a3a9c9ce714a55e72d5d5f6d7be6d54855?width=328",
    );
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedMethod(null);
    setQrCodePreview(null);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setAddQrCodePreview(null);
  };

  const getStatusColor = (status: string) => {
    return status === "Active"
      ? "bg-[#BDFDDB] text-[#1C5C3A]"
      : "bg-[#FDBDBD]/56 text-[#FA1818]";
  };

  const getFeeColor = (fee: string) => {
    return fee === "0" || fee === "Free" ? "text-[#3CC27B]" : "text-black";
  };

  const formatFee = (fee: string) => {
    return fee === "0" ? "Free" : `${fee}%`;
  };

  const formatLimit = (value: string) => {
    const num = parseInt(value);
    if (num >= 100000)
      return `₹${(num / 100000).toFixed(1).replace(".0", "")}L`;
    if (num >= 1000) return `���${(num / 1000).toFixed(0)}K`;
    return `₹${value}`;
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
        {/* Sidebar with Mobile Overlay */}
        <div>
          <AdminSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 lg:hidden z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-0 min-h-screen lg:gap-4 pt-16 sm:pt-20 lg:pt-0 lg:p-6">
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          <div className="bg-white rounded-none lg:rounded-[10px] p-6 lg:p-8 m-0">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-[20px] font-medium text-black mb-2">
                  Payment Methods Management
                </h1>
                <p className="text-[17px] text-[#838383]">
                  Add, Delete and Edit Payment Methods
                </p>
              </div>
              <button
                onClick={handleAddClick}
                className="flex items-center gap-2 px-9 py-2 bg-[#161616] text-white rounded-md hover:bg-black transition-colors whitespace-nowrap"
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
                <span className="text-[15px] font-medium">Add Method</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#C9C9C9]">
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Method
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Status
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Limit
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Fees
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Users
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Volume
                    </th>
                    <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((method) => (
                    <tr key={method.id} className="border-b border-[#C9C9C9]">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={method.icon}
                              alt={method.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-[17px] font-semibold text-black">
                              {method.name}
                            </div>
                            <div className="text-[15px] font-light text-black">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded text-[10px] ${getStatusColor(method.status)}`}
                        >
                          {method.status}
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <div className="text-[15px] text-black">
                          <div>Min: {formatLimit(method.limit.min)}</div>
                          <div>Max: {formatLimit(method.limit.max)}</div>
                        </div>
                      </td>
                      <td
                        className={`py-4 px-2 text-[15px] ${getFeeColor(method.fees)}`}
                      >
                        {formatFee(method.fees)}
                      </td>
                      <td className="py-4 px-2 text-[15px] font-light text-black">
                        {method.users}
                      </td>
                      <td className="py-4 px-2 text-[15px] text-black">
                        {method.volume}
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditClick(method)}
                            className="p-1 hover:opacity-70 transition-opacity"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.1565 0L18.0004 2.84387L15.8324 5.0128L12.9885 2.16893L15.1565 0ZM4.74023 13.26H7.58414L14.492 6.35226L11.6481 3.50839L4.74023 10.4161V13.26Z"
                                fill="black"
                              />
                              <path
                                d="M15.1675 16.1038H4.88961C4.86497 16.1038 4.83937 16.1133 4.81473 16.1133C4.78344 16.1133 4.75216 16.1048 4.71993 16.1038H1.89593V2.83244H8.38667L10.2826 0.936523H1.89593C0.850326 0.936523 0 1.78589 0 2.83244V16.1038C0 17.1504 0.850326 17.9997 1.89593 17.9997H15.1675C15.6703 17.9997 16.1525 17.8 16.5081 17.4444C16.8637 17.0889 17.0634 16.6067 17.0634 16.1038V7.88694L15.1675 9.78286V16.1038Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:opacity-70 transition-opacity">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                                fill="#FA1818"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Payment Method Modal */}
      {isEditModalOpen && selectedMethod && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-black mb-6 sm:mb-8">
                Edit Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Method Name */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Method Name
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedMethod.name}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Icon / emoji */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Icon / emoji
                  </label>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white">
                    <img
                      src={selectedMethod.icon}
                      alt="icon"
                      className="w-7 h-7 rounded-full"
                    />
                    <label className="ml-auto cursor-pointer text-xs text-[#666] hover:text-black transition-colors font-medium">
                      Upload
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                </div>

                {/* Minimum Amount */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Minimum Amount (��)
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedMethod.limit.min}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Maximum Amount */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Maximum Amount (₹)
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedMethod.limit.max}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Fees */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Fees (%)
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedMethod.fees}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Processing Time */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Processing Time
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedMethod.processingTime}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 sm:mt-8">
                <label className="block text-sm font-semibold text-black mb-2">
                  Description
                </label>
                <textarea
                  defaultValue={selectedMethod.description}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 h-10 px-4 bg-white text-black text-sm font-semibold rounded-lg border-2 border-[#E0E0E0] hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 h-10 px-4 bg-[#FA1818] text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-all shadow-sm">
                  Disable
                </button>
                <button className="flex-1 h-10 px-4 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Payment Method Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-black mb-6 sm:mb-8">
                Add Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Method Name */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Method Name
                  </label>
                  <input
                    type="text"
                    placeholder="UPI (Google Pay, PhonePe, Paytm)"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Icon / emoji */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Icon / emoji
                  </label>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9612201e1ef1e7bf5a1f77e21ab45da81965bf9f?width=72"
                      alt="icon"
                      className="w-7 h-7 rounded-full"
                    />
                    <label className="ml-auto cursor-pointer text-xs text-[#666] hover:text-black transition-colors font-medium">
                      Upload
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                </div>

                {/* Minimum Amount */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Minimum Amount (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="100"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Maximum Amount */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Maximum Amount (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="100000"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Fees */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Fees (%)
                  </label>
                  <input
                    type="text"
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Processing Time */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Processing Time
                  </label>
                  <input
                    type="text"
                    placeholder="Instant"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>

                {/* Add UPI ID */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Add UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="upiid@sbibank"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
                  />
                </div>
              </div>

              {/* QR Code Upload Section */}
              <div className="mt-6 sm:mt-8">
                {addQrCodePreview ? (
                  <div className="relative inline-block">
                    <img
                      src={addQrCodePreview}
                      alt="QR Code Preview"
                      className="w-32 h-32 object-contain rounded-lg border border-[#E0E0E0]"
                    />
                    <button
                      onClick={() => setAddQrCodePreview(null)}
                      className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM9.7 10.5L7 7.8L4.3 10.5L3.5 9.7L6.2 7L3.5 4.3L4.3 3.5L7 6.2L9.7 3.5L10.5 4.3L7.8 7L10.5 9.7L9.7 10.5Z"
                          fill="#FA1818"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className="block w-full cursor-pointer">
                    <div className="w-full py-8 sm:py-10 rounded-lg border-2 border-dashed border-[#D0D0D0] flex flex-col items-center justify-center gap-3 hover:border-[#3CC27B] hover:bg-[#F8F8F8] transition-all">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400"
                      >
                        <path
                          d="M8.20257 14.0616V4.51141L5.1559 7.55808L3.51539 5.85898L9.37437 0L15.2333 5.85898L13.5928 7.55808L10.5462 4.51141V14.0616H8.20257ZM0 18.7487V12.8898H2.34359V16.4051H16.4051V12.8898H18.7487V18.7487H0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-black">
                          Click to upload QR Code
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG up to 2MB
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setAddQrCodePreview(reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                )}
              </div>

              {/* Description */}
              <div className="mt-6 sm:mt-8">
                <label className="block text-sm font-semibold text-black mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Unified Payments Interface for instant INR transfers"
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E0E0E0] bg-white text-sm placeholder:text-gray-400 text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleCloseAddModal}
                  className="flex-1 h-10 px-4 bg-white text-black text-sm font-semibold rounded-lg border-2 border-[#E0E0E0] hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 h-10 px-4 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all shadow-sm">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
