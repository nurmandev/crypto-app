import React from "react";
import { UsersTableRow, UserData } from "./UsersTableRow";

interface UsersTableProps {
  users: UserData[];
  onView: (userId: string) => void;
  onEdit: (userId: string) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  onView,
  onEdit,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-[#C9C9C9]/50">
            <th className="text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131] px-2 sm:px-0">
              User
            </th>
            <th className="text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131] px-2 sm:px-0">
              Status
            </th>
            <th className="text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131] px-2 sm:px-0">
              Verification
            </th>
            <th className="hidden md:table-cell text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131]">
              Balance
            </th>
            <th className="text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131] px-2 sm:px-0">
              Joined
            </th>
            <th className="text-left py-3 sm:py-4 text-[12px] sm:text-[15px] font-bold text-[#313131] px-2 sm:px-0">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UsersTableRow
                key={user.id}
                user={user}
                onView={onView}
                onEdit={onEdit}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="py-8 text-center text-[14px] text-[#6B6B6B]"
              >
                No users found matching your filters
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
