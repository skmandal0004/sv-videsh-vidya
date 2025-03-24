import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLanguage, FaBookOpen, FaGraduationCap } from 'react-icons/fa';

const LanguageComponents = () => {
  const navigate = useNavigate();

  const languages = [
    { title: "GRE", description: "GRE is widely accepted for postgraduate admissions.", icon: <FaGraduationCap />, route: "/gre" },
    { title: "GERMAN LANGUAGE", description: "German is widely spoken in Europe.", icon: <FaLanguage />, route: "/german" },
    { title: "IELTS", description: "IELTS evaluates English proficiency.", icon: <FaBookOpen />, route: "/ielts" },
    { title: "TOEFL", description: "TOEFL is widely accepted for academic purposes.", icon: <FaGraduationCap />, route: "/toefl" },
    { title: "DUOLINGO", description: "An online English test accepted by universities.", icon: <FaLanguage />, route: "/duolingo" },
    { title: "SPOKEN ENGLISH", description: "Enhance communication skills for success.", icon: <FaBookOpen />, route: "/spoken-english" },
    { title: "SAT", description: "A standardized test for US college admissions.", icon: <FaGraduationCap />, route: "/sat" },
    { title: "FRENCH", description: "French proficiency opens global opportunities.", icon: <FaLanguage />, route: "/french" },
    { title: "PUC - Computer Science", description: "PUC coaching for Computer Science students.", icon: <FaBookOpen />, route: "/puc" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Explore Language & Test Prep Courses
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Learn globally recognized languages and test preparation courses to boost your academic and career success.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
              {lang.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{lang.title}</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-4">{lang.description}</p>
            <button
              onClick={() => navigate(lang.route)}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageComponents;
