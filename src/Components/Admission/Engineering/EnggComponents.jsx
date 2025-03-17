import React from "react";

const EnggComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Heading */}
      <div className="w-full bg-white py-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900 text-center mt-6 mb-4">Engineering</h1>
      </div>

      {/* Image */}
      <div className="w-full bg-indigo-500 flex justify-center py-12">
        <img
          src="https://static.wixstatic.com/media/11062b_495f820f15044bc1818be58edaa4320c~mv2_d_5500_3668_s_4_2.jpg/v1/crop/x_0,y_258,w_5500,h_3151/fill/w_882,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Engineering%20Class.jpg"
          alt="Engineering"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
        <p className="text-lg leading-relaxed mb-6">
        Engineers play a vital role within every country in the world and more and more people are beginning to understand the importance of top quality engineering graduates. Studying engineering will present lots of career opportunities, but anyone interested in an engineering qualification should be aware of some general points before beginning.
        </p>
        
        <p className="text-lg leading-relaxed mb-6">
        Engineering is one of the most rewarding careers of the modern world, and one that can lead to a large number of different roads and areas of specialism. The chance to study engineering abroad is an exciting, dynamic and wonderful road to choose, and can be combined with other subjects if you so wish.
        </p>

        {/* Why Study Engineering Abroad? */}
        <h2 className="text-3xl font-semibold text-center text-gray-900 mt-10 mb-4">Why Study Engineering Abroad?</h2>
        <p className="text-lg leading-relaxed mb-6">
        Studying abroad can be a scary decision to make, full of ‘what do I do about…’, ‘what happens with…’, and ‘what if…’ – all confusing thoughts, but once the decision is made, it will no doubt become one of the best decisions you ever made, and will leave you with a once in a lifetime experience, and an extremely valuable degree to take wherever you please.
        </p>

        <p className="text-lg leading-relaxed mb-6">
        Engineering has maintained its popularity as an academic subject and with technological and social developments taking place all over the globe now, engineering really is an international subject. It doesn’t matter where you want to study engineering, because it is truly a global subject with the best universities for engineering spread across the world.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether you wish to study engineering in the <strong>USA, UK, Canada, Australia, New Zealand, Dubai</strong>, or 
          find engineering courses with <strong>free education in Germany or other European countries</strong>, 
          <span className="text-indigo-600 font-semibold"> S V Videsh Vidya </span> can help you across the globe.
        </p>

        {/* Example Benefits */}
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Benefits of Studying in USA:</h3>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            <li>USA has almost 1/4th of Worlds top 100 Universities</li>
            <li>Internships (CPT) upto 12 months while studying</li>
            <li>Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
            <li>Various Scholarships</li>
            <li>We offer admissions in more than 10 Best cities in the World</li>
            <li>Opportunities for Research, Teaching & Graduate Assistantships</li>
          </ul>
        </div>

          {/* Entry Requirements Section */}
          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6 text-center">Entry Requirements:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* English Proficiency Tests */}
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
          <ul className="list-disc pl-5 space-y-1">
            <li >IELTS / TOEFL / Duolingo / PTE</li>
          </ul>
          </div>

          {/* SAT Requirement */}
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
          <ul className="list-disc pl-5 space-y-1">
            <li >SAT for Undergraduate</li>
            </ul>
          </div>

          {/* GRE Requirement */}
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
          <ul className="list-disc pl-5 space-y-1">
            <li >GRE for Masters</li>
          </ul>
          </div>

          {/* GMAT Requirement */}
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
          <ul className="list-disc pl-5 space-y-1">
            <li >GMAT for MBA</li>
          </ul>
          </div>
        </div>

      </div> 
    </div>
  );
};

export default EnggComponents;
