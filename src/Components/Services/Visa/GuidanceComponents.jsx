import React from "react";

const GuidanceComponents = () => {
  return (
    <div className="bg-white dark:bg-gray-900  py-10 px-20">
            <h1 className="text-6xl font-bold text-center text-yellow-400 mb-4">
                    VISA
            </h1>
            <h3 className="text-2xl font-bold text-center text-black dark:text-white mb-4">
            Counselling And Guidance    
            </h3>
      {/* Visa Guidance Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[#1A1A2E] text-white">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/7010140/pexels-photo-7010140.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Visa Guidance"
            className="w-full h-[550px] object-cover object-top"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 px-5">
          <h2 className="text-3xl font-bold text-red-500 mb-5 mt-5 text-center">
            Visa Guidance
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
          One of the most important steps of Overseas Education Services is Visa Guidance. One should never undermine the importance of Visa application process as even students with good profiles get rejected for various reasons. More and more countries are revamping their Visa laws. Even visa rules concerning Student Visa applications are made stringent. Visa norms of every country is different and generally revolves around below mentioned cases.
          </p>

          {/* List of points */}
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Difficult Visa Application processing, Easy Interview process</li>
            <li>Easy Visa Application processing, Difficult Interview process</li>
            <li>Difficult Application processing, Difficult Interview process</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
          Needless to say, the third category is the worst-case scenario and essentially be taken care of with meticulous planning. At S V Videsh Vidya, we ensure hassle free and complete Visa Guidance be provided to the students during study abroad admission process. We have divided Student Visa Application process in following steps.
          </p>
        </div>
      </div>

      {/* Understanding Visa Process Section - DIRECTLY CONNECTED */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start bg-[#1A1A2E] text-white">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 px-5 lg:px-10">
          <h2 className="text-3xl font-bold text-red-500 mb-5 mt-5 text-center">
            Understanding Visa<br/> Process
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
          Study Abroad student visa comes in the last leg of the admission process and to say the least is the only thing standing between Student and Student’s dreams becoming true. Therefore, a thorough understanding of Visa norms of the country goes a long way in securing Visa, post interview. Student Visa process takes 1-2 weeks to about 4-6 weeks sometimes and hence students should try to finish the Visa interview within a week or so after getting I-20 or similar confirmation from the University depending on the country applying to.
          </p>

          <p className="text-gray-300 leading-loose mb-3">
            In some cases, students are not allowed to enter their study abroad
            destination or weren’t granted Visa, because the Program/Course
            session had already commenced, and students had gone well past their
            deadlines. Students need to take the Vaccination while applying for
            study abroad in many countries and documents must be produced during
            Visa, Travel and accommodation options must be finalized in many
            countries and proof of such can be asked by Visa Officer. S V Videsh
            Vidya team prepares our student to tackle all these issues and many
            more by educating them about the Do’s & Don’ts.​
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/7103109/pexels-photo-7103109.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual image URL
            alt="Understanding Visa Process"
            className="w-full h-[560px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default GuidanceComponents;
