import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Headphones, Monitor, ClipboardCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <GraduationCap size={40} className="text-blue-600" />,
    title: "Experienced Tutors",
    description: "We’ve tirelessly trained our tutors to provide you with the ideal study experience.",
  },
  {
    icon: <BookOpen size={40} className="text-yellow-500" />,
    title: "Indistinguishable Content",
    description: "Neither too basic nor too advanced. Prepare at the same level of the actual exam with standardized materials.",
  },
  {
    icon: <Headphones size={40} className="text-green-500" />,
    title: "Support at Every Step",
    description: "Help from our trainers is readily available via email, telephone, and social media.",
  },
  {
    icon: <Monitor size={40} className="text-purple-500" />,
    title: "Kanan Prep Portal",
    description: "Get access to course videos, study guides, and more – equipped with gamification features.",
  },
  {
    icon: <ClipboardCheck size={40} className="text-red-500" />,
    title: "Simulated Test Engine",
    description: "Test yourself on our simulated test engine to experience what the actual exam is like.",
  },
  {
    icon: <ShieldCheck size={40} className="text-indigo-500" />,
    title: "Mock Tests",
    description: "Sharpen your skills through several sectional and full-length mock tests, from the comfort of your home.",
  },
];

const FeaturesComponent = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Left Section - Heading & Description (Reduced Width) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-1 text-left"
        >
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Features</h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg">
            Get to know our exciting features designed to enhance your learning experience and prepare you effectively for your exams.
          </p>
        </motion.div>

        {/* Right Section - Features Grid (Increased Width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex justify-center mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
