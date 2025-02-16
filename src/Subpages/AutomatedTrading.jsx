import React from "react";
import Automatedimg from "../AutomatedTrading.jpg";

const AutomatedTrading = () => {
  return (
    <section id="whatwedo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full pt-12 lg:pt-[60px] xl:pt-[70px] 2xl:pt-[80px]">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            AUTOMATED TRADING
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold pt-4 pb-10">
            Automated Trading
          </h2>
          <p className="mb-4 leading-relaxed">
            Fairway's automated trading system leverages a sophisticated
            scaling-in strategy to optimise trade management, even during
            adverse price movements. By establishing a directional bias through
            technical analysis, higher timeframe trends, and key market
            indicators, the system intelligently manages multiple positions to
            ensure profitability despite short-term fluctuations. Every position
            entered is designed to close net positive, while strict risk
            management protocols prevent over- leveraging.
          </p>

          <p className="mb-6 leading-relaxed">
            Developed using over 5,000 unique entry models by Andrew Morrison
            and Chris Hynes, our trading system combines human expertise with
            computational efficiency. This hybrid approach ensures Fairway
            remains at the forefront of algorithmic trading, delivering
            consistent, risk-adjusted returns.
          </p>

          <h2 className="text-2xl md:text-2xl  font-semibold pt-2 pb-6 text-transparent bg-clip-text bg-green-gradient">
            How It Works
          </h2>

          <ol className=" space-y-8 md:space-y-10">
            <li>
              <strong className="block mb-1 text-transparent bg-clip-text bg-green-gradient">
                Establishing a Directional Bias
              </strong>
              <p className="leading-relaxed">
                The system identifies the market's directional bias—bullish or
                bearish—using a combination of technical indicators, price
                action analysis, and market sentiment. A single trade is then
                placed in the identified direction.
              </p>
            </li>
            <li>
              <strong className="block mb-1 text-transparent bg-clip-text bg-green-gradient">
                Managing Market Fluctuations
              </strong>
              <p className="leading-relaxed">
                If the market moves against the initial position, the system
                employs a strategic scaling-in approach. Additional trades are
                opened at optimized entry points, adjusting position sizes based
                on a predefined multiplier. This technique reduces the average
                entry price and brings the overall take-profit target closer,
                allowing positions to recover efficiently.
              </p>
            </li>
            <li>
              <strong className="block mb-1 text-transparent bg-clip-text bg-green-gradient">
                Multiplier-Based Averaging
              </strong>
              <p className="leading-relaxed">
                As the market moves further against the initial trade, the
                system continues to add positions at improved prices. The
                take-profit level for all positions is dynamically adjusted,
                ensuring that even a minor price reversal can close the entire
                sequence at a net profit.
              </p>
            </li>
            <li>
              <strong className="block mb-1 text-transparent bg-clip-text bg-green-gradient">
                Example:
              </strong>
              <p className="leading-relaxed">
                If a position moves 50 pips against the initial entry, the
                system may open a second, larger trade at a better price. A
                slight market movement of 10-20 pips in the intended direction
                could then close all positions profitably, even if the first
                trade was initially at a loss.
              </p>
            </li>
          </ol>

          <p className="mt-6 leading-relaxed">
            By combining algorithmic precision with trader oversight, Fairway's
            automated trading strategy is designed to navigate the complexities
            of the market with efficiency, adaptability, and consistent
            profitability.
          </p>

          <div className="space-y-[40px] pt-[20px] md:space-y-[80px] md:pt-[40px]">
            <div className="w-full space-y-5 md:space-y-3"></div>
          </div>
        </div>

        <div className=" hidden lg:flex p-2 lg:w-[45vw] lg:h-[95%] xl:ml-[5vw] xl:w-[40vw]">
          <img
            src={Automatedimg}
            className="w-full h-full rounded-md"
            alt="fairway mission"
          />
        </div>
      </div>
    </section>
  );
};

export default AutomatedTrading;
