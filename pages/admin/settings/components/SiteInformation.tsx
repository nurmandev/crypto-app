import React from "react";

interface SiteInformationProps {
  siteName: string;
  setSiteName: (value: string) => void;
  siteTitle: string;
  setSiteTitle: (value: string) => void;
  siteDescription: string;
  setSiteDescription: (value: string) => void;
  seoKeywords: string;
  setSeoKeywords: (value: string) => void;
  author: string;
  setAuthor: (value: string) => void;
}

export const SiteInformation = ({
  siteName,
  setSiteName,
  siteTitle,
  setSiteTitle,
  siteDescription,
  setSiteDescription,
  seoKeywords,
  setSeoKeywords,
  author,
  setAuthor,
}: SiteInformationProps) => {
  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 pb-8 xs:pb-10 sm:pb-12 border-b border-[#E0E0E0]">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6">
        Site Information
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
        {/* Site Name */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Site Name
          </label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full h-[44px] xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Site Title */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Site Title
          </label>
          <input
            type="text"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            className="w-full h-[44px] xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Site Description */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Site Description
          </label>
          <textarea
            rows={3}
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
          />
        </div>

        {/* SEO Keywords */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            SEO Keywords
          </label>
          <input
            type="text"
            value={seoKeywords}
            onChange={(e) => setSeoKeywords(e.target.value)}
            className="w-full h-[44px] xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full h-[44px] xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>
      </div>
    </section>
  );
};
