import React from "react";
import { Filter, Calendar } from "lucide-react";

interface UsersFiltersProps {
  onFilterClick: () => void;
  onDateRangeClick: () => void;
}

export const UsersFilters: React.FC<UsersFiltersProps> = ({
  onFilterClick,
  onDateRangeClick,
}) => {
  return (
    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
      <button
        onClick={onFilterClick}
        className="flex items-center gap-1.5 sm:gap-2.5 h-[36px] sm:h-[29px] px-3 sm:px-2.5 py-2 sm:py-1.5 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors whitespace-nowrap"
      >
        <Filter className="w-3 h-3" />
        <span className="hidden sm:inline">Filter</span>
        <span className="sm:hidden">F</span>
      </button>
      <button
        onClick={onDateRangeClick}
        className="flex items-center gap-1.5 sm:gap-2.5 h-[36px] sm:h-[29px] px-3 sm:px-2.5 py-2 sm:py-1.5 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors whitespace-nowrap"
      >
        <Calendar className="w-3 h-3" />
        <span className="hidden sm:inline">Date Range</span>
        <span className="sm:hidden">D</span>
      </button>
    </div>
  );
};
