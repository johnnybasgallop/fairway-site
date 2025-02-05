import { FaChartBar, FaProjectDiagram, FaSearch } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full lg:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md py-2 uppercase">
        HOW IT WORKS
      </h3>
      <h2 className="text-3xl md:text-6xl tracking-wide font-semibold mb-4">
        How it works
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-[50px] flex bg-gray-50 py-8 px-[30px] rounded-lg">
        {/* Basics Section */}
        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl font-bold py-10">The Basics.</h2>
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
          <div className="space-y-6 flex flex-col justify-center border-gray-300">
            {/* Data Tracking */}
            <div className="flex items-start justify-between pb-2 pt-4 border-b border-gray-300">
              <div className="flex flex-col justify-center mb-4">
                <h3 className="font-bold">Data tracking and analysis</h3>
                <p className="text-gray-500 text-sm max-w-[90%] md:max-w-[100%]">
                  View how we collect and use our data
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-purple-200 rounded-lg">
                <FaSearch className="text-purple-600 text-xl" />
              </div>
            </div>

            {/* What Goes Into a Trade */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-300">
              <div className="flex flex-col items-start justify-start mb-2">
                <h3 className="font-bold">What goes into a trade</h3>
                <p className="text-gray-500 text-sm">Discover our process</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-lg">
                <FaProjectDiagram className="text-blue-600 text-xl" />
              </div>
            </div>

            {/* Technical Analysis */}
            <div className="flex items-center justify-between pt-2 pb-4">
              <div className="flex flex-col items-start justify-start mb-2">
                <h3 className="font-bold">Technical Analysis</h3>
                <p className="text-gray-500 text-sm max-w-[90%] md:max-w-[100%]">
                  Learn about our one-of-a-kind system
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-green-200 rounded-lg">
                <FaChartBar className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
