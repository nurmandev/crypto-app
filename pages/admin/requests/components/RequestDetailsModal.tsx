import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { RequestData } from "./RequestsTableRow";

interface RequestDetailsModalProps {
  request: RequestData | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (requestId: string) => void;
  onReject: (requestId: string) => void;
}

export const RequestDetailsModal: React.FC<RequestDetailsModalProps> = ({
  request,
  isOpen,
  onClose,
  onApprove,
  onReject,
}) => {
  const [notes, setNotes] = useState("");

  if (!request) return null;

  const handleClose = () => {
    onClose();
    setNotes("");
  };

  const handleApprove = () => {
    onApprove(request.id);
    onClose();
    setNotes("");
  };

  const handleReject = () => {
    onReject(request.id);
    onClose();
    setNotes("");
  };

  const isCryptoTransaction =
    request.type.toLowerCase().includes("crypto") ||
    ["BTC", "ETH", "USDT", "BNB"].includes(request.currency);

  const isPending = request.status === "Pending";
  const isApproved = request.status === "Approved";
  const isRejected = request.status === "Rejected";

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-[606px] p-0 gap-0 bg-white rounded-xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-4 sm:gap-6 p-3 sm:p-5 md:p-[30px]">
          <DialogHeader className="p-0 space-y-0">
            <DialogTitle className="text-[14px] sm:text-[15px] md:text-[17px] font-semibold sm:font-medium text-black leading-tight sm:leading-[33px]">
              Request Details - {request.requestId}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-[13px] sm:text-[15px] md:text-[17px] font-semibold sm:font-medium text-black leading-tight sm:leading-[33px]">
                  Request Information
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Request ID:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-words">
                      {request.requestId}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Type:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                      {request.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Status:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                      {request.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Time
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                      {request.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Payment:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-words">
                      {isCryptoTransaction ? "Crypto" : "UPI"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-[13px] sm:text-[15px] md:text-[17px] font-semibold sm:font-medium text-black leading-tight sm:leading-[33px]">
                  User Details
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Name:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-words">
                      {request.userName}
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                      Email:
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-all">
                      {request.userEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-[13px] sm:text-[15px] md:text-[17px] font-semibold sm:font-medium text-black leading-tight sm:leading-[33px]">
                Transaction Details
              </h3>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                    Amount:
                  </span>
                  <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                    {request.amount} {request.currency}
                  </span>
                </div>

                {isCryptoTransaction ? (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                        Network:
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                        {request.currency === "BTC"
                          ? "Bitcoin Network"
                          : "Ethereum Network"}
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                        Tx Hash:
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-words">
                        1A1zP1eP5QGefi2DMPTfTLSL
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                        UPI ID:
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right">
                        john@paytm
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-black whitespace-nowrap">
                        Tx ID:
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black text-right break-words">
                        UPI123456789
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {isPending ? (
              <>
                <div className="w-full">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes for this request"
                    className="w-full h-16 sm:h-[79px] px-3 sm:px-[27px] py-2 sm:py-[17px] rounded-lg sm:rounded-[10px] border-[0.7px] border-[#CACACA] bg-[#F0F0F0] text-[13px] sm:text-[15px] text-black placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B] resize-none font-roboto"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleApprove}
                    className="flex-1 sm:flex-none sm:w-[162px] h-9 sm:h-10 flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-md border-[0.5px] border-[#C3C3C3] bg-[#3CC27B] hover:bg-[#35ab6b] transition-colors"
                  >
                    <Check className="w-3 h-3 text-white flex-shrink-0" />
                    <span className="text-[12px] sm:text-[15px] font-medium text-white leading-tight sm:leading-[33px]">
                      Approve
                    </span>
                  </button>

                  <button
                    onClick={handleReject}
                    className="flex-1 sm:flex-none sm:w-[162px] h-9 sm:h-10 flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-md border-[0.5px] border-[#C3C3C3] bg-[#FA1818] hover:bg-[#e01515] transition-colors"
                  >
                    <X className="w-3 h-3 text-white flex-shrink-0" />
                    <span className="text-[12px] sm:text-[15px] font-medium text-white leading-tight sm:leading-[33px]">
                      Reject
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full">
                <div
                  className={`w-full h-auto sm:h-[54px] flex items-center px-3 sm:px-[27px] py-2 sm:py-0 rounded-lg sm:rounded-[10px] border-[0.7px] border-[#CACACA] ${
                    isApproved ? "bg-[#3CC27B]/31" : "bg-[#FDBDBD]/56"
                  }`}
                >
                  <span className="text-[12px] sm:text-[15px] font-normal text-black">
                    {isApproved ? "Verified and Approved" : "Request Rejected"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
