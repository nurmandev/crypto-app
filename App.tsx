import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import MyWallet from "./pages/dashboard/MyWallet";
import BuyCrypto from "./pages/dashboard/BuyCrypto";
import SellCrypto from "./pages/dashboard/SellCrypto";
import SellSuccess from "./pages/dashboard/SellSuccess";
import PaymentMethod from "./pages/dashboard/PaymentMethod";
import PaymentMethods from "./pages/dashboard/PaymentMethods";
import UPIPayment from "./pages/dashboard/UPIPayment";
import WalletPayment from "./pages/dashboard/WalletPayment";
import DepositWithdraw from "./pages/dashboard/DepositWithdraw";
import DepositFund from "./pages/dashboard/DepositFund";
import History from "./pages/dashboard/History";
import PurchaseSuccess from "./pages/dashboard/PurchaseSuccess";
import WithdrawFund from "./pages/dashboard/WithdrawFund";
import Cashout from "./pages/dashboard/Cashout";
import DepositCrypto from "./pages/dashboard/DepositCrypto";
import DepositSuccess from "./pages/dashboard/DepositSuccess";
import WithdrawCrypto from "./pages/dashboard/WithdrawCrypto";
import WithdrawSuccess from "./pages/dashboard/WithdrawSuccess";
import CryptoAccess from "./pages/dashboard/CryptoAccess";
import Profile from "./pages/dashboard/Profile";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { Users } from "./pages/admin/Users";
import { Transactions } from "./pages/admin/Transactions";
import { Requests } from "./pages/admin/requests/Requests";
import { CryptocurrencyManagement } from "./pages/admin/cryptocurrency/CryptocurrencyManagement";
import { Cryptocurrency } from "./pages/cryptocurrency/Cryptocurrency";
import { Support } from "./pages/admin/Support";
import AdminPaymentMethods from "./pages/admin/payment-methods/Payment";
import { Settings } from "./pages/admin/Settings";
import { Pages } from "./pages/admin/Pages";
import { AddPage } from "./pages/admin/AddPage";
import { EditPage } from "./pages/admin/EditPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-wallet" element={<MyWallet />} />
          <Route path="/buy-crypto" element={<BuyCrypto />} />
          <Route path="/sell-crypto" element={<SellCrypto />} />
          <Route path="/sell-success" element={<SellSuccess />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/upi-payment" element={<UPIPayment />} />
          <Route path="/wallet-payment" element={<WalletPayment />} />
          <Route path="/deposit-withdraw" element={<DepositWithdraw />} />
          <Route path="/deposit-fund" element={<DepositFund />} />
          <Route path="/history" element={<History />} />
          <Route path="/purchase-success" element={<PurchaseSuccess />} />
          <Route path="/withdraw-fund" element={<WithdrawFund />} />
          <Route path="/withdraw-crypto" element={<Cashout />} />
          <Route path="/withdraw-crypto-form" element={<WithdrawCrypto />} />
          <Route path="/deposit-crypto" element={<DepositCrypto />} />
          <Route path="/deposit-success" element={<DepositSuccess />} />
          <Route path="/withdraw-success" element={<WithdrawSuccess />} />
          <Route path="/crypto-access" element={<CryptoAccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/requests" element={<Requests />} />
          <Route path="/admin/support" element={<Support />} />
          <Route
            path="/admin/payment-methods"
            element={<AdminPaymentMethods />}
          />
          <Route
            path="/admin/cryptocurrency"
            element={<CryptocurrencyManagement />}
          />
          <Route path="/admin/pages" element={<Pages />} />
          <Route path="/admin/pages/add" element={<AddPage />} />
          <Route path="/admin/pages/edit/:id" element={<EditPage />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/cryptocurrency" element={<Cryptocurrency />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

declare global {
  interface Window {
    __REACT_ROOT__?: any;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  // Create root only once and reuse across HMR updates
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(rootElement);
  }

  window.__REACT_ROOT__.render(<App />);
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
