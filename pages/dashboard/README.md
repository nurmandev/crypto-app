# Dashboard Pages

This folder contains all dashboard-related pages and components for the cryptocurrency trading application.

## Structure

```
dashboard/
├── Dashboard.tsx          # Main dashboard page (landing page after login)
├── BuyCrypto.tsx         # Buy cryptocurrency page
├── SellCrypto.tsx        # Sell cryptocurrency page
├── PaymentMethod.tsx     # Payment method selection page
├── SellSuccess.tsx       # Transaction success confirmation page
├── components/           # Dashboard-specific components (subdirectory)
└── README.md            # This file
```

## Pages Overview

### Dashboard.tsx
- **Route**: `/dashboard`
- **Purpose**: Main dashboard landing page showing user balance, crypto holdings, and referral status
- **Features**: Balance display, referral panel, crypto holdings list, live price markets

### BuyCrypto.tsx
- **Route**: `/buy-crypto`
- **Purpose**: Page for purchasing cryptocurrency
- **Features**: Crypto selection, amount input, exchange rate display, purchase summary, continue to payment button

### SellCrypto.tsx
- **Route**: `/sell-crypto`
- **Purpose**: Page for selling cryptocurrency
- **Features**: Crypto selection, sell amount input, INR conversion, sell summary

### PaymentMethod.tsx
- **Route**: `/payment-method`
- **Purpose**: Payment method selection during checkout
- **Features**: UPI, Debit/Credit Card, Net Banking, and Wallet Balance options

### SellSuccess.tsx
- **Route**: `/sell-success`
- **Purpose**: Transaction confirmation and success display
- **Features**: Success message, transaction details, financial breakdown, transaction ID with copy button

## Components Folder

The `components/` subfolder is designated for dashboard-specific UI components that are reused across multiple dashboard pages.

### Future Components
You may organize dashboard components like:
- `SidebarNav.tsx` - Dashboard sidebar navigation
- `TopNav.tsx` - Top navigation bar
- `TransactionCard.tsx` - Transaction display component
- `PaymentOptionCard.tsx` - Payment option card for selection
- `BalanceCard.tsx` - Balance display card

## Styling

All pages use:
- **Tailwind CSS**: Utility-first CSS framework
- **Color Scheme**: Green (#3CC27B) for primary action, Black (#161616) for dark elements
- **Responsive Design**: Mobile-first, responsive layout with flexbox and grid

## Navigation

All dashboard pages maintain consistent:
- Top navigation bar with logo, dashboard title, home button
- Left sidebar with menu items
- Right sidebar with recent transactions (on applicable pages)

## Adding New Pages

To add a new dashboard page:

1. Create a new TSX file in `client/pages/dashboard/`
2. Import required components and hooks
3. Use the existing page structure as template
4. Add the route in `client/App.tsx`:
   ```typescript
   import NewPage from "./pages/dashboard/NewPage";
   // In Routes:
   <Route path="/new-page" element={<NewPage />} />
   ```

## Adding Dashboard Components

To add reusable components:

1. Create the component file in `client/pages/dashboard/components/`
2. Export the component
3. Import and use in dashboard pages:
   ```typescript
   import { YourComponent } from "./components/YourComponent";
   ```
