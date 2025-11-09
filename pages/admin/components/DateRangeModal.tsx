import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface DateRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (startDate: string, endDate: string) => void;
  initialStartDate?: string;
  initialEndDate?: string;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({
  isOpen,
  onClose,
  onApply,
  initialStartDate = "",
  initialEndDate = "",
}) => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleApply = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date must be before end date");
      return;
    }
    onApply(startDate, endDate);
    onClose();
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    onApply("", "");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] sm:max-w-[400px] p-4 sm:p-6 bg-white rounded-[10px] border-none shadow-lg">
        <DialogTitle className="sr-only">Select Date Range</DialogTitle>

        <div className="flex flex-col gap-6">
          <h2 className="text-[17px] font-medium text-black">
            Select Date Range
          </h2>

          <div className="space-y-4">
            {/* Start Date */}
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-black">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full h-[44px] px-4 rounded-[6px] border border-[#D0D0D0] bg-white text-[14px] text-black cursor-pointer"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-black">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full h-[44px] px-4 rounded-[6px] border border-[#D0D0D0] bg-white text-[14px] text-black cursor-pointer"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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
