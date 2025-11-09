import React from "react";

interface CryptoStatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

export const CryptoStatusFilter: React.FC<CryptoStatusFilterProps> = ({
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-[#838383] font-roboto">Filter by:</label>
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-4 py-2 border border-[#D4D4D4] rounded-md bg-white text-black font-roboto text-sm hover:border-[#3CC27B] focus:outline-none focus:border-[#3CC27B]"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};
