import React from "react";
import { Eye } from "lucide-react";

export interface TransactionData {
  id: string;
  transactionId: string;
  user: string;
  userName: string;
  type: "Buy" | "Sell";
  crypto: string;
  amount: string;
  inrValue: string;
  status: "Active" | "Completed" | "Pending" | "Failed";
  time: string;
  paymentMethod: string;
  fees: string;
  exchangeRate: string;
  transactionHash: string;
}

interface TransactionsTableRowProps {
  transaction: TransactionData;
  onView: (transactionId: string) => void;
}

export const TransactionsTableRow: React.FC<TransactionsTableRowProps> = ({
  transaction,
  onView,
}) => {
  const getTypeStyles = () => {
    if (transaction.type === "Buy") {
      return "bg-[#BDFDDB] text-[#1C5C3A]";
    }
    return "bg-[#FDBDBD] text-[#FA1818]";
  };

  const getStatusStyles = () => {
    switch (transaction.status) {
      case "Completed":
        return "bg-[#BDFDDB] text-[#1C5C3A]";
      case "Pending":
        return "bg-[#FBD25F]/65 text-black";
      case "Failed":
        return "bg-[#FDBDBD] text-[#FA1818]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <tr className="border-b border-[#C9C9C9]/50 hover:bg-[#F9F9F9] transition-colors">
      {/* Transaction ID */}
      <td className="py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[17px] font-semibold text-black truncate">
          {transaction.transactionId}
        </div>
      </td>

      {/* User */}
      <td className="py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[15px] font-light text-black truncate">
          {transaction.user}
        </div>
      </td>

      {/* Type */}
      <td className="py-4 sm:py-5 px-2 sm:px-0">
        <span
          className={`inline-flex px-2 py-1 rounded text-[9px] sm:text-[10px] font-semibold ${getTypeStyles()}`}
        >
          {transaction.type}
        </span>
      </td>

      {/* Crypto */}
      <td className="hidden sm:table-cell py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[15px] text-black">
          {transaction.crypto}
        </div>
      </td>

      {/* Amount */}
      <td className="hidden md:table-cell py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[15px] text-black">
          {transaction.amount}
        </div>
      </td>

      {/* INR Value */}
      <td className="hidden lg:table-cell py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[15px] text-black">
          {transaction.inrValue}
        </div>
      </td>

      {/* Status */}
      <td className="py-4 sm:py-5 px-2 sm:px-0">
        <span
          className={`inline-flex px-2 py-1 rounded text-[9px] sm:text-[10px] ${getStatusStyles()}`}
        >
          {transaction.status}
        </span>
      </td>

      {/* Time */}
      <td className="hidden xl:table-cell py-4 sm:py-5 px-2 sm:px-0">
        <div className="text-xs sm:text-sm md:text-[15px] font-light text-black">
          {transaction.time}
        </div>
      </td>

      {/* Actions */}
      <td className="py-4 sm:py-5 px-2 sm:px-0">
        <button
          onClick={() => onView(transaction.id)}
          className="hover:opacity-70 transition-opacity p-1"
          aria-label="View transaction"
          title="View transaction"
        >
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </button>
      </td>
    </tr>
  );
};
