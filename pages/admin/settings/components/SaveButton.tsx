import React from "react";

interface SaveButtonProps {
  isSaving: boolean;
  onSave: () => void;
}

export const SaveButton = ({ isSaving, onSave }: SaveButtonProps) => {
  return (
    <div className="flex justify-end pt-6 xs:pt-8 sm:pt-8">
      <button
        onClick={onSave}
        disabled={isSaving}
        className="px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-3 bg-[#3CC27B] text-white text-xs xs:text-sm sm:text-base font-semibold rounded-lg hover:bg-[#35a869] active:bg-[#2fa867] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};
