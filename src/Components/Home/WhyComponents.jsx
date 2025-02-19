import React from "react";

const WhyComponents = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-800">
          S V Videsh Vidya Enterprises
        </h2>
        <p className="text-5xl font-bold text-blue-600 mt-2">
          Global Education Services
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-8 max-w-5xl mx-auto text-gray-700 text-lg md:text-xl space-y-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-6">
          Why Study Abroad?
        </h3>
        <p className="leading-relaxed md:leading-normal max-w-3xl mx-auto">
        Study Abroad is as alluring as it can get. It presents itself with tremendous opportunities and uncertainties. You step into the real world and in most cases, out of your comfort zone and embrace the differences that exist in various cultures and education systems. Traveling is an integral part of the study abroad process and it paves the way to a great future once you inculcate the learning from the difficulties and challenges of a new culture in your stride
       </p>



       <p className="leading-relaxed md:leading-loose max-w-3xl mx-auto">
  <span className="font-bold">S V Videsh Vidya Enterprises</span> is dedicated to helping students across India  
  realize their dream of earning a qualification from an institute that best  
  suits their requirements, skills, and the knowledge they strive to acquire.  

  Our unique experience facilitates education in the, 
  <span className="font-semibold">
      United Kingdom, USA, Australia, Canada, New Zealand, Ireland, Germany,  
    Latvia, Lithuania, Estonia, Finland, Italy, Spain, France, Dubai, Singapore,  
    Philippines, Sweden, and Switzerland.
  </span>  

  With our expert knowledge, we guide students seeking quality education  
  at affordable fees in top universities with state-of-the-art facilities,  
  ensuring they remain globally competitive.
</p>


        {/* Button Section */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg">
            Admissions List
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyComponents;
