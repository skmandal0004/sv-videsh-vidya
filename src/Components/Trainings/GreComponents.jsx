import React from "react";
import { motion } from "framer-motion";
import greImage from "../../assets/greGirl.png";
import Features from "./FeaturesComponent";

const GREPage = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/girl-sitting-table-laughing_23-2147657339.jpg?t=st=1743420542~exp=1743424142~hmac=e48e3a6f18f80fc14c008cb3a1eefc3de11b28d1be2a3d412b2c83e1138eae5b&w=900"})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white px-6">
          <motion.h1
            className="text-7xl font-bold text-yellow-500"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            GRE
          </motion.h1>
        </div>
      </motion.div>

      {/* GRE Overview Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <motion.div
            className="p-6 rounded-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-indigo-600">GRE: Overview</h2>
            <p className="mt-4 font-semibold text-gray-500">
              <span className="text-yellow-500 dark:opacity-85 font-semibold text-lg">
                Crack one of the most sought-after global competitive tests to enter the institution of your dreams.
              </span>
              <br />
              The GRE, or Graduate Record Examination, is a standardized test required for admission to postgraduate programs in the United States. Administered by the Educational Testing Service (ETS), the GRE measures Verbal Reasoning, Quantitative Reasoning, and Analytical Writing skills acquired over time, irrespective of any specific field of study.
            </p>
            <p className="mt-4 font-semibold text-gray-500">
              <span className="text-yellow-500 dark:opacity-85 font-semibold">
                - Who needs to take the GRE Test?
              </span>
              <br />
              The GRE is required for admission to postgraduate programs in the United States. If you are applying to graduate school, you will likely need to take the GRE.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full h-full rounded-full border-8 border-indigo-600 shadow-[0px_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden relative bg-red-200 dark:bg-gray-900"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Inner Shine Effect (for a Glassy Look) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200/30 to-transparent rounded-full"></div>

            <img
              src={greImage}
              alt="GRE Overview"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>


        </div>
      </section>

      <Features />
    </div>
  );
};

export default GREPage;
