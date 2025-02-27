import React from "react";

const LangComponents = () => {
  const languages = [
    {
      title: "GRE",
      description:
        "GRE is one of the most acceptable test taken by students and professionals worldwide.GRE scores are utilized to decide on the reasoning abilities of students through both Verbal as well as Quantitative tests. Aspirants seeking admission to the Post Graduate or Doctoral programs in various Universities and Colleges take GRE exam. Business Schools accept GRE scores and a high GRE score may tilt the scale in student’s favor. There are two types of GRE exam: GRE General Test & GRE Subject Test.To know which one you need to write & how, click below:",
    },
    {
      title: "GERMAN LANGUAGE",
      description:
        "Also called as ‘Language of the Deutschland’ , is the official language of Germany.German is widely spoken language in Europe and other parts of the world. With over 200+ million speakers worldwide and as 10th most spoken language, German has great sense of culture involved and leads in bringing people together. Besides, Germany has free education for courses taught in German Language To know more about opportunities that exist via German Language, click below:.",
    },
    {
      title: "IELTS",
      description:
        "International English Language Testing System is taken by highest number of students across the world. IELTS is designed to test the most important aspect of knowing English language under four categories viz., Reading, Writing, Listening & Speaking. To know more, click below:",
    },
    {
      title: "TOEFL",
      description:
        "Test Of English As Foreign Language is a test originally designed for non-native English language speakers applying to universities in USA. Later, it was adopted by almost all the countries world wide. TOEFL iBT test conducted by ETS has a paper format as well. To know more, click below:",
    },
    {
        title: "DUOLINGO",
        description:
          "Duolingo offers an English proficiency exam for students applying to universities in India.The Duolingo English Test (DET) can be taken online and assesses reading, writing, listening, and speaking skills.The exam is recognized by several universities in India as an alternative to traditional English proficiency tests like TOEFL and IELTS.",
      },
      {
        title: "SPOKEN ENGLISH",
        description:
          "English is the language of instruction in many universities and institutions abroad, making it crucial for students to have a good command of spoken English. Strong spoken English skills can also enhance the student's ability to communicate with classmates, professors, and the local community in a foreign country. Improving spoken English proficiency can also improve the student's confidence and increase their chances of success in academic and professional pursuits.",
      },
      {
        title: "SAT",
        description:
          "The SAT exam is a standardized test commonly required for admission to colleges and universities in the United States. The exam measures a student's knowledge and skills in math, reading, and writing and includes an optional essay section. Many universities in India recognize the SAT as an alternative to domestic entrance exams for admission to undergraduate programs.",
      },
      {
        title: "FRENCH",
        description:
          "French is an important language for international studies, particularly in Europe and Africa, where it is widely spoken. French proficiency can enhance opportunities for studying at French universities and participating in exchange programs with French-speaking countries.Knowledge of French can also be advantageous for pursuing career opportunities in industries such as international business, tourism, and diplomacy.",
      },
      {
        title: "PUC - Computer science classroom coaching",
        description:
          "PUC is Pre-University is 2 years Course offered by Karnataka State, India. PUC is equivalent to 11th and 12th grades of schooling in other states educational system. Students with 10th Standard qualification can join PUC 1st Year.  In PUC subjects like PCMB or PCMC, CEBA, HEBA are offered.  PUC exams are conducted at the end of 2years and the results determine eligibility for higher education like Under Graduate degree programs in colleges and universities.We at S V Videsh Vidya enterprises conduct Class Room tuitions (Offline Training) for Computer Science courses for PUC 1st and PUC 2nd year.",
      },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 text-center">{lang.title}</h2>
            <p className="text-gray-700 mt-4 leading-loose">{lang.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LangComponents;
