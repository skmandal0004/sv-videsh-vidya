import React from "react";
import { motion } from "framer-motion";

const YoutubeComponents = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
      {/* Title Section */}
      <motion.div
        className="text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          What Our Students Say
        </h2>
      </motion.div>

      {/* Video Container */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* First Video */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="overflow-hidden rounded-lg">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/MPwnQHPJHJE"
              title="Student Testimonial 1"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Second Video */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="overflow-hidden rounded-lg">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/No6Ea4gTnk4"
              title="Student Testimonial 2"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default YoutubeComponents;
