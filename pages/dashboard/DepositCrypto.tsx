import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

export default function DepositCrypto() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const walletAddress =
    "addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68f0t5";
  const network = "ERC-20";
  const availableBalance = 250;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to API first
    console.log("Deposit crypto:", { selectedCrypto, amount, transactionHash });
    // Navigate to success page
    navigate("/deposit-success");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
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
        <div className="flex-1 max-w-[1234px] space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-[20px] font-medium text-black mb-1 md:mb-2">
              Deposit Crypto
            </h2>
            <p className="text-[#838383] text-sm md:text-base lg:text-[17px] font-normal">
              Select cryptocurrency to get deposit address
            </p>
          </div>

          {/* Main Form */}
          <div className="bg-white rounded-[10px] p-6 md:p-8 lg:p-10 border-[0.5px] border-[#D3D3D3]">
            <form onSubmit={handleSubmit} className="max-w-[600px] space-y-6">
              {/* Select Cryptocurrency */}
              <div>
                <label className="block text-sm md:text-[17px] font-medium text-black mb-2">
                  Select Cryptocurrency
                </label>
                <div className="relative">
                  <select
                    value={selectedCrypto}
                    onChange={(e) => setSelectedCrypto(e.target.value)}
                    className="w-full h-[51px] px-4 py-3 bg-[#F0F0F0] rounded-[5px] text-sm md:text-[13px] font-medium text-black focus:outline-none focus:border-[#3CC27B] transition-colors appearance-none pr-10"
                  >
                    <option value="USDT">USDT</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDC">USDC</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3496 9.21839e-07L0.649275 1.94471e-06C0.530815 0.000383523 0.414699 0.0339522 0.313426 0.0970939C0.212153 0.160236 0.129559 0.250559 0.0745321 0.358343C0.0195055 0.466127 -0.00586901 0.587289 0.00114021 0.708788C0.00814943 0.830287 0.0472765 0.94752 0.11431 1.04787L5.96448 9.73002C6.20693 10.09 6.79065 10.09 7.03376 9.73002L12.8839 1.04787C12.9516 0.947729 12.9913 0.830436 12.9987 0.708735C13.0061 0.587034 12.9809 0.465579 12.9258 0.357567C12.8708 0.249555 12.7879 0.159115 12.6863 0.0960763C12.5848 0.033037 12.4683 -0.000191153 12.3496 9.21839e-07Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-[#838383] text-xs md:text-[14px] font-normal mt-2">
                  Available : {availableBalance} {selectedCrypto}
                </p>
              </div>

              {/* Wallet Address and Network */}
              <div>
                <label className="block text-sm md:text-[17px] font-medium text-black mb-2">
                  Wallet Address and Network
                </label>
                <div className="relative w-full h-[93px] rounded-[5px] border-[1.7px] border-dashed border-[#CACACA] bg-[#F0F0F0] p-4 flex flex-col justify-between">
                  <p className="text-[#8E8E8E] text-[10px] font-normal leading-[15px] break-all pr-8">
                    {walletAddress}
                  </p>
                  <p className="text-[#565656] text-[10px] font-semibold leading-[15px]">
                    {network}
                  </p>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 p-1.5 hover:bg-gray-200 rounded transition-colors"
                    aria-label="Copy wallet address"
                  >
                    <Copy className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Amount to Deposit */}
              <div>
                <label className="block text-sm md:text-[17px] font-medium text-black mb-2">
                  Amount to Deposit
                </label>
                <input
                  type="number"
                  placeholder="Enter USDT Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                />
              </div>

              {/* Transaction Hash */}
              <div>
                <label className="block text-sm md:text-[17px] font-medium text-black mb-2">
                  Transaction Hash
                </label>
                <input
                  type="text"
                  placeholder="Enter Transaction hash for verification"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                  className="w-full h-[51px] px-4 py-3 bg-[#F0F0F0] border-[0.7px] border-[#CACACA] rounded-[5px] text-sm md:text-[15px] font-light text-black placeholder:text-[#8E8E8E] focus:outline-none focus:border-[#3CC27B] transition-colors"
                />
                <p className="text-[#838383] text-xs md:text-[14px] font-normal mt-2">
                  Paste the transaction hash from your wallet or blockchain
                  explorer
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-md border-[0.5px] border-[#C3C3C3] px-4 md:px-[60px] py-3 md:py-[9px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-900 transition-colors h-[51px]"
              >
                <span className="text-sm md:text-[15px] font-medium leading-[33px]">
                  Verify & Deposit Crypto
                </span>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 -3.49691e-07L10 8L2 16L-6.11959e-07 14L6 8L-8.74228e-08 2L2 -3.49691e-07Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Warning Box */}
              <div className="w-full rounded-[13px] border-l-2 border-[#FA1818] bg-[rgba(253,189,189,0.56)] p-6 space-y-4">
                {/* Verification Required */}
                <div>
                  <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-1">
                    Verification Required
                  </h4>
                  <p className="text-xs md:text-[13px] font-light text-black leading-[25px]">
                    We'll verify your transaction on the blockchain. This
                    usually takes 24 Hours
                  </p>
                </div>

                {/* Important */}
                <div>
                  <h4 className="text-sm md:text-[15px] font-medium text-black leading-[33px] mb-1">
                    Important
                  </h4>
                  <p className="text-xs md:text-[13px] font-light text-black leading-[25px]">
                    Only send {selectedCrypto} to this address via Ethereum
                    (ERC-20). Sending other cryptocurrencies or using wrong
                    network will result in permanent loss.
                  </p>
                </div>
              </div>

              {/* Back Link */}
              <Link
                to="/deposit-withdraw"
                className="inline-flex items-center gap-2 text-xs md:text-[12px] font-medium text-black hover:text-[#3CC27B] transition-colors"
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10V6H13.92L13.95 3.99H5V0L0 5L5 10Z"
                    fill="currentColor"
                  />
                </svg>
                Back to Payment Methods
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
