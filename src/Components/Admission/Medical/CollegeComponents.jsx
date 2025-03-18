import React from 'react';

const CollegeComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Header Section with Image */}
      <div className="relative w-full">
        <img
          src="https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/fill/w_480,h_1871,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg"
          alt="College Building"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Colleges</h1>
        </div>
      </div>

      {/* Subheading */}
      <div className="text-center mt-6">
        <p className="text-xl text-gray-700 font-semibold">That we help with</p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full px-6 py-10">
        {/* Universities Offering Health Courses */}
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
        Universities Offering Health Courses (Pharmacy , Nursing, Pre-Medical)
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[
            "University of Alabama Birmingham (M.S. in Epidemiology)* (CEPH Accredited)",
            "University of Arizona (M.S. in Public Health) (CEPH Accredited)",
            "Saint Louis University (M.S. in Public Health)* (CEPH Accredited)",
            "SUNY, Albany (M.S. in Mental Health Counselling) (CEPH Accredited)",
            "George Mason University (M.S. in Health Informatics)* ",
            "University of Cincinnati (M.S. in Public Health)*",
            "San Jose State University (Masters of Public Health)",
            "University of North Florida (Master of Public Health)",
            "University of North Texas (M.S. in Health Informatics)",
            "University of Wisconsin Milwaukee (M.S. in Health Care informatics)*",
            "UMass Dartmouth (M.S. in Healthcare Management)",
            "University of Maryland Baltimore County (MPS Health Informatics Tech) *",
            "University of Tennessee at Chattanooga (MBA in Health Care Administration)",
            "Resemble STEM Programs",
          ].map((university, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-900 font-medium text-center">{university}</p>
            </div>
          ))}
        </div>

        {/* Pharmaceutical Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-indigo-700 text-center">
        Pharmaceutical
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[
            "Oregon State University (M.S. in Toxicology)",
            "Wright State University (M.S. in Pharmacology & Toxicology)",
            "University of Cincinnati (M.S. in Pharmaceutical Science)",
            "(M.S. in Pharmaceutical Chemistry) New Jersey Institute of Technology",
            "(M.S. in Pharmaceutics- Cosmetic Science) Long Island University, Brooklyn",
            "(M.S. in Cosmetic Science) Fairleigh Dickinson University",
            "(M.S. in Pharmacy Administration) Duquesne University",
            "(M.S. in Toxicology) Colorado State University",
            "(M.S. in Pharmacology & Toxicology) University of Louisville",
            "Massachusetts College of Pharmacy and ",
            "Health Sciences (M.S. in Regulatory Affairs & Health Policy)",
          ].map((university, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-900 font-medium text-center">{university}</p>
            </div>
          ))}
        </div>


        <h2 className="text-2xl font-bold mt-12 mb-6 text-indigo-700 text-center">
        Nursing and Pre-Medical
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {[
            "Miami University, Middletown (B.S. in Nursing)",
            "The University of Alabama, Tuscaloosa (B.S. in Nursing)",
            "Saginaw Valley State University (B.S. in Nursing)",
            "Arkansas State University (B.S. in Nursing)",
            "Youngstown State University (B.S. in Nursing)",
            "California State University, Fresno (B.S. in Nursing)",
            "Northern Arizona University (B.S. in Biomedical Science)",
            "Arizona State University (B.S. in Nursing)",
            "University of Tampa (B.S. in Nursing)",
            "Texas State University (B.S. in Nursing) ",
            "Wright State University (B.S. in Nursing)",
            "Jefferson University (B.S. in Premedical Studies)",
            " University of Memphis (B.S. in Nursing)",
          ].map((university, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-900 font-medium text-center">{university}</p>
            </div>
          ))}
        </div>




      </div>
    </div>
  );
};

export default CollegeComponents;
