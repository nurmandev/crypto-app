import React, { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";
import { RequestsTable } from "./components/RequestsTable";
import { RequestStatusFilter } from "./components/RequestStatusFilter";
import { RequestsPagination } from "./components/RequestsPagination";
import { RequestDetailsModal } from "./components/RequestDetailsModal";
import { RequestData } from "./components/RequestsTableRow";

export function Requests() {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const itemsPerPage = 10;

  // Dynamic state for requests
  const [requests, setRequests] = useState<RequestData[]>([
    {
      id: "1",
      requestId: "REQ-001",
      type: "Deposit INR",
      userName: "John Doe",
      userEmail: "john.doe@email.com",
      amount: "50,000",
      currency: "INR",
      status: "Pending",
      time: "2024-01-20 10:30:00",
    },
    {
      id: "2",
      requestId: "REQ-002",
      type: "Withdraw INR",
      userName: "Jane Smith",
      userEmail: "jane.smith@email.com",
      amount: "25000",
      currency: "INR",
      status: "Approved",
      time: "2024-01-20 09:15:00",
    },
    {
      id: "3",
      requestId: "REQ-003",
      type: "Deposit Crypto",
      userName: "John Doe",
      userEmail: "john.doe@email.com",
      amount: "0.05",
      currency: "BTC",
      status: "Pending",
      time: "2024-01-20 10:30:00",
    },
    {
      id: "4",
      requestId: "REQ-004",
      type: "Withdraw Crypto",
      userName: "Alice Chen",
      userEmail: "alice.chen@email.com",
      amount: "1.5",
      currency: "ETH",
      status: "Pending",
      time: "2024-01-20 11:15:00",
    },
    {
      id: "5",
      requestId: "REQ-005",
      type: "Deposit INR",
      userName: "Bob Wilson",
      userEmail: "bob.wilson@email.com",
      amount: "100,000",
      currency: "INR",
      status: "Pending",
      time: "2024-01-20 08:45:00",
    },
    {
      id: "6",
      requestId: "REQ-006",
      type: "Deposit Crypto",
      userName: "Carol Davis",
      userEmail: "carol.davis@email.com",
      amount: "0.02",
      currency: "ETH",
      status: "Rejected",
      time: "2024-01-19 14:20:00",
    },
    {
      id: "7",
      requestId: "REQ-007",
      type: "Withdraw INR",
      userName: "David Brown",
      userEmail: "david.brown@email.com",
      amount: "75,000",
      currency: "INR",
      status: "Pending",
      time: "2024-01-20 12:00:00",
    },
    {
      id: "8",
      requestId: "REQ-008",
      type: "Deposit INR",
      userName: "Emma White",
      userEmail: "emma.white@email.com",
      amount: "30,000",
      currency: "INR",
      status: "Approved",
      time: "2024-01-19 16:30:00",
    },
  ]);

  const handleView = (requestId: string) => {
    const request = requests.find((r) => r.id === requestId);
    if (request) {
      setSelectedRequest(request);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleApprove = (requestId: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId ? { ...req, status: "Approved" } : req,
      ),
    );

    const approvedRequest = requests.find((r) => r.id === requestId);
    toast({
      title: "Request Approved",
      description: `${approvedRequest?.requestId} has been approved successfully.`,
      duration: 3000,
    });

    handleCloseModal();
  };

  const handleReject = (requestId: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId ? { ...req, status: "Rejected" } : req,
      ),
    );

    const rejectedRequest = requests.find((r) => r.id === requestId);
    toast({
      title: "Request Rejected",
      description: `${rejectedRequest?.requestId} has been rejected.`,
      duration: 3000,
    });

    handleCloseModal();
  };

  const filteredRequests = useMemo(() => {
    if (selectedStatus === "all") {
      return requests;
    }

    return requests.filter(
      (request) =>
        request.status.toLowerCase() === selectedStatus.toLowerCase(),
    );
  }, [requests, selectedStatus]);

  const statusCounts = useMemo(() => {
    return {
      pending: requests.filter((r) => r.status === "Pending").length,
      approved: requests.filter((r) => r.status === "Approved").length,
      rejected: requests.filter((r) => r.status === "Rejected").length,
    };
  }, [requests]);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
                Requests
              </h1>
              <p className="text-xs sm:text-sm md:text-[17px] text-[#838383]">
                Manage All User Requests
              </p>
            </div>

            {/* Filter Section */}
            <div className="mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
              <div className="min-w-max lg:min-w-0">
                <RequestStatusFilter
                  selectedStatus={selectedStatus}
                  onStatusChange={setSelectedStatus}
                  pendingCount={statusCounts.pending}
                  approvedCount={statusCounts.approved}
                  rejectedCount={statusCounts.rejected}
                />
              </div>
            </div>

            {/* Table Section - Scrollable on Mobile */}
            <div className="flex-1 overflow-hidden mb-4 sm:mb-6">
              <div className="overflow-x-auto h-full">
                <RequestsTable
                  requests={paginatedRequests}
                  onView={handleView}
                />
              </div>
            </div>

            {/* Pagination Section */}
            <div className="mt-auto">
              <RequestsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={filteredRequests.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        </div>
      </div>

      <RequestDetailsModal
        request={selectedRequest}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}
