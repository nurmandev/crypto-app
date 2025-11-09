import React from "react";
import { Search } from "lucide-react";

interface UsersSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const UsersSearchBar: React.FC<UsersSearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search Users...",
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-5 h-[36px] sm:h-[29px] px-4 sm:px-8 py-2 sm:py-4 bg-[#F2F2F2] rounded-sm w-full sm:max-w-[277px]">
      <Search className="w-3.5 h-3.5 text-[#919191] flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-[12px] sm:text-[10px] text-[#6B6B6B] placeholder:text-[#6B6B6B] outline-none border-none"
      />
    </div>
  );
};
