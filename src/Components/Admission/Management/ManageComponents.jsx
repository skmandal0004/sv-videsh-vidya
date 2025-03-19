import React from 'react'

const ManageComponents = () => {

  const subjects = [
    { name: "Business Management", gradient: "from-red-500 to-red-700" },
    { name: "Business Administration", gradient: "from-teal-400 to-teal-600" },
    { name: "Finance Studies", gradient: "from-green-400 to-green-600" },
    { name: "Business Analytics", gradient: "from-blue-500 to-blue-700" },
    { name: "Investment Banking", gradient: "from-purple-500 to-purple-700" },
    { name: "International Trade", gradient: "from-gray-900 to-gray-700" },
    { name: "Management Studies", gradient: "from-gray-800 to-gray-600" },
    { name: "Project Management", gradient: "from-purple-400 to-purple-600" },
    { name: "Human Resource", gradient: "from-blue-400 to-blue-600" },
    { name: "Product Development", gradient: "from-green-500 to-green-700" },
    { name: "Marketing Management", gradient: "from-teal-300 to-teal-500" },
    { name: "International Business", gradient: "from-orange-400 to-orange-600" },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Heading */}
      <div className="max-w-4xl w-full px-6 py-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 text-center mt-6">Management</h1>
      </div>

      {/* Image */}
      <div className="w-full bg-indigo-500 flex justify-center py-12">
        <img
          src="https://static.wixstatic.com/media/11062b_83a12026801a4252ac7e470fa11c9a6b~mv2.jpg/v1/crop/x_0,y_315,w_6720,h_3850/fill/w_802,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business.jpg"
          alt="Medical"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
        <p className="text-xl leading-loose mb-4">
        Business Management courses have evolved in recent years as per the demands of changing business scenarios, scaling heights of globalization in developing economies as well as the developed, and the startups mushrooming in various parts of the world. Apart from the ever so present MBA programs, options in the field of Management Abroad has grown many folds.
        </p>
        <p className="text-xl leading-loose "> 
        Students from India are taking up specialized courses to hone their business skills right after Senior secondary year. This gives them an early advantage to learn and understand different facets of Business and Management. Plenty of overseas Business and Management courses are available at Undergraduate as well as Post graduate level. These are available at affordable costs and are packed with an international curriculum as well as Internships. Some of the courses/modules covered under Management are:
        </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-16 -mt-8">
  {subjects.map((subject, index) => (
   <div
   key={index}
   className={`relative flex items-center justify-center p-6 text-white text-center font-bold rounded-lg shadow-lg transition-all duration-300 transform bg-gradient-to-r ${subject.gradient} hover:scale-105 hover:shadow-2xl hover:brightness-125 hover:contrast-125 active:scale-95`}
 >
   <p className="text-lg md:text-xl lg:text-2xl drop-shadow-md">{subject.name}</p>
   {/* Highlight Effect on Hover */}
   <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-20 transition-opacity"></div>
 </div>
 
  ))}
</div>



      <h2 className="text-3xl font-medium tracking-wide text-gray-900 ">
           Study Abroad Options for Business and Management:
     </h2>
    
     <div className="max-w-4xl w-full px-6  text-gray-800">
        <p className="text-xl leading-loose mb-4">
        Prime destinations for business & management overseas education for Indian students are in countries like New Zealand, UK, Canada, Australia, Singapore, USA, Europe and Ireland. Depending on the courses and budget, students can decide to pursue management courses from one of these countries. New Zealand and Canada are the prime destination for Business Administration or business management courses in bachelor’s for study abroad Indian students ; Singapore, Dubai, Australia is second in favorites for bachelor’s; Then comes UK and USA. Postgraduate Business and Management courses abroad are certainly the top choice for Indian students to attain quality education at affordable cost.
        </p>
        </div>
      
    </div>
  )
}

export default ManageComponents
