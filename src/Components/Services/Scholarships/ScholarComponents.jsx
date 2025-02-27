import React from "react";

const ScholarComponents = () => {
  return (
    <div className="bg-white py-3">
      <div className="max-w-full mx-auto px-12 ">
      <h1 className="text-center font-bold text-5xl mb-8 mt-4">
      Scholarships and Loans
        </h1>
        {/* Scholarships Section */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-[50%]">
            <img
              src="https://santamonicaedu.in/wp-content/uploads/2023/03/scholarships_in_canada.jpg"
              alt="Scholarships"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col">
            <h2 className="text-3xl font-bold text-red-500 mb-2 text-center">
              Scholarships
            </h2>
            <p className="leading-normal text-base">
            Every year more than hundreds of thousands of dollars worth scholarships are distributed for International Students by various Universities/Colleges/Organizations. Most of these scholarships goes to the deserving ones based on numerous criteria described by the Funding Institute. For Indian students these scholarships can come in following ways.
            </p>

            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>Indian Student Overseas Education Scholarships</li>
              <li>International Students Study Abroad Scholarships</li>
              <li>Indian Students Scholarship for Higher Studies in India</li>
            </ul>

            <p className="leading-normal text-base">              
            The myth around scholarship is that only toppers from different spheres of life gets scholarship. But let’s not argue that toppers deserve these scholarships based on certain criteria. But Overseas Education Scholarships are not restricted to toppers alone. Most Study Abroad Student Scholarships fall under following four major types:​​
            </p>

            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>Need based Scholarships (for financially backward students mostly with good/decent academic records)</li>
              <li>Student Specific Scholarships (generally based on caste, religion, gender or similar grounds)</li>
              <li>University/College Scholarships (it can be Merit based or other criteria as mentioned by university)</li>
              <li>Company Based Sponsorship (Professionals working in companies get full sponsorship in the pretext of coming back and joining the same company)
                </li>
            </ul>
            <p className="leading-normal text-base">
            The above mentioned types of scholarships cover almost 90% of total scholarships awarded to Study Abroad aspirants. Hence students seeking admission for overseas education mustn’t lose hope and do research thoroughly to take advantage of these wonderful scholarship options.
            </p>
          </div>
        </div>

        {/* Education Loans Section */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row-reverse">
          {/* Left Image */}
          <div className="w-full md:w-[50%]">
            <img
              src="https://articlesmall.com/wp-content/uploads/2024/09/Education-Loan-1.jpg"
              alt="Education Loans"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8 text-white bg-[#0F0C24] flex flex-col">
            <h2 className="text-3xl font-bold text-red-500 mb-2 text-center">
              Education Loans
            </h2>
            <p className="leading-normal text-base">
            Education loans in India have come a long way from having conservative approach to more flexible one in recent years. Hard working Students generally have no problem paying back Education Loans after finishing their studies. Overseas Education Loans to Study Abroad help may families getting a substantial funding from both Public and Private sector banks. S V Videsh Vidya has partnered with Indian financial institutions to facilitate Education Loans for Study abroad purposes of Indian Students. We suggest banks based on their services, loan amount required and student’s family financial background and location. It’s faster to get Education loans these days but proper planning is required so as not to delay the University Admission process. Financial documents are must during Visa Interview and varies from country to country. We guide our students the right approach and timing to get these loans in order to secure I-20 from the University.
            </p>

            <p className="leading-normal text-base mt-2">
            Most Overseas education loan cover the cost of following and are paid mostly to the University directly:​
            </p>
            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>Tuition fee</li>
              <li>Insurance fee</li>
              <li>Cost of books & supplies</li>
              <li>Accommodation costs</li>
              <li>Living expenses</li>
              <li>Travel and Transportation expenses</li>
            </ul>
            <p className="leading-normal text-base mt-2">
        Scholarships may not cover the expenses incurred as per the above list and hence timely procurement of Education loans goes a long way in maintaining the student finances in order :
            </p>
            <ul className="list-disc list-inside mt-2 mb-3 space-y-1">
              <li>​Loans upto INR 4lacs doesn’t require a Guarantor or margin</li>
              <li>​Loans upto INR 7.5lacs require a third party Guarantor but no collateral</li>
              <li>Loans above INR 7.5lacs require a Guarantor as well as collateral (proof of any immovable property or asset)<br/>
                Repayment of loans is dependent on banks or financial institution and generally starts after 6 months or 12 months of completion of the course. Grace period of Repayment of loans ranges from 5-15 yrs for loans above 7.5lacs but in some cases can be lower as well</li>
               
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarComponents;
