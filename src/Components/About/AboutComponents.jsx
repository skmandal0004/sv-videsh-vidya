import React from "react";

const AboutComponents = () => {
  return (
    <div className="bg-indigo-500 text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-4xl font-extrabold mb-6">About <span className="text-white">Us</span></h2>
        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-50">
          <strong className="text-indigo-950 font-bold">S V Videsh Vidya Enterprises</strong> is dedicated to helping students from all over India to realize their dream of 
          getting their qualification from an institute that is best suited for their requirements, skills, and knowledge 
          they strive to acquire.
        </p>
      </div>
    </div>
  );
};

export default AboutComponents;
