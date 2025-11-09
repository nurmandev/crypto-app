import React from "react";
import { ChevronDown } from "lucide-react";

interface RequestStatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
}

export const RequestStatusFilter: React.FC<RequestStatusFilterProps> = ({
  selectedStatus,
  onStatusChange,
  pendingCount,
  approvedCount,
  rejectedCount,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 w-full sm:w-auto">
      {/* Status count badges */}
      <button
        onClick={() => onStatusChange("pending")}
        className={`inline-flex h-8 sm:h-7 px-2.5 sm:px-2 md:px-3 items-center justify-center gap-1.5 rounded border transition-all active:scale-95 ${
          selectedStatus === "pending"
            ? "bg-[#FBD25F]/65 border-[#FBD25F] shadow-sm"
            : "bg-[#FBD25F]/65 border-transparent hover:shadow-sm"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] md:text-[10px] text-black font-semibold leading-tight">
          {pendingCount}
        </span>
        <span className="text-[9px] sm:text-[10px] text-black font-medium hidden sm:inline">
          Pending
        </span>
      </button>

      <button
        onClick={() => onStatusChange("approved")}
        className={`inline-flex h-8 sm:h-7 px-2.5 sm:px-2 md:px-3 items-center justify-center gap-1.5 rounded border transition-all active:scale-95 ${
          selectedStatus === "approved"
            ? "bg-[#3CC27B]/31 border-[#3CC27B] shadow-sm"
            : "bg-[#3CC27B]/31 border-transparent hover:shadow-sm"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] md:text-[10px] text-black font-semibold leading-tight">
          {approvedCount}
        </span>
        <span className="text-[9px] sm:text-[10px] text-black font-medium hidden sm:inline">
          Approved
        </span>
      </button>

      <button
        onClick={() => onStatusChange("rejected")}
        className={`inline-flex h-8 sm:h-7 px-2.5 sm:px-2 md:px-3 items-center justify-center gap-1.5 rounded border transition-all active:scale-95 ${
          selectedStatus === "rejected"
            ? "bg-[#FDBDBD]/56 border-[#FA1818] shadow-sm"
            : "bg-[#FDBDBD]/56 border-transparent hover:shadow-sm"
        }`}
      >
        <span className="text-[10px] sm:text-[10px] md:text-[10px] text-[#FA1818] font-semibold leading-tight">
          {rejectedCount}
        </span>
        <span className="text-[9px] sm:text-[10px] text-[#FA1818] font-medium hidden sm:inline">
          Rejected
        </span>
      </button>

      {/* All Requests dropdown */}
      <button
        onClick={() => onStatusChange("all")}
        className={`inline-flex h-8 sm:h-7 px-3 sm:px-2.5 md:px-3 items-center justify-center gap-1.5 rounded-md bg-black hover:bg-gray-800 transition-colors active:scale-95 ml-auto sm:ml-0`}
      >
        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-white leading-tight">
          <span className="hidden sm:inline">All </span>
          <span className="sm:hidden">View</span>
        </span>
        <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 text-white flex-shrink-0" />
      </button>
    </div>
  );
};
