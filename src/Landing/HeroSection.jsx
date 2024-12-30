import React, { useState, useEffect } from "react";
import dubaiImage from "../dubai-skyline.jpg"; // Replace with the correct path to your local image

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
    <section className="relative flex items-center justify-between px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 lg:py-[80px] xl:py-[120px] 2xl:py-[150px]">
      {/* Left Content */}
      <div className="w-[65%] md:w-[50%] lg:w-[60%] xl:w-[50%] flex flex-col items-start justify-start space-y-6 text-left z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl 2xl:text-[70px] font-extrabold leading-snug xl:leading-normal">
          Building Wealth with{" "}
          <span className="text-green-600 xl:leading-normal leading-snug">
            Precision
          </span>{" "}
          and <span className="text-green-600">Purpose</span>
        </h1>

        {/* Subtext */}
        <p className="text-[16px] md:text-lg 2xl:text-xl text-gray-600 leading-normal pb-2 md:pb-10 pr-3 md:w-[80%]">
          Fairway offers unique investment solutions, combining sophisticated
          algorithms with human intelligence to deliver robust capital growth.
          Our advanced strategies give our clients a competitive edge, in all
          market conditions.
        </p>

        {/* Email Input Section */}
        <div className="w-full space-y-4 md:space-y-8">
          <p className="text-green-600 font-medium">Want to learn more?</p>
          <button className="px-8 py-3 2xl:px-12 2xl:py-4 bg-green-600 text-white rounded-full font-medium lg:text-md 2xl:text-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Diagonal Image */}
      <div className="absolute top-0 right-0 h-[90%] w-[40%] md:w-[50%] py-12 md:py-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${dubaiImage})`,
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
