import React from "react";

interface BrandingAssetsProps {
  logoPreview: string | null;
  setLogoPreview: (value: string | null) => void;
  faviconPreview: string | null;
  setFaviconPreview: (value: string | null) => void;
  handleLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFaviconUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BrandingAssets = ({
  logoPreview,
  setLogoPreview,
  faviconPreview,
  setFaviconPreview,
  handleLogoUpload,
  handleFaviconUpload,
}: BrandingAssetsProps) => {
  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 pb-8 xs:pb-10 sm:pb-12 border-b border-[#E0E0E0]">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6">
        Branding & Assets
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
        {/* Logo Upload */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-2">
            Logo Upload
          </label>
          {logoPreview ? (
            <div className="w-full h-[120px] xs:h-[135px] sm:h-[165px] rounded-lg border-2 border-[#BABABA] flex flex-col items-center justify-center gap-2 xs:gap-3 bg-gray-50 relative">
              <img
                src={logoPreview}
                alt="Logo preview"
                className="max-h-20 xs:max-h-24 sm:max-h-32 max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setLogoPreview(null)}
                className="text-xs xs:text-sm text-[#3CC27B] hover:text-[#35a869] transition-colors"
              >
                Clear
              </button>
            </div>
          ) : (
            <label className="block w-full h-[120px] xs:h-[135px] sm:h-[165px] cursor-pointer">
              <div className="w-full h-full rounded-lg border-2 border-dashed border-[#BABABA] flex flex-col items-center justify-center gap-2 xs:gap-3 hover:border-[#3CC27B] hover:bg-[#F8F8F8] transition-all">
                <svg
                  width="16"
                  height="16"
                  className="xs:w-5 xs:h-5 sm:w-[20px] sm:h-[20px] text-black"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 15V4.8125L5.5 8.0625L3.75 6.25L10 0L16.25 6.25L14.5 8.0625L11.25 4.8125V15H8.75ZM0 20V13.75H2.5V17.5H17.5V13.75H20V20H0Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-xs xs:text-sm font-light text-black text-center leading-tight xs:leading-snug">
                  Click to upload logo
                  <br />
                  PNG, JPG up to 2MB
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </label>
          )}
        </div>

        {/* Favicon Upload */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-2">
            Favicon Upload
          </label>
          {faviconPreview ? (
            <div className="w-full h-[120px] xs:h-[135px] sm:h-[165px] rounded-lg border-2 border-[#BABABA] flex flex-col items-center justify-center gap-2 xs:gap-3 bg-gray-50 relative">
              <img
                src={faviconPreview}
                alt="Favicon preview"
                className="max-h-8 xs:max-h-10 sm:max-h-12 max-w-8 xs:max-w-10 sm:max-w-12 object-contain"
              />
              <button
                type="button"
                onClick={() => setFaviconPreview(null)}
                className="text-xs xs:text-sm text-[#3CC27B] hover:text-[#35a869] transition-colors"
              >
                Clear
              </button>
            </div>
          ) : (
            <label className="block w-full h-[120px] xs:h-[135px] sm:h-[165px] cursor-pointer">
              <div className="w-full h-full rounded-lg border-2 border-dashed border-[#BABABA] flex flex-col items-center justify-center gap-2 xs:gap-3 hover:border-[#3CC27B] hover:bg-[#F8F8F8] transition-all">
                <svg
                  width="16"
                  height="16"
                  className="xs:w-5 xs:h-5 sm:w-[20px] sm:h-[20px] text-black"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 15V4.8125L5.5 8.0625L3.75 6.25L10 0L16.25 6.25L14.5 8.0625L11.25 4.8125V15H8.75ZM0 20V13.75H2.5V17.5H17.5V13.75H20V20H0Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-xs xs:text-sm font-light text-black text-center leading-tight xs:leading-snug">
                  Click to upload favicon
                  <br />
                  PNG, JPG up to 2MB
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFaviconUpload}
              />
            </label>
          )}
        </div>
      </div>
    </section>
  );
};
