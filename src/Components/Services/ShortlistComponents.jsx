import React from "react";

const ShortlistComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900  py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Counselling & <span className="text-indigo-600">Shortlisting</span>
        </h1>

        {/* First Section - Profile Assessment */}
        <div className="flex flex-col md:flex-row bg-white  dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/7579302/pexels-photo-7579302.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Counselling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Counselling & Profile Assessment
            </h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
              Every study abroad aspirant needs to evaluate their profile to 
              understand their strengths and gaps. Whether it’s low grades, test scores, 
              or extracurricular activities, a strategic approach can open doors to top universities. 
              Get your <strong>Free Profile Evaluation</strong> and take the first step towards your 
              global education journey.
            </p>
          </div>
        </div>

        {/* Spacing */}
        <div className="h-12"></div>

        {/* Second Section - University Shortlisting */}
        <div className="flex flex-col md:flex-row-reverse bg-white dark:bg-gray-900  shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/31290545/pexels-photo-31290545/free-photo-of-graduation-day-celebration-with-students-tossing-caps.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="University Shortlisting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Shortlisting Universities
            </h2>
            <p className="text-gray-700  dark:text-gray-400 text-lg leading-relaxed">
              Selecting the right university is crucial. We help students shortlist institutions 
              based on their academic profile, budget, and career aspirations. With over 
              <strong>10,000+ courses in 15+ countries</strong>, we guide you towards 
              the best options for your future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortlistComponents;
