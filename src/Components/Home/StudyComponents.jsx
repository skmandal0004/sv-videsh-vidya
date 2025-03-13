import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icons for bullet points
import { Link } from "react-router-dom"; // Import Link for navigation

const StudyComponents = () => {
  const studyOptions = [
    {
      title: "Medicine",
      image:
        "https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg",
      courses: ["Medical PG", "Nursing", "Dentistry"],
      gradient: "from-orange-500 to-red-600",
      link: "/admissions/medical", // Route path
    },
    {
      title: "Engineering",
      image:
        "https://static.wixstatic.com/media/2e2a49_aa886e73007945ad8869ba20d9771c41~mv2.jpg",
      courses: ["B.Tech", "MS", "Masters", "PDGM", "Other Engineering", "Courses"],
      gradient: "from-blue-500 to-indigo-600",
      link: "/admissions/engineering",
    },
    {
      title: "Business & Management",
      image:
        "https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg",
      courses: ["MBA", "Arts", "Commerce", "Finance"],
      gradient: "from-green-500 to-teal-600",
      link: "/admissions/management",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        What to Study?
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid md:grid-cols-3 gap-10">
        {studyOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 hover:bg-white hover:dark:bg-slate-900 transition-all duration-300"
          >
            {/* Image (Non-Overlay) */}
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-56 object-cover"
            />

            {/* Content Inside the Card */}
            <div className="p-6 flex flex-col justify-center text-center">
              {/* Title */}
              <h3
                className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${option.gradient}`}
              >
                {option.title}
              </h3>

              {/* Course List */}
              <ul className="mt-4 space-y-2 text-gray-700 text-lg dark:text-gray-50">
                {option.courses.map((course, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    {course}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to={option.link}>
                <motion.button
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 hover:opacity-100 text-white font-semibold rounded-lg shadow-md transition-all"
                > 
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudyComponents;
