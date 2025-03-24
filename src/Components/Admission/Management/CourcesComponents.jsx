import React from "react";

const CoursesComponent = () => {
  const businessCourses = [
    "Commerce, Business and Administration",
    "Banking, Insurance, Risk Management, Taxation",
    "Business Analytics, Management Consulting",
    "Business Management, Business Administration, Entrepreneurship",
    "Innovation, Operations, Project Management, Event Management",
    "Organizational Management, Health Management",
    "Commerce",
    "Conflict Analysis and Management",
    "Finance, Accounts, Commerce, Economics",
    "Financial Management, International Management, Marketing Management",
  ];

  const technicalCourses = [
    "Hospitality and Tourism Management",
    "Human Resource Management, Human Resource Development",
    "Information Systems, Information Technology Management",
    "International Business",
    "Logistics, Supply Chain Management",
    "Office Administration",
    "Real Estate, Property Administration",
    "Sales, Marketing, Public Relations, Public Services, E-business, Digital",
  ];

  const digitalCourses = [
    "International Business/Design & Innovation/International Trade",
    "Transportation, Transportation Management",
    "Library Management",
    "Exhibition Management, Event Management",
    "Hospital Management, Healthcare Management",
    "Sports Management",
  ];

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wide">
        Explore Our Courses
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-10">
        Discover a wide range of Business & Management courses tailored for students seeking bachelor's and master's programs abroad. Choose from various specializations to shape your future.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Business & Management Courses */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-indigo-500">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Business & Management
          </h2>
          <ul className="space-y-3">
            {businessCourses.map((course, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-md shadow-sm text-gray-800">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Management Courses */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-green-500">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Technical Management
          </h2>
          <ul className="space-y-3">
            {technicalCourses.map((course, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-md shadow-sm text-gray-800">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Digital Marketing & Business */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Business & Digital Marketing
          </h2>
          <ul className="space-y-3">
            {digitalCourses.map((course, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-md shadow-sm text-gray-800">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Duration Section */}
      <div className="max-w-4xl w-full mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Duration of Education</h2>
        <p className="text-lg text-gray-700 leading-loose">
          Most programs in Business Management range from 1 to 3 years. Postgraduate students typically pursue 1-2 year programs, while undergraduate students enroll in 2-3 year courses, often complemented by internships at renowned companies.
        </p>
      </div>
    </div>
  );
};

export default CoursesComponent;