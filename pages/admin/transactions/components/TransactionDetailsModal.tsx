import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, X, Copy } from "lucide-react";
import { TransactionData } from "./TransactionsTableRow";

interface TransactionDetailsModalProps {
  transaction: TransactionData | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (transactionId: string) => void;
  onReject: (transactionId: string) => void;
}

export const TransactionDetailsModal: React.FC<
  TransactionDetailsModalProps
> = ({ transaction, isOpen, onClose, onApprove, onReject }) => {
  const [copied, setCopied] = useState(false);

  if (!transaction) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(transaction.transactionHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApprove = () => {
    onApprove(transaction.id);
    onClose();
  };

  const handleReject = () => {
    onReject(transaction.id);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[553px] p-0 gap-0 bg-white rounded-xl">
        <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight sm:leading-[33px]">
              Transaction Details - {transaction.transactionId}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight sm:leading-[33px]">
                  Transaction Info
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Transaction ID:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right break-words">
                      {transaction.transactionId}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Type:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                      {transaction.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Status:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                      {transaction.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Time
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                      {transaction.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Payment Method:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right break-words">
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight sm:leading-[33px]">
                  User Details
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Name:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right break-words">
                      {transaction.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                      Email:
                    </span>
                    <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right break-all">
                      {transaction.user}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight sm:leading-[33px]">
                Financial Details
              </h3>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                    Crypto Amount:
                  </span>
                  <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    {transaction.amount} {transaction.crypto}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                    INR Value:
                  </span>
                  <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    {transaction.inrValue}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs sm:text-sm md:text-[14px] font-light text-black whitespace-nowrap">
                    Fees:
                  </span>
                  <span className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    {transaction.fees}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-l-2 border-[#3CC27B] bg-[#3CC27B]/9 p-3 sm:p-4">
              <div className="space-y-2 sm:space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-black whitespace-nowrap">
                    Exchange Rate:
                  </span>
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-black text-right">
                    {transaction.exchangeRate}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-black whitespace-nowrap">
                    Transaction Hash:
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-black truncate">
                      {transaction.transactionHash}
                    </span>
                    <button
                      onClick={handleCopyHash}
                      className="p-0.5 sm:p-1 hover:bg-[#3CC27B]/20 rounded transition-colors flex-shrink-0"
                      title={copied ? "Copied!" : "Copy hash"}
                    >
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={handleApprove}
                className="flex-1 h-8 sm:h-9 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 rounded-md border border-[#C3C3C3] bg-[#3CC27B] hover:bg-[#3CC27B]/90 transition-colors"
              >
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-[15px] font-medium text-white leading-tight sm:leading-[33px]">
                  Approve
                </span>
              </button>

              <button
                onClick={handleReject}
                className="flex-1 h-8 sm:h-9 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 rounded-md border border-[#C3C3C3] bg-[#FA1818] hover:bg-[#FA1818]/90 transition-colors"
              >
                <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-[15px] font-medium text-white leading-tight sm:leading-[33px]">
                  Reject
                </span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
