import React from "react";
import ollieImage from "../ollie-ss.png";

const teamMembers = [
  {
    name: "Oliver Bean",
    title: "Example title",
    description: "Example relevant experience or short description about role",
    image: "../ollie-ss.png", // Replace with actual image path
    bgColor: "bg-[#EAF6E7]", // Light Green
  },
  {
    name: "Oliver Bean",
    title: "Example title",
    description: "Example relevant experience or short description about role",
    image: "../ollie-ss.png", // Replace with actual image path
    bgColor: "bg-[#D7E8FF]", // Light Blue
  },
  {
    name: "Oliver Bean",
    title: "Example title",
    description: "Example relevant experience or short description about role",
    image: "../ollie-ss.png", // Replace with actual image path
    bgColor: "bg-[#FFF9D7]", // Pale Yellow
  },
  {
    name: "Oliver Bean",
    title: "Example title",
    description: "Example relevant experience or short description about role",
    image: "../ollie-ss.png", // Replace with actual image path
    bgColor: "bg-[#EAE3FF]", // Lavender
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-white py-8 lg:py-[30px] xl:py-[60px] 2xl:pt-[85px] px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-left mb-0  py-12">
        <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md py-2 uppercase">
          Our Team
        </h3>
        <h2 className="text-3xl md:text-6xl tracking-wide font-semibold mb-2">
          Meet the team
        </h2>
        <p className="text-gray-600 w-full md:w-[60%] py-5 md:py-[30px] md:px-2">
          Behind every successful partnership is a team of experienced
          individuals working collaboratively to deliver results. Meet the
          people driving our mission forward.
        </p>
      </div>

      {/* Team Grid */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-10 px-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? "px-0 mx-0" : "pr-4"
            } rounded-lg flex flex-col items-start text-center`}
          >
            {/* Image */}
            <div
              className={`${member.bgColor} w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] rounded-md overflow-hidden mb-4 px-2 pb-0 pt-6`}
            >
              <img
                src={ollieImage}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              {/* Title */}
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                {member.title}
              </h4>
              {/* Description */}
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
