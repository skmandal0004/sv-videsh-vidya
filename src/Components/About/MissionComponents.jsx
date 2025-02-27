import React from "react";

const MissionComponents = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
      {/* Left Side - Mission & Values */}
      <div className="md:w-1/2 bg-[#6B4EFF] text-white p-3 md:p-10 flex flex-col justify-center items-center text-center min-h-[70vh]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Mission, Vision & Values
        </h2>
        <p className="text-lg md:text-xl mb-5">YOUR TRUST IS OUR STRENGTH</p>

        {/* Mission Section */}
        <div className="mt-2 text-left max-w-md">
          <h3 className="text-xl font-bold mb-2 text-center">Our Mission:</h3>
          <p className="text-sm md:text-base leading-relaxed text-center">
            To use our technical skills and provide the best solutions to our clients.  
            <br />
            To help understand individual needs and take a holistic view of clients’ requirements.  
            <br />
            To provide seamless integration of services from Training through Admission and all the way till the client settles in.  
            <br />
            To help our clients comprehend the nuances of Overseas Higher Education and save them from any pitfalls.  
            <br />
            To guide our students at every step of their admission process and educate them about the right choices.
          </p>
        </div>

        {/* Values Section */}
        <div className="mt-6 text-left max-w-md">
          <h3 className="text-xl font-bold mb-2 text-center">Our Values:</h3>
          <p className="text-sm md:text-base leading-relaxed">
            - Focusing on Quality-based solutions  
            <br />
            - Keeping a flexible approach & support during training  
            <br />
            - Offering exam-oriented learning techniques  
            <br />
            - Handling admission processes with utmost sincerity and integrity  
            <br />
            - Ensuring a high rate of success in study abroad consultancy  
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center items-center min-h-[70vh]">
        <img
          src="https://static.wixstatic.com/media/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg/v1/fill/w_512,h_660,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg"
          alt="Students smiling"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Contact Button */}
      <button className="fixed bottom-5 right-5 bg-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
        Contact Us
      </button>
    </div>
  );
};

export default MissionComponents;
