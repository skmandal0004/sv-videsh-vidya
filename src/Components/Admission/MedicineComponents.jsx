import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MedicineComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-16 lg:px-24 xl:px-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-extrabold text-5xl md:text-6xl text-gray-900 dark:text-white mb-10 uppercase tracking-wide"
        >
        Medical
        </motion.h1>

      {/* Image */}
      <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
      <div className="flex flex-col md:flex-row items-center bg-indigo-500 py-12 px-6">
        {/* Image Section */}
         <div className="w-full md:w-1/2">
        <img
        src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-full object-cover"
        />
      </div>

  {/* Content Section */}
          <div className="w-full md:w-1/2 max-w-4xl px-6 md:px-12 py-10 text-gray-800">
            <p className="text-xl leading-normal mb-6">
              Studying medicine abroad offers Indian students a unique and enriching opportunity to receive a world-class education while experiencing new cultures and healthcare systems. With increasing competition for medical seats in India, pursuing a medical degree overseas has become an attractive option for many aspiring doctors.
            </p>
            <p className="text-xl leading-normal mb-6">
              Countries like the <strong>USA, UK, Canada, Australia</strong>, and <strong>Philippines</strong> are renowned for their high standards of medical education, cutting-edge facilities, and comprehensive curricula. These programs often provide hands-on clinical training, exposure to advanced medical technologies, and the opportunity to learn from leading healthcare professionals.
            </p>

            
          </div>
        </div>
        </motion.div>


      <div className=" w-full px-6 py-10 text-gray-800 dark:text-gray-400 text-center">
      
        <p className="text-xl leading-loose mb-6">
        Furthermore, studying abroad can enhance a student's global perspective, improve language skills, and foster personal growth. The international exposure and diverse patient interactions gained during these programs are invaluable, preparing students to excel in a globalized medical field. Our consultancy is dedicated to guiding students through every step of this journey, from selecting the right university and navigating the application process to ensuring a smooth transition and successful adaptation in a foreign country.
        </p>

        <p className="text-xl leading-loose mb-6">
        We aim to empower Indian students to achieve their dream of becoming globally competent medical professionals, equipped with the knowledge and skills to make a significant impact in the healthcare industry.
        </p>
      </div>

      {/* Button Section */}
      <div className="mb-12 text-center">
        <Link to="/medicine-pg">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition ">
            Medical-PG
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default MedicineComponents;
