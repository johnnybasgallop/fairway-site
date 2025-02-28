import React from "react";
import Logo from "./Logo";

const NavLinks = ({ isMobile = false, closeMenu }) => {
  const links = [
    { label: "What we do", href: "/whatWeDo" },
    { label: "How it works", href: "/howItWorks" },
    { label: "Get started", href: "/getStarted" },
    // { label: "Why us?", ref: "#whyus" },
    { label: "Our team", href: "/meetTheTeam" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col items-center w-full space-y-10"
          : "hidden lg:flex flex flex-row w-full items-center justify-between"
      }`}
    >
      <div className=" hidden lg:flex flex-row items-center lg:space-x-6 xl:space-x-12 2xl:space-x-16">
        <Logo />
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
          >
            {label}
          </a>
        ))}
      </div>

      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="lg:hidden text-gray-800 font-semibold hover:text-gray-900"
        >
          {label}
        </a>
      ))}
      <a
        href="/contactUs"
        className={`bg-black text-white px-6 py-2 ${
          isMobile
            ? "w-[90%] rounded-xl absolute bottom-10 text-center py-4"
            : "rounded-full"
        } font-medium hover:bg-gray-600`}
      >
        Contact us
      </a>
    </div>
  );
};

export default NavLinks;
