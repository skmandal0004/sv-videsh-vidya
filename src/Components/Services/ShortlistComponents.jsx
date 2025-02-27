import React from "react";

const ShortlistComponents = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-full mx-auto px-6">
        {/* Section Heading */}
        <h1 className="text-5xl font-bold text-center text-black mb-12">
          Counselling and Shortlisting
        </h1>

        {/* Wrapper for Both Content Boxes */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          {/* First Content Box */}
          <div className="flex flex-col md:flex-row bg-white">
            {/* Left Image */}
            <div className="w-full md:w-1/2 border-r border-gray-300 flex">
              <img
                src="https://static.wixstatic.com/media/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg/v1/fill/w_575,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg"
                alt="Counselling"
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 text-center flex flex-col mt-10 ">
              <h2 className="text-4xl font-bold text-black mb-8">
                Counselling /<br /> Profile Assessment
              </h2>
              <p className="text-gray-700 leading-loose text-lg ">
                Every aspirant needs to assess where they stand with respect to
                their profile. Are you falling short of some standard tests
                requirements? Are you having less percentages? Do you have all
                academic records? Are you a person with lots of extra-curricular
                but low academic score? Do you have backlogs and if yes, what
                are the chances? Do you have gap in education? And many more…
                Most of these questions are relevant to study abroad aspirants.
                And make no mistake, if you carefully handle even the worst of
                situation in a positive way, there may be a wonderful
                opportunity waiting for you. So why wait!! Get your Free Study
                Abroad Profile Evaluation done through our experts and step in
                to a better and successful career.
              </p>
            </div>
          </div>

          {/* Borderline Between Sections */}
          <div className="border-t border-gray-300"></div>

          {/* Second Content Box */}
          <div className="flex flex-col md:flex-row-reverse bg-gray-100">
            {/* Right Image */}
            <div className="w-full md:w-1/2 border-l border-gray-400 flex">
              <img
                src="https://static.wixstatic.com/media/11062b_f1fe3ddd93164d239e705f5b07e7a2ef~mv2.jpeg/v1/fill/w_575,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f1fe3ddd93164d239e705f5b07e7a2ef~mv2.jpeg"
                alt="University Shortlisting"
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </div>

            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 text-center flex flex-col mt-10">
              <h2 className="text-4xl font-bold text-black mb-8">
                Shortlisting of Universities
              </h2>
              <p className="text-gray-700 leading-loose text-lg">
                Needless to say this is one of the most critical aspects of your
                Study Abroad application. We help our registered students in
                shortlisting the colleges/universities based on the Profile
                Assessment done in the first step. It involves interest of the
                students keeping in mind their overall profile which includes
                academic scores, standardized test scores, work experience,
                budget, and other factors. We are flexible in applying to
                universities where we are partnered and/or outside of that. Once
                the student is ready to apply after having consulted with
                friends and family, we start the Documentation. There are over
                10000+ courses in more than 15 countries across various fields
                to choose from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortlistComponents;
