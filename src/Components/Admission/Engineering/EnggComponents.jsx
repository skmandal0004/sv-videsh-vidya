import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EnggComponents = () => {
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
          Engineering
        </motion.h1>

        {/* Image & Description Section */}
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
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Engineering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-8 bg-indigo-500 text-gray-50 flex items-center justify-center text-center">
            <div>
              <p className="text-lg leading-relaxed">
                Engineers play a vital role within every country in the world, and more people are recognizing the importance of top-quality engineering graduates.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Studying engineering opens up numerous career opportunities, but prospective students should understand key requirements before pursuing a degree.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Why Study Abroad? Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            🌍 Why Study Engineering Abroad?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Studying abroad can be intimidating, filled with uncertainty and many ‘what ifs’. However, once the decision is made, it can be one of the best choices ever made.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row mt-10"
        >

          {/* Content */}
          <div className="w-full md:w-1/2 p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Benefits of Studying in the USA
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>1/4th of the world's top 100 universities are in the USA
              </li>
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>Internships (CPT) up to 12 months while studying
              </li>
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>Post-study stay-back visas (OPT) up to 3 years for STEM programs
              </li>
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>Various scholarships available
              </li>
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>Study in more than 10 top-ranked cities worldwide
              </li>
              <li className="flex items-center gap-3">
                <span className="mr-2 text-indigo-500">●</span>Opportunities for research, teaching, and assistantships
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Study in USA"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Entry Requirements Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-6 flex items-center justify-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/128/16696/16696618.png" className="w-16 h-16" />
            <span>Entry Requirements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              { icon: "https://cdn-icons-png.flaticon.com/128/7743/7743829.png", text: "IELTS / TOEFL / Duolingo / PTE" },
              { icon: "https://cdn-icons-png.flaticon.com/128/10484/10484458.png", text: "SAT for Undergraduate" },
              { icon: "https://cdn-icons-png.flaticon.com/128/4823/4823791.png", text: "GRE for Masters" },
              { icon: "https://cdn-icons-png.flaticon.com/128/15114/15114665.png", text: "GMAT for MBA" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 text-center flex flex-col items-center"
              >
                <img src={item.icon} className="w-16 h-16" />
                <p className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnggComponents;
