import React, { useState } from "react";
import { motion } from "framer-motion";
import ieltsImage from '../../assets/ielts.jpg'
import Features from './FeaturesComponent'

const IELTSPage = () => {

  const sections = [
    {
      title: "Listening",
      icon: "https://cdn-icons-png.freepik.com/256/13144/13144397.png?uid=R193677183&ga=GA1.1.908685356.1742996386&semt=ais_hybrid",
      points: ["Spelling", "Prediction", "Understanding", "Recognizing"],
    },
    {
      title: "Reading",
      icon: "https://cdn-icons-png.freepik.com/256/4613/4613287.png?uid=R193677183&ga=GA1.1.908685356.1742996386&semt=ais_hybrid",
      points: ["Scanning", "Skimming", "Paraphrasing", "Question Understanding"],
    },
    {
      title: "Writing",
      icon: "https://cdn-icons-png.freepik.com/256/7128/7128255.png?uid=R193677183&ga=GA1.1.908685356.1742996386&semt=ais_hybrid",
      points: ["Lexical Resources", "Coherence and Cohesion", "Grammar", "Task Response"],
    },
    {
      title: "Speaking",
      icon: "https://cdn-icons-png.freepik.com/256/14939/14939896.png?uid=R193677183&ga=GA1.1.908685356.1742996386&semt=ais_hybrid",
      points: ["Pronunciation", "Fluency", "Coherence", "Vocabulary"],
    },
  ];

  return (
    <div className={"dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900"}>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${ieltsImage})` }}
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
            IELTS
          </motion.h1>
        </div>
      </motion.div>

      {/* IELTS Academic Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            className="w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://media.istockphoto.com/id/1250602749/photo/multiple-choice-exam-like-ielts-toefl-yks-or-lgs-with-mask-because-of-coronavirus.jpg?s=612x612&w=0&k=20&c=Xt55VkaqtRUv8Nsmj60QnHE-I7qGlmNbQ2yTD6Zrhhg=" alt="IELTS Academic" className="rounded-lg shadow-md w-full" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="p-6 rounded-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-indigo-600">IELTS (Academic) - Test Overview</h2>
            <p className="mt-4 font-semibold text-gray-500">
              <span className="text-yellow-500 dark:opacity-85 font-semibold text-lg">Excel in listening, reading, writing, and speaking</span><br/>
              The acronym IELTS translates to International English Language Testing System. IELTS is required to be opted for by international students and professionals who wish to study or work in a country where English is the primary language of communication. The United States, Canada, the United Kingdom, Australia, and New Zealand are prominent nations where IELTS is recognized for University applications. The IELTS (Academic) test score is required by many Universities and Colleges to gauge the English language proficiency of non-native English speakers. The IELTS (Academic) test consists of four sections: Listening, Reading, Writing, and Speaking. The IELTS (Academic) test is available in two versions: Paper-based and Computer-based. The IELTS (Academic) test in India is conducted by IDP: IELTS Australia. In the traditional Pen-paper version, the test is offered up to four times a month in over 140 countries. The IELTS Academic test fee is approx. - <span className="font-bold">INR 17,000</span>
              </p>
              <p className="mt-4 font-semibold text-gray-500"><span className="text-yellow-500 dark:opacity-85 font-semibold">-	Who needs to take the IELTS (Academic) Test?</span><br/>
              IELTS (Academic) test is suitable for candidates who are planning to study or train in English-speaking countries at the undergraduate or postgraduate level. Even professionals such as doctors and nurses, who want to register and practice in these countries, can take the IELTS (Academic) test.

            </p>
          </motion.div>
        </div>
      </section>

      {/* IELTS General Training Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="p-6 rounded-lg order-2 md:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-indigo-600">IELTS (General Training) - Test Overview</h2>
            <p className="mt-4 font-semibold text-gray-500">
              <span className="text-yellow-500 dark:opacity-85 font-semibold text-lg">Excel in listening, reading, writing, and speaking</span><br/>
              IELTS General Training is for individuals migrating to English-speaking countries such
              as Canada, UK, Australia, and New Zealand. It is also required for those who want to
              study below the undergraduate level.
            </p>
            <p className="mt-4 font-semibold text-gray-500">
              The test is conducted by IDP: IELTS Australia in India and is essential for visa
              applications and employment in English-speaking nations.
            </p>
            <p className="mt-4 font-semibold text-gray-500">
              <span className="text-yellow-500 dark:opacity-85 font-semibold">-	Who needs to take the IELTS (General) Training?</span><br/>
              The IELTS General Training exam is suitable for people who are planning to study or train at below degree level, or who are seeking professional registration in an English-speaking environment. If you are planning to study or train at degree level or above, you should take the IELTS Academic test.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full order-1 md:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://media.istockphoto.com/id/2197579052/photo/english-translation-learning-business-and-technology-language-from-smartphone-highlighting.jpg?s=612x612&w=0&k=20&c=V-pzrwhJHj1TvooZEZ3EN1wpwc9uyshiDmZY6sSFHTg=" alt="IELTS General" className="rounded-lg shadow-md w-full" />
          </motion.div>
        </div>
      </section>

      {/* IELTS Test Sections */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-500 dark:text-yellow-400">IELTS Test Sections</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <img src={section.icon} alt={section.title} className="w-16 mx-auto" />
              <h3 className="text-lg font-bold mt-3 text-indigo-500">{section.title}</h3>
              <ul className="text-gray-500 font-semibold mt-2 text-sm">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <Features/>

    </div>
  );
};

export default IELTSPage;
