import React from "react";

const ShortlistComponents = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Counselling & <span className="text-indigo-600">Shortlisting</span>
        </h1>

        {/* First Section - Profile Assessment */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg"
              alt="Counselling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Counselling & Profile Assessment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
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
        <div className="flex flex-col md:flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/11062b_f1fe3ddd93164d239e705f5b07e7a2ef~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f1fe3ddd93164d239e705f5b07e7a2ef~mv2.jpeg"
              alt="University Shortlisting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Shortlisting Universities
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
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
