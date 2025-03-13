import React from "react";
import { Link } from "react-router-dom";

const AdmissionsComponents = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title Section */}
      <div className="w-full bg-white py-6 text-center">
        <h1 className="text-5xl font-bold text-black uppercase">Admissions</h1>
      </div>

      {/* Image Section with Background */}
      <div className="w-full bg-indigo-500 flex justify-center py-12">
        <img
          src="https://static.wixstatic.com/media/11062b_e8d73c6fbea94559b929801b42f17c75~mv2.jpg/v1/crop/x_0,y_235,w_5000,h_2865/fill/w_801,h_459,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/College%20Lecture.jpg"
          alt="Admissions"
          className="rounded-lg shadow-lg w-[800px] h-auto"
        />
      </div>

      {/* Categories Section */}
      <div className="w-full max-w-4xl text-center my-10">
        <h2 className="text-4xl font-semibold text-gray-900">Categories</h2>
        <div className="flex justify-center gap-6 mt-6">
          <Link to="/engineering">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
              Engineering
            </button>
          </Link>
          <Link to="/arts-sciences-humanities">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
              Arts, Sciences, Humanities
            </button>
          </Link>
          <Link to="/management">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
              Management
            </button>
          </Link>
        </div>
      </div>

      {/* Admissions List */}
      <div className="w-full max-w-4xl text-center mt-4 ">
        <h3 className="text-2xl font-bold text-gray-900">
          Check out where our students have joined!:
        </h3>
        <Link to="/admission-list">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md mt-6 hover:bg-indigo-600 transition">
            Admissions List
          </button>
        </Link>
        <p className="text-gray-700 mt-6 px-6 leading-loose text-center mb-8 tracking-wide">
        S V Videsh Vidya Enterprises, Study Abroad Consultant is centrally located at BTM layout 2nd Stage, caters to the need of students from all the fields: MBBS, MEDICAL PG ( MS in non Clinical), Engineering, Arts & Humanities, Sciences, MBA etc. Most of the study abroad courses need tests like SAT, IELTS, TOEFL, DUOLINGO, GRE,  German and French Language. At S V Videsh Vidya we train students and make them ready and eligible to apply for overseas education. We plan the time line of the students and track the progress of their application and send timely reminders at every step of the admission process. Among various benefits as listed above, you will find our study abroad consulting charges very reasonable. Among others we offer free counseling and profile shortlisting. We also provide free Visa Guidance* to our students. We listen to your individual requirements and give you customized solutions for your needs. This ensures higher selection of our students.
        </p>
      </div>
    </div>
  );
};

export default AdmissionsComponents;
