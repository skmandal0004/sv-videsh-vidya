import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OverseasComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center leading-tight mb-6"
        >
          Indian Scholarships for Overseas <br className="hidden md:block" /> Education
        </motion.h2>

        {/* Scholarship List */}
        <motion.ul
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 text-lg space-y-3"
        >
          {[
            "JN Tata Endowment Scholarships",
            "Inlaks Study Abroad Scholarships",
            "KC Mahindra Scholarship for PG Studies Abroad",
            "India4EU II (Erasmus Mundus) Scholarships",
            "British Council IELTS Scholarship",
            "Inlaks Research Travel Grants",
            "TOEFL Scholarship Program in India",
            "National Overseas Scholarship for Students with Disabilities",
            "Dr. Ambedkar Scheme for OBC & EBC Students",
            "SERB Overseas Doctoral Fellowship Programme",
          ].map((scholarship, index) => (
            <motion.li
              key={index}
              className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm transition-colors"
            >
              <span className="mr-2 text-indigo-500">●</span> {scholarship}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default OverseasComponents;
