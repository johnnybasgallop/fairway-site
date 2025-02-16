import React from "react";
import Explanationimg from "../Explanation.jpg";
const Explanation = () => {
  return (
    <section id="whatwedo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full pt-12 lg:pt-[60px] xl:pt-[70px] 2xl:pt-[80px]">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            HOW IT WORKS
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold pt-4 pb-10">
            How it works
          </h2>
          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            The Fairway Approach
          </h2>

          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Fairway Capital stands apart by seamlessly integrating cutting-edge
            automated systems with years of hands-on trading expertise. Our
            cohesive team has developed strategies that consistently excel in
            complex trading environments, delivering a unique combination of
            precision, adaptability, and long-term performance. What truly sets
            us apart is our proprietary manual trading approach, led by Alfie
            Simmons. His exclusive strategies, built on years of market
            experience, are continuously refined and adapted to evolving
            conditions—ensuring an ever-advancing investment model that remains
            unmatched in the industry.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            How It Operates
          </h2>

          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Our algorithm is strategically activated only during optimal market
            conditions, as identified by our traders. This selective approach
            ensures that trades are executed when the risk-to-reward ratio is
            most favourable, avoiding periods of heightened volatility or
            disruptive news events.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            Strategic Focus
          </h2>

          <p className="text-gray-700 text-md leading-relaxed mb-6">
            We concentrate on trading in stable market conditions, steering
            clear of high-impact events that could introduce unnecessary risk.
            By targeting smaller, predictable price movements, our algorithm
            minimises exposure while consistently securing profitable
            opportunities.
          </p>

          <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-green-gradient font-bold mb-2">
            Our Advantage
          </h2>

          <p className="text-gray-700 text-md leading-relaxed">
            By combining human expertise with automated precision, our hybrid
            approach optimises both strategy and execution. This synergy between
            algorithmic efficiency and trader oversight enables Fairway to
            consistently outperform traditional investment funds.
          </p>

          <div className="space-y-[40px] pt-[20px] md:space-y-[80px] md:pt-[40px]">
            <div className="w-full space-y-5 md:space-y-3"></div>
          </div>
        </div>

        <div className=" hidden lg:flex p-2 lg:w-[45vw] lg:h-[95%] 2xl:h-[800px] xl:ml-[5vw] xl:w-[40vw]">
          <img
            src={Explanationimg}
            className="w-full h-full rounded-md"
            alt="fairway mission"
          />
        </div>
      </div>
    </section>
  );
};

export default Explanation;
