import React from "react";

interface SecuritySettingsProps {
  sessionTimeout: string;
  setSessionTimeout: (value: string) => void;
  maintenanceMode: boolean;
  setMaintenanceMode: (value: boolean) => void;
}

export const SecuritySettings = ({
  sessionTimeout,
  setSessionTimeout,
  maintenanceMode,
  setMaintenanceMode,
}: SecuritySettingsProps) => {
  return (
    <section className="mb-8 xs:mb-10 sm:mb-12">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6">
        Security Settings
      </h2>

      <div className="space-y-4 xs:space-y-5 sm:space-y-6">
        {/* Session Timeout */}
        <div className="flex flex-col xs:flex-col sm:flex-row sm:items-center sm:justify-between gap-3 xs:gap-4">
          <div>
            <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black">
              Session Timeout
            </h3>
            <p className="text-xs xs:text-sm text-black font-light mt-1">
              Auto-logout after inactivity
            </p>
          </div>
          <div className="relative w-full xs:w-full sm:w-auto">
            <select
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
              className="w-full h-9 xs:h-[29px] px-2 xs:px-3 pr-8 rounded bg-black text-white text-xs appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-[#3CC27B]/20"
            >
              <option value="30">30 Minutes</option>
              <option value="60">1 Hour</option>
              <option value="120">2 Hours</option>
              <option value="240">4 Hours</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.65556 7.071L-0.0014382 1.414L1.41256 -4.94551e-07L6.36256 4.95L11.3126 -6.18079e-08L12.7266 1.414L7.06956 7.071C6.88203 7.25847 6.62773 7.36379 6.36256 7.36379C6.0974 7.36379 5.84309 7.25847 5.65556 7.071Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="flex flex-col xs:flex-col sm:flex-row sm:items-center sm:justify-between gap-3 xs:gap-4">
          <div>
            <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black">
              Maintenance Mode
            </h3>
            <p className="text-xs xs:text-sm text-black font-light mt-1">
              Enable maintenance mode for website
            </p>
          </div>
          <button
            onClick={() => setMaintenanceMode(!maintenanceMode)}
            className={`relative w-[46px] h-5 rounded-full transition-colors ${
              maintenanceMode ? "bg-[#3CC27B]" : "bg-[#D7D7D7]"
            }`}
          >
            <div
              className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-transform ${
                maintenanceMode ? "translate-x-[30px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
