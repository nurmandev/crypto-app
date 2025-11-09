import React from "react";

interface UsersPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const UsersPagination: React.FC<UsersPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex items-center justify-center w-[28px] sm:w-[35px] h-[28px] sm:h-[35px] rounded text-[11px] sm:text-[13px] font-semibold transition-colors ${
            currentPage === i
              ? "bg-[#3CC27B] text-white"
              : "bg-white text-black border border-[#D0D0D0] hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-6 sm:mt-8">
      <div className="text-[12px] sm:text-[17px] text-[#838383] text-center sm:text-left">
        Showing {startItem} to {endItem} of {totalItems}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 h-[35px] flex-wrap justify-center sm:justify-end">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="text-[11px] sm:text-[13px] font-medium text-black hover:text-[#3CC27B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          Previous
        </button>

        <div className="flex gap-1 sm:gap-3">{renderPageNumbers()}</div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-[11px] sm:text-[13px] font-medium text-black hover:text-[#3CC27B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          Next
        </button>
      </div>
    </div>
  );
};
