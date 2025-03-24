import React from 'react'
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TrainingComponents = () => {
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
          TRAININGS
          </motion.h1>

        {/* Image */}
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
            src="https://static.wixstatic.com/media/11062b_19cecd12d9d0417c99f1c18d7ba17d77~mv2.jpg/v1/crop/x_0,y_234,w_5000,h_2865/fill/w_791,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Online%20Learning.jpg"
            alt="Virtual Training"
            className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 bg-indigo-500 text-gray-50 flex items-center justify-center text-center">
            <div>
              <p className="text-lg leading-relaxed">
              You can get professional online training sessions from expert tutors.
              </p>
              <p className="text-lg leading-relaxed">
              Get coached by dedicated team of professionals for GRE, TOEFL AND IELTS.Proven ability in getting scores for our students.
              </p>
              <p className="text-lg leading-relaxed">
              Over 14,600 hours of training students from diverse backgrounds.
              </p>
              <ul className=" list-inside mt-5">
            <li>1.Shorter batch size(Individualised attention).</li>
            <li>2.Curriculum as per International standards.</li>
            <li>3.Consistent monitoring and feedback.</li>
            <li>4.Register with S V Videsh Vidya for Combo Offer GRE+TOEFL</li>
          </ul>
              </div>
          </div>

        </motion.div>

        {/* Button for Free Demo */}
        <div className="mt-6 text-center">
          <button className="bg-white text-indigo-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300">
            Click Here for Free Demo !

          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainingComponents
