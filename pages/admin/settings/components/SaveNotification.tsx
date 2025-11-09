import React from "react";

interface SaveNotificationProps {
  saveMessage: {
    type: "success" | "error";
    text: string;
  } | null;
}

export const SaveNotification = ({ saveMessage }: SaveNotificationProps) => {
  if (!saveMessage) return null;

  return (
    <div
      className={`mb-4 xs:mb-6 p-3 xs:p-4 rounded-lg text-xs xs:text-sm font-medium transition-all ${
        saveMessage.type === "success"
          ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#4CAF50]"
          : "bg-[#FFEBEE] text-[#C62828] border border-[#F44336]"
      }`}
    >
      {saveMessage.text}
    </div>
  );
};
