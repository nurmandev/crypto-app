import React from "react";
import { Eye, Edit } from "lucide-react";

export interface UserData {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  verification: "Verified" | "Pending";
  balance: string;
  joinedDate: string;
}

interface UsersTableRowProps {
  user: UserData;
  onView: (userId: string) => void;
  onEdit: (userId: string) => void;
}

export const UsersTableRow: React.FC<UsersTableRowProps> = ({
  user,
  onView,
  onEdit,
}) => {
  return (
    <tr className="border-b border-[#C9C9C9]/50 hover:bg-[#F9F9F9] transition-colors">
      <td className="py-4 sm:py-6 px-2 sm:px-0">
        <div className="flex flex-col gap-1">
          <div className="text-[13px] sm:text-[17px] font-semibold text-black truncate">
            {user.name}
          </div>
          <div className="text-[11px] sm:text-[15px] font-light text-black truncate">
            {user.email}
          </div>
        </div>
      </td>
      <td className="py-4 sm:py-6 px-2 sm:px-0">
        <span className="inline-flex px-2 py-1 rounded bg-[#BDFDDB] text-[#1C5C3A] text-[9px] sm:text-[10px]">
          {user.status}
        </span>
      </td>
      <td className="py-4 sm:py-6 px-2 sm:px-0">
        <span className="inline-flex px-2 py-1 rounded bg-[#BDFDDB] text-[#1C5C3A] text-[9px] sm:text-[10px]">
          {user.verification}
        </span>
      </td>
      <td className="hidden md:table-cell py-4 sm:py-6">
        <div className="text-[13px] sm:text-[15px] text-black font-medium">
          {user.balance}
        </div>
      </td>
      <td className="py-4 sm:py-6 px-2 sm:px-0">
        <div className="text-[11px] sm:text-[15px] font-light text-black">
          {user.joinedDate}
        </div>
      </td>
      <td className="py-4 sm:py-6 px-2 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-3.5">
          <button
            onClick={() => onView(user.id)}
            className="hover:opacity-70 transition-opacity p-1"
            aria-label="View user"
            title="View user"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>
          <button
            onClick={() => onEdit(user.id)}
            className="hover:opacity-70 transition-opacity p-1"
            aria-label="Edit user"
            title="Edit user"
          >
            <Edit className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-black" />
          </button>
        </div>
      </td>
    </tr>
  );
};
