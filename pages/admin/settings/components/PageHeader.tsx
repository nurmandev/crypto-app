import React from "react";

export const PageHeader = () => {
  return (
    <div className="pb-6 xs:pb-8 border-b border-[#E0E0E0] mb-6 xs:mb-8">
      <h1 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black mb-1.5 xs:mb-2">
        Website Settings
      </h1>
      <p className="text-xs xs:text-sm sm:text-base text-[#999999]">
        Manage your website configuration and appearance
      </p>
    </div>
  );
};
