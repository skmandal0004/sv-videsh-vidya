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
            src="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  <motion.div
    className="flex justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <a
      href="tel:+91 9739799996" // Replace with your actual phone number
      className="flex items-center space-x-3  text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition-all transform"
    >
      <button className="bg-white text-indigo-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300">
        Call us for Free Demo !
      </button>
    </a>
  </motion.div>
</div>

        
      </div>
    </div>
  )
}

export default TrainingComponents
