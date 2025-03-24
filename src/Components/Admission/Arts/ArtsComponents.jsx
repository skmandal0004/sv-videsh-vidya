import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ArtsComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-16 lg:px-24 xl:px-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-wide"
          >
            Arts, Sciences, Humanities <br /> and Other
          </motion.h1>
        </motion.div>

        {/* Hero Image & Description */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/4e921d692e2c48698df56e377b80579c.jpg/v1/crop/x_0,y_357,w_4032,h_2310/fill/w_796,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Human%20Sketch.jpg"
              alt="Arts and Humanities"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 p-8 bg-indigo-500 text-gray-50 flex items-center justify-center text-center">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Prime destinations for arts and humanities overseas education for Indian students are US, Canada, UK, Singapore, Australia, and New Zealand. Depending on the courses and budget, students can decide to pursue these courses from one of these countries.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                USA, Canada, Australia, Singapore, Italy, and France offer programs for Arts, Graphic Design, Film Making, Fashion, Culinary, Photography, Painting, and Animation-based courses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Duration and Cost Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl w-full px-6 py-10 text-gray-800 dark:text-gray-200"
        >
          <h2 className="text-2xl font-normal text-gray-900 dark:text-white mb-4">Duration of Education:</h2>
          <p className="text-lg leading-relaxed mb-6">
            Most programs are 1 year to 3 years long. Postgraduate students prefer to go for 1-2 year programs, whereas Undergraduate students pursue 2-3 year long courses along with internships at various companies.
          </p>

          <h2 className="text-2xl font-normal text-gray-900 dark:text-white mb-4">Cost of Education:</h2>
          <p className="text-lg leading-relaxed mb-6">
            The average cost of a one-year program ranges from INR 5 lacs to INR 12 lacs. Two-Three year programs can cost between INR 12 lacs to 30 lacs in total.
          </p>
        </motion.div>

        {/* Entry Requirements Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-6 flex items-center justify-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/128/16696/16696618.png" className="w-16 h-16" />
            <span>Entry Requirements</span>
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-50">
            English language requirements for Indian students are a must. Students may fulfill that through one of these tests.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[ 
              { icon: "https://cdn-icons-png.flaticon.com/128/7743/7743829.png", text: "IELTS / TOEFL / Duolingo / PTE" },
              { icon: "https://cdn-icons-png.flaticon.com/128/10484/10484458.png", text: "SAT for Undergraduate" },
              { icon: "https://cdn-icons-png.flaticon.com/128/4823/4823791.png", text: "GRE for Masters" },
              { icon: "https://cdn-icons-png.flaticon.com/128/15114/15114665.png", text: "GMAT for MBA" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 text-center flex flex-col items-center"
              >
                <img src={item.icon} className="w-16 h-16" />
                <p className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtsComponents;
