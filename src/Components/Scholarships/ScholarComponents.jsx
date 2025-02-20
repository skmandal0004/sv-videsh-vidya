import React from "react";

const ScholarComponents = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-full mx-auto px-12">
        {/* Scholarships Section */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-[50%]">
        <img
             src="https://santamonicaedu.in/wp-content/uploads/2023/03/scholarships_in_canada.jpg"
             alt="Scholarships"
            className="w-full h-full object-cover"
        />
                </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col">
            <h2 className="text-3xl font-bold text-red-500 mb-2 text-center">
              Scholarships
            </h2>
            <p className="leading-normal text-base">
            Every year more than hundreds of thousands of dollars worth scholarships are distributed for International Students by various Universities/Colleges/Organizations. Most of these scholarships goes to the deserving ones based on numerous criteria described by the Funding Institute. For Indian students these scholarships can come in following ways.
            </p>
            
            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>Indian Student Overseas Education Scholarships</li>
              <li>International Students Study Abroad Scholarships</li>
              <li>Indian Students Scholarship for Higher Studies in India</li>
            </ul>
            <p className="leading-normal text-base">
            The myth around scholarship is that only toppers from different spheres of life gets scholarship. But let’s not argue that toppers deserve these scholarships based on certain criteria. But Overseas Education Scholarships are not restricted to toppers alone. Most Study Abroad Student Scholarships fall under following four major types:​
            </p>

            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>Need based Scholarships (for financially backward students mostly with good/decent academic records)</li>
              <li>Student Specific Scholarships (generally based on caste, religion, gender or similar grounds)</li>
              <li>University/College Scholarships (it can be Merit based or other criteria as mentioned by university)</li>
              <li>Company Based Sponsorship (Professionals working in companies get full sponsorship in the pretext of coming back and joining the same company)</li>
            </ul>

            <p className="leading-normal text-base">
            The above mentioned types of scholarships cover almost 90% of total scholarships awarded to Study Abroad aspirants. Hence students seeking admission for overseas education mustn’t lose hope and do research thoroughly to take advantage of these wonderful scholarship options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarComponents;
