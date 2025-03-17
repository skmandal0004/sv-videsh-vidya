import React from 'react';
import { Link } from 'react-router-dom';

const MedicineComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Heading */}
      <div className="max-w-4xl w-full px-6 py-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 text-center mt-6">Medical</h1>
      </div>

      {/* Image */}
      <div className="w-full bg-indigo-500 flex justify-center py-12">
        <img
          src="https://static.wixstatic.com/media/2e2a49_f6a544efc1334927b6bdc2ca7ab5b8e1~mv2.jpg/v1/crop/x_0,y_255,w_5428,h_3110/fill/w_774,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1171825923.jpg"
          alt="Medical"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
        <p className="text-xl leading-loose mb-6">
        Studying medicine abroad offers Indian students a unique and enriching opportunity to receive a world-class education while experiencing new cultures and healthcare systems. With increasing competition for medical seats in India, pursuing a medical degree overseas has become an attractive option for many aspiring doctors.
        </p>

        <p className="text-xl leading-loose mb-6">
          Countries like the <strong>USA, UK, Canada, Australia</strong>, and <strong>Philippines</strong> are renowned for their high standards of medical education, cutting-edge facilities, and comprehensive curricula. These programs often provide hands-on clinical training, exposure to advanced medical technologies, and the opportunity to learn from leading healthcare professionals.
        </p>

        <p className="text-xl leading-loose mb-6">
        Furthermore, studying abroad can enhance a student's global perspective, improve language skills, and foster personal growth. The international exposure and diverse patient interactions gained during these programs are invaluable, preparing students to excel in a globalized medical field. Our consultancy is dedicated to guiding students through every step of this journey, from selecting the right university and navigating the application process to ensuring a smooth transition and successful adaptation in a foreign country.
        </p>

        <p className="text-xl leading-loose mb-6">
        We aim to empower Indian students to achieve their dream of becoming globally competent medical professionals, equipped with the knowledge and skills to make a significant impact in the healthcare industry.
        </p>
      </div>

      {/* Button Section */}
      <div className="mb-12">
        <Link to="/medicine-pg">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition">
            Medical-PG
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MedicineComponents;
