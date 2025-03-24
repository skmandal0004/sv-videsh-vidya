import React from "react";

const DocsComponents = () => {
  return (
    <div className="bg-white dark:bg-gray-900  py-6 px-5 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-4">
        Collecting Documents Required <br/>for Visa
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 leading-loose max-w-4xl mx-auto">
      Procuring all the documents is undoubtedly a quintessential step in Study Abroad student Visa process. All documents stated mandatory by the study abroad destination country during Visa must be arranged in Originals and multiple copies. In some cases, there are prescribed formats which needs to be adhered to while compiling those documents. Some of the common documents required for Student Visa are as following:​
      </p>

      {/* Documents List - Three Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-gray-600 dark:text-gray-400">
      <ul className="space-y-4">
  <li className="flex items-start">
    <span className="text-xl text-black mr-2">•</span>
    <span className="block overflow-hidden text-ellipsis ">
      The letter of acceptance  from the university
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-xl text-black mr-2">•</span>
    <span className="block overflow-hidden text-ellipsis ">
      Documents specifying  duration of your studies
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-xl text-black mr-2">•</span>
    <span className="block overflow-hidden text-ellipsis ">
      Documents specifying any Scholarships awarded
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-xl text-black mr-2">•</span>
    <span className="block overflow-hidden text-ellipsis ">
      Documents specifying your <br/>travel plans
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-xl text-black mr-2">•</span>
    <span className="block overflow-hidden text-ellipsis ">
      Visa fee payment Receipt
    </span>
  </li>
</ul>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> Documents specifying your academic and non-academic achievements in school/college
          </li>
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> A copy of GRE, IELTS or TOEFL or PTE scores (notarized by lawyer)
          </li>
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> Documents specifying entire funding details,<br/> and a letter from your sponsor <br/>(Affidavit of Support)
          </li>
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> Documents specifying the course you’ve <br/>enrolled in
          </li>
        </ul>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> Of recommendation from your college professor/school faculty detailing your progress as<br/> a student under their supervision. Those having <br/> work experience must get a Recommendation letter or Reference letter from their employer(s)
          </li>
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> All previous degrees mark-sheets, certificates and transcripts detailing all the subjects taught to you<br/> in your college or school and marks secured
          </li>
          <li className="flex items-start">
            <span className="text-xl text-black mr-2">•</span> documents specifying your accommodation <br/>funding and arrangements
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DocsComponents;
