import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between px-[80px] py-12 lg:py-[100px] xl:py-[150px]">
      {/* Left Content */}
      <div className="lg:w-[50%] space-y-6 flex flex-col items-start justify-start text-left">
        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl 2xl:text-[70px] font-extrabold leading-relaxed">
          Building Wealth with{" "}
          <span className="text-green-600 leading-relaxed">Precision</span> and{" "}
          <span className="text-green-600">Purpose</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg 2xl:text-xl leading-relaxed pb-10">
          Fairway offers unique investment solutions, combining sophisticated
          algorithms with human intelligence to deliver robust capital growth.
          Our advanced strategies give our clients a competitive edge, in all
          market conditions.
        </p>

        {/* Email Input Section */}
        <div className="space-y-8 w-full">
          <p className="text-green-600 font-medium">Want to learn more?</p>
          <button className="bg-green-600 text-white  px-8 py-3 lg:text-md 2xl:px-12 2xl:py-4 2xl:text-lg font-medium hover:bg-green-700 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Logo */}
      <div className="hidden lg:flex flex-col justify-center items-center w-[35%]">
        <img
          src="/fairway-logo.png" // Replace with the path to your logo
          alt="Fairway Logo"
          className="w-[340px] 2xl:w-[400px] h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
