import React from "react";
import { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { useNavigate } from "react-router-dom";

interface Page {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  type: "System" | "Page" | "Legal";
  status: "Published" | "Draft";
  created: string;
  updated: string;
}

const mockPages: Page[] = [
  {
    id: "1",
    title: "Home",
    subtitle: "Usdtmpay - Secure Cryptocurrency Trading",
    slug: "/home",
    type: "System",
    status: "Published",
    created: "2024-01-01",
    updated: "2024-01-20",
  },
  {
    id: "2",
    title: "About Us",
    subtitle: "Usdtmpay - Our Story",
    slug: "/about",
    type: "Page",
    status: "Published",
    created: "2024-01-01",
    updated: "2024-01-20",
  },
  {
    id: "3",
    title: "Privacy Policy",
    subtitle: "Usdtmpay - Privacy Policy",
    slug: "/privacy-policy",
    type: "Legal",
    status: "Published",
    created: "2024-01-01",
    updated: "2024-01-20",
  },
  {
    id: "4",
    title: "Terms of Service",
    subtitle: "Usdtmpay - Terms of Service",
    slug: "/terms-of-service",
    type: "System",
    status: "Published",
    created: "2024-01-01",
    updated: "2024-01-20",
  },
  {
    id: "5",
    title: "Contact Us",
    subtitle: "Usdtmpay - Contact Us",
    slug: "/contact-us",
    type: "Page",
    status: "Draft",
    created: "2024-01-01",
    updated: "2024-01-20",
  },
];

export const Pages = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pages] = useState<Page[]>(mockPages);
  const navigate = useNavigate();

  const stats = [
    {
      label: "Total Pages",
      value: pages.length,
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35"
            height="35"
            rx="17.5"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M23 10.9971H22.9991V10.3C22.9991 10.2606 22.991 10.2216 22.9752 10.1852C22.9594 10.1488 22.9362 10.1157 22.907 10.0879C22.8779 10.06 22.8432 10.0379 22.8051 10.0228C22.767 10.0078 22.7261 10 22.6848 10H16.7139L12 14.5001V24.7C12 24.8658 12.1406 25 12.3143 25H22.6848C22.7261 25 22.767 24.9922 22.8051 24.9772C22.8432 24.9621 22.8779 24.94 22.907 24.9121C22.9362 24.8843 22.9594 24.8512 22.9752 24.8148C22.991 24.7784 22.9991 24.7394 22.9991 24.7V24.2755H23V10.9971ZM13.8087 23.2737V15.1001H17.0282C17.1115 15.1001 17.1914 15.0685 17.2504 15.0122C17.3093 14.9559 17.3424 14.8796 17.3424 14.8001V11.7267H21.1913V23.2737H13.8087Z"
            fill="#3CC27B"
          />
        </svg>
      ),
    },
    {
      label: "Published",
      value: pages.filter((p) => p.status === "Published").length,
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35"
            height="35"
            rx="17.5"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 25C18.4849 25 19.4602 24.806 20.3701 24.4291C21.2801 24.0522 22.1069 23.4997 22.8033 22.8033C23.4997 22.1069 24.0522 21.2801 24.4291 20.3701C24.806 19.4602 25 18.4849 25 17.5C25 16.5151 24.806 15.5398 24.4291 14.6299C24.0522 13.7199 23.4997 12.8931 22.8033 12.1967C22.1069 11.5003 21.2801 10.9478 20.3701 10.5709C19.4602 10.194 18.4849 10 17.5 10C15.5109 10 13.6032 10.7902 12.1967 12.1967C10.7902 13.6032 10 15.5109 10 17.5C10 19.4891 10.7902 21.3968 12.1967 22.8033C13.6032 24.2098 15.5109 25 17.5 25ZM17.3067 20.5333L21.4733 15.5333L20.1933 14.4667L16.61 18.7658L14.7558 16.9108L13.5775 18.0892L16.0775 20.5892L16.7225 21.2342L17.3067 20.5333Z"
            fill="#3CC27B"
          />
        </svg>
      ),
    },
    {
      label: "Drafts",
      value: pages.filter((p) => p.status === "Draft").length,
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35"
            height="35"
            rx="17.5"
            fill="#FBD25F"
            fillOpacity="0.65"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5074 19.2498L21.8853 23.6228C22.1177 23.8548 22.4327 23.9852 22.7613 23.9852C23.0898 23.9852 23.4049 23.8548 23.6372 23.6228C23.8695 23.3907 24 23.076 24 22.7479C24 22.4197 23.8695 22.105 23.6372 21.873L19.2576 17.5L23.6364 13.127C23.7513 13.0122 23.8425 12.8758 23.9047 12.7257C23.9669 12.5756 23.9989 12.4147 23.9989 12.2522C23.9988 12.0898 23.9668 11.9289 23.9045 11.7789C23.8422 11.6288 23.751 11.4925 23.6359 11.3776C23.5209 11.2628 23.3844 11.1717 23.2341 11.1096C23.0838 11.0474 22.9228 11.0155 22.7601 11.0155C22.5975 11.0155 22.4365 11.0476 22.2862 11.1098C22.136 11.172 21.9995 11.2631 21.8845 11.378L17.5074 15.751L13.1295 11.378C13.0153 11.2598 12.8787 11.1655 12.7276 11.1007C12.5766 11.0358 12.4141 11.0016 12.2497 11.0001C12.0853 10.9985 11.9222 11.0298 11.77 11.0919C11.6177 11.154 11.4794 11.2458 11.3631 11.3619C11.2468 11.478 11.1548 11.616 11.0924 11.768C11.0301 11.92 10.9987 12.0829 11 12.2471C11.0014 12.4113 11.0355 12.5737 11.1003 12.7246C11.1651 12.8755 11.2594 13.0121 11.3776 13.1262L15.7572 17.5L11.3785 21.8738C11.2602 21.9879 11.166 22.1245 11.1011 22.2754C11.0363 22.4263 11.0022 22.5887 11.0009 22.7529C10.9995 22.9171 11.0309 23.08 11.0933 23.232C11.1556 23.384 11.2476 23.522 11.3639 23.6381C11.4803 23.7542 11.6186 23.846 11.7708 23.9081C11.923 23.9702 12.0861 24.0015 12.2505 23.9999C12.4149 23.9984 12.5774 23.9642 12.7285 23.8993C12.8795 23.8345 13.0161 23.7402 13.1303 23.622L17.5074 19.2498Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      label: "System Page",
      value: pages.filter((p) => p.type === "System").length,
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35"
            height="35"
            rx="17.5"
            fill="#3CC27B"
            fillOpacity="0.31"
          />
          <path
            d="M17.5 25C15.7625 24.5625 14.328 23.5655 13.1965 22.009C12.065 20.4525 11.4995 18.7245 11.5 16.825V12.25L17.5 10L23.5 12.25V16.825C23.5 18.725 22.9345 20.4533 21.8035 22.0098C20.6725 23.5663 19.238 24.563 17.5 25ZM17.5 23.425C18.8 23.0125 19.875 22.1875 20.725 20.95C21.575 19.7125 22 18.3375 22 16.825V13.2812L17.5 11.5938L13 13.2812V16.825C13 18.3375 13.425 19.7125 14.275 20.95C15.125 22.1875 16.2 23.0125 17.5 23.425Z"
            fill="#3CC27B"
          />
        </svg>
      ),
    },
  ];

  const getTypeStyle = (type: Page["type"]) => {
    switch (type) {
      case "System":
        return "bg-[#F3AEFE] text-black";
      case "Page":
        return "bg-[#A2B5FF] text-black";
      case "Legal":
        return "bg-[rgba(253,189,189,0.44)] text-[#FA1818]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusStyle = (status: Page["status"]) => {
    switch (status) {
      case "Published":
        return "bg-[#BDFDDB] text-black";
      case "Draft":
        return "bg-[rgba(251,210,95,0.65)] text-black";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
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

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          <div className="bg-white rounded-[10px] p-4 sm:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl font-medium text-black mb-2">
                  Pages
                </h1>
                <p className="text-base sm:text-lg text-[#838383]">
                  Manage all website Pages
                </p>
              </div>
              <button
                onClick={() => navigate("/admin/pages/add")}
                className="inline-flex items-center justify-center gap-2.5 px-9 py-2 bg-[#161616] text-white rounded-md hover:bg-black transition-colors text-sm sm:text-base font-medium"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 0C7.94 0 8.5 0.56 8.5 1.25V6H13.25C13.5815 6 13.8995 6.1317 14.1339 6.36612C14.3683 6.60054 14.5 6.91848 14.5 7.25C14.5 7.58152 14.3683 7.89946 14.1339 8.13388C13.8995 8.3683 13.5815 8.5 13.25 8.5H8.5V13.25C8.5 13.5815 8.3683 13.8995 8.13388 14.1339C7.89946 14.3683 7.58152 14.5 7.25 14.5C6.91848 14.5 6.60054 14.3683 6.36612 14.1339C6.1317 13.8995 6 13.5815 6 13.25V8.5H1.25C0.918479 8.5 0.600537 8.3683 0.366117 8.13388C0.131696 7.89946 0 7.58152 0 7.25C0 6.91848 0.131696 6.60054 0.366117 6.36612C0.600537 6.1317 0.918479 6 1.25 6H6V1.25C6 0.56 6.56 0 7.25 0Z"
                    fill="white"
                  />
                </svg>
                <span>Add Page</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl border border-[#D4D4D4] bg-white"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-black mb-1">
                      {stat.label}
                    </span>
                    <span className="text-xl font-bold text-black">
                      {stat.value}
                    </span>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>

            {/* Table Header */}
            <h2 className="text-lg sm:text-xl font-medium text-black mb-6">
              All Pages
            </h2>

            {/* Table - Desktop */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#C9C9C9]">
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Title
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Slug
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Type
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Status
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Created
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Updated
                    </th>
                    <th className="text-left py-4 text-[#313131] font-bold text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr key={page.id} className="border-b border-[#C9C9C9]">
                      <td className="py-6">
                        <div>
                          <div className="text-black font-semibold text-base mb-1">
                            {page.title}
                          </div>
                          <div className="text-black text-sm font-light">
                            {page.subtitle}
                          </div>
                        </div>
                      </td>
                      <td className="py-6 text-black text-sm">{page.slug}</td>
                      <td className="py-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded text-xs ${getTypeStyle(
                            page.type,
                          )}`}
                        >
                          {page.type}
                        </span>
                      </td>
                      <td className="py-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded text-xs ${getStatusStyle(
                            page.status,
                          )}`}
                        >
                          {page.status}
                        </span>
                      </td>
                      <td className="py-6 text-black text-sm font-light">
                        {page.created}
                      </td>
                      <td className="py-6 text-black text-sm font-light">
                        {page.updated}
                      </td>
                      <td className="py-6">
                        <button
                          className="hover:opacity-70 transition-opacity"
                          onClick={() =>
                            navigate(`/admin/pages/edit/${page.id}`)
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.1545 0L17.9984 2.84387L15.8304 5.0128L12.9865 2.16893L15.1545 0ZM4.73828 13.26H7.58218L14.49 6.35226L11.6461 3.50839L4.73828 10.4161V13.26Z"
                              fill="black"
                            />
                            <path
                              d="M15.1675 16.1038H4.88961C4.86497 16.1038 4.83937 16.1133 4.81473 16.1133C4.78344 16.1133 4.75216 16.1048 4.71993 16.1038H1.89593V2.83244H8.38667L10.2826 0.936523H1.89593C0.850326 0.936523 0 1.78589 0 2.83244V16.1038C0 17.1504 0.850326 17.9997 1.89593 17.9997H15.1675C15.6703 17.9997 16.1525 17.8 16.5081 17.4444C16.8637 17.0889 17.0634 16.6067 17.0634 16.1038V7.88694L15.1675 9.78286V16.1038Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table - Mobile */}
            <div className="lg:hidden space-y-4">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="border border-[#C9C9C9] rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-black font-semibold text-base mb-1">
                        {page.title}
                      </div>
                      <div className="text-black text-sm font-light mb-2">
                        {page.subtitle}
                      </div>
                      <div className="text-black text-sm">{page.slug}</div>
                    </div>
                    <button
                      className="hover:opacity-70 transition-opacity flex-shrink-0"
                      onClick={() => navigate(`/admin/pages/edit/${page.id}`)}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1545 0L17.9984 2.84387L15.8304 5.0128L12.9865 2.16893L15.1545 0ZM4.73828 13.26H7.58218L14.49 6.35226L11.6461 3.50839L4.73828 10.4161V13.26Z"
                          fill="black"
                        />
                        <path
                          d="M15.1675 16.1038H4.88961C4.86497 16.1038 4.83937 16.1133 4.81473 16.1133C4.78344 16.1133 4.75216 16.1048 4.71993 16.1038H1.89593V2.83244H8.38667L10.2826 0.936523H1.89593C0.850326 0.936523 0 1.78589 0 2.83244V16.1038C0 17.1504 0.850326 17.9997 1.89593 17.9997H15.1675C15.6703 17.9997 16.1525 17.8 16.5081 17.4444C16.8637 17.0889 17.0634 16.6067 17.0634 16.1038V7.88694L15.1675 9.78286V16.1038Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs ${getTypeStyle(
                        page.type,
                      )}`}
                    >
                      {page.type}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs ${getStatusStyle(
                        page.status,
                      )}`}
                    >
                      {page.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-[#838383]">Created: </span>
                      <span className="text-black font-light">
                        {page.created}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#838383]">Updated: </span>
                      <span className="text-black font-light">
                        {page.updated}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
