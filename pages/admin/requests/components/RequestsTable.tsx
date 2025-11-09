import React from "react";
import { RequestsTableRow, RequestData } from "./RequestsTableRow";

interface RequestsTableProps {
  requests: RequestData[];
  onView: (requestId: string) => void;
}

export const RequestsTable: React.FC<RequestsTableProps> = ({
  requests,
  onView,
}) => {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden sm:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#C9C9C9]/50">
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Request ID
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Type
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  User
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden sm:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Amount
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden md:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Currency
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Status
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 hidden lg:table-cell">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Time
                </span>
              </th>
              <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3">
                <span className="text-[11px] sm:text-[12px] md:text-[15px] font-bold text-[#313131]">
                  Actions
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <RequestsTableRow
                key={request.id}
                request={request}
                onView={onView}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3 px-0">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div
              key={request.id}
              className="bg-white border border-[#E0E0E0] rounded-lg p-4 hover:shadow-md transition-all active:scale-98 touch-highlight-none"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-black mb-1.5 line-clamp-2">
                    {request.requestId}
                  </div>
                  <div className="text-[12px] text-[#666] mb-3 font-medium">
                    {request.type}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[12px] font-medium text-black line-clamp-1">
                      {request.userName}
                    </div>
                    <div className="text-[11px] text-[#999] line-clamp-1">
                      {request.userEmail}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onView(request.id)}
                  className="ml-2 flex-shrink-0 p-2 hover:bg-gray-200 rounded-lg transition-colors active:bg-gray-300"
                  aria-label="View request details"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>

              <div className="border-t border-[#E0E0E0] pt-3">
                <div className="grid grid-cols-2 gap-3 text-[12px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#999] font-medium">Amount</span>
                    <div className="font-semibold text-black">
                      {request.amount}
                    </div>
                    <span className="text-[10px] text-[#666]">
                      {request.currency}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#999] font-medium">Status</span>
                    <span
                      className={`inline-flex px-2 py-1 rounded text-[10px] font-medium w-fit ${
                        request.status === "Approved"
                          ? "bg-[#3CC27B]/31 text-black"
                          : request.status === "Pending"
                            ? "bg-[#FBD25F]/65 text-black"
                            : "bg-[#FDBDBD]/56 text-[#FA1818]"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-[#999]">No requests found</div>
        )}
      </div>
    </div>
  );
};
