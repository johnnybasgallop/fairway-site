import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between lg:hidden">
      <div className="flex flex-col items-center w-full p-6">
        <NavLinks isMobile={true} closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
