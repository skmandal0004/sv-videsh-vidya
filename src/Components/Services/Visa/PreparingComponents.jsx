import React from "react";

const PreparingComponents = () => {
  return (
    <div className="bg-gray-100  ">
      <div className="max-w-full h-full mx-auto flex flex-col lg:flex-row bg-white dark:bg-gray-900  shadow-lg px-3 py-3">
        {/* Left Side - Contact Section */}
        <div className="bg-[#1A1A2E] text-white p-10 w-full lg:w-2/5 flex flex-col items-center justify-center">
  <h2 className="text-4xl font-bold mb-2">Contact us</h2>
  <div className="w-10 border-b-2 border-white mb-4"></div>
  <button className="bg-gray-200 text-blue-600 px-6 py-2 rounded-md font-semibold">
    Contact
  </button>
</div>


        {/* Right Side - Content Section */}
        <div className="px-14 w-full dark:bg-gray-900  lg:w-2/3">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            Preparing for Visa <br/>Interview
          </h2>
          <p className="text-gray-700 dark:text-gray-400   leading-loose mb-4">
          All our students will be provided free counseling. We also help them in <br/> preparing on all the above steps and provide questionnaire, hints to <br/>answer the questions and conduct 1-2 rounds of interview to overcome the <br/>anxiety of facing the Student Visa Interview. Couple of points are helpful in <br/> case of most successful Visa applicants.
          </p>

          {/* List */}
          <ul className="text-gray-700 dark:text-gray-400 space-y-2">
            <li className="flex items-start">
              <span className="text-xl text-gray-900 mr-2">•</span>
              All the documents that are required are presented in originals or as instructed.
            </li>
            <li className="flex items-start">
              <span className="text-xl text-gray-900 mr-2">•</span>
              A clear intent of pursuing overseas education must be presented through the application <br/>and/or during the Interview.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreparingComponents;
