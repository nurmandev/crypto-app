import React from "react";
import { Eye } from "lucide-react";

export interface RequestData {
  id: string;
  requestId: string;
  type: string;
  userName: string;
  userEmail: string;
  amount: string;
  currency: string;
  status: "Pending" | "Approved" | "Rejected";
  time: string;
}

interface RequestsTableRowProps {
  request: RequestData;
  onView: (requestId: string) => void;
}

export const RequestsTableRow: React.FC<RequestsTableRowProps> = ({
  request,
  onView,
}) => {
  const getStatusStyles = () => {
    switch (request.status) {
      case "Approved":
        return "bg-[#3CC27B]/31 text-black";
      case "Pending":
        return "bg-[#FBD25F]/65 text-black";
      case "Rejected":
        return "bg-[#FDBDBD]/56 text-[#FA1818]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <tr className="border-b border-[#C9C9C9]/50 hover:bg-[#F9F9F9] transition-colors">
      {/* Request ID */}
      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="text-[11px] sm:text-[12px] md:text-[15px] text-black truncate font-medium">
          {request.requestId}
        </div>
      </td>

      {/* Type */}
      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="text-[11px] sm:text-[12px] md:text-[15px] text-black truncate">
          {request.type}
        </div>
      </td>

      {/* User */}
      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="flex flex-col gap-0.5">
          <div className="text-[11px] sm:text-[12px] md:text-[15px] font-semibold text-black truncate">
            {request.userName}
          </div>
          <div className="text-[10px] sm:text-[11px] md:text-[13px] font-light text-[#666] truncate">
            {request.userEmail}
          </div>
        </div>
      </td>

      {/* Amount */}
      <td className="hidden sm:table-cell py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="text-[11px] sm:text-[12px] md:text-[15px] text-black">
          {request.amount}
        </div>
      </td>

      {/* Currency */}
      <td className="hidden md:table-cell py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="text-[11px] sm:text-[12px] md:text-[15px] text-black">
          {request.currency}
        </div>
      </td>

      {/* Status */}
      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <span
          className={`inline-flex px-2 py-1 rounded text-[9px] sm:text-[10px] font-normal ${getStatusStyles()}`}
        >
          {request.status}
        </span>
      </td>

      {/* Time */}
      <td className="hidden lg:table-cell py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <div className="text-[11px] sm:text-[12px] md:text-[15px] font-light text-black">
          {request.time}
        </div>
      </td>

      {/* Actions */}
      <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3">
        <button
          onClick={() => onView(request.id)}
          className="hover:opacity-70 transition-opacity p-1"
          aria-label="View request details"
          title="View request details"
        >
          <Eye className="w-4 h-4 sm:w-4 md:w-5 md:h-5 text-black" />
        </button>
      </td>
    </tr>
  );
};
