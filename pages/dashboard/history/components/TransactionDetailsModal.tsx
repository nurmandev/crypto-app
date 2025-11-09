import { X, Copy } from "lucide-react";
import { useEffect } from "react";

interface TransactionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: {
    id: string;
    type: string;
    date: string;
    transactionId: string;
    status: "Approved" | "Pending" | "Rejected";
    amount: string;
    subAmount?: string;
  } | null;
}

export default function TransactionDetailsModal({
  isOpen,
  onClose,
  transaction,
}: TransactionDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !transaction) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-[#BDFDDB] text-[#1C5C3A]";
      case "Pending":
        return "bg-[#FBD25F]/65 text-[#1C5C3A]";
      case "Rejected":
        return "bg-[#FDBDBD]/56 text-[#FA1818]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/26 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-[13px] p-5 flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[17px] font-medium text-black">
            Transaction Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Transaction Type & Status */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-medium text-black leading-[33px]">
              {transaction.type}
            </h3>
            <p className="text-[15px] text-black leading-[33px]">
              {transaction.date}
            </p>
          </div>
          <span
            className={`inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] ${getStatusColor(
              transaction.status,
            )}`}
          >
            {transaction.status}
          </span>
        </div>

        {/* Transaction Information Section */}
        <div>
          <h3 className="text-[17px] font-medium text-black leading-[33px] mb-4">
            Transaction Information:
          </h3>

          <div className="space-y-4">
            {/* Transaction ID */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Transaction ID:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">
                  {transaction.transactionId}
                </span>
                <button
                  onClick={() => copyToClipboard(transaction.transactionId)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Copy transaction ID"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3.83398 6.056C3.83398 5.46655 4.06814 4.90125 4.48494 4.48445C4.90174 4.06765 5.46704 3.8335 6.05648 3.8335H13.2782C13.57 3.8335 13.859 3.89098 14.1287 4.00267C14.3983 4.11437 14.6433 4.27807 14.8497 4.48445C15.0561 4.69083 15.2198 4.93584 15.3315 5.20548C15.4432 5.47513 15.5007 5.76413 15.5007 6.056V13.2777C15.5007 13.5695 15.4432 13.8585 15.3315 14.1282C15.2198 14.3978 15.0561 14.6428 14.8497 14.8492C14.6433 15.0556 14.3983 15.2193 14.1287 15.331C13.859 15.4427 13.57 15.5002 13.2782 15.5002H6.05648C5.76462 15.5002 5.47562 15.4427 5.20597 15.331C4.93632 15.2193 4.69132 15.0556 4.48494 14.8492C4.27856 14.6428 4.11485 14.3978 4.00316 14.1282C3.89147 13.8585 3.83398 13.5695 3.83398 13.2777V6.056Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.34333 11.9475C1.0875 11.8021 0.874708 11.5916 0.726583 11.3374C0.578459 11.0832 0.500283 10.7942 0.5 10.5V2.16667C0.5 1.25 1.25 0.5 2.16667 0.5H10.5C11.125 0.5 11.465 0.820833 11.75 1.33333"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Exchange Rate */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Exchange Rate:
              </span>
              <span className="text-sm font-medium text-black">₹4,245,000</span>
            </div>

            {/* Payment Method */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Payment Method:
              </span>
              <span className="text-sm font-medium text-black">UPI</span>
            </div>

            {/* Platform Fee */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Platform Fee:
              </span>
              <span className="text-sm font-medium text-black">₹500</span>
            </div>

            {/* Network Fee */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Network Fee:
              </span>
              <span className="text-sm font-medium text-black">0.0001 BTC</span>
            </div>

            {/* Transaction Hash */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                Transaction Hash:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">
                  0x12345678....678
                </span>
                <button
                  onClick={() => copyToClipboard("0x12345678....678")}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Copy transaction hash"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3.83398 6.056C3.83398 5.46655 4.06814 4.90125 4.48494 4.48445C4.90174 4.06765 5.46704 3.8335 6.05648 3.8335H13.2782C13.57 3.8335 13.859 3.89098 14.1287 4.00267C14.3983 4.11437 14.6433 4.27807 14.8497 4.48445C15.0561 4.69083 15.2198 4.93584 15.3315 5.20548C15.4432 5.47513 15.5007 5.76413 15.5007 6.056V13.2777C15.5007 13.5695 15.4432 13.8585 15.3315 14.1282C15.2198 14.3978 15.0561 14.6428 14.8497 14.8492C14.6433 15.0556 14.3983 15.2193 14.1287 15.331C13.859 15.4427 13.57 15.5002 13.2782 15.5002H6.05648C5.76462 15.5002 5.47562 15.4427 5.20597 15.331C4.93632 15.2193 4.69132 15.0556 4.48494 14.8492C4.27856 14.6428 4.11485 14.3978 4.00316 14.1282C3.89147 13.8585 3.83398 13.5695 3.83398 13.2777V6.056Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.34333 11.9475C1.0875 11.8021 0.874708 11.5916 0.726583 11.3374C0.578459 11.0832 0.500283 10.7942 0.5 10.5V2.16667C0.5 1.25 1.25 0.5 2.16667 0.5H10.5C11.125 0.5 11.465 0.820833 11.75 1.33333"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* From Address */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">
                From Address:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">
                  0x12345678....678
                </span>
                <button
                  onClick={() => copyToClipboard("0x12345678....678")}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Copy from address"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3.83398 6.056C3.83398 5.46655 4.06814 4.90125 4.48494 4.48445C4.90174 4.06765 5.46704 3.8335 6.05648 3.8335H13.2782C13.57 3.8335 13.859 3.89098 14.1287 4.00267C14.3983 4.11437 14.6433 4.27807 14.8497 4.48445C15.0561 4.69083 15.2198 4.93584 15.3315 5.20548C15.4432 5.47513 15.5007 5.76413 15.5007 6.056V13.2777C15.5007 13.5695 15.4432 13.8585 15.3315 14.1282C15.2198 14.3978 15.0561 14.6428 14.8497 14.8492C14.6433 15.0556 14.3983 15.2193 14.1287 15.331C13.859 15.4427 13.57 15.5002 13.2782 15.5002H6.05648C5.76462 15.5002 5.47562 15.4427 5.20597 15.331C4.93632 15.2193 4.69132 15.0556 4.48494 14.8492C4.27856 14.6428 4.11485 14.3978 4.00316 14.1282C3.89147 13.8585 3.83398 13.5695 3.83398 13.2777V6.056Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.34333 11.9475C1.0875 11.8021 0.874708 11.5916 0.726583 11.3374C0.578459 11.0832 0.500283 10.7942 0.5 10.5V2.16667C0.5 1.25 1.25 0.5 2.16667 0.5H10.5C11.125 0.5 11.465 0.820833 11.75 1.33333"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* To Address */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black">To Address:</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">
                  0x12345678....678
                </span>
                <button
                  onClick={() => copyToClipboard("0x12345678....678")}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Copy to address"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3.83398 6.056C3.83398 5.46655 4.06814 4.90125 4.48494 4.48445C4.90174 4.06765 5.46704 3.8335 6.05648 3.8335H13.2782C13.57 3.8335 13.859 3.89098 14.1287 4.00267C14.3983 4.11437 14.6433 4.27807 14.8497 4.48445C15.0561 4.69083 15.2198 4.93584 15.3315 5.20548C15.4432 5.47513 15.5007 5.76413 15.5007 6.056V13.2777C15.5007 13.5695 15.4432 13.8585 15.3315 14.1282C15.2198 14.3978 15.0561 14.6428 14.8497 14.8492C14.6433 15.0556 14.3983 15.2193 14.1287 15.331C13.859 15.4427 13.57 15.5002 13.2782 15.5002H6.05648C5.76462 15.5002 5.47562 15.4427 5.20597 15.331C4.93632 15.2193 4.69132 15.0556 4.48494 14.8492C4.27856 14.6428 4.11485 14.3978 4.00316 14.1282C3.89147 13.8585 3.83398 13.5695 3.83398 13.2777V6.056Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.34333 11.9475C1.0875 11.8021 0.874708 11.5916 0.726583 11.3374C0.578459 11.0832 0.500283 10.7942 0.5 10.5V2.16667C0.5 1.25 1.25 0.5 2.16667 0.5H10.5C11.125 0.5 11.465 0.820833 11.75 1.33333"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
