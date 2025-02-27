import React from "react";
import { motion } from "framer-motion";

const trainingPrograms = [
  "IELTS",
  "Spoken English",
  "TOEFL",
  "SAT",
  "GRE",
  "DUOLINGO",
  "German",
  "French",
];

const TrainingComponents = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Virtual / Online Live Trainings
      </h2>

      {/* Training Programs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trainingPrograms.map((program, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center bg-gray-800 text-white text-lg md:text-xl font-semibold rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 border border-gray-700 hover:border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {program}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainingComponents;
