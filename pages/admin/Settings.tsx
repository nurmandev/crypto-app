import React from "react";
import { useState, useEffect } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { SiteInformation } from "./settings/components/SiteInformation";
import { BrandingAssets } from "./settings/components/BrandingAssets";
import { ColorsTypography } from "./settings/components/ColorsTypography";
import { ContactInformation } from "./settings/components/ContactInformation";
import { SecuritySettings } from "./settings/components/SecuritySettings";

const DEFAULT_SETTINGS = {
  siteName: "USDTmpay",
  siteTitle: "Usdtmpay - Secure Cryptocurrency Exchange Platform",
  siteDescription:
    "Trade cryptocurrencies securely with CryptoCrowd. Buy and sell Bitcoin, Ethereum and more.",
  seoKeywords: "cryptocurrency, bitcoin, ethereum, trading, exchange",
  author: "USDTmpay Team",
  primaryColor: "#6366F1",
  secondaryColor: "#8B5CF6",
  accentColor: "#6FECC2",
  backgroundColor: "#FFFFFF",
  textColor: "#1A1B23",
  fontFamily: "Roboto Bold",
  supportEmail: "support@usdtmpay.com",
  contactEmail: "contact@usdtmpay.com",
  adminEmail: "admin@usdtmpay.com",
  phone: "+91 9876543210",
  businessAddress: "123 Crypto Street, Mumbai, Maharashtra 400001",
  sessionTimeout: "30",
  maintenanceMode: false,
};

const getInitialSettings = () => {
  try {
    const savedSettings = localStorage.getItem("websiteSettings");
    if (savedSettings) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) };
    }
  } catch (error) {
    console.error("Failed to load settings:", error);
  }
  return DEFAULT_SETTINGS;
};

