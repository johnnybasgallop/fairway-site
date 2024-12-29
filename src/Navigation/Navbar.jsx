import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center p-6 md:p-10 w-full">
      {/* Left Section: Logo and Navigation Links */}
      <div className="flex flex-wrap items-center space-x-6 lg:space-x-[50px] xl:space-x-[100px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/fairway-logo.png" // Path to the logo in the public folder
            alt="Fairway Logo"
            className="h-[30px] ml-2" // Maintain consistent logo size
          />
          <span className="text-xl md:text-2xl font-extrabold">
            Fairway Capital
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 xl:space-x-16">
          <a
            href="#what-we-do"
            className="text-gray-700 font-semibold hover:text-gray-900 underline"
          >
            What we do
          </a>
          <a
            href="#what-we-offer"
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
          >
            What we offer
          </a>
          <a
            href="#our-goals"
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
          >
            Our goals
          </a>
          <a
            href="#why-us"
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
          >
            Why us?
          </a>
          <a
            href="#our-team"
            className="text-gray-700 font-semibold hover:text-gray-900 hover:underline"
          >
            Our team
          </a>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="mt-4 md:mt-0">
        <a
          href="#contact-us"
          className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-600"
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
