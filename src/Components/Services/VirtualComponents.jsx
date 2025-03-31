import React from "react";
import { motion } from "framer-motion";

const VirtualComponents = () => {
  return (
    <div className="relative bg-gray-900 text-white py-24 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://static.wixstatic.com/media/11062b_19cecd12d9d0417c99f1c18d7ba17d77~mv2.jpg/v1/crop/x_0,y_234,w_5000,h_2865/fill/w_1400,h_700,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Online%20Learning.jpg"
          alt="Virtual Training"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Elevate Your Learning with <span className="text-indigo-400">Virtual Training</span>
        </h1>
        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
          Join our expert-led online training sessions and enhance your skills 
          from anywhere in the world. Start your journey with us today!
        </p>

        {/* CTA Button */}
        <motion.div
    className="flex justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
        <div className="mt-8">
          <a href='tel:9739722211' className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition-all hover:bg-indigo-700 hover:scale-105">
            Call for Free Demo
          </a>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualComponents;
