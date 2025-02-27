import React from "react";
import { motion } from "framer-motion";

const WhyComponents = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
      {/* Title Section */}
      <motion.div
        className="text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          S V Videsh Vidya Enterprises
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-blue-400 mt-2">
          Global Education Services
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="mt-12 max-w-5xl mx-auto space-y-10">
        {/* Why Study Abroad Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-purple-500 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-orange-400 text-center mb-4">
            Why Study Abroad?
          </h3>
          <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed">
            Studying abroad opens doors to global opportunities and diverse experiences.
            It challenges you to step out of your comfort zone, embrace new cultures, 
            and gain a world-class education. Traveling as part of this journey enhances 
            both personal and professional growth.
          </p>
        </motion.div>

        {/* About SVVV Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-purple-500 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed">
            <span className="font-bold text-gray-900 dark:text-white">S V Videsh Vidya Enterprises</span> is committed to guiding students across 
            India toward achieving their dreams of international education. We assist in securing 
            admissions in top universities across:
          </p>
          <p className="mt-4 font-semibold text-purple-400">
            UK, USA, Australia, Canada, New Zealand, Ireland, Germany, Latvia, 
            Lithuania, Estonia, Finland, Italy, Spain, France, Dubai, Singapore, 
            Philippines, Sweden, Switzerland, and more!
          </p>
          <p className="mt-4 text-gray-900 dark:text-gray-300 text-lg leading-relaxed">
            With our expert knowledge, we help students find quality education at affordable fees, 
            ensuring they are equipped with global competitiveness.
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-[#1A152D] text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/20">
            Admissions List
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyComponents;
