import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Which is advisable? IELTS or TOEFL for pursuing Masters abroad?",
    answer:
      "Both IELTS and TOEFL are widely accepted. The choice depends on university requirements, test format, scoring system, and availability.",
  },
  {
    question: "Which country requires GRE scores?",
    answer:
      "GRE is required mainly in the USA and Canada, but some universities in the UK, Australia, Singapore, and Germany also accept it.",
  },
  {
    question: "Job opportunities for Indian graduates outside India?",
    answer:
      "Opportunities depend on industry and country. Tech, finance, and healthcare sectors in the USA, UK, Canada, and Australia offer great prospects.",
  },
  {
    question: "Benefits of studying in the USA or UK for Indian engineering graduates?",
    answer:
      "Top-ranked universities, better career prospects, research opportunities, global networking, and exposure to cutting-edge technology.",
  },
  {
    question: "What entrance exams are required for studying abroad?",
    answer:
      "Common exams include TOEFL, IELTS, SAT, GRE, and GMAT. Requirements vary based on country and course.",
  },
  {
    question: "How can you help with the visa application process?",
    answer:
      "We provide guidance on documentation, application accuracy, and interview preparation to improve your visa approval chances.",
  },
  {
    question: "Do you provide scholarships or financial aid assistance?",
    answer:
      "We don’t offer direct scholarships but guide you to university and external funding opportunities.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center bg-indigo-50 dark:bg-[#1A152D] py-16 px-6 lg:px-20">
      {/* Header */}
      <h1 className="text-5xl font-bold text-indigo-900 dark:text-white text-center mb-8 tracking-wide">Frequently Asked <span className="text-yellow-400">Questions</span></h1>

      {/* FAQ Container */}
      <div className="w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left text-lg font-semibold flex justify-between items-center py-4 px-6 rounded-xl shadow-md transition-all ${
                openIndex === index ? "bg-[#6B4EFF] text-white" : "bg-white text-black"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus className="text-xl" /> : <FaPlus className="text-xl" />}
            </button>
            {openIndex === index && (
              <div className="bg-white text-black p-5 mt-2 rounded-xl shadow-md text-md">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
