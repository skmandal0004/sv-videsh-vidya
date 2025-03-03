import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icons for bullet points

const StudyComponents = () => {
  const studyOptions = [
    {
      title: "Medicine",
      image:
        "https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg",
      courses: ["Medical PG", "Nursing", "Dentistry"],
      gradient: "from-orange-400 to-red-600",
    },
    {
      title: "Engineering",
      image:
        "https://static.wixstatic.com/media/2e2a49_aa886e73007945ad8869ba20d9771c41~mv2.jpg",
      courses: ["B.Tech", "MS", "Masters", "PDGM", "Other Engineering", "Courses"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Business & Management",
      image:
        "https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg",
      courses: ["MBA", "Arts", "Commerce", "Finance"],
      gradient: "from-green-500 to-teal-600",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        What to Study?
      </h2>

      {/* Alternating Layout */}
      <div className="space-y-16">
        {studyOptions.map((option, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } bg-white rounded-2xl shadow-lg overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
              {/* Gradient Title */}
              <h3
                className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${option.gradient}`}
              >
                {option.title}
              </h3>

              {/* Course List with Icons */}
              <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                {option.courses.map((course, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    {course}
                  </li>
                ))}
              </ul>

              {/* Animated Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudyComponents;
