import React from "react";

const ApplyingComponents = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900  py-10 px-2 lg:px-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 dark:text-white tracking-wide">
  Applying for Visa and Selecting Visa Interview <br /> date
</h2>
      {/* Description */}
      <p className="mt-6 text-gray-700 dark:text-gray-400 text-xl leading-loose max-w-3xl mx-auto font-light">
      Once the documents are arranged and are in order, student or S V Videsh Vidya team will apply for the Visa and take a Visa Interview date. For most countries there is a pre-defined Visa fee and student has to pay the fee in order to get their Study Abroad student Visa processed. Visa process can be either:
      </p>

      {/* Process List */}
      <ul className="mt-6 text-lg text-gray-800 dark:text-gray-400 space-y-1 font-light">
        <li className="flex justify-center items-center">
          <span className="text-xl text-gray-900 mr-2">•</span> completely online or
        </li>
        <li className="flex justify-center items-center">
          <span className="text-xl text-gray-900 mr-2">•</span> online application and offline (visa interview)
        </li>
      </ul>
    </div>
  );
};

export default ApplyingComponents;
