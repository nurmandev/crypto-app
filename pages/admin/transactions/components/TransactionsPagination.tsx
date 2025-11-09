import React from "react";

interface TransactionsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const TransactionsPagination: React.FC<TransactionsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8">
      {/* Showing text */}
      <div className="text-xs sm:text-sm md:text-[17px] text-[#838383]">
        Showing {startItem} out of {totalItems}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Previous button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-xs sm:text-[13px] font-medium text-black disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#3CC27B] transition-colors"
        >
          Previous
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1 sm:gap-2">
          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] flex items-center justify-center text-xs sm:text-[13px] text-black"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] flex items-center justify-center text-xs sm:text-[13px] font-semibold rounded-[3px] transition-colors ${
                  isActive
                    ? "bg-[#3CC27B] text-white"
                    : "bg-white text-black hover:bg-[#3CC27B]/10"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="text-xs sm:text-[13px] font-medium text-black disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#3CC27B] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
