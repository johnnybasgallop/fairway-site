import React from "react";
import Logo from "./Logo";

const NavLinks = ({ isMobile = false, closeMenu }) => {
  const links = [
    { label: "What we do", ref: "#whatwedo" },
    { label: "How it works", ref: "#howitworks" },
    { label: "Get started", ref: "#getstarted" },
    { label: "Why us?", ref: "#whyus" },
    { href: "/meetTheTeam", label: "Our team", ref: "#ourteam" },
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
        {links.map(({ href, label, ref }) => (
          <a
            key={href}
            href={window.location.pathname === "/meetTheTeam" ? "/" : href}
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
            onClick={
              href !== "/meetTheTeam"
                ? () => {
                    const element = document.querySelector(ref);
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                : undefined
            }
          >
            {label}
          </a>
        ))}
      </div>

      {links.map(({ href, label, ref }) => (
        <a
          key={href}
          href={window.location.pathname === "/meetTheTeam" ? "/" : href}
          className="lg:hidden text-gray-800 font-semibold hover:text-gray-900"
          onClick={
            isMobile
              ? () => {
                  closeMenu();
                  const element = document.querySelector(ref);
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              : undefined
          }
        >
          {label}
        </a>
      ))}
      <button
        className={`bg-black text-white px-6 py-2 ${
          isMobile
            ? "w-[90%] rounded-xl absolute bottom-10 text-center py-4"
            : "rounded-full"
        } font-medium hover:bg-gray-600`}
        onClick={() => {
          closeMenu();
          const element = document.querySelector("#contact");
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Contact us
      </button>
    </div>
  );
};

export default NavLinks;
