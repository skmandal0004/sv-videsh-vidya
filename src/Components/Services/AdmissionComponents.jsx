import React from "react";

const AdmissionComponents = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-full mx-auto px-6">
        <h1 className="text-center font-bold text-5xl mb-8">
        Applications and <br/>Admissions
        </h1>
        {/* Parent Wrapper for all Sections */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col ">
          
          {/* Documentation & Application Processing Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://static.wixstatic.com/media/11062b_9459ad2901b64dbe97b48f2369402f7a~mv2.jpg/v1/fill/w_512,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9459ad2901b64dbe97b48f2369402f7a~mv2.jpg"
                alt="Admission Process"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col">
              <h2 className="text-4xl font-bold text-red-500 mb-4">
                Documentation and <br /> Application Processing
              </h2>
              <p className="leading-loose text-lg">
              Documents are subject to country and course applying for in most cases. Two major points students must understand is that, Timely Submission of Documents is required and that the Documents submitted are in the prescribed format as per the University/Visa guidelines. At S V Videsh Vidya, we provide list of documents based on the guidelines and go through those documents once procured from students and suggest changes if necessary. We also correct and polish the documents based on structure, format, relevance, grammar and objective of the document. Some of the documents that hold critical importance and must not be overlooked are:
              </p>
              <ul className="list-disc list-inside mt-4 mb-4 space-y-2">
                <li>SOP - Statement of Purpose</li>
                <li>LOR - Letter of Recommendation</li>
                <li>Resume/CV</li>
                <li>Academic Essay or Goals</li>
                <li>Portfolio Building</li>
              </ul>
              <p className="leading-loose text-lg">
              Application Processing starts as soon as students select the university/course/country and have submitted the documents. S V Videsh Vidya does not charge application fee for the universities represented. Generally, the application processing starts 8-10 months in advance of the intake chosen and can go as less as 1-2 months(depending on all documents ready). We suggest earlier the better as it gives us enough time to apply for Study Abroad Scholarships( which have early deadlines). Turn around time for Universities to make a decision once the application is submitted varies and depends on the volume of application received. It’s always advised to apply early but late applications aren’t necessary at a disadvantage. It takes about 2-4 weeks and in some cases 6-8 weeks to confirm the admission.
              </p>
            </div>
          </div>

          {/* Interview Preparation Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col ">
              <h2 className="text-4xl font-bold text-red-500 mb-4">
                Interview Preparation
              </h2>
              <p className="leading-loose text-lg">
              In USA/ Germany/ Canada/ Europe/ Australia/ New Zealand, many universities prefer to interview students as part of their Study Abroad Student Admission Process or as an extra step to ensure the right candidature for a particular course applied during university admissions.​At S V Videsh Vidya, our team informs the student in advance and coordinate with the universities on students behalf to organize these interviews. These interviews may be telephonic or Skype based and are facilitated in S V Videsh Vidya Office. We help our students with the requisite preparation and provide them significant inputs based on their profle.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Interview Preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Internships (CPT) Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Internships CPT"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col ">
              <h2 className="text-4xl font-bold text-red-500 mb-6">
                Internships (CPT)
              </h2>
              <p className="leading-loose text-lg mb-6">
              Earn while you Learn : 
              </p>
              <p className="leading-loose text-lg">
              Curricular Practical Training ( CPT ) , is the best opportunity for International students. Which will help them to understand the required skill and become job ready. Students can be a part of a community of their profession. The knowledge they gain from the University and CPT, the experience they gain from being part of the community will help them build a strong profile which will attract future employers.
              </p>
            </div>
          </div>

        </div> 
        {/* End of Parent Wrapper */}
      </div>
    </div>
  );
};

export default AdmissionComponents;
