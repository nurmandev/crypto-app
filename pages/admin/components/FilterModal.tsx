import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  status: string[];
  verification: string[];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onApply,
  initialFilters = { status: [], verification: [] },
}) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const statusOptions = ["Active", "Inactive", "Suspended"];
  const verificationOptions = ["Verified", "Pending", "Unverified"];

  const handleStatusChange = (status: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      status: checked
        ? [...prev.status, status]
        : prev.status.filter((s) => s !== status),
    }));
  };

  const handleVerificationChange = (verification: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      verification: checked
        ? [...prev.verification, verification]
        : prev.verification.filter((v) => v !== verification),
    }));
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({ status: [], verification: [] });
    onApply({ status: [], verification: [] });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] sm:max-w-[400px] p-4 sm:p-6 bg-white rounded-[10px] border-none shadow-lg">
        <DialogTitle className="sr-only">Filter Users</DialogTitle>

        <div className="flex flex-col gap-6">
          <h2 className="text-[17px] font-medium text-black">Filter Users</h2>

          <div className="space-y-6">
            {/* Status Filter */}
            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold text-black">Status</h3>
              <div className="space-y-2">
                {statusOptions.map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.status.includes(status)}
                      onChange={(e) =>
                        handleStatusChange(status, e.target.checked)
                      }
                      className="w-4 h-4 rounded border-[#D0D0D0] text-black cursor-pointer"
                    />
                    <span className="text-[14px] text-black">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Verification Filter */}
            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold text-black">
                Verification
              </h3>
              <div className="space-y-2">
                {verificationOptions.map((verification) => (
                  <label
                    key={verification}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.verification.includes(verification)}
                      onChange={(e) =>
                        handleVerificationChange(verification, e.target.checked)
                      }
                      className="w-4 h-4 rounded border-[#D0D0D0] text-black cursor-pointer"
                    />
                    <span className="text-[14px] text-black">
                      {verification}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
            <button
              onClick={handleApply}
              className="flex-1 h-[36px] sm:h-[40px] bg-black text-white text-[12px] sm:text-[14px] font-medium rounded-[6px] hover:bg-gray-800 transition-colors"
            >
              Apply
            </button>
            <button
              onClick={handleReset}
              className="flex-1 h-[36px] sm:h-[40px] bg-[#F0F0F0] text-black text-[12px] sm:text-[14px] font-medium rounded-[6px] hover:bg-[#E0E0E0] transition-colors"
            >
              Reset
            </button>
            <button
              onClick={onClose}
              className="flex-1 h-[36px] sm:h-[40px] bg-white text-black text-[12px] sm:text-[14px] font-medium rounded-[6px] border border-[#D0D0D0] hover:bg-[#F9F9F9] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
