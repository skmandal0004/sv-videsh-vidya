import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ScholarComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-6 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-8"
        >
          Scholarships & Loans
        </motion.h1>

        {/* Scholarships Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://santamonicaedu.in/wp-content/uploads/2023/03/scholarships_in_canada.jpg"
              alt="Scholarships"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-red-500 mb-3 text-center">
              Scholarships
            </h2>
            <p className="text-base mb-3">
              Every year, numerous scholarships are awarded to international
              students based on various criteria. Indian students can apply for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Indian Student Overseas Education Scholarships</li>
              <li>International Students Study Abroad Scholarships</li>
              <li>Scholarships for Higher Studies in India</li>
            </ul>

            <p className="text-base mt-3">
              Scholarships are not just for toppers. Most study abroad
              scholarships fall under:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Need-based (for financially challenged students)</li>
              <li>Student-specific (based on caste, gender, etc.)</li>
              <li>University-based (merit or other criteria)</li>
              <li>Company-sponsored (for employees returning post-study)</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Loans Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row-reverse mt-8"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://articlesmall.com/wp-content/uploads/2024/09/Education-Loan-1.jpg"
              alt="Education Loans"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-red-500 mb-3 text-center">
              Education Loans
            </h2>
            <p className="text-base mb-3">
              Education loans in India have become more accessible. Loans cover:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Tuition fees</li>
              <li>Accommodation & living expenses</li>
              <li>Books & supplies</li>
              <li>Travel & insurance costs</li>
            </ul>

            <p className="text-base mt-3">
              Loan options vary based on amount:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Up to ₹4L: No guarantor needed</li>
              <li>Up to ₹7.5L: Requires third-party guarantor</li>
              <li>Above ₹7.5L: Needs guarantor & collateral</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScholarComponents;
