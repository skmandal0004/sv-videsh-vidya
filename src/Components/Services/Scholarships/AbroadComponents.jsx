import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AbroadComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            International Scholarships for <br className="hidden md:block" /> Study Abroad
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Scholarships for overseas education of Indian students, categorized by country.
          </p>
        </motion.div>

        {/* Scholarships Sections */}
        {[
          {
            title: "United Kingdom",
            items: [
              "Commonwealth Scholarship",
              "Sheffield Hallam University Scholarship",
              "Hornby Scholarships",
              "Oxford Rhodes Scholarship",
              "Cambridge India Ramanujan Scholarship",
              "Dr Manmohan Singh Scholarships",
              "Inlaks Study Abroad Scholarships",
            ],
          },
          {
            title: "USA",
            items: [
              "Fulbright-Nehru Fellowships",
              "Tata Scholarships for Cornell",
              "Lady Meherbai Tata Scholarships",
              "TOEFL® Scholarship Program",
              "Rotary Foundation Ambassadorial Scholarship",
              "Yale Young Global Scholars",
            ],
          },
          {
            title: "Australia",
            items: [
              "International Postgraduate Research Scholarships (IPRS)",
              "Macquarie University Scholarships",
              "Melbourne-India Postgraduate Scholarship",
              "Australia Awards Scholarships",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-md shadow-sm inline-block">
              {section.title}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-3 shadow rounded-md text-gray-700 dark:text-gray-300 text-sm flex items-center transition-colors"
                >
                  <span className="mr-2 text-indigo-500">●</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Other Countries Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-md shadow-sm inline-block">
            Other Countries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {[
              { country: "China", scholarships: ["Chinese Government Scholarship", "Huawei Maitree Scholarship"] },
              { country: "New Zealand", scholarships: ["Commonwealth Scholarship Plan", "New Zealand Excellence Award"] },
              { country: "Singapore", scholarships: ["A STAR and SIA Youth Scholarship"] },
              { country: "Ireland", scholarships: ["UCD Undergraduate Scholarships"] },
            ].map((country, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-gray-700 dark:text-gray-300 text-sm transition-colors"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{country.country}</h4>
                <ul className="mt-2 space-y-1">
                  {country.scholarships.map((scholarship, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 text-indigo-500">●</span> {scholarship}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AbroadComponents;
