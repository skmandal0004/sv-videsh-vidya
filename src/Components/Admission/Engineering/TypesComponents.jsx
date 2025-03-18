import React from "react";

const TypesComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white py-12 px-6">
      {/* Heading */}
      <div className="max-w-4xl w-full px-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center leading-snug">
          Types of Engineering Courses you can  
          <br />
          <span className="block text-center">Study Abroad:</span>
        </h1>
      </div>

      {/* Paragraph Section */}
      <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
        <p className="text-lg leading-relaxed mb-6">
        Engineering courses are plentiful and there are many different engineering degrees to study, which can be combined with another subject, such as a modern language, law, business, computers or medicine. This will give you even more chance of jetting off on an exciting career! You can also study practically anywhere in the world, but the most popular choices are <strong>USA, Australia, 
          New Zealand, UK, Ireland, Italy, Germany, France, and Canada</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-6">
        You can study at different levels, including diploma, undergraduate, and postgraduate, however most highly paid engineers studied for a postgraduate degree in engineering, whether that is combined with another subject or not. Deciding to study engineering abroad will give you access to around<strong>5,000 different courses</strong>.
        </p>

        <p className="text-lg leading-relaxed ">
        Engineering courses are available at many levels and the most popular ones are <br/> listed below.
        </p>
      </div>

      {/* Course List in Grid Form with Smaller Width */}
      <div className="max-w-4xl w-full px-6">
  <ul className="grid grid-cols-2 gap-2 text-lg text-gray-800">
    <li className="bg-gray-100 p-4 rounded-lg shadow-md w-3/4 list-inside list-disc pl-6 text-indent-0">
      Foundation
    </li>
    <li className="bg-gray-100 p-4 rounded-lg shadow-md w-3/4 list-inside list-disc pl-6 text-indent-0">
      Undergraduate
    </li>
    <li className="bg-gray-100 p-4 rounded-lg shadow-md w-full list-inside list-disc pl-6 text-indent-6">
      Postgraduate (including taught, research, and PhD)
    </li>
  </ul>
</div>

    <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
    <p className="text-lg leading-relaxed mb-6 mt-4">S V Videsh Vidya can help you choose an engineering university or school that is right for you. Choose a place that specializes in the area you are most interested in, such as :</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 text-lg text-gray-800">
    {[
      "Aerospace",
      "Architecture and Building,",
      "Automotive",
      "Bio Technology",
      "Biomedical",
      "Chemical",
      "Civil Engineering, Construction and Construction Management",
      "Electrical",
      "Electronics & Embedded Technology",
      "Energy & Power",
      "Engineering Trades",
      "Environmental Science / Protection and Technology",
      "General Engineering & Technology",
      "Industrial & Systems Engineering",
      "Manufacturing and Processing – Paper and Bioprocess",
      "Marine",
      "Materials Science & Engineering,",
      "Mechanical",
      "Mechatronics",
      "Mining",
      "Nanoscience, Nanotechnology",
      "Petroleum, Oil and Gas, Diesel Technology",
      "Robotics",
      "Renewable Energy and Materials",
      "Textile",
      "Water Resources",
      "Wild Life Ecosystem, Conservation",
      "Sustainable Energy",
      "Transportation Engineering",
    ].map((university, index) => (
      <div key={index} className="bg-gray-100 p-3 rounded shadow">
        <ul className="list-disc pl-5 ">
          <li>{university}</li>
        </ul>
      </div>
    ))}
  </div>
    </div>
  );
};

export default TypesComponents;