export const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const initialSettings = getInitialSettings();

  // Site Information
  const [siteName, setSiteName] = useState(initialSettings.siteName);
  const [siteTitle, setSiteTitle] = useState(initialSettings.siteTitle);
  const [siteDescription, setSiteDescription] = useState(
    initialSettings.siteDescription,
  );
  const [seoKeywords, setSeoKeywords] = useState(initialSettings.seoKeywords);
  const [author, setAuthor] = useState(initialSettings.author);

  // Branding & Assets
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [faviconPreview, setFaviconPreview] = useState<string | null>(null);

  // Colors & Typography
  const [primaryColor, setPrimaryColor] = useState(
    initialSettings.primaryColor,
  );
  const [primaryColorText, setPrimaryColorText] = useState(
    initialSettings.primaryColor,
  );
  const [secondaryColor, setSecondaryColor] = useState(
    initialSettings.secondaryColor,
  );
  const [secondaryColorText, setSecondaryColorText] = useState(
    initialSettings.secondaryColor,
  );
  const [accentColor, setAccentColor] = useState(initialSettings.accentColor);
  const [accentColorText, setAccentColorText] = useState(
    initialSettings.accentColor,
  );
  const [backgroundColor, setBackgroundColor] = useState(
    initialSettings.backgroundColor,
  );
  const [backgroundColorText, setBackgroundColorText] = useState(
    initialSettings.backgroundColor,
  );
  const [textColor, setTextColor] = useState(initialSettings.textColor);
  const [textColorText, setTextColorText] = useState(initialSettings.textColor);
  const [fontFamily, setFontFamily] = useState(initialSettings.fontFamily);

  // Contact Information
  const [supportEmail, setSupportEmail] = useState(
    initialSettings.supportEmail,
  );
  const [contactEmail, setContactEmail] = useState(
    initialSettings.contactEmail,
  );
  const [adminEmail, setAdminEmail] = useState(initialSettings.adminEmail);
  const [phone, setPhone] = useState(initialSettings.phone);
  const [businessAddress, setBusinessAddress] = useState(
    initialSettings.businessAddress,
  );

  // Security Settings
  const [sessionTimeout, setSessionTimeout] = useState(
    initialSettings.sessionTimeout,
  );
  const [maintenanceMode, setMaintenanceMode] = useState<boolean>(
    initialSettings.maintenanceMode,
  );

  // UI State
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Color input change handlers
  const handleColorChange = (
    value: string,
    setter: (val: string) => void,
    textSetter: (val: string) => void,
  ) => {
    setter(value);
    textSetter(value);
  };

  // Color text input change handler
  const handleColorTextChange = (
    value: string,
    setter: (val: string) => void,
    textSetter: (val: string) => void,
  ) => {
    textSetter(value);
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setter(value);
    }
  };

  // File upload handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFaviconPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save settings handler
  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      const settings = {
        siteName,
        siteTitle,
        siteDescription,
        seoKeywords,
        author,
        primaryColor,
        secondaryColor,
        accentColor,
        backgroundColor,
        textColor,
        fontFamily,
        supportEmail,
        contactEmail,
        adminEmail,
        phone,
        businessAddress,
        sessionTimeout,
        maintenanceMode,
        logoPreview,
        faviconPreview,
      };

      // Save to localStorage
      localStorage.setItem("websiteSettings", JSON.stringify(settings));

      setSaveMessage({ type: "success", text: "Settings saved successfully!" });
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      console.error("Failed to save settings:", error);
      setSaveMessage({
        type: "error",
        text: "Failed to save settings. Please try again.",
      });
      setTimeout(() => setSaveMessage(null), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-0 max-w-[1920px] mx-auto min-h-screen">
        {/* Sidebar with Mobile Overlay */}
        <div>
          <AdminSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 lg:hidden z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-0 min-h-screen lg:gap-4 pt-16 sm:pt-20 lg:pt-0 lg:p-6">
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          <div className="bg-white rounded-none sm:rounded-lg lg:rounded-[10px] p-3 sm:p-5 md:p-8 m-3 sm:m-4 md:m-0 flex flex-col flex-1">
            {/* Header Section */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h1 className="text-base sm:text-lg md:text-[20px] font-semibold sm:font-medium text-black mb-1 sm:mb-2">
                Website Settings
              </h1>
              <p className="text-xs sm:text-sm md:text-[17px] text-[#838383]">
                Manage your website configuration and appearance
              </p>
            </div>

            {/* Settings sections (components) */}
            <SiteInformation
              siteName={siteName}
              setSiteName={setSiteName}
              siteTitle={siteTitle}
              setSiteTitle={setSiteTitle}
              siteDescription={siteDescription}
              setSiteDescription={setSiteDescription}
              seoKeywords={seoKeywords}
              setSeoKeywords={setSeoKeywords}
              author={author}
              setAuthor={setAuthor}
            />

            <BrandingAssets
              logoPreview={logoPreview}
              setLogoPreview={setLogoPreview}
              faviconPreview={faviconPreview}
              setFaviconPreview={setFaviconPreview}
              handleLogoUpload={handleLogoUpload}
              handleFaviconUpload={handleFaviconUpload}
            />

            <ColorsTypography
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              primaryColorText={primaryColorText}
              setPrimaryColorText={setPrimaryColorText}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
              secondaryColorText={secondaryColorText}
              setSecondaryColorText={setSecondaryColorText}
              accentColor={accentColor}
              setAccentColor={setAccentColor}
              accentColorText={accentColorText}
              setAccentColorText={setAccentColorText}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              backgroundColorText={backgroundColorText}
              setBackgroundColorText={setBackgroundColorText}
              textColor={textColor}
              setTextColor={setTextColor}
              textColorText={textColorText}
              setTextColorText={setTextColorText}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              handleColorChange={handleColorChange}
              handleColorTextChange={handleColorTextChange}
            />

            <ContactInformation
              supportEmail={supportEmail}
              setSupportEmail={setSupportEmail}
              contactEmail={contactEmail}
              setContactEmail={setContactEmail}
              adminEmail={adminEmail}
              setAdminEmail={setAdminEmail}
              phone={phone}
              setPhone={setPhone}
              businessAddress={businessAddress}
              setBusinessAddress={setBusinessAddress}
            />

            <SecuritySettings
              sessionTimeout={sessionTimeout}
              setSessionTimeout={setSessionTimeout}
              maintenanceMode={maintenanceMode}
              setMaintenanceMode={setMaintenanceMode}
            />

            {/* Save Notification */}
            {saveMessage && (
              <div
                className={`mb-4 xs:mb-6 p-3 xs:p-4 rounded-lg text-xs xs:text-sm font-medium transition-all ${
                  saveMessage.type === "success"
                    ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#4CAF50]"
                    : "bg-[#FFEBEE] text-[#C62828] border border-[#F44336]"
                }`}
              >
                {saveMessage.text}
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end pt-6 xs:pt-8 sm:pt-8">
              <button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-3 bg-[#3CC27B] text-white text-xs xs:text-sm sm:text-base font-semibold rounded-lg hover:bg-[#35a869] active:bg-[#2fa867] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
