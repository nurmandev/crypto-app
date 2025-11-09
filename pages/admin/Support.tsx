import React, { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";

interface CashoutRequest {
  id: string;
  requestId: string;
  userName: string;
  userEmail: string;
  amount: string;
  method: string;
  status: "Delivered" | "Processing" | "Shipped";
  date: string;
  trackingId: string;
  address: string;
  userNotes: string;
}

export const Support: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<CashoutRequest | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cashoutRequests: CashoutRequest[] = [
    {
      id: "1",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Delivered",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
    {
      id: "2",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Processing",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
    {
      id: "3",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Shipped",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
    {
      id: "4",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Delivered",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
    {
      id: "5",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Delivered",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
    {
      id: "6",
      requestId: "CSH001",
      userName: "John Doe",
      userEmail: "john@example.com",
      amount: "5,000",
      method: "Cash Delivery",
      status: "Delivered",
      date: "2024-01-15",
      trackingId: "TRK123456789",
      address: "123 Main Street, Mumbai, Maharashtra 400001",
      userNotes: "Please deliver during office hours",
    },
  ];

  const stats = [
    { label: "Total Requests", value: "4", icon: "users" },
    { label: "Pending", value: "0", icon: "clock" },
    { label: "Total Amount", value: "1", icon: "rupee" },
    { label: "Avg Amount", value: "6,000", icon: "chart" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#BDFDDB] text-[#1C5C3A]";
      case "Processing":
        return "bg-[#DBEAFE] text-[#627EEA]";
      case "Shipped":
        return "bg-[#F3E8FF] text-[#B674FF]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
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

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          <div className="flex-1 p-3 xs:p-4 sm:p-6 lg:p-0 overflow-y-auto">
            <div className="bg-white rounded-none lg:rounded-[10px] p-3 xs:p-4 sm:p-6 lg:p-8 m-0">
              <div className="mb-6">
                <h1 className="text-lg xs:text-xl sm:text-2xl font-medium text-black mb-1 xs:mb-2">
                  Cashout Management
                </h1>
                <p className="text-xs xs:text-sm sm:text-base text-[#838383]">
                  Manage user cashout requests and deliveries
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col xs:flex-row items-start xs:items-center justify-between p-3 xs:p-4 border border-[#D4D4D4] rounded-[10px] bg-white gap-2 xs:gap-4"
                  >
                    <div>
                      <div className="text-xs xs:text-sm font-medium text-black mb-1">
                        {stat.label}
                      </div>
                      <div className="text-lg xs:text-xl font-bold text-black">
                        {stat.value}
                      </div>
                    </div>
                    <div className="w-[35px] h-[35px] rounded-full bg-[#3CC27B]/31 flex items-center justify-center">
                      {stat.icon === "users" && (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 11.5333V13H0V11.5333C0 11.5333 0 8.6 5.25 8.6C10.5 8.6 10.5 11.5333 10.5 11.5333ZM7.875 4.56669C7.875 4.05905 7.72105 3.56281 7.43261 3.14073C7.14417 2.71864 6.7342 2.38967 6.25454 2.1954C5.77489 2.00114 5.24709 1.95031 4.73789 2.04934C4.22869 2.14838 3.76096 2.39283 3.39384 2.75179C3.02673 3.11074 2.77672 3.56807 2.67544 4.06596C2.57415 4.56384 2.62614 5.07991 2.82482 5.54891C3.0235 6.0179 3.35995 6.41876 3.79163 6.70079C4.22331 6.98282 4.73082 7.13335 5.25 7.13335C5.94619 7.13335 6.61387 6.86293 7.10616 6.38159C7.59844 5.90025 7.875 5.24741 7.875 4.56669ZM10.455 8.6C10.9161 8.94889 11.2933 9.39233 11.5603 9.89911C11.8272 10.4059 11.9773 10.9637 12 11.5333V13H15V11.5333C15 11.5333 15 8.87134 10.455 8.6ZM9.75 2.6984e-05C9.23384 -0.00232051 8.72909 0.148549 8.3025 0.432693C8.75808 1.0551 9.00304 1.8013 9.00304 2.56669C9.00304 3.33208 8.75808 4.07828 8.3025 4.70068C8.72909 4.98482 9.23384 5.13569 9.75 5.13335C10.4462 5.13335 11.1139 4.86293 11.6062 4.38159C12.0984 3.90025 12.375 3.24741 12.375 2.56669C12.375 1.88597 12.0984 1.23313 11.6062 0.751785C11.1139 0.270442 10.4462 2.6984e-05 9.75 2.6984e-05Z"
                            fill="#3CC27B"
                          />
                        </svg>
                      )}
                      {stat.icon === "clock" && (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16C10.6217 16 12.1566 15.3571 13.2678 14.2459C14.379 13.1347 15.0219 11.5998 15.0219 9.97808C15.0219 8.35635 14.379 6.82145 13.2678 5.71026C12.1566 4.59906 10.6217 3.95616 9 3.95616C7.37827 3.95616 5.84337 4.59906 4.73218 5.71026C3.62098 6.82145 2.97808 8.35635 2.97808 9.97808C2.97808 11.5998 3.62098 13.1347 4.73218 14.2459C5.84337 15.3571 7.37827 16 9 16ZM9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16C4.032 16 0 12 0 9C0 7.14348 0.737498 5.36301 2.05025 4.05025C3.36301 2.7375 5.14348 2 9 2ZM9.5 5V10.25L13.5 12.92L12.75 14.15L8 11V5H9.5Z"
                            fill="#3CC27B"
                          />
                        </svg>
                      )}
                      {stat.icon === "rupee" && (
                        <svg
                          width="15"
                          height="18"
                          viewBox="0 0 13 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 2.3607V3.82625C13 4.06781 12.8005 4.26362 12.5543 4.26362H12.5356H10.1049C9.92094 5.55562 9.25911 6.73624 8.24562 7.58037L8.23794 7.58712C7.10366 8.48397 5.72198 9.02737 4.27047 9.14758L4.24328 9.14917C5.85424 10.8344 8.06839 13.3717 10.886 16.761C10.9505 16.8231 10.9913 16.905 11.0017 16.9931C11.012 17.0812 10.9913 17.1702 10.9429 17.2451L10.9437 17.2434C10.9117 17.319 10.8576 17.3837 10.7883 17.4293C10.719 17.475 10.6375 17.4996 10.554 17.5L10.5226 17.4992H10.5243H7.68444C7.61762 17.4993 7.55173 17.484 7.49214 17.4544C7.43256 17.4249 7.38088 17.382 7.34139 17.3292L7.34054 17.3284C4.38817 13.8535 1.98579 11.1505 0.133333 9.21922C0.0915473 9.17996 0.0583978 9.13272 0.0358796 9.08039C0.0133613 9.02806 0.00206947 8.97186 0.0025 8.91507V8.90595V8.90679V7.10134C0.00412877 6.98133 0.0532827 6.86663 0.139691 6.78157C0.226099 6.69651 0.342905 6.64823 0.465298 6.64644H2.08597C3.16102 6.69328 4.23101 6.4778 5.20018 6.01913L5.1611 6.03573C5.51958 5.86163 5.83647 5.61527 6.09139 5.31279C6.34631 5.01031 6.53318 4.65852 6.64007 4.28027L6.64425 4.26112H0.445714C0.387226 4.26112 0.329228 4.24979 0.275236 4.22783C0.221244 4.20586 0.171938 4.17366 0.130586 4.13304C0.0892333 4.09242 0.0562969 4.04408 0.0338906 3.99109C0.0114843 3.93809 0 3.88143 0 3.82405V3.80544V2.34073C0 2.09905 0.199479 1.9032 0.445714 1.9032H0.464416H6.4406C5.89097 0.833546 4.59817 0.298626 2.56232 0.298626H0.464416C0.342064 0.297129 0.225091 0.248806 0.138558 0.164034C0.0520254 0.0792617 0..."
                            fill="#3CC27B"
                          />
                        </svg>
                      )}
                      {stat.icon === "chart" && (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 8.5V3.5H10"
                            stroke="#3CC27B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 3.5L10 8.5C9.117 9.383 8.676 9.824 8.135 9.873C8.045 9.881 7.955 9.881 7.865 9.873C7.324 9.823 6.883 9.383 6 8.5C5.117 7.617 4.676 7.176 4.135 7.127C4.04518 7.11889 3.95482 7.11889 3.865 7.127C3.324 7.177 2.883 7.617 2 8.5L-1 11.5"
                            stroke="#3CC27B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2 xs:gap-3">
                <input
                  type="text"
                  placeholder="Search requests by email, name etc..."
                  className="px-3 xs:px-4 py-2 bg-[#F2F2F2] rounded-[3px] text-xs xs:text-[10px] text-[#6B6B6B] outline-none flex-1 xs:min-w-0"
                />
                <select className="px-3 xs:px-4 py-2 bg-black text-white rounded text-xs xs:text-[12px] outline-none whitespace-nowrap">
                  <option>All Status</option>
                  <option>Delivered</option>
                  <option>Processing</option>
                  <option>Canceled</option>
                </select>
              </div>

              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#C9C9C9]">
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Request ID
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        User
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Amount (₹)
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Method
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Status
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Date
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Tracking ID
                      </th>
                      <th className="text-left py-3 px-2 text-[15px] font-bold text-[#313131]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashoutRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b border-[#C9C9C9]"
                      >
                        <td className="py-4 px-2">
                          <div className="text-sm font-semibold text-black">
                            {request.requestId}
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div>
                            <div className="text-sm font-semibold text-black">
                              {request.userName}
                            </div>
                            <div className="text-xs font-light text-black">
                              {request.userEmail}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-xs sm:text-sm text-black">
                          {request.amount}
                        </td>
                        <td className="py-4 px-2 text-xs sm:text-sm text-black">
                          {request.method}
                        </td>
                        <td className="py-4 px-2">
                          <span
                            className={`inline-flex px-2.5 py-1 rounded text-[10px] ${getStatusColor(request.status)}`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-xs sm:text-sm font-light text-black">
                          {request.date}
                        </td>
                        <td className="py-4 px-2 text-xs sm:text-sm text-black">
                          {request.trackingId}
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2">
                            <button
                              className="p-1 hover:opacity-70"
                              onClick={() => {
                                setSelectedRequest(request);
                                setIsModalOpen(true);
                              }}
                            >
                              <svg
                                width="20"
                                height="13"
                                viewBox="0 0 20 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3.9C10.7233 3.9 11.417 4.17393 11.9285 4.66152C12.4399 5.14912 12.7273 5.81044 12.7273 6.5C12.7273 7.18956 12.4399 7.85088 11.9285 8.33848C11.417 8.82607 10.7233 9.1 10 9.1C9.27668 9.1 8.58299 8.82607 8.07153 8.33848C7.56006 7.85088 7.27273 7.18956 7.27273 6.5C7.27273 5.81044 7.56006 5.14912 8.07153 4.66152C8.58299 4.17393 9.27668 3.9 10 3.9ZM10 0C14.5455 0 18.4273 2.69533 20 6.5C18.4273 10.3047 14.5455 13 10 13C5.45455 13 1.57273 10.3047 0 6.5C1.57273 2.69533 5.45455 0 10 0ZM1.98182 6.5C2.71659 7.93027 3.85755 9.13531 5.27498 9.97815C6.69241 10.821 8.32945 11.2678 10 11.2678C11.6705 11.2678 13.3076 10.821 14.725 9.97815C16.1424 9.13531 17.2834 7.93027 18.0182 6.5C17.2834 5.06973 16.1424 3.86469 14.725 3.02185C13.3076 2.17901 11.6705 1.73219 10 1.73219C8.32945 1.73219 6.69241 2.17901 5.27498 3.02185C3.85755 3.86469 2.71659 5.06973 1.98182 6.5Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                            <button className="p-1 hover:opacity-70">
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
                            <select className="px-3 py-1 bg-[#F6F6F6] rounded-full text-[11px] outline-none">
                              <option>{request.status}</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-3 xs:space-y-4">
                {cashoutRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-[#C9C9C9] rounded-lg p-3 xs:p-4 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm xs:text-base font-semibold text-black">
                          {request.requestId}
                        </div>
                        <div className="text-xs text-[#838383]">
                          {request.userName}
                        </div>
                      </div>
                      <span
                        className={`inline-flex px-2 py-1 rounded text-xs ${getStatusColor(request.status)}`}
                      >
                        {request.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs xs:text-sm">
                      <div>
                        <span className="text-[#838383]">Amount:</span>
                        <div className="font-medium text-black">
                          ₹{request.amount}
                        </div>
                      </div>
                      <div>
                        <span className="text-[#838383]">Method:</span>
                        <div className="font-medium text-black">
                          {request.method}
                        </div>
                      </div>
                      <div>
                        <span className="text-[#838383]">Date:</span>
                        <div className="font-medium text-black">
                          {request.date}
                        </div>
                      </div>
                      <div>
                        <span className="text-[#838383]">ID:</span>
                        <div className="font-medium text-black text-[10px]">
                          {request.trackingId}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-[#C9C9C9]">
                      <button
                        className="p-1 hover:opacity-70"
                        onClick={() => {
                          setSelectedRequest(request);
                          setIsModalOpen(true);
                        }}
                      >
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 20 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3.9C10.7233 3.9 11.417 4.17393 11.9285 4.66152C12.4399 5.14912 12.7273 5.81044 12.7273 6.5C12.7273 7.18956 12.4399 7.85088 11.9285 8.33848C11.417 8.82607 10.7233 9.1 10 9.1C9.27668 9.1 8.58299 8.82607 8.07153 8.33848C7.56006 7.85088 7.27273 7.18956 7.27273 6.5C7.27273 5.81044 7.56006 5.14912 8.07153 4.66152C8.58299 4.17393 9.27668 3.9 10 3.9ZM10 0C14.5455 0 18.4273 2.69533 20 6.5C18.4273 10.3047 14.5455 13 10 13C5.45455 13 1.57273 10.3047 0 6.5C1.57273 2.69533 5.45455 0 10 0ZM1.98182 6.5C2.71659 7.93027 3.85755 9.13531 5.27498 9.97815C6.69241 10.821 8.32945 11.2678 10 11.2678C11.6705 11.2678 13.3076 10.821 14.725 9.97815C16.1424 9.13531 17.2834 7.93027 18.0182 6.5C17.2834 5.06973 16.1424 3.86469 14.725 3.02185C13.3076 2.17901 11.6705 1.73219 10 1.73219C8.32945 1.73219 6.69241 2.17901 5.27498 3.02185C3.85755 3.86469 2.71659 5.06973 1.98182 6.5Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col xs:flex-row items-center justify-between gap-4">
                <p className="text-xs xs:text-sm text-[#838383]">
                  Showing 10 out of 30
                </p>
                <div className="flex items-center gap-1 xs:gap-3 overflow-x-auto">
                  <button className="text-xs xs:text-[13px] font-medium text-black whitespace-nowrap px-2">
                    Previous
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-7 xs:w-[35px] h-7 xs:h-[35px] flex items-center justify-center rounded-[3px] text-xs xs:text-[13px] font-semibold flex-shrink-0 ${
                        page === currentPage
                          ? "bg-[#3CC27B] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="text-xs xs:text-[13px] font-medium text-black whitespace-nowrap px-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Details Modal */}
      {isModalOpen && selectedRequest && (
        <div
          className="fixed inset-0 bg-black/22 backdrop-blur-sm flex items-center justify-center z-50 p-3 xs:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg xs:rounded-[11px] w-full max-w-[408px] p-5 xs:p-10 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4 xs:space-y-6">
              <h2 className="text-base xs:text-lg font-medium text-black leading-relaxed">
                Request Details - {selectedRequest.requestId}
              </h2>

              <div className="space-y-3 xs:space-y-4">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 xs:gap-3">
                  <span className="text-xs xs:text-sm font-light text-black">
                    Amount :
                  </span>
                  <span className="text-xs xs:text-sm font-medium text-black xs:text-right">
                    ₹{selectedRequest.amount}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 xs:gap-3">
                  <span className="text-xs xs:text-sm font-light text-black">
                    User
                  </span>
                  <span className="text-xs xs:text-sm font-medium text-black xs:text-right break-words">
                    {selectedRequest.userName} ({selectedRequest.userEmail})
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 xs:gap-3">
                  <span className="text-xs xs:text-sm font-light text-black flex-shrink-0">
                    Address :
                  </span>
                  <span className="text-xs xs:text-sm font-medium text-black xs:text-right break-words">
                    {selectedRequest.address}
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 xs:gap-3">
                  <span className="text-xs xs:text-sm font-light text-black flex-shrink-0">
                    User Notes :
                  </span>
                  <span className="text-xs xs:text-sm font-medium text-black xs:text-right break-words">
                    {selectedRequest.userNotes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
