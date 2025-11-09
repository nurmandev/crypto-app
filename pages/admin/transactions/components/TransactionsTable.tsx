import React from "react";
import { TransactionData, TransactionsTableRow } from "./TransactionsTableRow";

interface TransactionsTableProps {
  transactions: TransactionData[];
  onView: (transactionId: string) => void;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
  onView,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-[#C9C9C9]/50">
            <th className="pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Transaction ID
              </span>
            </th>
            <th className="pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                User
              </span>
            </th>
            <th className="pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Type
              </span>
            </th>
            <th className="hidden sm:table-cell pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Crypto
              </span>
            </th>
            <th className="hidden md:table-cell pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Amount
              </span>
            </th>
            <th className="hidden lg:table-cell pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                INR Value
              </span>
            </th>
            <th className="pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Status
              </span>
            </th>
            <th className="hidden xl:table-cell pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Time
              </span>
            </th>
            <th className="pb-4 text-left">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionsTableRow
              key={transaction.id}
              transaction={transaction}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
