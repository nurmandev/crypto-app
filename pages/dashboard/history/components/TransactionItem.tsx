import { Eye } from "lucide-react";

interface TransactionItemProps {
  type: string;
  date: string;
  transactionId: string;
  status: "Approved" | "Pending" | "Rejected";
  amount: string;
  subAmount?: string;
  onClick?: () => void;
}

export default function TransactionItem({
  type,
  date,
  transactionId,
  status,
  amount,
  subAmount,
  onClick,
}: TransactionItemProps) {
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

  return (
    <div className="w-full rounded-lg border border-[#D3D3D3] bg-white p-4">
      <div className="flex items-center justify-between">
        {/* Transaction Details */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-black mb-1">{type}</h3>
          <p className="text-xs font-light text-black mb-1">{date}</p>
          <p className="text-xs font-light text-black">{transactionId}</p>
        </div>

        {/* Status Badge */}
        <div className="flex-shrink-0 mx-8">
          <span
            className={`inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] ${getStatusColor(
              status,
            )}`}
          >
            {status}
          </span>
        </div>

        {/* Amount and View Icon */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-base md:text-lg font-medium text-black">
              {amount}
            </div>
            {subAmount && (
              <div className="text-xs font-light text-black">{subAmount}</div>
            )}
          </div>
          <button
            onClick={onClick}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="View transaction details"
          >
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-2.5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4628 4.57L13.8778 4.362V4.36L13.8748 4.357L13.8688 4.345L13.8478 4.305L13.7678 4.161C13.6702 3.9926 13.5664 3.82783 13.4568 3.667C13.0909 3.12995 12.6703 2.63229 12.2018 2.182C11.0758 1.102 9.34278 0 6.96278 0C4.58478 0 2.85078 1.101 1.72478 2.182C1.25624 2.63229 0.835657 3.12995 0.469778 3.667C0.321316 3.88605 0.183814 4.11233 0.0577782 4.345L0.0517782 4.357L0.0497782 4.36V4.361C0.0497782 4.361 0.0487783 4.362 0.463778 4.57L0.0487782 4.361C0.0166925 4.42582 0 4.49717 0 4.5695C0 4.64183 0.0166925 4.71318 0.0487782 4.778L0.0477782 4.78L0.0507783 4.783L0.0567782 4.795C0.08796 4.85748 0.121314 4.91885 0.156778 4.979C0.587377 5.70641 1.11413 6.37241 1.72278 6.959C2.84978 8.039 4.58278 9.139 6.96278 9.139C9.34178 9.139 11.0758 8.039 12.2028 6.958C12.6704 6.50717 13.0906 6.00957 13.4568 5.473C13.597 5.26655 13.7275 5.05365 13.8478 4.835L13.8688 4.795L13.8748 4.783L13.8768 4.78V4.779C13.8768 4.779 13.8778 4.778 13.4628 4.57ZM13.4628 4.57L13.8778 4.779C13.9099 4.71418 13.9266 4.64283 13.9266 4.5705C13.9266 4.49817 13.9099 4.42682 13.8778 4.362L13.4628 4.57ZM6.90278 3.034C6.49541 3.034 6.10472 3.19583 5.81666 3.48388C5.52861 3.77194 5.36678 4.16263 5.36678 4.57C5.36678 4.97737 5.52861 5.36806 5.81666 5.65612C6.10472 5.94417 6.49541 6.106 6.90278 6.106C7.31015 6.106 7.70084 5.94417 7.98889 5.65612C8.27695 5.36806 8.43878 4.97737 8.43878 4.57C8.43878 4.16263 8.27695 3.77194 7.98889 3.48388C7.70084 3.19583 7.31015 3.034 6.90278 3.034ZM4.44078 4.57C4.44078 3.91651 4.70038 3.28978 5.16247 2.82769C5.62456 2.3656 6.25128 2.106 6.90478 2.106C7.55827 2.106 8.185 2.3656 8.64709 2.82769C9.10918 3.28978 9.36878 3.91651 9.36878 4.57C9.36878 5.22349 9.10918 5.85022 8.64709 6.31231C8.185 6.7744 7.55827 7.034 6.90478 7.034C6.25128 7.034 5.62456 6.7744 5.16247 6.31231C4.70038 5.85022 4.44078 5.22349 4.44078 4.57Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
