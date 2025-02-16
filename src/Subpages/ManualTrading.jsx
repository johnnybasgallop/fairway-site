import React from "react";
import Manualimg from "../ManualTrading.jpg";

const ManualTrading = () => {
  return (
    <section id="whatwedo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full pt-12 lg:py-[60px] xl:py-[70px] 2xl:py-[80px]">
        {/* Left Section */}
        <div className=" hidden lg:flex p-2 lg:w-[45vw] lg:h-[95%] 2xl:h-[750px] xl:mr-[5vw] xl:w-[40vw]">
          <img
            src={Manualimg}
            className="w-full h-full rounded-md"
            alt="fairway mission"
          />
        </div>
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            MANUAL TRADING
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold pt-4 pb-10">
            Manual Trading
          </h2>
          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            How it works
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Fairway's manual trading is spearheaded by Alfie Simmons, who
            leverages years of experience and technical expertise. Focused on
            dynamic market conditions, this strategy thrives on natural price
            action and market conditions of all types.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            How It Operates
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Alfie employs a unique blend of technical analysis, market cycles,
            and price action to identify high-probability setups. With over 700
            hours of live trading streamed, 2 and a half years in the markets
            and consistent profitability over long periods, his deep
            understanding of market psychology and candlestick behaviour allows
            for confident execution.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            Strategic Focus
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The strategy targets all market moves, that may be a range of
            different models, some in higher volatility scenario, such as
            breakouts and momentum shifts, some will be in ranging weeks or
            months where market volatility is at a low. Alfie's decisions are
            supported by a trusted team of analysts who provide real-time
            insights and data-driven recommendations.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            Our Advantage
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Fairway's manual trading is defined by its hands-on, personalized
            approach. The combination of Alfie's expertise and the support of a
            skilled team ensures the strategy adapts to changing market
            conditions, capitalizing on high-potential opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManualTrading;
