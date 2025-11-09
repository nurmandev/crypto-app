import React from "react";

interface RequestsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const RequestsPagination: React.FC<RequestsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = totalPages <= 5 ? totalPages : 5;

    for (let i = 1; i <= maxPagesToShow; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex w-7 h-7 sm:w-[35px] sm:h-[35px] items-center justify-center rounded-sm text-[11px] sm:text-[13px] font-semibold transition-colors ${
            currentPage === i
              ? "bg-[#3CC27B] text-white"
              : "bg-white text-black border border-[#E0E0E0] hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-[#E0E0E0]">
      <div className="text-xs sm:text-sm md:text-[17px] text-[#838383] text-center sm:text-left w-full sm:w-auto">
        Showing {startItem}-{endItem} of {totalItems}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center w-full sm:w-auto">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-8 px-3 sm:px-4 text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-black disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 disabled:hover:bg-transparent transition-all rounded-md border border-[#E0E0E0] active:scale-95"
        >
          ← Prev
        </button>

        <div className="flex gap-1 sm:gap-2">{renderPageNumbers()}</div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="h-8 px-3 sm:px-4 text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-black disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 disabled:hover:bg-transparent transition-all rounded-md border border-[#E0E0E0] active:scale-95"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
