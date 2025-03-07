import React from "react";

const AdmissionComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-center font-extrabold text-5xl text-gray-900 dark:text-gray-50 mb-12">
          Applications & Admissions
        </h1>

        {/* Container for all sections */}
        <div className="space-y-12">

          {/* Documentation & Application Processing */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://static.wixstatic.com/media/11062b_9459ad2901b64dbe97b48f2369402f7a~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9459ad2901b64dbe97b48f2369402f7a~mv2.jpg"
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
                Submitting **timely and well-structured documents** is crucial in university and visa applications. At **S V Videsh Vidya**, we guide students in **document preparation** to ensure accuracy, relevance, and compliance with university/visa guidelines.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>SOP - Statement of Purpose</li>
                <li>LOR - Letter of Recommendation</li>
                <li>Resume/CV</li>
                <li>Academic Essays / Goals</li>
                <li>Portfolio Building</li>
              </ul>
              <p className="leading-relaxed text-lg mt-4">
                Applications typically begin **8-10 months in advance**, but early submissions help in securing **scholarships** and **faster processing**.
              </p>
            </div>
          </div>

          {/* Interview Preparation */}
          <div className="flex flex-col md:flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
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
                Many universities in **USA, Canada, Germany, Europe, Australia, and New Zealand** require interviews as part of their admissions process.  
                <br /><br />
                Our team helps students **prepare thoroughly**, offering insights based on their profiles and coordinating **mock interviews** to ensure success.
              </p>
            </div>
          </div>

          {/* Internships (CPT) */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
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
                **Earn while you learn** with **Curricular Practical Training (CPT)**, which provides hands-on work experience while studying.  
                <br /><br />
                CPT helps students develop **industry-relevant skills**, become job-ready, and build a **strong professional network**—increasing their chances of securing **top-tier job opportunities** post-graduation.
              </p>
            </div>
          </div>

        </div>  
      </div>
    </div>
  );
};

export default AdmissionComponents;
