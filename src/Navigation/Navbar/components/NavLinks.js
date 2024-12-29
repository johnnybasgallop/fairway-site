import React from "react";

const NavLinks = ({ isMobile = false, closeMenu }) => {
  const links = [
    { href: "#what-we-do", label: "What we do" },
    { href: "#what-we-offer", label: "What we offer" },
    { href: "#our-goals", label: "Our goals" },
    { href: "#why-us", label: "Why us?" },
    { href: "#our-team", label: "Our team" },
  ];

  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col items-center w-full space-y-10"
          : "hidden lg:flex space-x-8 flex flex-row items-center justify-around xl:space-x-16"
      }`}
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-gray-700 font-semibold hover:text-gray-900"
          onClick={isMobile ? closeMenu : undefined}
        >
          {label}
        </a>
      ))}
      <a
        href="#contact-us"
        className={`bg-black text-white px-6 py-2 ${
          isMobile ? "w-full rounded-xl" : "rounded-full"
        } font-medium hover:bg-gray-600`}
        onClick={isMobile ? closeMenu : undefined}
      >
        Contact us
      </a>
    </div>
  );
};

export default NavLinks;
