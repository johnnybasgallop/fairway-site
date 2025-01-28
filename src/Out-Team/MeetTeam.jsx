import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import aliprofile from "../Ali-profile.png";
import alfieprofile from "../alfie-profile.png";
import andrewprofile from "../andrew-profile.png";
import chrisprofile from "../chris-profile.png";
import danprofile from "../dan-profile.png";
import ollieprofile from "../ollie-profile.png";

function MeetTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Allistair Hess",
      title: "General Manager",
      description:
        "Born and raised in Dubai, Alistair’s global perspective shapes his approach to both markets and clients, having built a reputation for his comprehensive knowledge of the markets and his unwavering commitment to minimising risk while driving returns.\n\nHaving spent many years immersed in the trading industry, Alistair is now focused on creating a solid base for clients to achieve their financial goals. His mission is to provide reliable investment solutions that foster trust and confidence, ensuring clients can grow their wealth in a secure and profitable way.\n\nAlistair is deeply involved in the client side of the business, working closely with individuals and organizations to understand their unique financial needs and goals. His hands-on approach and dedication to client success ensure that each investment strategy is aligned with their aspirations.\n\nOutside of his professional life, Alistair is an accomplished golfer, playing at a competitive level. His passion for the sport has enabled him to cultivate a wide and loyal client network, where personal relationships and trust are at the heart of everything he does.\n\nAs General Manager at Fairway Capital, Alistair remains committed to innovation, strategic growth, and delivering exceptional value to clients—helping them succeed in the complex world of finance.",
      image: aliprofile, // Replace with actual image path
    },
    {
      name: "Oliver Bean",
      title: "Chief Executive Officer",
      description:
        "Oliver Bean is a seasoned real estate professional specializing\nin portfolio management, investment strategies, and value driven\nrenovations. With extensive experience in both Britain’s and\nDubai's dynamic markets. He delivers tailored solutions to help\nclients build, expand, and optimise their real estate holdings.\n\nBeyond real estate Oliver has a very strong network of clients he\nhas worked with over the years across an array of industries and\nhas established himself as a reliable and trusted advisor to many.\n\nHis attention to detail ensures he stays ahead of market trends,\nconstantly refining his strategies providing his clients with up-to-date market insights and innovative solutions.\n\nOliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations.\n\nHe has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital",
      image: ollieprofile, // Replace with actual image path
    },
    {
      name: "Dan Byrne",
      title: "Chief Finance Officer",
      description:
        "With a quantitative background the idea of finding an edge in the most liquid markets of them all was always a mission, a great team was developed who all pose a diversified skill set and with that Fairway Capital was born.\nWith a passion for investing, the opportunity to deliver our offerings publicly is something that I am very energized by and am always striving to make fairway capital as successful as possible. After an international upbringing as well as an analytical one, Dan feels at home with this project and the opportunity’s and challenges ahead.\nDan is a huge advocate for BTC, however, isn’t drawn to the short-term price movement, and has adopted a 20 year stance, which is exactly what Fairway Capital present to our clients, a sustainable long term approach rather than a short term gimmick.\nRegardless of the asset or investment of your choosing, Dan is a firm believer that time in the markets is better than timing the market.",
      image: danprofile, // Replace with actual image path
    },
    {
      name: "Chris Hynes",
      title: "Head Of Operations",
      description:
        "Chris Hynes is an accomplished entrepreneur with a broad range of expertise in the financial markets, real estate investment, and business development. He started his career in commercial property in Australia, working on high-value deals ranging in value from £2M to £100M.\nAfter relocating to the UK, Chris played a significant role in expanding an Australian property investment firm, helping Australian expats invest in property back home.\nIn addition to his real estate success, Chris has built and scaled three businesses from the ground up, predominately leveraging the power of technology to encourage more to use it to its full potential and create additional sources of income online.\nAs a leader in the financial services sector, he has developed industry-leading Expert Advisors (EAs) that have empowered over 3,500 individuals to generate consistent income through forex trading.\nBy combining cutting-edge technology with his deep understanding of financial markets, Chris has provided people with the tools and knowledge to thrive in the forex industry.\nWith a proven track record of success across diverse sectors, Chris continues to be a driving force in helping individuals unlock new opportunities for financial growth and independence.",
      image: chrisprofile, // Replace with actual image path
    },
    {
      name: "Alfie Simmons",
      title: "Head Of Trading",
      description:
        "Alfie is a highly accomplished trading professional specializing in portfolio management, proprietary strategy development, and performance-driven market analysis. With years of consistent success in the financial markets, Alfie leads our trading team with precision, expertise, and a commitment to excellence.\nHaving traded significant volumes, including 7 figure portfolios, Alfie has delivered exceptional results across diverse market conditions. He has also guided thousands ofclients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management.\nWith over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence.\nAlfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.",
      image: alfieprofile, // Replace with actual image path
    },
    {
      name: "Andrew Morrison",
      title: "Head Of Technology",
      description:
        "Andrew is a seasoned trading expert with over seven years of experience navigating the financial markets. With a master's degree in chemical engineering, he combines a systematic, analytical approach with robust trading psychology, setting him apart as an exceptional trader. His journey began in cryptocurrency, where he quickly developed a unique style that propelled him to the top 0.51% of global futures traders on KuCoin in 2021, trading over $6.4 million USD.\nIn 2022, Andrew transitioned to Forex trading, leveraging his success in crypto to build a strong reputation in the forex community. His commitment to transparency and trust has earned him the loyalty of over 3,500 clients.\nAndrew's expertise extends beyond trading into the development of Expert Advisors (EAs). Drawing from his deep understanding of market mechanics, risk management, and optimisation, he has created high-performance trading solutions that deliver consistent, reliable results. His EAs have become integral tools for traders worldwide, helping his clients succeed in the often volatile and complex financial markets.\nWith a focus on continual learning and innovation, Andrew is dedicated to advancing the field of trading while empowering others to achieve their financial goals. Through his unique approach to trading and client education, he continues to make a significant impact on the trading community.",
      image: andrewprofile, // Replace with actual image path
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-12 lg:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="text-left mb-0 ">
        <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md py-2 uppercase">
          Our Team
        </h3>
        <h2 className="text-3xl md:text-6xl tracking-wide font-semibold mb-2">
          Meet the team
        </h2>
        <p className="text-gray-600 w-full md:w-[75%] lg:w-[60%] py-2 md:py-[30px] md:px-2">
          Behind every successful partnership is a team of experienced
          individuals working collaboratively to deliver results. Meet the
          people driving our mission forward.
        </p>
      </div>

      {/* Team Grid */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 px-0 gap-x-12 gap-y-0 lg:gap-y-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? "px-0 mx-0 my-5 lg:my-0" : "pr-4 my-5 lg:my-0"
            } rounded-lg flex flex-col items-start text-center`}
          >
            {/* Image */}
            <div className={`h-[100%] mb-4 lg:px-2 pb-0 pt-6`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            {/* Name */}
            <div className="text-left pl-2">
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              {/* Title */}
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                {member.title}
              </h4>
              {/* Description */}
              <ShowMoreText
                lines={4}
                more="Read more"
                less="Read more"
                anchorClass="text-sm text-gray-600 max-w-[100%] md:max-w-[450px]"
                onClick={() => openModal(member)}
                expanded={false}
                expandByClick={false}
                truncatedEndingComponent="... "
              >
                {member.description}
              </ShowMoreText>
              {/* <p className="text-sm text-gray-600 max-w-[100%] md:max-w-[450px]">
                {member.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg z-10 max-w-4xl w-full mx-4 md:px-[10px] overflow-hidden">
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
                <div className="w-full flex flex-row items-center space-x-6 md:space-x-6 px-6">
                  <div
                    className={`w-[40%] md:w-[15%] rounded-lg md:p-2 flex items-center justify-center`}
                  >
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-auto rounded-md object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="text-2xl font-semibold text-gray-800">
                      {selectedMember.name}
                    </h4>
                    <h5 className="text-lg text-gray-500 mt-2">
                      {selectedMember.title}
                    </h5>
                  </div>
                  <div className="px-2 md:flex hidden ">
                    <button
                      className="px-4 py-2 md:px-6 md:py-2 bg-[#2A5C6D] hover:bg-[#1a4656] text-white rounded-md transition-colors"
                      onClick={closeModal}
                    >
                      Close
                    </button>
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

export default MeetTeam;
