# Cryptocurrency Management Module

This folder contains the cryptocurrency management system for the admin dashboard.

## Structure

```
cryptocurrency/
├── components/
│   ├── CryptoTable.tsx          # Cryptocurrency rates table
│   ├── CryptoTableRow.tsx       # Individual table row component
│   ├── CryptoStatusFilter.tsx   # Status filter component
│   └── CryptoPagination.tsx     # Pagination component
└── Cryptocurrency.tsx           # Main page component
```

## Components

### CryptoTable

Displays cryptocurrency data in a table format with columns for:

- Cryptocurrency (name & symbol with logo)
- Status (Active/Inactive badge)
- Buy Rate (₹)
- Sell Rate (₹)
- 24h Change (%)
- Last Updated
- Actions (Edit button)

### CryptoTableRow

Individual row component for displaying a single cryptocurrency entry.

### CryptoStatusFilter

Filter component for filtering cryptocurrencies by status (All, Active, Inactive).

### CryptoPagination

Pagination component for navigating through cryptocurrency data.

### Cryptocurrency (Main Page)

Main page component that:

- Uses AdminHeader and AdminSidebar from admin components
- Manages state for filtering and pagination
- Displays statistics and the cryptocurrency table
- Handles add currency functionality

## Design Patterns

The cryptocurrency page follows the same design patterns as other admin pages (Users, Transactions, Requests):

- Same header and sidebar components
- Consistent layout and spacing
- Matching color scheme and typography
- Same table styling conventions
- Responsive design

## Route

Access this page at: `/admin/cryptocurrency`

Also accessible at: `/cryptocurrency`

## Features

- Filter cryptocurrencies by status
- Pagination for managing large datasets
- Add currency button for adding new cryptocurrencies
- Edit functionality for each cryptocurrency
- Responsive design for mobile and desktop
