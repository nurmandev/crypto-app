import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              to="/"
              className="px-3 lg:px-4 py-2 text-sm lg:text-[15px] font-medium text-[#3CC27B] hover:text-[#3CC27B]/80 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-3 lg:px-4 py-2 text-sm lg:text-[15px] text-gray-700 hover:text-[#3CC27B] transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className="px-3 lg:px-4 py-2 text-sm lg:text-[15px] text-gray-700 hover:text-[#3CC27B] transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-3 lg:px-4 py-2 text-sm lg:text-[15px] text-gray-700 hover:text-[#3CC27B] transition"
            >
              Contact
            </Link>
            <a
              href="#"
              className="px-3 lg:px-4 py-2 text-sm lg:text-[15px] text-gray-700 hover:text-[#3CC27B] transition"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center gap-3 ml-2 lg:ml-4 flex-shrink-0">
            <Link to="/login">
              <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-6 lg:px-8 h-[36px] sm:h-[40px] text-sm rounded-md transition">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-gray-700 hover:text-[#3CC27B] transition"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay (dark transparent background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar (mobile only) */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 xs:w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-9 w-auto object-contain"
          />
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-0 px-3 py-4 text-sm">
          <Link
            to="/"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="px-3 py-3 text-[#3CC27B] font-medium hover:bg-[#3CC27B]/5 rounded-lg transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="px-3 py-3 text-gray-700 hover:text-[#3CC27B] hover:bg-gray-50 rounded-lg transition"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="px-3 py-3 text-gray-700 hover:text-[#3CC27B] hover:bg-gray-50 rounded-lg transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="px-3 py-3 text-gray-700 hover:text-[#3CC27B] hover:bg-gray-50 rounded-lg transition"
          >
            Contact
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="px-3 py-3 text-gray-700 hover:text-[#3CC27B] hover:bg-gray-50 rounded-lg transition"
          >
            FAQ
          </a>

          {/* Mobile Login Button */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link to="/login" onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }} className="block">
              <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-6 py-2.5 w-full rounded-md transition text-sm font-medium">
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
