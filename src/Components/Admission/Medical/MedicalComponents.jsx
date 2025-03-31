import React from 'react';
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MedicalComponents = () => {
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
          Medical PG
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
          src="https://static.wixstatic.com/media/e8ff0ccb464a46ef8bee95ba4a19c861.jpg/v1/crop/x_0,y_101,w_2121,h_1213/fill/w_670,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Science%20Lab%20Student.jpg"
          alt="Medical"
          className="w-full h-full object-cover"
            />
          </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-8 bg-indigo-500 text-gray-50 flex items-center justify-center text-center">
            <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Why should Indian Students pursue medical studies abroad?
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        Large number of medical aspirants in India check out the options to pursue PG Medicine courses abroad to become qualified doctors.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This is largely because of three major factors:
        </p>
        
        {/* List of Major Factors */}
        <ul className="list-disc list-inside text-lg space-y-3 pl-6">
          <li><strong>Limited Seats:</strong> Studying PG medicine in India is tough due to limited seats.</li>
          <li><strong>Competitive Entrance Exams:</strong> PG in Medicine is equally tough and entrance test for PG in India is a tough nut to crack especially when it comes to specialize in a particular field of medicine.</li>
          <li><strong>High Fees:</strong> High fees charged by private colleges admission processes.   </li>
        </ul>
        </div>
       </div>
       </motion.div>

       <div className=" w-full px-6 py-10 text-gray-800 dark:text-gray-400 text-center">
        <p className="text-lg leading-relaxed mt-6">
        Thus, the overseas PG options have gained prevalence in the healthcare sector for Indian student eyeing towards medical abroad study destinations. Past few years have seen an average increment of about 15-20 per cent increase in the number of students going abroad for studying pg medicine.
        </p>

        <p className="text-lg leading-relaxed mt-6"> 
        At postgraduate level- to choose the institutes abroad for medicine or medical studies is a humongous task considering the variety of Medical Overseas options available along with the tedious application process and Visa Processing to those countries.
        </p>

        <p className="text-lg leading-relaxed mt-6">
        We at S V Videsh Vidya help our students aspiring PG medical studies abroad to ease the uncertainty around the entire process and give tailored made PG overseas Indian students.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900  dark:text-white mt-8 mb-4">
        How to select Medical Universities Abroad for Overseas PG options for Indian Students?
        </h2>

        <p className="text-lg leading-relaxed mb-6">
        1. Selecting the right and best destination for PG Medicine Abroad for Indian Students is quintessential as the country should have friendly environment for students to study and practice and tie-ups with Hospitals to Practice for Medicine students. The country should have at least decent healthcare industry in terms of innovation, technological advancement, tools and practices in hospitals, management in patientcare, exposure to different diseases and patients to treat.
        </p>

        <p className="text-lg leading-relaxed mb-6">
        2. Study Abroad destinations for Medicine must be recognized as a good/excellent study abroad destination by the medical councils in the world such as European Union, NMC(National Medical College) and other international medical boards. <strong>S V Videsh Vidya</strong> procure admission for students in universities which are approved by one or more medical councils as mentioned above. WFME is the global organization concerned with education and training of medical doctors worldwide.
        </p>

        <p className="text-lg leading-relaxed mt-6">
        3. Knowledge of country-level Medical Licensure Exams that needs to be cleared only after which the student can pursue their postgraduate studies must be clear from the beginning to avoid missing all the opportunities answered by why to study medicine abroad. 
        </p>

        <p className="text-lg leading-relaxed mt-6">
        4. Some countries require English Proficiency tests to study Medicine Abroad for Indian Students like IELTS or TOEFL, which must be kept in mind before applying to avoid from missing any deadlines. To know how to prepare for IELTS and TOEFL click: IELTS / TOEFL. Please contact S V Videsh Vidya to know more about countries that require IELTS or TOEFL as a prerequisite destination without IELTS.
        </p>

        <p className="text-lg leading-relaxed mt-6">
        5. Cost of Medicine Abroad for Indian Students must be looked at by the students and their parents or sponsor to understand the financial responsibilities that studying abroad would entail. Students must understand that after MBBS, they are required to do go for an MD and pursue a super-specialty in order to be successful medical specialists. Specializations are becoming a norm and an area where doctors are getting paid well. Student should plan the budget to invest better for their Medicine PG.
        </p>

        <p className="text-lg leading-relaxed mt-6 text-center">
        Indian medical graduates can now practice in US, Canada   Australia - <br/> https://ecoti.in/uKKwRa 
        </p>

</div>
      </div> 
     </div>
    
  );
};

export default MedicalComponents;
