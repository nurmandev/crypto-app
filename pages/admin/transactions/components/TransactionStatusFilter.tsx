import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface TransactionStatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const statusOptions = [
  { value: "all", label: "All Transactions" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
];

export const TransactionStatusFilter: React.FC<
  TransactionStatusFilterProps
> = ({ selectedStatus, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    statusOptions.find((opt) => opt.value === selectedStatus)?.label ||
    "All Transactions";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 h-[29px] px-2.5 bg-black text-white text-xs sm:text-[12px] rounded border-none hover:bg-gray-800 transition-colors"
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[158px] bg-[#D5D5D5] rounded-[5px] shadow-[12px_13px_27px_0_rgba(0,0,0,0.12)] p-2.5 flex flex-col gap-3.5 z-50">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onStatusChange(option.value);
                setIsOpen(false);
              }}
              className={`h-[27px] px-2.5 text-[13px] rounded transition-colors text-center ${
                selectedStatus === option.value
                  ? "bg-[#E9E9E9] text-black font-normal"
                  : "bg-transparent text-black hover:bg-[#E9E9E9]/50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
