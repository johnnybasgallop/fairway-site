import React from "react";
import WhatWeDo from "../Landing/What-We-Do/WhatWeDo";
import fairwayMission from "../fairwaymission.png";

const OurMission = () => {
  return (
    <section id="whatwedo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full pt-12 lg:pt-[60px] xl:pt-[100px] 2xl:pt-[120px]">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            Our Mission
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold py-4">
            Our Mission
          </h2>
          <p className="text-gray-600 w-full py-2 md:pt-[30px] md:px-2">
            Innovation lies at the heart of our approach. We leverage
            cutting-edge algorithmic technology to deliver data-driven,
            precision-based strategies that maximise returns for our investors.
            By combining advanced technology with human ingenuity, we redefine
            what's possible in modern investing, ensuring smarter, more
            effective financial solutions.
          </p>
          <p className="text-gray-600 w-full py-2 md:pt-[30px] md:px-2">
            We believe in a clear and open approach to investment management,
            ensuring our clients have complete confidence in our process and
            their portfolios. Our adaptive team, composed of professionals from
            diverse backgrounds, is committed to reshaping the stigma around
            hedge funds—making the industry more approachable and inclusive for
            a younger, forward-thinking generation.
          </p>
          <p className="text-gray-600 w-full py-2 md:pt-[30px] md:px-2">
            Your success is our success. We prioritise achieving consistent,
            strong, and sustainable performance across diverse market
            conditions. With a personal touch, we ensure our investors feel
            supported, valued, and confident every step of the way, setting new
            standards for client relationships within the hedge fund space
          </p>
          <p className="text-gray-600 w-full py-2 md:pt-[30px] md:px-2">
            Remaining at the forefront of financial innovation is our mission.
            We continually refine our algorithms and adapt to evolving markets,
            securing a competitive edge for our clients. Our commitment to
            wealth creation breaks traditional barriers, offering opportunities
            that inspire growth, trust, and long-term partnerships.
          </p>
          <p className="text-gray-600 w-full py-2 md:pt-[30px] md:px-2">
            Want to{" "}
            <a
              className="font-bold underline text-transparent bg-clip-text bg-green-gradient "
              href="/getStarted"
            >
              Get started?
            </a>
          </p>

          <div className="space-y-[40px] pt-[20px] md:space-y-[80px] md:pt-[40px]">
            <div className="w-full space-y-5 md:space-y-3"></div>
          </div>
        </div>

        <div className=" hidden lg:flex p-2 lg:w-[45vw] lg:h-[95%] xl:2xl:h-[700px] xl:ml-[5vw] xl:w-[40vw]">
          <img
            src={fairwayMission}
            className="w-full h-full rounded-md"
            alt="fairway mission image"
          />
        </div>
      </div>
      <WhatWeDo />
    </section>
  );
};

export default OurMission;
