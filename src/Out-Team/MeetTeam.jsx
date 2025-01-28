import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import ollieImage from "../ollie-ss.png";

function MeetTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "Oliver Bean is a seasoned real estate professional specializing in portfolio management, investment strategies, and value driven renovations. With extensive experience in both Britain’s and Dubai's dynamic markets. He delivers tailored solutions to help clients build, expand, and optimise their real estate holdings. Beyond real estate Oliver has a very strong network of clients he  has worked with over the years across an array of industries and has established himself as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.  lf as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals. ",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#EAF6E7]", // Light Green
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "Oliver Bean is a seasoned real estate professional specializing in portfolio management, investment strategies, and value driven renovations. With extensive experience in both Britain’s and Dubai's dynamic markets. He delivers tailored solutions to help clients build, expand, and optimise their real estate holdings. Beyond real estate Oliver has a very strong network of clients he  has worked with over the years across an array of industries and has established himself as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#D7E8FF]", // Light Blue
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "Oliver Bean is a seasoned real estate professional specializing in portfolio management, investment strategies, and value driven renovations. With extensive experience in both Britain’s and Dubai's dynamic markets. He delivers tailored solutions to help clients build, expand, and optimise their real estate holdings. Beyond real estate Oliver has a very strong network of clients he  has worked with over the years across an array of industries and has established himself as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#FFF9D7]", // Pale Yellow
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "Oliver Bean is a seasoned real estate professional specializing in portfolio management, investment strategies, and value driven renovations. With extensive experience in both Britain’s and Dubai's dynamic markets. He delivers tailored solutions to help clients build, expand, and optimise their real estate holdings. Beyond real estate Oliver has a very strong network of clients he  has worked with over the years across an array of industries and has established himself as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#EAE3FF]", // Lavender
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "Oliver Bean is a seasoned real estate professional specializing in portfolio management, investment strategies, and value driven renovations. With extensive experience in both Britain’s and Dubai's dynamic markets. He delivers tailored solutions to help clients build, expand, and optimise their real estate holdings. Beyond real estate Oliver has a very strong network of clients he  has worked with over the years across an array of industries and has established himself as a reliable and trusted advisor to many. His attention to detail ensures he stays ahead of market trends, constantly refining his strategies providing his clients with up-to-date market insights and innovative solutions. Oliver has always has a desire to step into the industry and believes that at Fairway Capital he has a winning formula with the team of founders all possessing individual qualities that allow the company to flourish in years to come from solid foundations. He has taken on his role as CEO of the company in stride and has implemented procedures and processes to streamline productivity in all areas of the business. As well as oversight of the whole business I am always on hand for existing and potential clients to discuss all things Fairway Capital, clients, helping them generate substantial trading revenues through his disciplined and innovative approach. His ability to consistently deliver on both individual and institutional levels reflects his deep understanding of market dynamics and risk management. With over 700 hours of live-streamed trading and mentoring, Alfie has shared his proprietary strategies with a global audience, building trust and inspiring traders to adopt a structured, results-focused mindset. His leadership and hands-on approach have been pivotal in fostering the firm’s growth and maintaining its reputation for excellence. Alfie’s experience spans the full spectrum of trading operations, from developing innovative strategies to overseeing day-to-day market execution. His disciplined approach to risk management and deep understanding of market dynamics ensure consistent results that align with client objectives and long-term financial goals.",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#EAE3FF]", // Lavender
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "efuewnfioewnfioewnfioewnfoiewnfionewiofnweoinfoin io nfoiew nfioe wnfio enwfio newn feonw foienw foinewi fio new iofn oiewnf ioewnf inewio fnew ifnew iofoewnf ionew ofinew fewno finwioneiof neiwon ne inewoi nnw'NFIOEnfioenoew ifnflnewklfnfioweoifnweifnowefn",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#EAE3FF]", // Lavender
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
        <p className="text-gray-600 w-full md:w-[60%] py-2 md:py-[30px] md:px-2">
          Behind every successful partnership is a team of experienced
          individuals working collaboratively to deliver results. Meet the
          people driving our mission forward.
        </p>
      </div>

      {/* Team Grid */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 px-0 gap-x-12 gap-y-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? "px-0 mx-0 my-5 lg:my-0" : "pr-4 my-5 lg:my-0"
            } rounded-lg flex flex-col items-start text-center`}
          >
            {/* Image */}
            <div
              className={`${member.bgColor} w-[100%] rounded-md overflow-hidden mb-4 px-2 pb-0 pt-6`}
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
          <div className="bg-white rounded-lg z-10 max-w-4xl w-full mx-4 px-[10px] overflow-hidden">
            <div className="flex p-6 gap-6">
              {/* Image Section */}

              {/* Content Section */}
              <div className="w-full max-h-[500px] overflow-y-auto">
                <div className="w-full flex flex-row items-center space-x-6 mb-10">
                  <div
                    className={`${selectedMember.bgColor} w-[15%] rounded-lg p-2 flex items-center justify-center`}
                  >
                    <img
                      src={ollieImage}
                      alt={selectedMember.name}
                      className="w-full h-auto object-cover"
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
                  <div className="px-2 flex ">
                    <button
                      className="px-6 py-2 bg-[#2A5C6D] hover:bg-[#1a4656] text-white rounded-md transition-colors"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Description with Paragraphs */}
                <div className="mt-4">
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
