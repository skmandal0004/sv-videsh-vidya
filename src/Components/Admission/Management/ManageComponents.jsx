import React from 'react';

const ManageComponents = () => {
  const subjects = [
    { name: "Business Management", gradient: "from-red-500 to-red-700" },
    { name: "Business Administration", gradient: "from-teal-400 to-teal-600" },
    { name: "Finance Studies", gradient: "from-green-400 to-green-600" },
    { name: "Business Analytics", gradient: "from-blue-500 to-blue-700" },
    { name: "Investment Banking", gradient: "from-purple-500 to-purple-700" },
    { name: "International Trade", gradient: "from-gray-900 to-gray-700" },
    { name: "Management Studies", gradient: "from-gray-800 to-gray-600" },
    { name: "Project Management", gradient: "from-purple-400 to-purple-600" },
    { name: "Human Resource", gradient: "from-blue-400 to-blue-600" },
    { name: "Product Development", gradient: "from-green-500 to-green-700" },
    { name: "Marketing Management", gradient: "from-teal-300 to-teal-500" },
    { name: "International Business", gradient: "from-orange-400 to-orange-600" },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-16 lg:px-24 xl:px-40">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-10 text-center uppercase tracking-wide">
        Management Studies
      </h1>

      {/* Image & Text Side by Side */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl bg-indigo-500 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2">
          <img
            src="https://static.wixstatic.com/media/11062b_83a12026801a4252ac7e470fa11c9a6b~mv2.jpg/v1/crop/x_0,y_315,w_6720,h_3850/fill/w_802,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business.jpg"
            alt="Management"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 text-gray-50 text-lg">
          <p className="leading-relaxed">
            Business Management courses have evolved significantly due to globalization, technological advancements, and the emergence of startups. Specialized management courses are now widely available for students, beyond traditional MBA programs.
          </p>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 w-full max-w-7xl">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-5 text-white text-center font-semibold rounded-xl shadow-md bg-gradient-to-r ${subject.gradient} transition-transform transform hover:scale-105 hover:shadow-2xl active:scale-95`}
          >
            {subject.name}
          </div>
        ))}
      </div>

      {/* Study Abroad Options */}
      <div className="max-w-5xl w-full text-center mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Study Abroad Options</h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
          Top destinations for business & management studies among Indian students include New Zealand, UK, Canada, Australia, Singapore, USA, and various European countries. Students can choose their destination based on budget and course preferences.
        </p>
      </div>
    </div>
  );
};

export default ManageComponents;