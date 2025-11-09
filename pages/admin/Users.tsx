import React, { useState, useMemo } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { UsersSearchBar } from "./components/UsersSearchBar";
import { UsersFilters } from "./components/UsersFilters";
import { UsersTable } from "./components/UsersTable";
import { UsersPagination } from "./components/UsersPagination";
import { UserDetailsModal } from "./components/UserDetailsModal";
import { EditUserModal } from "./components/EditUserModal";
import { DateRangeModal } from "./components/DateRangeModal";
import { FilterModal, FilterState } from "./components/FilterModal";
import { UserData } from "./components/UsersTableRow";

const mockUsers: UserData[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "4",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "5",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "6",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "7",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "8",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
];

export const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    status: [],
    verification: [],
  });
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });
  const itemsPerPage = 10;

  const handleView = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsDetailsModalOpen(true);
    }
  };

  const handleEdit = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsEditModalOpen(true);
    }
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedUser(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleDateRangeClick = () => {
    setIsDateRangeModalOpen(true);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleApplyDateRange = (startDate: string, endDate: string) => {
    setDateRange({ start: startDate, end: endDate });
    setCurrentPage(1);
  };

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      // Search filter
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        filters.status.length === 0 || filters.status.includes(user.status);

      // Verification filter
      const matchesVerification =
        filters.verification.length === 0 ||
        filters.verification.includes(user.verification);

      // Date range filter
      const userDate = new Date(user.joinedDate);
      const matchesDateRange =
        !dateRange.start && !dateRange.end
          ? true
          : userDate >= new Date(dateRange.start) &&
            userDate <= new Date(dateRange.end + "T23:59:59");

      return (
        matchesSearch &&
        matchesStatus &&
        matchesVerification &&
        matchesDateRange
      );
    });
  }, [searchQuery, filters, dateRange]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

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
            <div className="mb-8">
              <h1 className="text-[20px] font-medium text-black mb-2">Users</h1>
              <p className="text-[17px] text-[#838383]">
                Manage All Users Joined
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
              <UsersSearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search Users..."
              />
              <UsersFilters
                onFilterClick={handleFilterClick}
                onDateRangeClick={handleDateRangeClick}
              />
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="sm:px-0 px-4">
                <UsersTable
                  users={filteredUsers.slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage,
                  )}
                  onView={handleView}
                  onEdit={handleEdit}
                />
              </div>
            </div>

            <UsersPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredUsers.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>

      <UserDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        user={selectedUser}
        onEdit={handleEdit}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        user={selectedUser}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
        initialFilters={filters}
      />

      <DateRangeModal
        isOpen={isDateRangeModalOpen}
        onClose={() => setIsDateRangeModalOpen(false)}
        onApply={handleApplyDateRange}
        initialStartDate={dateRange.start}
        initialEndDate={dateRange.end}
      />
    </div>
  );
};
