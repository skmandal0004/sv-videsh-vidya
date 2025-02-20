import React from "react";
import { motion } from "framer-motion";

const StudyComponents = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        What to Study?
      </h2>

      <div className="space-y-8">
        {/* Medicine Section */}
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_639,h_541,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
              alt="Medicine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
          <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the component is visible
          >
            <h3 className="text-2xl font-bold text-orange-500">Medicine</h3>
            <ul className="mt-2 space-y-2 text-gray-300 text-lg text-center">
              <li>Medical PG</li>
              <li>Nursing</li>
              <li>Dentistry</li>
            </ul>
            </motion.div>
            <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.5 }} // Triggers when 30% of the component is visible
          >
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg">
              Medicine
            </button>
            </motion.div>
          </div>
        </div>

        {/* Engineering Section */}
        <div className="flex flex-col md:flex-row-reverse bg-gray-900 text-white rounded-lg overflow-hidden">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/2e2a49_aa886e73007945ad8869ba20d9771c41~mv2.jpg/v1/fill/w_641,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_aa886e73007945ad8869ba20d9771c41~mv2.jpg"
              alt="Engineering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
          <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the component is visible
          >
            <h3 className="text-2xl font-bold text-orange-500">Engineering</h3>
            <ul className="mt-2 space-y-2 text-gray-300 text-lg text-center">
              <li>B.Tech</li>
              <li>MS</li>
              <li>Masters</li>
              <li>PDGM</li>
              <li>Other Engineering</li>
              <li>Courses</li>
            </ul>
            </motion.div>
            <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.5 }} // Triggers when 30% of the component is visible
          >
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg">
              Engineering
            </button>
            </motion.div>
          </div>
        </div>

        {/* Business Studies Section (New Section) */}
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_639,h_596,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
              alt="Business Studies"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
          <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the component is visible
          >
            <h3 className="text-2xl font-bold text-orange-500">Business and <br/> Management</h3>
            <ul className="mt-2 space-y-2 text-gray-300 text-lg text-center">
              <li>MBA</li>
              <li>Arts</li>
              <li>Commerce</li>
              <li>Finance</li>
            </ul>
            </motion.div>
            <motion.div
            className="text-center"
            initial={{ y: 60, opacity: 0 }} // Start off-screen to the right
            whileInView={{ y: 0, opacity: 1 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.5 }} // Triggers when 30% of the component is visible
          >
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg">
            Business & Managment
            </button>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyComponents;
