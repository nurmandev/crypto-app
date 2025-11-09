import { useEffect, useRef } from "react";

interface FilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}

export default function FilterDropdown({
  isOpen,
  onClose,
  selectedFilter,
  onFilterChange,
  anchorRef,
}: FilterDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  const filters = ["Approved", "Rejected", "Pending"];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-28 bg-[#D5D5D5] rounded-md shadow-[12px_13px_27px_0_rgba(0,0,0,0.12)] z-50 overflow-hidden"
    >
      <div className="p-2.5 space-y-3.5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              onFilterChange(filter);
              onClose();
            }}
            className={`w-full text-center text-sm py-1 px-2.5 rounded transition-colors ${
              selectedFilter === filter
                ? "bg-[#E9E9E9] text-black"
                : "bg-transparent text-black hover:bg-[#E9E9E9]/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
