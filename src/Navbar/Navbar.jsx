import React, { useState } from "react";
import Logo from "./Logo";
import BurgerMenuIcon from "./BurgerMenuIcon";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center py-6 pl-[10px] pr-[20px] md:px-[25px] lg:px-[30px] xl:px-[60px] w-full">
      {/* Logo Section */}
      <div className="lg:hidden">
        <Logo />
      </div>

      {/* Burger Menu Icon */}
      <div className="lg:hidden">
        <BurgerMenuIcon toggleMenu={toggleMenu} />
      </div>

      {/* Desktop Navigation */}
      <NavLinks />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
