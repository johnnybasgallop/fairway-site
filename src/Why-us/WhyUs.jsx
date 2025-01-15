import React from "react";

const LeftColumn = () => {
  const features = [
    {
      title: "Personal Touch",
      description:
        "We believe in building strong, personalized connections with every client. Unlike one-size-fits-all solutions, our strategies are tailored to your specific goals and needs. You’ll have direct access to our team of experts, ensuring a seamless and supportive experience. We focus on understanding your journey and providing guidance at every step. By prioritizing your success, we create lasting partnerships built on trust and results.",
      icon: "👤",
      bgColor: "bg-teal-900",
      textColor: "text-white",
      height: 'h-2/3'
    },
    {
      title: "Expert-Led, Client-Focused",
      description:
        "With over a decade of expertise, our team creates effective strategies tailored to your goals. We provide innovative solutions designed to deliver results.",
      icon: "💡",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      height: 'h-1/3'
    },
  ];

  return (
    <div className="flex flex-col h-[700px] gap-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg ${feature.bgColor} ${feature.textColor} ${feature.height}`}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-4">{feature.icon}</span>
            <h4 className="text-xl font-semibold">{feature.title}</h4>
          </div>
          <p className="text-sm">{feature.description}</p>
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
      bgColor: "bg-yellow-100",
          textColor: "text-gray-900",
      height: 'h-1/3'
    },
    {
      title: "Innovation at the Core",
      description:
        "Our approach combines advanced technology with human expertise to deliver cutting-edge solutions. From powerful algorithms to intuitive tools, we ensure trading is both efficient and accessible. By blending automation with personalized support, we create strategies designed for success in a fast-changing world. Innovation isn’t just a value—it’s how we ensure you thrive.",
      icon: "⚙️",
      bgColor: "bg-blue-100",
        textColor: "text-gray-900",
      height: 'h-2/3'
    },
  ];

  return (
    <div className="flex flex-col h-[700px] gap-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg ${feature.bgColor} ${feature.textColor} ${feature.height}`}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-4">{feature.icon}</span>
            <h4 className="text-xl font-semibold">{feature.title}</h4>
          </div>
          <p className="text-lg">{feature.description}</p>
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
        <h2 className="text-green-700 font-semibold text-lg uppercase mb-6">
          Why Us?
        </h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-12">
          Discover the Difference
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
