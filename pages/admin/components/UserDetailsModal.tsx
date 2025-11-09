import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UserData } from "./UsersTableRow";

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
  onEdit?: (userId: string) => void;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  isOpen,
  onClose,
  user,
  onEdit,
}) => {
  if (!user) return null;

  const handleEdit = () => {
    if (onEdit) {
      onEdit(user.id);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-[566px] p-4 sm:p-6 md:p-8 bg-white rounded-[10px] border-none shadow-lg max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">
          User Details - {user.name}
        </DialogTitle>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <h2 className="text-base sm:text-lg md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
            User Details - {user.name}
          </h2>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Personal Information */}
            <div className="space-y-4 md:space-y-3">
              <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
                Personal Information:
              </h3>
              <div className="space-y-2 md:space-y-2.5">
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black break-words">
                    {user.name}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black break-all">
                    {user.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    +91 9876543210
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black break-words">
                    123 Main St, Mumbai, Maharashtra
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    Joined: {user.joinedDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="space-y-4 md:space-y-3">
              <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
                Account Status
              </h3>
              <div className="space-y-2 md:space-y-2.5">
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    Status:
                  </p>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    {user.status}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    Verification:
                  </p>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    {user.verification}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    Total Exchanges
                  </p>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    30
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                    Last Login:
                  </p>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                    2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Balance Information */}
          <div className="space-y-4 md:space-y-3">
            <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black leading-tight md:leading-[33px]">
              Balance Information
            </h3>
            <div className="space-y-2 md:space-y-2.5">
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                  INR Balance
                </p>
                <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                  {user.balance}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs sm:text-sm md:text-[14px] font-light text-black">
                  Crypto Holdings
                </p>
                <p className="text-xs sm:text-sm md:text-[14px] font-medium text-black text-right">
                  5 Coins
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-2">
            {/* Edit User Button */}
            <button
              onClick={handleEdit}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white text-xs sm:text-sm md:text-[15px] rounded-md border border-[#C3C3C3] hover:bg-gray-800 transition-colors whitespace-nowrap flex-1 sm:flex-auto"
              aria-label="Edit User"
            >
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1565 0L18.0004 2.84387L15.8324 5.0128L12.9885 2.16893L15.1565 0ZM4.74023 13.26H7.58414L14.492 6.35226L11.6481 3.50839L4.74023 10.4161V13.26Z"
                  fill="white"
                />
                <path
                  d="M15.1675 16.1038H4.88961C4.86497 16.1038 4.83937 16.1133 4.81473 16.1133C4.78344 16.1133 4.75216 16.1048 4.71993 16.1038H1.89593V2.83244H8.38667L10.2826 0.936523H1.89593C0.850326 0.936523 0 1.78589 0 2.83244V16.1038C0 17.1504 0.850326 17.9997 1.89593 17.9997H15.1675C15.6703 17.9997 16.1525 17.8 16.5081 17.4444C16.8637 17.0889 17.0634 16.6067 17.0634 16.1038V7.88694L15.1675 9.78286V16.1038Z"
                  fill="white"
                />
              </svg>
              <span className="hidden sm:inline text-xs sm:text-sm md:text-[15px]">
                Edit User
              </span>
            </button>

            {/* Send Mail Button */}
            <button
              className="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white text-xs sm:text-sm md:text-[15px] rounded-md border border-[#C3C3C3] hover:bg-gray-800 transition-colors whitespace-nowrap flex-1 sm:flex-auto"
              aria-label="Send Mail"
            >
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11V0H14V11H0ZM7 6.1875L1.4 2.75V9.625H12.6V2.75L7 6.1875ZM7 4.8125L12.6 1.375H1.4L7 4.8125ZM1.4 2.75V1.375V9.625V2.75Z"
                  fill="white"
                />
              </svg>
              <span className="hidden sm:inline text-xs sm:text-sm md:text-[15px]">
                Send Mail
              </span>
            </button>

            {/* Suspend User Button */}
            <button
              className="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#FA1818] text-white text-xs sm:text-sm md:text-[15px] rounded-md border border-[#C3C3C3] hover:bg-red-700 transition-colors whitespace-nowrap flex-1 sm:flex-auto"
              aria-label="Suspend User"
            >
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.00683 7.61524L10.048 11.6518C10.2624 11.866 10.5533 11.9863 10.8566 11.9863C11.1598 11.9863 11.4507 11.866 11.6651 11.6518C11.8795 11.4376 12 11.1471 12 10.8442C12 10.5413 11.8795 10.2508 11.6651 10.0366L7.62239 6L11.6643 1.96343C11.7705 1.85737 11.8546 1.73147 11.9121 1.59292C11.9695 1.45437 11.999 1.30588 11.999 1.15592C11.9989 1.00597 11.9693 0.857491 11.9118 0.718966C11.8544 0.580441 11.7701 0.454581 11.6639 0.348573C11.5578 0.242565 11.4317 0.158485 11.293 0.101133C11.1543 0.0437811 11.0056 0.0142806 10.8555 0.0143159C10.7054 0.0143513 10.5567 0.0439216 10.4181 0.101339C10.2794 0.158756 10.1534 0.242896 10.0472 0.348954L6.00683 4.38552L1.96566 0.348954C1.86026 0.239854 1.73417 0.152812 1.59474 0.092908C1.45531 0.0330038 1.30533 0.00143627 1.15355 4.78815e-05C1.00177 -0.00134051 0.85124 0.0274778 0.710733 0.0848213C0.570226 0.142165 0.442559 0.226885 0.335182 0.334039C0.227805 0.441193 0.142868 0.568634 0.0853262 0.708927C0.0277848 0.84922 -0.00120828 0.999554 3.85728e-05 1.15116C0.00128543 1.30276 0.0327471 1.4526 0.0925883 1.59193C0.152429 1.73126 0.239451 1.85729 0.348577 1.96267L4.39128 6L0.349339 10.0373C0.240214 10.1427 0.153192 10.2687 0.0933506 10.4081C0.0335095 10.5474 0.00204743 10.6972 0.000800572 10.8488C-0.000446285 11.0004 0.0285468 11.1508 0.0860882 11.2911C0.14363 11.4314 0.228567 11.5588 0.335944 11.666C0.443321 11.7731 0.570988 11.8578 0.711495 11.9152C0.852002 11.9725 1.00254 12.0013 1.15431 12C1.30609 11.9986 1.45607 11.967 1.59549 11.9096C1.73491 11.8522 1.86099 11.7651 1.96639 11.6561L6.00683 7.61524Z"
                  fill="white"
                />
              </svg>
              <span className="hidden sm:inline text-xs sm:text-sm md:text-[15px]">
                Suspend User
              </span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
