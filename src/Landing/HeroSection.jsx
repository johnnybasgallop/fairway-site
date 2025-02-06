import React, { useEffect, useState } from "react";
import dubai1 from "../dubai1.jpeg";
import Socials from "./Socials";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update `isMobile` based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width is less than 768px
    };

    // Check screen size on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex items-center justify-between px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] pb-12 pt-4 lg:py-[80px] xl:py-[120px] 2xl:py-[170px]">
      {/* Left Content */}
      <div className="w-[65%] md:w-[50%] lg:w-[60%] xl:w-[50%] flex flex-col items-start justify-start space-y-6 text-left z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl 2xl:text-[70px] font-extrabold leading-tight md:leading-snug xl:leading-normal">
          Building Wealth with{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient xl:leading-normal leading-snug">
            Precision
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Purpose
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[16px] md:text-lg 2xl:text-xl text-gray-600 leading-snug md:leading-normal pb-2 md:pb-10 pr-3 md:w-[80%]">
          Fairway offers unique investment solutions, combining sophisticated
          algorithms with human intelligence to deliver robust capital growth.
          Our advanced strategies give our clients a competitive edge, in all
          market conditions.
        </p>

        {/* Email Input Section */}
        <div className="w-full space-y-5 md:space-y-6">
          <p className="text-transparent bg-clip-text bg-green-gradient font-bold px-2 hover:font-extrabold">
            Want to learn more?
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-10 md:space-y-0">
            {/* Get Started Button */}
            <button className="w-[75%] py-3 md:w-[60%] lg:w-[40%] 2xl:py-4 bg-green-gradient text-white rounded-full font-medium lg:text-md 2xl:text-lg hover:bg-green-700">
              Get Started
            </button>

            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>

      {/* Right Diagonal Image */}
      <div className="absolute top-0 right-0 h-[100%] lg:h-[90%] w-[43%] md:w-[50%] pb-12 pt-4 md:py-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${dubai1})`,
            clipPath: isMobile
              ? "polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)" // Mobile clipPath
              : "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)", // Desktop clipPath
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
