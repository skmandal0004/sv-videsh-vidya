import React from "react";
import { motion } from "framer-motion";
import phoneIcon from '../../assets/phone.png'

const reasons = [
  {
    title: "Educational Benefits",
    image: "https://static.wixstatic.com/media/b2d561eab7d3416883b96a7088fb7497.jpg/v1/crop/x_656,y_0,w_2624,h_2624/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Graduation%20Caps.jpg",
    description:
      "Studying abroad introduces you to new education systems, helping you broaden your mind and develop new learning techniques that enhance both your skills and personality.",
  },
  {
    title: "Enhance Your Career Opportunities",
    image: "https://static.wixstatic.com/media/11062b_d4b001695a67432f84fad8c7875bf03e~mv2.jpeg/v1/crop/x_1223,y_0,w_4896,h_4896/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business%20Consultation.jpeg",
    description:
      "A globally recognized degree, enhanced language skills, and exposure to diverse cultures give you a competitive edge in today’s job market—whether you stay abroad or return home.",
  },
  {
    title: "See The World",
    image: "https://static.wixstatic.com/media/47a44698310f4f9b845140d410b6b1c4.jpg/v1/crop/x_933,y_0,w_3731,h_3731/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Globe.jpg",
    description:
      "Studying abroad lets you explore new destinations, experience diverse cultures, and become a global citizen—all while pursuing your education.",
  },
];

const ReasonComponents = () => {

  const phoneNumber = "9739722211";

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
      {/* Title Section */}
      <motion.div
        className="text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Top Reasons to Study Abroad
        </h2>
      </motion.div>

      {/* Reason Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Image */}
            <img
              src={reason.image}
              alt={reason.title}
              className="w-24 h-24 rounded-full shadow-lg mx-auto mb-4 object-cover border-4 border-purple-400"
            />
            {/* Title */}
            <h3 className="text-xl font-bold text-purple-400 text-center mb-3">
              {reason.title}
            </h3>
            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-center">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Us Button */}
      <motion.div
      className="fixed bottom-6 right-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <a href={`tel:${phoneNumber}`} className="flex items-center space-x-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition-all transform">
        {/* Phone Icon */}
        <img src="https://cdn-icons-png.freepik.com/256/724/724664.png?ga=GA1.1.712469952.1740656033&semt=ais_hybrid" alt="Phone Icon" className="w-8 h-8 border-2 rounded-full" />
        {/* Phone Number */}
        <span className="text-xl font-semibold">Call Us</span>
      </a>
    </motion.div>
    </div>
  );
};

export default ReasonComponents;
