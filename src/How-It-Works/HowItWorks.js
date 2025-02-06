import { useState } from "react"; // Import useState
import { FaChartBar, FaProjectDiagram, FaSearch } from "react-icons/fa";

const expandedPoints = [
  {
    name: "Data tracking and analysis",
    description:
      "We meticulously track and analyze all trading activity, creating a dataset that drives continuous improvement. This allows us to refine our strategies, optimizing even minor percentage changes for substantially better returns.",
    icon: <FaSearch className="text-purple-600 text-xl" />,
    bgClass: "bg-purple-200",
    textClass: "text-purple-600",
    subText: "View how we collect and use our data",
    image: "/path/to/data-tracking-image.jpg", // Add image paths
  },
  {
    name: "What goes into a trade",
    description:
      "This trading bot's strategy can be broken down into the these sections:\n\n**1. Establishing a Directional Bias:** The bot begins by analyzing the market to determine a directional bias. It uses technical indicators, price action analysis, and market sentiment to predict whether the market will likely go up (bullish) or down (bearish). Based on this prediction, it opens a single initial trade: a long position if it anticipates a price increase, or a short position if it expects a price decrease.\n\n**2. Handling Market Fluctuations (Drawdown Management):** If the market moves contrary to the bot's initial prediction, it doesn't immediately close the trade. Instead, it uses a scaling-in approach to manage the potential loss. This means it opens *additional* positions at better entry points, with each new position size increased based on a predefined multiplier (e.g., 1, 2, 4 micro lots). This strategy has two key effects: it reduces the average entry price of all open positions, and it brings the overall take-profit (TP) target closer to the latest entry price.\n\n**3. Multiplier-Based Averaging:** This is a continuation of the drawdown management. As the price moves further against the initial trade, new trades are opened at even better prices (averaging down in a long position, or averaging up in a short position). The crucial element is the *multiplier*, which dictates the increasing size of each subsequent position. The take-profit level is dynamically adjusted based on all open positions, meaning a smaller price movement in the favorable direction is needed to close the *entire* position profitably. For instance, if the market moves 50 pips against the initial position, the bot might open a larger, second trade. If the market then reverses by just 10-20 pips, the combined positions can become profitable, even though the original trade was initially at a significant loss.",
    icon: <FaProjectDiagram className="text-blue-600 text-xl" />,
    bgClass: "bg-blue-200",
    textClass: "text-blue-600",
    subText: "Discover our process",
    image: "/path/to/trade-process-image.jpg", // Add image paths
  },
  {
    name: "Technical Analysis",
    description:
      "Our team is committed to constant improvement, essential for both profitability and adapting to the dynamic financial markets. How can we be sure our strategies will work in a decade? Data. Every trade is tracked, creating a quantifiable record for performance monitoring. This reveals hidden strengths and weaknesses, enabling data-backed adjustments",
    icon: <FaChartBar className="text-green-600 text-xl" />,
    bgClass: "bg-green-200",
    textClass: "text-green-600",
    subText: "Learn about our one-of-a-kind system",
    image: "/path/to/technical-analysis-image.jpg", // Add image paths
  },
];

export default function HowItWorks() {
  const [selectedMember, setSelectedMember] = useState(null); // State for the modal

  const openModal = (point) => {
    setSelectedMember(point);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section
      id="howitworks"
      className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full lg:py-[60px] xl:py-[100px] 2xl:py-[120px]"
    >
      <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md py-2 uppercase">
        HOW IT WORKS
      </h3>
      <h2 className="text-3xl md:text-6xl tracking-wide font-semibold mb-4">
        How it works
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-[50px] flex bg-gray-50 py-8 px-[20px] md:px-[30px] rounded-lg">
        {/* Basics Section */}
        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl font-bold py-5 md:py-10">The Basics.</h2>
          <p className="mt-4 text-gray-700">
            We meticulously track and analyze all trading activity, creating a
            dataset that drives continuous improvement. This allows us to refine
            our strategies, optimizing even minor percentage changes for
            substantially better returns.
          </p>
          <p className="mt-4 text-gray-700">
            Our team is committed to constant improvement, essential for both
            profitability and adapting to the dynamic financial markets.
          </p>
          <p className="mt-4 text-gray-700">
            How can we be sure our strategies will work in a decade? Data. Every
            trade is tracked, creating a quantifiable record for performance
            monitoring. This reveals hidden strengths and weaknesses, enabling
            data-backed adjustments.
          </p>
        </div>

        {/* Details Section */}
        <div className="flex flex-2 flex-col">
          <h2 className="text-4xl py-10 flex items-center font-bold">
            The Details.
          </h2>
          <div className=" space-y-2 md:space-y-0 flex flex-col justify-center border-gray-300 pb-5">
            {expandedPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start justify-between ${
                  index <= 0 ? "py-5" : "py-7"
                } border-b border-gray-300 bg-gray-100 md:bg-gray-50 hover:bg-gray-200 px-4 rounded-md cursor-pointer`}
                onClick={() => openModal(point)} // Open modal on click
              >
                <div
                  className={`flex flex-col ${
                    index === 0
                      ? "justify-center mb-4"
                      : "items-start justify-start mb-2"
                  }`}
                >
                  <h3
                    className={`font-bold ${
                      index === 0 ? "max-w-[90%] py-2" : ""
                    }`}
                  >
                    {point.name}
                  </h3>
                  <p
                    className={`text-gray-500 text-sm ${
                      index === 0 ? "max-w-[90%] md:max-w-[100%]" : ""
                    }`}
                  >
                    {point.subText}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 flex items-center justify-center ${point.bgClass} rounded-lg mt-2`}
                >
                  {point.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg z-10 max-w-4xl w-full mx-4 md:px-[18px] overflow-hidden">
            <div className="flex md:py-6 gap-6">
              {/* Image Section */}

              {/* Content Section */}
              <div className="w-full max-h-[500px] overflow-y-auto">
                <div className="md:hidden w-full flex justify-end px-3 py-4">
                  <button
                    className="h-[30px] w-[30px] rounded-2xl bg-[#2A5C6D] hover:bg-[#1a4656] text-white transition-colors"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="w-full flex flex-row items-start space-x-6 md:space-x-6 px-6">
                  <div
                    className={`w-[50px] h-[50px] flex items-center justify-center ${selectedMember.bgClass} rounded-lg mt-2`}
                  >
                    {selectedMember.icon}
                  </div>

                  <div className="w-full">
                    <h4 className="text-2xl font-semibold text-gray-800">
                      {selectedMember.name}
                    </h4>
                    <h5 className="text-lg text-gray-500">
                      {selectedMember.subText}
                    </h5>
                    <div className="px-2 md:flex hidden ">
                      <button
                        className="px-4 py-2 md:px-6 md:py-2 bg-[#2A5C6D] hover:bg-[#1a4656] text-white rounded-md transition-colors"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description with Paragraphs */}
                <div className="mt-4 pb-10 p-6">
                  {selectedMember.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
