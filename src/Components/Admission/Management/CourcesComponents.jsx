import React from "react";

const CourcesComponents = () => {
  const businessCourses = [
    "Commerce, Business and Administration",
    "Banking, Insurance, Risk Management, Taxation",
    "Business Analytics, Management Consulting",
    "Business Management, Business Administration, Entrepreneurship,",
    "Innovation, Operations, Project Management, Event Management,",
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
  ]

  return (
    <div className="flex flex-col items-center w-full bg-white px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-gray-900 mb-6 text-center">
        Bachelors and Masters Courses Available
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
      Diverse programs under Business & Management abroad, offer different specializations and degree options for Indian students. They are offered as BA , MA, Bachelors / Masters etc.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Business & Management Courses */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Business & Management:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {businessCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow text-gray-800"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Management Courses */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Technical Management:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow text-gray-800"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Business, Digital Marketing:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {digitalCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow text-gray-800"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-medium text-gray-900 mb-6 text-center mt-8">
      Duration of Education:
      </h2>
      <div className="max-w-4xl w-full px-6  text-gray-800">
        <p className="text-xl leading-loose mb-4">
      Most programs in Business Management are 1 year to 3 year long. Post graduate students prefer to go for 1 -2 year programs whereas Undergraduate students pursue 2-3 year long courses along with Internships at various companies.
      </p>
    </div>
    </div>
  );
};

export default CourcesComponents;
