import React from "react";

interface RecentTransactionItemProps {
  email: string;
  action: string;
  amount: string;
  timeAgo: string;
}

export const RecentTransactionItem: React.FC<RecentTransactionItemProps> = ({
  email,
  action,
  amount,
  timeAgo,
}) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white">
      <div>
        <p className="text-[17px] font-semibold text-black">{email}</p>
        <p className="text-[15px] text-black font-light mt-1">{action}</p>
      </div>
      <div className="text-right">
        <p className="text-[17px] font-medium text-black">{amount}</p>
        <p className="text-[13px] text-black font-light mt-2">{timeAgo}</p>
      </div>
    </div>
  );
};
