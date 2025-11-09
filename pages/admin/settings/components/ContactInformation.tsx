import React from "react";

interface ContactInformationProps {
  supportEmail: string;
  setSupportEmail: (value: string) => void;
  contactEmail: string;
  setContactEmail: (value: string) => void;
  adminEmail: string;
  setAdminEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  businessAddress: string;
  setBusinessAddress: (value: string) => void;
}

export const ContactInformation = ({
  supportEmail,
  setSupportEmail,
  contactEmail,
  setContactEmail,
  adminEmail,
  setAdminEmail,
  phone,
  setPhone,
  businessAddress,
  setBusinessAddress,
}: ContactInformationProps) => {
  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 pb-8 xs:pb-10 sm:pb-12 border-b border-[#E0E0E0]">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
        {/* Support Email */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Support Email
          </label>
          <input
            type="email"
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            className="w-full h-10 xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Contact Email
          </label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="w-full h-10 xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Admin Email */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Admin Email
          </label>
          <input
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="w-full h-10 xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-10 xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
          />
        </div>

        {/* Business Address */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
            Business Address
          </label>
          <textarea
            rows={3}
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all resize-none"
          />
        </div>
      </div>
    </section>
  );
};
