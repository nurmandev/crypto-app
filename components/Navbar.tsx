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
    // make the header a layout wrapper and render the visible navbar
    // as a centered floating card so it doesn't take up normal page flow
    <header className="relative z-50">
      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-full px-4 pointer-events-none">
        <div className="mx-auto w-full max-w-5xl pointer-events-auto bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-[15px]">
              <Link
                to="/"
                className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-[#3CC27B] transition"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-900 hover:text-[#3CC27B] transition"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-[#3CC27B] transition"
              >
                Contact
              </Link>
              <a
                href="#"
                className="text-gray-900 hover:text-[#3CC27B] transition"
              >
                FAQ
              </a>

              <Link to="/login">
                <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-8 h-[37px] rounded-md transition">
                  Login
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              <Menu size={26} />
            </button>
          </div>
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
        className={`fixed top-0 left-0 z-50 h-full w-1/2 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <button onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}>
            <X size={26} className="text-gray-700" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 px-6 py-6 text-[16px]">
          <Link
            to="/"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-[#3CC27B] font-medium hover:text-[#3CC27B]/80 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-gray-900 hover:text-[#3CC27B] transition"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-gray-900 hover:text-[#3CC27B] transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-gray-900 hover:text-[#3CC27B] transition"
          >
            Contact
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-gray-900 hover:text-[#3CC27B] transition"
          >
            FAQ
          </a>
          <Link to="/login" onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}>
            <Button className="bg-[#161616] hover:bg-[#161616]/90 text-white px-8 h-[40px] w-full rounded-md transition">
              Login
            </Button>
          </Link>
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
