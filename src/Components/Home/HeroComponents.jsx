import React from "react";
import { motion } from "framer-motion";

const HeroComponents = () => {
  return (
    <section className="relative w-full">
      {/* Hero Section 1 */}
      <div className="w-full bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] text-white py-16 px-6 md:px-12">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Study <span className="text-yellow-300">Abroad</span> Now!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Engineering | Arts & Management | Science
          </p>
          <p className="mt-2 text-lg md:text-xl font-semibold text-yellow-300">
            Exclusive Online Training
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-400 text-black text-lg font-bold rounded-full hover:bg-yellow-500 transition">
            Start Today
          </button>
        </motion.div>
      </div>

      {/* Hero Section 2 - Image & Text Side by Side */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Explore Global Education
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Discover top-ranked universities worldwide and fulfill your dream of studying abroad.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/tourist-park-ferris-wheel_23-2148570664.jpg?t=st=1740656064~exp=1740659664~hmac=6c762a9eda3baf7efa11c989800c98f1d8239f509bada3f79bc548232abc8d4a&w=1060"
            alt="Global Education"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Hero Section 3 - Grid Layout */}
      <div className="w-full bg-[#6B4EFF] text-white py-16 px-6 md:px-12 text-center">
  <h3 className="text-3xl md:text-5xl font-bold">
    Pursue Your Dreams with Expert Faculties
  </h3>
  <p className="mt-4 text-lg md:text-xl">Join Our Online Live Coaching</p>

  {/* Course List with Auto Sizing */}
  <div className="mt-6 flex flex-wrap justify-center gap-4">
    {["IELTS", "DUOLINGO", "GRE", "French", "German", "English", "TOEFL", "SAT"].map((course) => (
      <span
        key={course}
        className="bg-white text-[#1A152D] px-5 py-3 rounded-full shadow-lg text-sm md:text-lg font-semibold 
                   flex items-center justify-center w-[140px] md:w-[160px] hover:bg-gray-200 transition"
      >
        {course}
      </span>
    ))}
  </div>

  <p className="mt-6 text-xl md:text-2xl font-semibold text-yellow-300">
    Join GRE + TOEFL Combo Offer Today!
  </p>
</div>

    </section>
  );
};

export default HeroComponents;
