import { useState, useRef } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import TransactionItem from "./history/components/TransactionItem";
import Pagination from "./history/components/Pagination";
import FilterDropdown from "./history/components/FilterDropdown";
import DateRangeModal from "./history/components/DateRangeModal";
import TransactionDetailsModal from "./history/components/TransactionDetailsModal";
import { Calendar, Filter } from "lucide-react";

interface Transaction {
  id: string;
  type: string;
  date: string;
  transactionId: string;
  status: "Approved" | "Pending" | "Rejected";
  amount: string;
  subAmount?: string;
}

export default function History() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Approved");
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{
    startDate: string;
    endDate: string;
  } | null>(null);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const dateRangeButtonRef = useRef<HTMLButtonElement>(null);
  const totalPages = 5;

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const transactions: Transaction[] = [
    {
      id: "1",
      type: "Buy BTC",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Approved",
      amount: "0.012 BTC",
      subAmount: "₹52,345",
    },
    {
      id: "2",
      type: "Deposit INR",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Pending",
      amount: "₹50,000",
    },
    {
      id: "3",
      type: "Sell BTC",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Rejected",
      amount: "0.012 BTC",
      subAmount: "₹52,345",
    },
    {
      id: "4",
      type: "Withdraw INR",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Pending",
      amount: "₹25,000",
    },
    {
      id: "5",
      type: "Deposit INR",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Pending",
      amount: "₹50,000",
    },
    {
      id: "6",
      type: "Sell BTC",
      date: "2024-12-20 14:30",
      transactionId: "0x1234...5678",
      status: "Rejected",
      amount: "0.012 BTC",
      subAmount: "₹52,345",
    },
  ];

  const handleViewTransaction = (transactionId: string) => {
    const transaction = transactions.find((t) => t.id === transactionId);
    if (transaction) {
      setSelectedTransaction(transaction);
      setIsModalOpen(true);
    }
  };

  const handleApplyDateRange = (startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-12 md:pb-16">
      {/* Top Navigation Bar */}
      <DashboardHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      <div className="px-4 md:px-6 lg:px-12 mt-4 md:mt-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Sidebar Navigation */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-medium text-black mb-2">
                Transaction History
              </h1>
              <p className="text-sm md:text-base text-[#838383]">
                Scan the QR code with any UPI app to complete payment
              </p>
            </div>
            <div className="flex gap-2 self-start sm:self-auto relative">
              <button
                ref={filterButtonRef}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-black text-white rounded text-xs hover:bg-black/90 transition-colors"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.02967C0 0.756582 0.105357 0.494682 0.292893 0.301582C0.48043 0.108482 0.734784 0 1 0H11C11.2652 0 11.5196 0.108482 11.7071 0.301582C11.8946 0.494682 12 0.756582 12 1.02967V2.46159C11.9999 2.82567 11.8594 3.17482 11.6093 3.43222L8 7.14863V12.2448C8.00002 12.3735 7.96808 12.5001 7.90721 12.6125C7.84634 12.725 7.75857 12.8195 7.65223 12.8872C7.54589 12.9549 7.42451 12.9935 7.29962 12.9992C7.17473 13.005 7.05048 12.9778 6.93867 12.9203L4.46067 11.6448C4.32225 11.5736 4.20583 11.464 4.12447 11.3285C4.0431 11.1929 4.00001 11.0367 4 10.8774V7.14863L0.390667 3.43222C0.140601 3.17482 7.55165e-05 2.82567 0 2.46159V1.02967Z"
                    fill="white"
                  />
                </svg>
                Filter
              </button>
              <button
                ref={dateRangeButtonRef}
                onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-black text-white rounded text-xs hover:bg-black/90 transition-colors relative"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M11.25 1.12263L8.24738 1.12264V0.375088C8.24738 0.167852 8.07956 0 7.87238 0C7.66519 0 7.49738 0.167852 7.49738 0.375088V1.12245H4.49738V0.375088C4.49738 0.167852 4.32956 0 4.12238 0C3.91519 0 3.74738 0.167852 3.74738 0.375088V1.12245H0.75C0.335812 1.12245 0 1.45834 0 1.87263V11.2498C0 11.6641 0.335812 12 0.75 12H11.25C11.6642 12 12 11.6641 12 11.2498V1.87263C12 1.45852 11.6642 1.12263 11.25 1.12263ZM11.25 11.2498H0.75V1.87263H3.74738V2.25053C3.74738 2.45775 3.91519 2.62562 4.12238 2.62562C4.32956 2.62562 4.49738 2.45775 4.49738 2.25053V1.87281H7.49738V2.25072C7.49738 2.45795 7.66519 2.6258 7.87238 2.6258C8.07956 2.6258 8.24738 2.45795 8.24738 2.25072V1.87281H11.25V11.2498ZM8.625 5.99877H9.375C9.582 5.99877 9.75 5.83073 9.75 5.62368V4.87351C9.75 4.66646 9.582 4.49842 9.375 4.49842H8.625C8.418 4.49842 8.25 4.66646 8.25 4.87351V5.62368C8.25 5.83073 8.418 5.99877 8.625 5.99877ZM8.625 8.99929H9.375C9.582 8.99929 9.75 8.83143 9.75 8.6242V7.87402C9.75 7.66697 9.582 7.49893 9.375 7.49893H8.625C8.418 7.49893 8.25 7.66697 8.25 7.87402V8.6242C8.25 8.83162 8.418 8.99929 8.625 8.99929ZM6.375 7.49893H5.625C5.418 7.49893 5.25 7.66697 5.25 7.87402V8.6242C5.25 8.83143 5.418 8.99929 5.625 8.99929H6.375C6.582 8.99929 6.75 8.83143 6.75 8.6242V7.87402C6.75 7.66716 6.582 7.49893 6.375 7.49893ZM6.375 4.49842H5.625C5.418 4.49842 5.25 4.66646 5.25 4.87351V5.62368C5.25 5.83073 5.418 5.99877 5.625 5.99877H6.375C6.582 5.99877 6.75 5.83073 6.75 5.62368V4.87351C6.75 4.66627 6.582 4.49842 6.375 4.49842ZM3.375 4.49842H2.625C2.418 4.49842 2.25 4.66646 2.25 4.87351V5.62368C2.25 5.83073 2.418 5.99877 2.625 5.99877H3.375C3.582 5.99877 3.75 5.83073 3.75 5.62368V4.87351C3.75 4.66627 3.582 4.49842 3.375 4.49842ZM3.375 7.49893H2.625C2.418 7.49893 2.25 7.66697 2.25 7.87402V8.6242C2.25 8.83143 2.418 8.99929 2.625 8.99929H3.375C3.582 8.99929 3.75 8.83143 3.75 8.6242V7.87402C3.75 7.66716 3.582 7.49893 3.375 7.49893Z"
                    fill="white"
                  />
                </svg>
                Date Range
              </button>
              <DateRangeModal
                isOpen={isDateRangeOpen}
                onClose={() => setIsDateRangeOpen(false)}
                onApply={handleApplyDateRange}
                anchorRef={dateRangeButtonRef}
              />
              <FilterDropdown
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
                anchorRef={filterButtonRef}
              />
            </div>
          </div>

          {/* Transactions List */}
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                type={transaction.type}
                date={transaction.date}
                transactionId={transaction.transactionId}
                status={transaction.status}
                amount={transaction.amount}
                subAmount={transaction.subAmount}
                onClick={() => handleViewTransaction(transaction.id)}
              />
            ))}
          </div>

          {/* Footer with Pagination */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2">
              <p className="text-sm md:text-base text-[#838383]">
                Showing 10 out of 30
              </p>
              {dateRange && (
                <span className="text-xs text-gray-500">
                  • {dateRange.startDate} to {dateRange.endDate}
                </span>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Transaction Details Modal */}
          <TransactionDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transaction={selectedTransaction}
          />
        </div>
      </div>
    </div>
  );
}
