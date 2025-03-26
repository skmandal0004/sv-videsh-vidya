import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AdmissionComponents = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#internship-section") {
      setTimeout(() => {
        document.getElementById("internship-section")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-center font-extrabold text-5xl text-gray-900 dark:text-gray-50 mb-12">
          Applications & <span className="text-indigo-500">Admissions</span>
        </h1>

        {/* Container for all sections */}
        <div className="space-y-12">

          {/* Documentation & Application Processing */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/7979436/pexels-photo-7979436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Admission Process"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-10 bg-[#0F0C24] text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-red-500 mb-6">
                Documentation & Application Processing
              </h2>
              <p className="leading-relaxed text-lg">
                Submitting <span className="text-red-500">timely</span> and <span className="text-red-500">well-structured documents</span> is crucial in university and visa applications. At <span className="text-yellow-300 font-bold">S V Videsh Vidya</span>, we guide students in <span className="text-yellow-400">document preparation</span> to ensure accuracy, relevance, and compliance with university/visa guidelines.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>SOP - Statement of Purpose</li>
                <li>LOR - Letter of Recommendation</li>
                <li>Resume/CV</li>
                <li>Academic Essays / Goals</li>
                <li>Portfolio Building</li>
              </ul>
              <p className="leading-relaxed text-lg mt-4">
                Applications typically begin <span className="text-yellow-300 font-bold">8-10 months in advance</span>, but early submissions help in securing <span className="text-yellow-300">scholarships</span> and <span className="text-yellow-300">faster processing</span>.
              </p>
            </div>
          </div>

          {/* Interview Preparation */}
          <div className="flex flex-col md:flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden" >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5439143/pexels-photo-5439143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interview Preparation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-10 bg-[#0F0C24] text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-red-500 mb-6">
                Interview Preparation
              </h2>
              <p className="leading-relaxed text-lg">
                Many universities in <span className="font-bold">USA, Canada, Germany, Europe, Australia, and New Zealand</span> require <span className="text-red-500">interviews</span> as part of their admissions process.  
                <br /><br />
                <span id="internship-section"></span>Our team helps students <span className="text-yellow-300">prepare thoroughly</span>, offering insights based on their profiles and coordinating <span className="text-yellow-300">mock interviews</span> to ensure success.
              </p>
            </div>
          </div>

          {/* Internships (CPT) */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Internships CPT"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-10 bg-[#0F0C24] text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-red-500 mb-6">
                Internships (CPT)
              </h2>
              <p className="leading-relaxed text-lg">
              <span className="text-yellow-300 font-bold">Earn while you learn</span> with <span className="text-yellow-300">Curricular Practical Training (CPT)</span>, which provides hands-on work experience while studying.  
                <br /><br />
                CPT helps students develop <span className="text-yellow-300">industry-relevant skills</span>, become job-ready, and build a <span className="text-yellow-300">strong professional network</span>, increasing their chances of securing <span className="text-yellow-300">top-tier job opportunities</span> post-graduation.
              </p>
            </div>
          </div>

        </div>  
      </div>
    </div>
  );
};

export default AdmissionComponents;
