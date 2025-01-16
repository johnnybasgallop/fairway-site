import React from "react";

const LeftColumn = () => {
  const features = [
    {
      title: "Personal Touch",
      description:
        "We believe in building strong, personalized connections with every client. Unlike one-size-fits-all solutions, our strategies are tailored to your specific goals and needs. You’ll have direct access to our team of experts, ensuring a seamless and supportive experience. We focus on understanding your journey and providing guidance at every step. By prioritizing your success, we create lasting partnerships built on trust and results.",
      icon: "👤",
      bgColor: "bg-[#1C3F3A]",
      textColor: "text-white",
      height: 'h-[65%] lg:h-[60%]'
    },
    {
      title: "Expert-Led, Client-Focused",
      description:
        "With over a decade of expertise, our team creates effective strategies tailored to your goals. We provide innovative solutions designed to deliver results.",
      icon: "💡",
      bgColor: "bg-[#E9E9E9]",
      textColor: "text-[#494848]",
      height: 'h-[35%] lg:h-[40%]'
    },
  ];

  return (
      <div className="flex flex-col h-[650px] lg:gap-2 gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`py-6  flex flex-col justify-center px-10 rounded-lg shadow-sm ${feature.bgColor} ${feature.textColor} ${feature.height}`}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-4">{feature.icon}</span>
            <h4 className="text-3xl font-medium">{feature.title}</h4>
          </div>
          <p className="text-md lg:text-[23px] px-2 font-medium pt-5">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

const RightColumn = () => {
  const features = [
    {
      title: "Mission-Driven Wealth Creation",
      description:
        "We make wealth creation accessible for everyone, regardless of background or experience. By breaking trading barriers, we equip clients with the tools to take charge of their financial future.",
      icon: "🛠️",
      bgColor: "bg-[#EBE9D9]",
        textColor: "text-gray-900",
    height: 'h-[35%] lg:h-[42%]'
    },
    {
      title: "Innovation at the Core",
      description:
        "Our approach combines advanced technology with human expertise to deliver cutting-edge solutions. From powerful algorithms to intuitive tools, we ensure trading is both efficient and accessible. By blending automation with personalized support, we create strategies designed for success in a fast-changing world. Innovation isn’t just a value—it’s how we ensure you thrive.",
      icon: "⚙️",
      bgColor: "bg-[#E0E9E9]",
        textColor: "text-gray-900",
      height: 'h-[65%] lg:h-[58%]'
    },
  ];

  return (
    <div className="flex flex-col h-[650px] lg:gap-2 gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`py-6  flex flex-col justify-center px-10 rounded-lg shadow-sm ${feature.bgColor} ${feature.textColor} ${feature.height} text-[#494848]`}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-4">{feature.icon}</span>
            <h4 className="text-3xl font-medium">{feature.title}</h4>
          </div>
          <p className="text-md lg:text-[23px] px-2 font-medium pt-5">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
// Assuming you saved the above components in ColumnComponents.js

const WhyUs = () => {
  return (
<section className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-12 lg:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="">
        <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            WHY US?
          </h3>
         <h2 className="text-3xl md:text-6xl tracking-wide font-semibold py-4">
            Discover the Difference
          </h2>
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-2 space-y-5 lg:space-y-0 md:pt-[40px]">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
