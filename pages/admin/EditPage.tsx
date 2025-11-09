import { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { useNavigate } from "react-router-dom";

export const EditPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [pageTitle, setPageTitle] = useState("About us");
  const [urlSlug, setUrlSlug] = useState("about-us");
  const [pageContent, setPageContent] = useState(
    `Learn more about usdtmpay and our mission to make cryptocurrency trading accessible.
We believe in empowering individuals with the tools and knowledge to participate in the crypto economy.
Our platform provides:
Secure trading environment
User-friendly interface
Educational resources
24/7 customer support`,
  );
  const [metaTitle, setMetaTitle] = useState("About Usdtpay - Our Story");
  const [metaDescription, setMetaDescription] = useState(
    "Learn about CryptoCrowd's mission and commitment to secure cryptocurrency trading.",
  );
  const [pageType, setPageType] = useState("About Usdtpay - Our Story");

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
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

          <div className="flex-1 p-3 xs:p-4 sm:p-6 lg:p-0 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-sm p-4 xs:p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-lg xs:text-xl sm:text-2xl font-medium text-black mb-1 xs:mb-2">
                    Edit Page - About Us
                  </h1>
                  <p className="text-xs xs:text-sm sm:text-base text-[#838383]">
                    Manage all website Pages
                  </p>
                </div>
                <button
                  onClick={() => navigate("/admin/pages")}
                  className="flex items-center gap-2 text-xs xs:text-sm font-medium text-black hover:opacity-70"
                >
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10V6H13.92L13.95 3.99H5V0L0 5L5 10Z"
                      fill="black"
                    />
                  </svg>
                  <span>Back to Pages</span>
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Page Title and URL Slug */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
                  <div>
                    <label className="block text-sm xs:text-base font-medium text-black mb-2">
                      Page Title
                    </label>
                    <input
                      type="text"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                      className="w-full px-4 xs:px-10 py-3 xs:py-4 bg-[#F0F0F0] rounded-md text-xs xs:text-sm text-[#8E8E8E] outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm xs:text-base font-medium text-black mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={urlSlug}
                      onChange={(e) => setUrlSlug(e.target.value)}
                      className="w-full px-4 xs:px-10 py-3 xs:py-4 bg-[#F0F0F0] rounded-md text-xs xs:text-sm text-[#8E8E8E] outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>
                </div>

                {/* Page Content */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-black mb-2">
                    Page Content
                  </label>

                  {/* Rich Text Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 xs:gap-2 mb-2">
                    <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-black text-white rounded text-xs xs:text-sm hover:opacity-90">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0V13H6.54545V7.3125H2.45455V13H0V0H2.45455V4.875H6.54545V0H9ZM18 10.5625V13H10.6364V10.5625H13.0909V3.25H12.2727V4.0625H10.6364V1.625H11.4545V0.8125H12.2727V0H15.5455V10.5625H18Z"
                          fill="white"
                        />
                      </svg>
                      <span className="hidden xs:inline">Heading</span>
                    </button>
                    <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-[#F3F3F3] text-black rounded text-xs xs:text-sm hover:opacity-90">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2.4375V0H3.14286V2.4375H5.39629L3.15229 10.5625H0V13H7.85714V10.5625H5.60371L7.84771 2.4375H11Z"
                          fill="black"
                        />
                      </svg>
                      <span className="hidden xs:inline">Italic</span>
                    </button>
                    <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-[#F3F3F3] text-black rounded text-xs xs:text-sm hover:opacity-90">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2.4375V0H3.14286V2.4375H5.39629L3.15229 10.5625H0V13H7.85714V10.5625H5.60371L7.84771 2.4375H11Z"
                          fill="black"
                        />
                      </svg>
                      <span className="hidden xs:inline">Link</span>
                    </button>
                    <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-[#F3F3F3] text-black rounded text-xs xs:text-sm hover:opacity-90">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3892 12.8014C15.3892 12.6968 15.3686 12.5932 15.3286 12.4966C15.2886 12.3999 15.23 12.3121 15.156 12.2381C15.082 12.1642 14.9942 12.1055 14.8976 12.0655C14.8009 12.0255 14.6974 12.0049 14.5928 12.005H0.7964V12.0169C0.691776 12.0168 0.588218 12.0374 0.491556 12.0774C0.394895 12.1174 0.307057 12.1761 0.23313 12.25C0.159203 12.3239 0.100488 12.4117 0.0605035 12.5084C0.0205192 12.605 4.78516e-05 12.7086 0 12.8132V24.2995H0.00894165C0.0538452 24.6968 0.386996 25.0068 0.796189 25.0068H14.4738V24.9899C14.5128 24.9959 14.5518 25.0018 14.5926 25.0018C15.002 25.0018 15.3352 24.692 15.3801 24.2945H15.394V12.8132L15.3892 12.8014ZM13.621 23.2386H11.6868C11.6801 23.2113 11.6702 23.1849 11.6573 23.1599L11.6605 23.1581L7.61457 16.1506L7.61298 16.1515C7.56842 16.0588 7.49857 15.9805 7.41151 15.9257C7.32444 15.8709 7.22366 15.8417 7.12081 15.8416C7.01511 15.8418 6.91167 15.8724 6.82298 15.9299C6.73429 15.9875 6.66407 16.0694 6.62094 16.1659L3.92848 20.8292L3.26916 19.6875L3.26827 19.688C3.24478 19.6391 3.20797 19.5979 3.16206 19.5689C3.11616 19.54 3.06309 19.5247 3.00886 19.5246C2.89154 19.5246 2.79092 19.5949 2.74545 19.6952L1.77319 21.3793V13.79H13.621V23.2386Z"
                          fill="black"
                        />
                        <path
                          d="M10.9236 18.2652C11.917 18.2652 12.7223 17.46 12.7223 16.4666C12.7223 15.4732 11.917 14.668 10.9236 14.668C9.93025 14.668 9.125 15.4732 9.125 16.4666C9.125 17.46 9.93025 18.2652 10.9236 18.2652Z"
                          fill="black"
                        />
                      </svg>
                      <span className="hidden xs:inline">Image</span>
                    </button>
                    <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-[#F3F3F3] text-black rounded text-xs xs:text-sm hover:opacity-90">
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z"
                          fill="black"
                        />
                      </svg>
                      <span className="hidden xs:inline">Lists</span>
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="border border-[#D3D3D3] rounded-md bg-[#FAFAFA] p-4 xs:p-6 sm:p-8 min-h-[300px] xs:min-h-[400px] sm:min-h-[576px]">
                    <h2 className="text-xl xs:text-2xl sm:text-[25px] font-bold text-black mb-3 xs:mb-4 sm:mb-6">
                      About Us
                    </h2>
                    <textarea
                      value={pageContent}
                      onChange={(e) => setPageContent(e.target.value)}
                      className="w-full bg-transparent text-xs xs:text-sm sm:text-base text-[#8E8E8E] leading-relaxed xs:leading-loose outline-none resize-none min-h-[200px] xs:min-h-[250px]"
                    />
                  </div>
                </div>

                {/* Meta Title and Meta Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
                  <div>
                    <label className="block text-sm xs:text-base font-medium text-black mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      className="w-full px-4 xs:px-10 py-3 xs:py-4 bg-[#F0F0F0] rounded-md text-xs xs:text-sm text-[#8E8E8E] outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm xs:text-base font-medium text-black mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="w-full px-4 xs:px-10 py-3 xs:py-4 bg-[#F0F0F0] rounded-md text-xs xs:text-sm text-[#8E8E8E] outline-none resize-none h-24 xs:h-32 lg:h-40 focus:ring-2 focus:ring-[#3CC27B]"
                    />
                  </div>
                </div>

                {/* Page Type */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6">
                  <div>
                    <label className="block text-sm xs:text-base font-medium text-black mb-2">
                      Page Type
                    </label>
                    <div className="relative">
                      <select
                        value={pageType}
                        onChange={(e) => setPageType(e.target.value)}
                        className="w-full px-4 xs:px-10 py-3 xs:py-4 bg-[#F0F0F0] rounded-md text-xs xs:text-sm text-[#8E8E8E] outline-none appearance-none focus:ring-2 focus:ring-[#3CC27B]"
                      >
                        <option>About Usdtpay - Our Story</option>
                        <option>Legal</option>
                        <option>System</option>
                        <option>Page</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.88244 10.6832C6.95125 10.7809 7.04332 10.8608 7.15072 10.916C7.25813 10.9712 7.37765 11 7.49898 11C7.62032 11 7.73984 10.9712 7.84724 10.916C7.95465 10.8608 8.04672 10.7809 8.11553 10.6832L14.8661 1.15052C14.9442 1.04057 14.99 0.911787 14.9985 0.778164C15.0071 0.644541 14.978 0.511189 14.9144 0.392595C14.8509 0.274002 14.7553 0.174703 14.6381 0.105489C14.5208 0.0362741 14.3865 -0.000209971 14.2495 9.09017e-07H0.748455C0.611827 0.000552638 0.477937 0.0375059 0.361185 0.106886C0.244433 0.176267 0.149235 0.27545 0.0858294 0.393769C0.0224239 0.512088 -0.0067904 0.645066 0.0013282 0.778403C0.00944681 0.911741 0.0545911 1.04039 0.131906 1.15052L6.88244 10.6832Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 xs:gap-4 pt-6 border-t border-gray-200">
                  <button className="flex-1 xs:flex-none xs:w-auto px-8 xs:px-16 py-3 xs:py-4 bg-black text-white rounded-md border border-[#C3C3C3] text-sm xs:text-base font-medium hover:bg-gray-800 transition-colors">
                    Save Changes
                  </button>
                  <button className="flex-1 xs:flex-none xs:w-auto px-8 xs:px-16 py-3 xs:py-4 bg-white text-black rounded-md border border-[#C3C3C3] text-sm xs:text-base font-medium hover:bg-gray-50 transition-colors">
                    Draft
                  </button>
                  <button className="flex-1 xs:flex-none xs:w-auto px-8 xs:px-16 py-3 xs:py-4 bg-[#FA1818] text-white rounded-md border border-[#C3C3C3] text-sm xs:text-base font-medium hover:bg-red-700 transition-colors">
                    Delete Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
