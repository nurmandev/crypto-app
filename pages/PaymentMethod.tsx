import { Link } from "react-router-dom";
import { Bell, ArrowLeft } from "lucide-react";
import UserNavbar from "../components/User-Navbar";

export default function PaymentMethod() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Top Navigation Bar */}
     <UserNavbar/>

      <div className="px-4 lg:px-12 mt-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-lg overflow-hidden">
          <Link
            to="/dashboard"
            className="block px-6 py-4 flex items-center gap-3 text-black hover:bg-gray-50 transition-colors"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41086 8.498 9.24686C8.33 9.08286 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24686C5.33458 9.41143 5.25058 9.61486 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg">Dashboard</span>
          </Link>

          <div className="bg-[#3CC27B] px-6 py-4 flex items-center gap-3 text-white">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.75 11.5V6.5H11.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.75 6.5L11.75 11.5C10.867 12.383 10.426 12.824 9.885 12.873C9.795 12.881 9.705 12.881 9.615 12.873C9.074 12.823 8.633 12.383 7.75 11.5C6.867 10.617 6.426 10.176 5.885 10.127C5.79518 10.1189 5.70482 10.1189 5.615 10.127C5.074 10.177 4.633 10.617 3.75 11.5L0.75 14.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-semibold">Buy / Sell Crypto</span>
          </div>

          <nav className="p-6 space-y-7">
            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V15H12.75C13.3467 15 13.919 14.7629 14.341 14.341C14.7629 13.919 15 13.3467 15 12.75V5.25C15 4.65326 14.7629 4.08097 14.341 3.65901C13.919 3.23705 13.3467 3 12.75 3H2.25C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H13.5V0H2.25ZM12 9.75H9.75V8.25H12V9.75Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">Deposit/Withdraw</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0087 4.58691H1.77391C1.30344 4.58691 0.85224 4.77381 0.519567 5.10648C0.186894 5.43915 0 5.89036 0 6.36083V14.6391C0 15.1096 0.186894 15.5608 0.519567 15.8934C0.85224 16.2261 1.30344 16.413 1.77391 16.413H13.0087C13.4792 16.413 13.9304 16.2261 14.263 15.8934C14.5957 15.5608 14.7826 15.1096 14.7826 14.6391V13.4565H15.0783C15.5879 13.4565 16.0767 13.254 16.4371 12.8936C16.7975 12.5332 17 12.0444 17 11.5347V9.46518C17 9.21281 16.9503 8.96291 16.8537 8.72976C16.7571 8.4966 16.6156 8.28475 16.4371 8.1063C16.2587 7.92785 16.0468 7.7863 15.8137 7.68972C15.5805 7.59314 15.3306 7.54344 15.0783 7.54344H14.7826V6.36083C14.7826 5.89036 14.5957 5.43915 14.263 5.10648C13.9304 4.77381 13.4792 4.58691 13.0087 4.58691ZM11.5304 9.0217C11.4128 9.0217 11.3 9.06842 11.2168 9.15159C11.1337 9.23476 11.087 9.34756 11.087 9.46518V11.5347C11.087 11.6524 11.1337 11.7652 11.2168 11.8483C11.3 11.9315 11.4128 11.9782 11.5304 11.9782H15.0783C15.1959 11.9782 15.3087 11.9315 15.3918 11.8483C15.475 11.7652 15.5217 11.6524 15.5217 11.5347V9.46518C15.5217 9.34756 15.475 9.23476 15.3918 9.15159C15.3087 9.06842 15.1959 9.0217 15.0783 9.0217H11.5304Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">My Wallet</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.65909C0 1.95386 0.28785 1.27751 0.800226 0.77883C1.3126 0.280153 2.00753 0 2.73214 0H14.2679C14.9925 0 15.6874 0.280153 16.1998 0.77883C16.7122 1.27751 17 1.95386 17 2.65909V10.3409C17 11.0461 16.7122 11.7225 16.1998 12.2212C15.6874 12.7198 14.9925 13 14.2679 13H2.73214C2.00753 13 1.3126 12.7198 0.800226 12.2212C0.28785 11.7225 0 11.0461 0 10.3409V2.65909ZM2.73214 1.18182C2.32958 1.18182 1.94351 1.33746 1.65886 1.6145C1.3742 1.89154 1.21429 2.26729 1.21429 2.65909V3.54545H15.7857V2.65909C15.7857 2.26729 15.6258 1.89154 15.3411 1.6145C15.0565 1.33746 14.6704 1.18182 14.2679 1.18182H2.73214ZM1.21429 10.3409C1.21429 10.7327 1.3742 11.1085 1.65886 11.3855C1.94351 11.6625 2.32958 11.8182 2.73214 11.8182H14.2679C14.6704 11.8182 15.0565 11.6625 15.3411 11.3855C15.6258 11.1085 15.7857 10.7327 15.7857 10.3409V4.72727H1.21429V10.3409ZM11.5357 8.27273H13.3571C13.5182 8.27273 13.6726 8.33498 13.7865 8.4458C13.9003 8.55662 13.9643 8.70692 13.9643 8.86364C13.9643 9.02035 13.9003 9.17066 13.7865 9.28147C13.6726 9.39229 13.5182 9.45455 13.3571 9.45455H11.5357C11.3747 9.45455 11.2203 9.39229 11.1064 9.28147C10.9925 9.17066 10.9286 9.02035 10.9286 8.86364C10.9286 8.70692 10.9925 8.55662 11.1064 8.4458C11.2203 8.33498 11.3747 8.27273 11.5357 8.27273Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">Payment Methods</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C5.58333 15 3.91333 14.3647 2.49 13.0942C1.06667 11.8236 0.250556 10.2367 0.0416666 8.33333H1.75C1.94444 9.77777 2.58694 10.9722 3.6775 11.9167C4.76806 12.8611 6.04222 13.3333 7.5 13.3333C9.125 13.3333 10.5036 12.7675 11.6358 11.6358C12.7681 10.5042 13.3339 9.12555 13.3333 7.5C13.3328 5.87444 12.7669 4.49611 11.6358 3.365C10.5047 2.23389 9.12611 1.66778 7.5 1.66667C6.54167 1.66667 5.64583 1.88889 4.8125 2.33333C3.97917 2.77778 3.27778 3.38889 2.70833 4.16667H5V5.83333H0V0.833333H1.66667V2.79167C2.375 1.90278 3.23972 1.21528 4.26083 0.729166C5.28194 0.243055 6.36167 0 7.5 0C8.54167 0 9.5175 0.198056 10.4275 0.594167C11.3375 0.990278 12.1292 1.52472 12.8025 2.1975C13.4758 2.87028 14.0106 3.66194 14.4067 4.5725C14.8028 5.48305 15.0006 6.45889 15 7.5C14.9994 8.54111 14.8017 9.51694 14.4067 10.4275C14.0117 11.3381 13.4769 12.1297 12.8025 12.8025C12.1281 13.4753 11.3364 14.01 10.4275 14.4067C9.51861 14.8033 8.54278 15.0011 7.5 15ZM9.83333 11L6.66667 7.83333V3.33333H8.33333V7.16666L11 9.83333L9.83333 11Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">History</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.84375 0.121197L1.21875 2.28069C0.4875 2.56863 0 3.27886 0 4.08507V8.59602C0 13.2317 2.93438 17.5891 6.96563 18.9136C7.3125 19.0288 7.6875 19.0288 8.03437 18.9136C12.0656 17.5891 15 13.2413 15 8.59602V4.08507C14.9993 3.6945 14.8823 3.31343 14.6645 2.99274C14.4468 2.67205 14.1386 2.42699 13.7813 2.29029L8.15625 0.130795C7.73437 -0.0419645 7.26563 -0.0419645 6.84375 0.121197Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">Wallet Security</span>
            </div>

            <div className="flex items-center gap-3 text-black cursor-pointer hover:text-[#3CC27B] transition-colors">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.49998 0C9.61622 -5.23227e-06 10.7215 0.219849 11.7528 0.647011C12.7841 1.07417 13.7211 1.70028 14.5104 2.48957C15.2997 3.27887 15.9258 4.2159 16.353 5.24717C16.7801 6.27844 17 7.38374 17 8.49998C17 13.1944 13.1944 17 8.49998 17C3.80559 17 0 13.1944 0 8.49998C0 3.80559 3.80559 0 8.49998 0ZM9.35001 9.35001H7.64999C5.54565 9.35001 3.73901 10.6245 2.95979 12.4438C4.19271 14.1726 6.2147 15.3 8.49998 15.3C10.7853 15.3 12.8072 14.1726 14.0402 12.4437C13.261 10.6245 11.4544 9.35001 9.35001 9.35001ZM8.49998 2.55C7.09166 2.55 5.94998 3.69168 5.94998 5.1C5.94998 6.50831 7.09166 7.64999 8.49998 7.64999C9.9083 7.64999 11.05 6.50831 11.05 5.1C11.05 3.69168 9.90834 2.55 8.49998 2.55Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg">My Profile</span>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] rounded text-black text-[15px]">
              <span>Logout</span>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7L8.82481 11.3577L7.82654 10.3158L10.2975 7.73684H3.52992V6.26316H10.2975L7.82654 3.68421L8.82481 2.64232L13 7ZM4.94189 1.47368H1.41197V12.5263H4.94189V14H0V0H4.94189V1.47368Z"
                  fill="black"
                />
              </svg>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Payment Method Selection Card */}
          <div className="bg-white rounded-[10px] p-8">
            <h2 className="text-xl font-medium text-black mb-2">
              Choose Payment Method
            </h2>
            <p className="text-[#838383] text-[17px] mb-8">
              Select how you'd like to pay for your crypto
            </p>

            {/* Payment Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* UPI Payment */}
              <PaymentOption
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#3CC27B"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M20 6H12C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8V24C10 24.5304 10.2107 25.0391 10.5858 25.4142C10.9609 25.7893 11.4696 26 12 26H20C20.5304 26 21.0391 25.7893 21.4142 25.4142C21.7893 25.0391 22 24.5304 22 24V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6ZM17 25H15V24H17V25ZM20 23H12V9H20V23Z"
                      fill="black"
                    />
                  </svg>
                }
                title="UPI Payment"
                description="Pay Using UPI apps like Gpay, Phonepe, Paytm etc"
                processingTime="Instant"
                fees="0%"
              />

              {/* Net Banking */}
              <PaymentOption
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#3CC27B"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M16 5.5L6.5 10.5V12.5H25.5V10.5M20.5 14.5V21.5H23.5V14.5M6.5 26.5H25.5V23.5H6.5M14.5 14.5V21.5H17.5V14.5M8.5 14.5V21.5H11.5V14.5H8.5Z"
                      fill="black"
                    />
                  </svg>
                }
                title="Net Banking"
                description="Direct Bank Transfers Via Net Banking"
                processingTime="2 -5 min"
                fees="0%"
              />

              {/* Debit/Credit Card */}
              <PaymentOption
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#3CC27B"
                      fillOpacity="0.31"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.1842 8.666L16.0002 8.5L8.81619 8.666C8.11197 8.68054 7.43432 8.9376 6.89762 9.39377C6.36092 9.84995 5.99803 10.4773 5.87019 11.17C5.28285 14.3632 5.28285 17.6368 5.87019 20.83C5.99799 21.5225 6.36074 22.1498 6.89723 22.6059C7.43373 23.0621 8.11114 23.3192 8.81519 23.334L16.0002 23.5L23.1842 23.334C23.8882 23.3192 24.5657 23.0621 25.1022 22.6059C25.6386 22.1498 26.0014 21.5225 26.1292 20.83C26.7165 17.6368 26.7165 14.3632 26.1292 11.17C26.0014 10.4775 25.6386 9.85024 25.1022 9.39409C24.5657 8.93793 23.8882 8.68077 23.1842 8.666ZM25.0002 15C25.0002 15.2652 24.8948 15.5196 24.7073 15.7071C24.5198 15.8946 24.2654 16 24.0002 16H8.00019C7.73498 16 7.48062 15.8946 7.29309 15.7071C7.10555 15.5196 7.00019 15.2652 7.00019 15C7.00019 14.7348 7.10555 14.4804 7.29309 14.2929C7.48062 14.1054 7.73498 14 8.00019 14H24.0002C24.2654 14 24.5198 14.1054 24.7073 14.2929C24.8948 14.4804 25.0002 14.7348 25.0002 15Z"
                      fill="black"
                    />
                  </svg>
                }
                title="Debit / Credit Cart"
                description="Visa, Mastercard, Rupay Accepted"
                processingTime="Instant"
                fees="2.5%"
              />

              {/* Wallet Balance */}
              <PaymentOption
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#3CC27B"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M16 5.5L6.5 10.5V12.5H25.5V10.5M20.5 14.5V21.5H23.5V14.5M6.5 26.5H25.5V23.5H6.5M14.5 14.5V21.5H17.5V14.5M8.5 14.5V21.5H11.5V14.5H8.5Z"
                      fill="black"
                    />
                  </svg>
                }
                title="Wallet Balance"
                description="User your existing wallet balance"
                processingTime="Instant"
                fees="0%"
              />
            </div>

            {/* Back to Order Details */}
            <Link
              to="/buy-crypto"
              className="flex items-center gap-2 text-black text-xs font-medium hover:text-[#3CC27B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Order Details</span>
            </Link>
          </div>
        </div>

        {/* Right Sidebar - Recent Transactions */}
        <div className="w-full lg:w-[368px] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-medium text-black">
              Recent Transactions
            </h3>
            <button className="px-3 py-1 bg-black text-white rounded text-xs">
              view all
            </button>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <TransactionItem key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentOption({
  icon,
  title,
  description,
  processingTime,
  fees,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  processingTime: string;
  fees: string;
}) {
  return (
    <button className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg hover:bg-[#EEEEEE] transition-colors text-left w-full">
      <div className="flex-shrink-0">{icon}</div>

      <div className="flex-1">
        <h3 className="text-[15px] font-medium text-black leading-[33px]">
          {title}
        </h3>
        <p className="text-[14px] font-light text-black leading-[33px]">
          {description}
        </p>

        <div className="mt-3">
          <div className="text-xs">
            <span className="text-black font-light">Processing Time: </span>
            <span className="text-black font-normal">{processingTime}</span>
          </div>
          <div className="text-xs">
            <span className="text-black font-light">Fees: </span>
            <span className="text-black font-normal">{fees}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function TransactionItem() {
  return (
    <div className="bg-white rounded-lg border border-[#D9D9D9] p-4 flex items-center justify-between gap-12">
      <div>
        <p className="text-base font-bold text-black">Buy BTC</p>
        <p className="text-xs text-black font-light mt-1">2024-12-20 14:30</p>
        <p className="text-xs text-black font-light">0x1234...5678</p>
      </div>

      <span className="px-3 py-1 bg-[#BDFDDB] text-[#1C5C3A] rounded text-[10px]">
        Completed
      </span>

      <div className="text-right">
        <p className="text-[17px] font-medium text-black">0.012 BTC</p>
        <p className="text-xs text-black font-light mt-1">₹52,345</p>
      </div>
    </div>
  );
}
