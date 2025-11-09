import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";
import EditUPIModal from "./payment-methods/components/EditUPIModal";
import EditBankModal from "./payment-methods/components/EditBankModal";
import AddPaymentMethodModal from "./payment-methods/components/AddPaymentMethodModal";

interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  subtitle: string;
  account: string;
  icon: string;
  isPrimary?: boolean;
}

export default function PaymentMethods() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUPIModalOpen, setIsUPIModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null,
  );
  const [isEditingModal, setIsEditingModal] = useState(false);

  // State for payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "UPI",
      name: "UPI Payment",
      subtitle: "UPI (Google Pay, PhonePe, Paytm)",
      account: "Account : john@paytm",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "2",
      type: "Bank",
      name: "Bank Account",
      subtitle: "Bank Account (IMPS/NEFT/RTGS)",
      account: "Account : State Bank of India",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: true,
    },
    {
      id: "3",
      type: "Paypal",
      name: "Paypalt",
      subtitle: "Paypal Wallet",
      account: "Account :  john.doe@example.com",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: false,
    },
    {
      id: "4",
      type: "USDT",
      name: "USDT Wallet",
      subtitle: "TRC20 Network",
      account: "Address: 1A1zP1eP5Q...DivfNa...",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: false,
    },
    {
      id: "5",
      type: "Skrill",
      name: "Skrill",
      subtitle: "Skrill Wallet",
      account: "Account : john.doe@example.com",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
      isPrimary: false,
    },
  ]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleEdit = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setIsEditingModal(true);
    if (method.type === "UPI") {
      setIsUPIModalOpen(true);
    } else if (method.type === "Bank") {
      setIsBankModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    console.log("Payment method deleted:", id);
  };

  const handleUPISave = (data: { upiId: string; qrCode: File | null }) => {
    if (isEditingModal && selectedMethod) {
      // Update existing method
      setPaymentMethods(
        paymentMethods.map((method) =>
          method.id === selectedMethod.id
            ? {
                ...method,
                account: `Account : ${data.upiId}`,
              }
            : method,
        ),
      );
      setIsEditingModal(false);
    } else {
      // Add new method
      const newMethod: PaymentMethod = {
        id: Date.now().toString(),
        type: "UPI",
        name: "UPI Payment",
        subtitle: "UPI (Google Pay, PhonePe, Paytm)",
        account: `Account : ${data.upiId}`,
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
        isPrimary: false,
      };
      setPaymentMethods([...paymentMethods, newMethod]);
    }
    setSelectedMethod(null);
    console.log("UPI Data saved:", data);
  };

  const handleBankSave = (data: any) => {
    if (isEditingModal && selectedMethod) {
      // Update existing method
      setPaymentMethods(
        paymentMethods.map((method) =>
          method.id === selectedMethod.id
            ? {
                ...method,
                account: `Account : ${data.bankName || selectedMethod.account}`,
              }
            : method,
        ),
      );
      setIsEditingModal(false);
    } else {
      // Add new method
      const newMethod: PaymentMethod = {
        id: Date.now().toString(),
        type: "Bank",
        name: "Bank Account",
        subtitle: "Bank Account (IMPS/NEFT/RTGS)",
        account: `Account : ${data.bankName || "New Bank"}`,
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1d6bd516909e21fac1ea7f96e71486c9c8ec838?width=80",
        isPrimary: false,
      };
      setPaymentMethods([...paymentMethods, newMethod]);
    }
    setSelectedMethod(null);
    console.log("Bank Data saved:", data);
  };

  const handleSelectPaymentMethod = (methodType: string) => {
    setIsEditingModal(false);
    setSelectedMethod(null);
    // Open the appropriate modal based on the selected method type
    if (methodType === "upi") {
      setIsUPIModalOpen(true);
    } else if (methodType === "bank") {
      setIsBankModalOpen(true);
    }
    // For other types, you can add similar logic
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-8 sm:pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-3 sm:px-4 md:px-6 lg:px-12 mt-3 sm:mt-4 md:mt-6 flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-1 sm:mb-2">
                  Payment Methods
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#838383]">
                  Manage your payment methods for deposits and withdrawals
                </p>
              </div>
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-[#161616] hover:bg-[#2a2a2a] text-white px-4 sm:px-6 md:px-9 py-2 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                Add Method
              </Button>
            </div>

            {/* Empty State */}
            {paymentMethods.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <p className="text-sm md:text-base text-[#838383] mb-4">
                  No payment methods added yet
                </p>
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-[#161616] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-md"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Method
                </Button>
              </div>
            )}

            {/* Payment Methods Grid */}
            {paymentMethods.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="bg-[#F8F8F8] rounded-lg p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-[#D5D5D5] flex-shrink-0 overflow-hidden bg-white">
                        <img
                          src={method.icon}
                          alt={method.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap mb-1">
                          <h3 className="text-xs sm:text-sm md:text-base font-medium text-black truncate">
                            {method.name}
                          </h3>
                          {method.isPrimary && (
                            <span className="px-2 py-0.5 bg-[#3CC27B]/30 rounded-full text-[9px] sm:text-[10px] text-black flex-shrink-0">
                              Primary
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs md:text-sm text-black font-light mb-1 truncate">
                          {method.subtitle}
                        </p>
                        <p className="text-[10px] sm:text-xs text-black font-light truncate">
                          {method.account}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEdit(method)}
                        className="p-1 sm:p-1.5 hover:bg-white/50 rounded transition-colors"
                        aria-label="Edit"
                        title="Edit payment method"
                      >
                        <Pencil className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                      </button>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this payment method?",
                            )
                          ) {
                            handleDelete(method.id);
                          }
                        }}
                        className="p-1 sm:p-1.5 hover:bg-white/50 rounded transition-colors"
                        aria-label="Delete"
                        title="Delete payment method"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FA1818]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Payment Method Modal */}
      <AddPaymentMethodModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedMethod(null);
          setIsEditingModal(false);
        }}
        onSelectMethod={handleSelectPaymentMethod}
      />

      {/* Edit UPI Modal */}
      <EditUPIModal
        isOpen={isUPIModalOpen}
        onClose={() => {
          setIsUPIModalOpen(false);
          setSelectedMethod(null);
          setIsEditingModal(false);
        }}
        onSave={handleUPISave}
        initialUpiId={
          selectedMethod?.account.replace("Account : ", "") || "yneware7@oksbi"
        }
      />

      {/* Edit Bank Modal */}
      <EditBankModal
        isOpen={isBankModalOpen}
        onClose={() => {
          setIsBankModalOpen(false);
          setSelectedMethod(null);
          setIsEditingModal(false);
        }}
        onSave={handleBankSave}
      />
    </div>
  );
}
