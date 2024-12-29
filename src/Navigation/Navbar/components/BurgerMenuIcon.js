import React from "react";

const BurgerMenuIcon = ({ toggleMenu }) => (
  <button className="text-black" onClick={toggleMenu}>
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
        d="M3 6h18M3 12h18m-6 6h6"
      />
    </svg>
  </button>
);

export default BurgerMenuIcon;
