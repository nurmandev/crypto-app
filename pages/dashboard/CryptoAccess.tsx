import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Clock } from "lucide-react";

export default function CryptoAccess() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const accessSteps = [
    {
      id: 1,
      title: "Account Verification",
      description: "Basic KYC verification completed",
      icon: "✓",
      status: "completed",
      color: "bg-green-100 text-green-700",
      iconColor: "text-green-500",
    },
    {
      id: 2,
      title: "Document Upload",
      description: "Government ID and address proof",
      icon: "⏱",
      status: "pending",
      color: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-500",
    },
    {
      id: 3,
      title: "Admin Review",
      description: "Manual verification by admin team",
      icon: "⏱",
      status: "pending",
      color: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-500",
    },
    {
      id: 4,
      title: "Admin Review",
      description: "Manual verification by admin team",
      icon: "⏱",
      status: "pending",
      color: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-500",
    },
  ];

  const accessSteps2 = [
    {
      id: 5,
      title: "Enable Crypto Access",
      description: "Full access to buy/sell cryptocurrencies",
      icon: "⏱",
      status: "pending",
      color: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-500",
    },
  ];

  const securityRequirements = [
    "Complete KYC verification",
    "Secure your account with 2FA",
    "Set up a transaction PIN",
    "Admin approval required",
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-2 md:mt-3 flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                  Send Request to Enable Crypto Access
                </h1>
                <p className="text-gray-500 text-base md:text-lg">
                  You need to request access to crypto before exchange
                </p>
              </div>
              <div className="bg-red-100 px-3 py-1 rounded-md w-fit">
                <span className="text-red-600 text-sm font-medium">
                  Inactive
                </span>
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {accessSteps.map((step, index) => (
              <div
                key={step.id}
                className="bg-white rounded-lg border border-gray-200 p-6 flex gap-4"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${step.color}`}
                >
                  <span className={`text-lg font-bold ${step.iconColor}`}>
                    {step.status === "completed" ? "✓" : "⏱"}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {step.description}
                  </p>
                  <span
                    className={`inline-block text-xs font-medium px-2 py-1 rounded ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {step.status === "completed" ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Enable Crypto Access Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {accessSteps2.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-lg border border-gray-200 p-6 flex gap-4 md:col-span-2"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${step.color}`}
                >
                  <span className={`text-lg font-bold ${step.iconColor}`}>
                    {step.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {step.description}
                  </p>
                  <span
                    className={`inline-block text-xs font-medium px-2 py-1 rounded bg-yellow-100 text-yellow-700`}
                  >
                    Enable
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Security Requirements */}
          <div className="bg-green-100 rounded-lg border-l-4 border-green-500 p-6 md:p-8">
            <h3 className="font-semibold text-black text-base md:text-lg mb-4">
              Security Requirements
            </h3>
            <ul className="space-y-3">
              {securityRequirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800"
                >
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span className="text-sm md:text-base">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
