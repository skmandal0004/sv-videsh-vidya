import React from "react";

const MissionComponents = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-all duration-300">
      {/* Left Section - Content */}
      <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-[#362783] dark:text-[#A89CFF]">
          Our Mission & Values
        </h2>
        <p className="text-lg mb-6 font-medium">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text dark:text-[#A89CFF] font-semibold">
            "Your Trust is Our Strength"
          </span>
        </p>

        <div className="space-y-4">
          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>Deliver top-notch solutions using technical expertise.</li>
              <li>Provide seamless guidance from training to settlement.</li>
              <li>Help students navigate overseas education complexities.</li>
              <li>Ensure personalized and well-informed decision-making.</li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>Commitment to quality-driven solutions.</li>
              <li>Flexible, supportive, and student-centric approach.</li>
              <li>Transparent & ethical admission procedures.</li>
              <li>Focus on maximizing success rates.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img
          src="https://static.wixstatic.com/media/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg/v1/fill/w_512,h_660,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_cc3a06d2ea134a79ab20602e3fd7caa3~mv2.jpg"
          alt="Students smiling"
          className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Floating Contact Button */}
      <button className="fixed bottom-5 right-5 bg-[#6B4EFF] dark:bg-[#A89CFF] text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#5746E6] dark:hover:bg-[#928AFF] transition">
        Contact Us
      </button>
    </div>
  );
};

export default MissionComponents;
