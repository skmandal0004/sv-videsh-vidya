import React from "react";
import { motion } from "framer-motion";

const TypesComponents = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12">
      {/* Heading */}
      <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="max-w-4xl w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 leading-snug">
          Types of Engineering Courses you can
          <br />
          <span className="text-indigo-600">Study Abroad:</span>
        </h1>
      </motion.div>

      {/* Paragraph Section */}
      <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="max-w-4xl w-full bg-white text-gray-800 shadow-lg rounded-lg p-8 dark:bg-gray-700 dark:text-white">
        <p className="text-lg leading-relaxed mb-6">
          Engineering courses are plentiful, with opportunities to combine studies with subjects like law, business, or medicine. Popular study destinations include <strong className="dark:text-yellow-400">USA, Australia, New Zealand, UK, Ireland, Italy, Germany, France, and Canada</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Students can pursue diplomas, undergraduate, or postgraduate degrees. Most **highly paid engineers** complete a postgraduate degree, giving access to over <strong className="dark:text-yellow-400">5,000 different courses</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          Engineering courses are available at multiple levels, with the most popular ones listed below.
        </p>
      </motion.div>

      {/* Course List in Grid Form */}
      <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}className="max-w-4xl w-full px-6 mt-8">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-gray-800">
          {["Foundation", "Undergraduate", "Postgraduate (Taught, Research, PhD)"].map((course, index) => (
            <li key={index} className="bg-indigo-100 text-indigo-900 p-4 rounded-lg shadow-md font-semibold flex items-center justify-center text-center">
              {course}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Specialization Section */}
      <div className="max-w-4xl w-full px-6 mt-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-indigo-500 text-center mb-6">Specializations in Engineering</h2>
        <p className="text-lg text-gray-700 dark:text-gray-50 leading-relaxed text-center mb-8">
          S V Videsh Vidya can help you choose the right engineering university based on your interest. Some popular specializations include:
        </p>
      </div>

      {/* Specialization List in Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg text-gray-800 max-w-7xl w-full">
        {[
          "Aerospace",
          "Automotive",
          "Bio Technology",
          "Biomedical",
          "Chemical",
          "Civil Engineering",
          "Electrical",
          "Electronics & Embedded Tech",
          "Energy & Power",
          "Environmental Science",
          "Industrial & Systems",
          "Marine",
          "Mechanical",
          "Mechatronics",
          "Mining",
          "Nanotechnology",
          "Petroleum, Oil & Gas",
          "Robotics",
          "Sustainable Energy",
          "Transportation Engineering",
        ].map((field, index) => (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} key={index} className="bg-gray-100 p-4 rounded-lg shadow-md font-medium flex justify-center items-center text-center">
            {field}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TypesComponents;
