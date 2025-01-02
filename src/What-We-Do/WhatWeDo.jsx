import React from "react";
import { FaLock, FaCogs, FaBullseye } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-white text-left w-full">
      {/* Section Heading */}
      <div className="text-left mb-12">
        <h3 className="text-green-600 font-medium text-md py-2 uppercase">
          What We Do
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Strategic Growth, Trusted Results
        </h2>
        <p className="text-gray-600">
          Offering secure, innovative investment solutions with consistent
          returns and growth opportunities for investors of all levels. Be it a
          high net worth investor or an individual looking to get serious about
          their investing habits
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left">
          <FaLock className="text-green-600 text-4xl mb-4" />
          <h3 className="font-bold text-xl mb-2">Secure and stable growth</h3>
          <p className="text-gray-600">
            We provide investment opportunities that combine traditional
            financial security with exceptional service, ensuring consistent
            growth and stability for high-net-worth individuals, institutions,
            and investment entities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left">
          <FaCogs className="text-green-600 text-4xl mb-4" />
          <h3 className="font-bold text-xl mb-2">
            Sophisticated trading strategies
          </h3>
          <p className="text-gray-600">
            Through advanced trading strategies, we identify and capitalize on
            unique market opportunities, aiming to deliver superior
            risk-adjusted returns while protecting client capital.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left">
          <FaBullseye className="text-green-600 text-4xl mb-4" />
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
    </section>
  );
};

export default WhatWeDo;
