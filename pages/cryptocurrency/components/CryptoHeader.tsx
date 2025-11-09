import React from "react";
import { useNavigate } from "react-router-dom";

export const CryptoHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[75px] rounded-[10px] bg-white flex items-center justify-between px-6">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/11defb5986d183feab640f3655fb16c73cd57258?width=208"
        alt="Logo"
        className="h-8"
      />

      <h1 className="text-black text-center font-['Russo_One'] text-[30px] font-normal absolute left-1/2 transform -translate-x-1/2">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="inline-flex px-9 py-0.5 justify-center items-center rounded-md bg-[#161616] text-white font-roboto text-[15px] font-medium leading-[33px] h-[37px] hover:bg-[#2a2a2a] transition-colors"
        >
          Go to Home
        </button>

        <div className="relative">
          <button className="relative">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4828 18.7C13.4437 18.7 13.9514 19.8264 13.3104 20.5348C12.8937 20.9958 12.3834 21.3645 11.813 21.617C11.2426 21.8695 10.6248 22 10 22C9.37521 22 8.75743 21.8695 8.18701 21.617C7.61659 21.3645 7.10635 20.9958 6.6896 20.5348C6.0764 19.8572 6.51408 18.7979 7.3939 18.7077L7.51609 18.7011L12.4828 18.7ZM10 0C11.5086 0 12.7839 0.9933 13.1938 2.3551L13.2449 2.5432L13.2538 2.5905C14.4786 3.27438 15.5223 4.23595 16.2993 5.39638C17.0763 6.5568 17.5645 7.88305 17.724 9.2664L17.7551 9.5821L17.7762 9.9V13.1241L17.7995 13.2737C17.9516 14.0842 18.4046 14.809 19.0692 15.3054L19.2547 15.4341L19.4347 15.543C20.3901 16.0787 20.0568 17.4856 19.0159 17.5934L18.887 17.6H1.11299C-0.0289934 17.6 -0.427799 16.0996 0.565327 15.543C0.988604 15.3058 1.35432 14.9798 1.63681 14.5877C1.9193 14.1957 2.11171 13.7472 2.20054 13.2737L2.22387 13.1164L2.22498 9.8494C2.29271 8.41267 2.71505 7.01427 3.45504 5.77661C4.19502 4.53896 5.23009 3.49977 6.46965 2.75L6.74514 2.5894L6.75625 2.5421C6.91295 1.88411 7.26996 1.28965 7.77898 0.83913C8.288 0.388606 8.92448 0.103753 9.60232 0.0230999L9.8045 0.00439994L10 0Z"
                fill="#C7C7C7"
              />
            </svg>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#3CC27B] rounded-full"></div>
          </button>
        </div>

        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};
