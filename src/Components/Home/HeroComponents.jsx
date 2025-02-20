import React from "react";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function HeroComponents() {
  return (
    <section className="relative w-screen">
      <Carousel
        className="w-full"
        autoplay={true}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            ❮
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            ❯
          </button>
        )}
      >
        {/* Slide 1 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_952ec33f10d447ae84b13f5ae79df62f~mv2.jpg"
            alt="Study Abroad Opportunities"
            className="w-full max-h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}

          <motion.div
            className="absolute top-10 left-10 text-white text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold bg-black/60 px-8 py-2 rounded-md">
              Study <br />
              Abroad Now!
            </h1>
          </motion.div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engineering | Arts & Management | Science
            </h2>
            <h3 className="text-3xl font-medium">Exclusive Online Training</h3>
            <button className="mt-6 px-6 py-3 bg-[#1A152D] hover:bg-[#2c244d] text-white text-lg font-semibold border-2 border-[#725ec4] shadow-lg transition">
              Start Today
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_e7e79b78496643029d562e3706e7b6c9~mv2.png"
            alt="Global Education Services"
            className="w-full max-h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
          <motion.h2
            className="absolute top-10 left-10 ml-10 text-4xl md:text-6xl font-bold text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Explore Global Education
          </motion.h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white text-center space-y-4">
            <p className="text-xl md:text-2xl max-w-lg mx-auto">
              Discover top-ranked universities worldwide <br />
              and fulfill your dream of studying abroad.
            </p>
            <button className="w-40 bg-[#1A152D] hover:bg-[#2c244d] text-white text-md font-semibold border-2 border-[#725ec4] px-4 py-3 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_6e2edf123eaf4db0b7f22d07ef444b11~mv2.jpg"
            alt="Live Coaching Sessions"
            className="w-full max-h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6">
            <h3 className="text-2xl md:text-5xl font-semibold">
              Pursue Your Dreams with Expert Faculties
            </h3>
            <p className="text-lg md:text-3xl mt-2">Join Our Online Live Coaching</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl md:text-2xl">
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">IELTS</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">DUOLINGO</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">GRE</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">French</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">German</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">English</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">TOEFL</span>
              <span className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">SAT</span>
            </div>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-300">
              Join GRE + TOEFL Combo Offer Today!
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default HeroComponents;
