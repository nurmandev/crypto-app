import React, { useState, useMemo } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { TransactionsTable } from "./transactions/components/TransactionsTable";
import { TransactionStatusFilter } from "./transactions/components/TransactionStatusFilter";
import { TransactionsPagination } from "./transactions/components/TransactionsPagination";
import { TransactionData } from "./transactions/components/TransactionsTableRow";
import { TransactionDetailsModal } from "./transactions/components/TransactionDetailsModal";

const mockTransactions: TransactionData[] = [
  {
    id: "1",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Active",
    time: "2 mins ago",
    paymentMethod: "UPI",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x1234...5678",
  },
  {
    id: "2",
    transactionId: "TXN-002",
    user: "jane.smith@email.com",
    userName: "Jane Smith",
    type: "Sell",
    crypto: "ETH",
    amount: "0.05",
    inrValue: "₹280,800",
    status: "Pending",
    time: "5 mins ago",
    paymentMethod: "Bank Transfer",
    fees: "₹1,404",
    exchangeRate: "₹5,616,000",
    transactionHash: "0xabcd...efgh",
  },
  {
    id: "3",
    transactionId: "TXN-003",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "ETH",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "UPI",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x5678...1234",
  },
  {
    id: "4",
    transactionId: "TXN-004",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "Card",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x9876...5432",
  },
  {
    id: "5",
    transactionId: "TXN-005",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "UPI",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0xfedc...ba98",
  },
  {
    id: "6",
    transactionId: "TXN-006",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "UPI",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x1111...2222",
  },
  {
    id: "7",
    transactionId: "TXN-007",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "Bank Transfer",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x3333...4444",
  },
  {
    id: "8",
    transactionId: "TXN-008",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "UPI",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x5555...6666",
  },
  {
    id: "9",
    transactionId: "TXN-009",
    user: "john.doe@email.com",
    userName: "John Doe",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
    paymentMethod: "Card",
    fees: "₹1,000",
    exchangeRate: "₹4,000,000",
    transactionHash: "0x7777...8888",
  },
];

export const Transactions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const itemsPerPage = 10;

  const handleView = (transactionId: string) => {
    const transaction = mockTransactions.find((t) => t.id === transactionId);
    if (transaction) {
      setSelectedTransaction(transaction);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleApprove = (transactionId: string) => {
    console.log("Approving transaction:", transactionId);
    // TODO: Implement actual approval logic (API call)
  };

  const handleReject = (transactionId: string) => {
    console.log("Rejecting transaction:", transactionId);
    // TODO: Implement actual rejection logic (API call)
  };

  const filteredTransactions = useMemo(() => {
    if (selectedStatus === "all") {
      return mockTransactions;
    }

    return mockTransactions.filter(
      (transaction) =>
        transaction.status.toLowerCase() === selectedStatus.toLowerCase(),
    );
  }, [selectedStatus]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="flex gap-0 lg:gap-6 max-w-[1920px] mx-auto min-h-screen">
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            sidebarOpen={isSidebarOpen}
          />

          <div className="bg-white rounded-[10px] p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-xl md:text-[20px] font-medium text-black mb-2">
                Transaction Management
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] text-[#838383]">
                Manage All User transactions
              </p>
            </div>

            <div className="flex items-center justify-end mb-6 sm:mb-8">
              <TransactionStatusFilter
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
              />
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="sm:px-0 px-4">
                <TransactionsTable
                  transactions={paginatedTransactions}
                  onView={handleView}
                />
              </div>
            </div>

            <TransactionsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredTransactions.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>

      <TransactionDetailsModal
        transaction={selectedTransaction}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};
