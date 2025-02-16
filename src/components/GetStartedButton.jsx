import React from "react";
const GetStartedButton = () => {
  return (
    <div className="w-full space-y-5 md:space-y-6 pt-10">
      <p className="text-transparent bg-clip-text bg-green-gradient font-bold px-2 hover:font-extrabold">
        Want to learn more?
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-10 md:space-y-0">
        {/* Get Started Button */}
        <button
          onClick={() => {
            const element = document.querySelector("#getstarted");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="w-[240px] py-3 md:w-[30%] lg:w-[40%] 2xl:py-4 bg-green-gradient text-white rounded-full font-medium lg:text-md 2xl:text-lg hover:bg-green-700"
        >
          Get Started
        </button>

        {/* Socials */}
      </div>
    </div>
  );
};

export default GetStartedButton;
