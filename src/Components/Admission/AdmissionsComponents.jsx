import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AdmissionsComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-16 lg:px-24 xl:px-40 transition-colors duration-300">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center font-extrabold text-5xl md:text-6xl text-gray-900 dark:text-white mb-10 uppercase tracking-wide"
      >
        Admissions
        </motion.h1>
      </div>

      {/* Image Section with Background */}
      <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
        <img
          src="https://static.wixstatic.com/media/11062b_e8d73c6fbea94559b929801b42f17c75~mv2.jpg/v1/crop/x_0,y_235,w_5000,h_2865/fill/w_801,h_459,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/College%20Lecture.jpg"
          alt="Admissions"
          className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 bg-indigo-500 text-gray-50 flex items-center justify-center text-center">
            <div>
              <p className="text-lg leading-relaxed">
              S V Videsh Vidya Enterprises, Study Abroad Consultant is centrally located at BTM layout 2nd Stage, caters to the need of students from all the fields: MBBS, MEDICAL PG ( MS in non Clinical), Engineering, Arts & Humanities, Sciences, MBA etc. Most of the study abroad courses need tests like SAT, IELTS, TOEFL, DUOLINGO, GRE,  German and French Language. At S V Videsh Vidya we train students and make them ready and eligible to apply for overseas education. We plan the time line of the students and track the progress of their application and send timely reminders at every step of the admission process. Among various benefits as listed above, you will find our study abroad consulting charges very reasonable. Among others we offer free counseling and profile shortlisting. We also provide free Visa Guidance* to our students. We listen to your individual requirements and give you customized solutions for your needs. This ensures higher selection of our students.
        </p>
        </div>
          </div>

        </motion.div>

      {/* Categories Section */}
      <div className="w-full text-center  my-10">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white ">Categories</h2>
        <div className="flex text-center justify-center gap-6 mt-6">
          <Link to="/engineering">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
              Engineering
            </button>
          </Link>
          <Link to="/arts-sciences">
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
      <div className="w-full  flex flex-col items-center justify-center text-center mt-4">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
    Check out where our students have joined!:
  </h3>
  <Link to="/admission-list">
    <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md mt-6 hover:bg-indigo-600 transition">
      Admissions List
    </button>
  </Link>
</div>


    </div>
  );
};

export default AdmissionsComponents;
