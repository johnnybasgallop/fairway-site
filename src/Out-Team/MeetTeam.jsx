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
        "efuewnfioewnfioewnfioewnfoiewnfionewiofnweoinfoin io nfoiew nfioe wnfio enwfio newn feonw foienw foinewi fio new iofn oiewnf ioewnf inewio fnew ifnew iofoewnf ionew ofinew fewno finwioneiof neiwon ne inewoi nnw'NFIOEnfioenoew ifnflnewklfnfioweoifnweifnowefn",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#EAF6E7]", // Light Green
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "efuewnfioewnfioewnfioewnfoiewnfionewiofnweoinfoin io nfoiew nfioe wnfio enwfio newn feonw foienw foinewi fio new iofn oiewnf ioewnf inewio fnew ifnew iofoewnf ionew ofinew fewno finwioneiof neiwon ne inewoi nnw'NFIOEnfioenoew ifnflnewklfnfioweoifnweifnowefn",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#D7E8FF]", // Light Blue
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "efuewnfioewnfioewnfioewnfoiewnfionewiofnweoinfoin io nfoiew nfioe wnfio enwfio newn feonw foienw foinewi fio new iofn oiewnf ioewnf inewio fnew ifnew iofoewnf ionew ofinew fewno finwioneiof neiwon ne inewoi nnw'NFIOEnfioenoew ifnflnewklfnfioweoifnweifnowefn",
      image: "../ollie-ss.png", // Replace with actual image path
      bgColor: "bg-[#FFF9D7]", // Pale Yellow
    },
    {
      name: "Oliver Bean",
      title: "Example title",
      description:
        "efuewnfioewnfioewnfioewnfoiewnfionewiofnweoinfoin io nfoiew nfioe wnfio enwfio newn feonw foienw foinewi fio new iofn oiewnf ioewnf inewio fnew ifnew iofoewnf ionew ofinew fewno finwioneiof neiwon ne inewoi nnw'NFIOEnfioenoew ifnflnewklfnfioweoifnweifnowefn",
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
          <div className="bg-white rounded-lg z-10 max-w-[50%] w-full mx-4">
            <div className="p-6">
              <img
                className={`${selectedMember.bgColor} w-40 h-40 rounded-lg text-left`}
                src={ollieImage}
                alt={selectedMember.name}
              />
              <h4 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
                {selectedMember.name}
              </h4>
              <p className="mt-2 text-gray-600">{selectedMember.description}</p>
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MeetTeam;
