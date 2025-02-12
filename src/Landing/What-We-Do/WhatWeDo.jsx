import React from "react";
import { FaBullseye, FaCogs, FaLock } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <section
      id="whatwedo"
      className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-12 lg:py-[60px] xl:py-[100px] 2xl:py-[120px]"
    >
      {/* Section Heading */}
      <div className="text-left mb-12">
        <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md py-2 uppercase">
          What We Do
        </h3>
        <h2 className="text-3xl md:text-6xl tracking-wide font-semibold mb-4">
          Strategic Growth, Trusted Results
        </h2>
        <p className="text-gray-600 w-full md:w-2/3 py-5 md:py-[30px] md:px-2">
          Offering secure, innovative investment solutions with consistent
          returns and growth opportunities for investors of all levels. Be it a
          high net worth investor or an individual looking to get serious about
          their investing habits
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg px-6  py-[40px] md:py-[60px] flex flex-col space-y-10 items-start text-left hover:bg-green-700/10 ">
          <FaLock className="text-green-600 text-4xl mb-4" />
          <div>
            <h3 className="font-bold text-xl mb-2">Secure and stable growth</h3>
            <p className="text-gray-600">
              We provide investment opportunities that combine traditional
              financial security with exceptional service, ensuring consistent
              growth and stability for high-net-worth individuals, institutions,
              and investment entities.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg px-6  py-[40px] md:py-[60px] flex flex-col space-y-10 items-start text-left hover:bg-green-700/10">
          <FaCogs className="text-green-600 text-4xl mb-4" />
          <div>
            <h3 className="font-bold text-xl mb-2">
              Sophisticated trading strategies
            </h3>
            <p className="text-gray-600">
              Through advanced trading strategies, we identify and capitalize on
              unique market opportunities, aiming to deliver superior
              risk-adjusted returns while protecting client capital.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg px-6  py-[40px] md:py-[60px] flex flex-col space-y-10 items-start text-left hover:bg-green-700/10">
          <FaBullseye className="text-green-600 text-4xl mb-4" />
          <div>
            <h3 className="font-bold text-xl mb-2">
              Unparalleled Market Insights
            </h3>
            <p className="text-gray-600">
              Leveraging deep market expertise, we focus on safeguarding
              portfolios and unlocking potential in all market conditions,
              delivering sustainable and secure investment growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
