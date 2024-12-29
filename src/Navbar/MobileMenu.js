import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex flex-col lg:hidden transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Top Section: Logo and Close Button */}
      <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/fairway-logo.png"
            alt="Fairway Logo"
            className="h-[30px] ml-2"
          />
          <span className="text-xl font-extrabold">Fairway Capital</span>
        </div>

        {/* Close Button */}
        <button onClick={closeMenu} className="text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex flex-col items-center w-full p-6 space-y-10">
        <NavLinks isMobile={true} closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
