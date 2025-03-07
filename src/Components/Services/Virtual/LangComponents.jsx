import React from "react";

const LangComponents = () => {
  const languages = [
    {
      title: "GRE",
      description:
        "GRE is one of the most acceptable tests taken by students and professionals worldwide. GRE scores assess reasoning abilities through Verbal and Quantitative tests. It is required for postgraduate or doctoral programs in many universities. Business schools also accept GRE scores. There are two types: GRE General Test & GRE Subject Test.",
    },
    {
      title: "GERMAN LANGUAGE",
      description:
        "German is widely spoken in Europe and globally, with over 200 million speakers. Learning German opens opportunities in education and career, especially in Germany, which offers free education for courses taught in German.",
    },
    {
      title: "IELTS",
      description:
        "IELTS (International English Language Testing System) is designed to assess English proficiency in Reading, Writing, Listening, and Speaking. It is one of the most popular English tests worldwide.",
    },
    {
      title: "TOEFL",
      description:
        "TOEFL (Test Of English As a Foreign Language) is primarily used for non-native speakers applying to universities in English-speaking countries. TOEFL iBT is the most common version.",
    },
    {
      title: "DUOLINGO",
      description:
        "Duolingo offers an online English proficiency exam recognized by universities worldwide. It assesses Reading, Writing, Listening, and Speaking skills as an alternative to TOEFL and IELTS.",
    },
    {
      title: "SPOKEN ENGLISH",
      description:
        "Strong spoken English skills enhance communication and confidence in academic and professional environments. It is essential for students studying or working abroad.",
    },
    {
      title: "SAT",
      description:
        "The SAT is a standardized test required for admission to many US universities. It measures skills in Math, Reading, and Writing and is accepted by many Indian universities as well.",
    },
    {
      title: "FRENCH",
      description:
        "French is an important language for studies in Europe and Africa. Proficiency enhances opportunities in international business, tourism, and diplomacy.",
    },
    {
      title: "PUC - Computer Science",
      description:
        "PUC (Pre-University Course) is a 2-year program in Karnataka, India, equivalent to 11th and 12th grade. We offer classroom coaching for Computer Science subjects in PUC 1st and 2nd year.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] py-16 px-6 border-b-2">
      {/* Header */}
      <h1 className="text-5xl font-bold text-white text-center mb-12 tracking-wide">
        Our Language & Test Prep Courses
      </h1>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform transform hover:border-white/70 hover:shadow-2xl text-white border border-white/20"
          >
            <h2 className="text-2xl font-semibold text-center">{lang.title}</h2>
            <p className="text-gray-200 mt-4 leading-relaxed">{lang.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LangComponents;
