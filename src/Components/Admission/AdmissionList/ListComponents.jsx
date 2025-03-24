import React from "react";

const ListComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-100 dark:bg-gray-900  px-6 py-8">
      <div className="grid gap-8 w-full max-w-6xl">
        
        {/* USA Section */}
        <div className=" p-4 ">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">USA</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  text-lg text-gray-800">
    {[
      "Adelphi",
      "Arizona State University",
      "California State University",
      "East Bay and CAL State - Riverside",
      "Eastern Illinois",
      "Findlay, Johnson and Wales",
      "Florida Atlantic University",
      "George Mason University",
      "PACE University",
      "Purdue University",
      "Texas A & M University Corpus Cristy",
      "UM-Dearborn",
      "University of Cincinnati",
      "University of Alabama at Birmingham",
      "University of Arlington",
      "University of Central Missouri",
      "University of Colorado, Denver",
      "University of Houston",
      "UMass Boston",
      "University of New Haven",
      "University of North Texas",
      "University of South Florida",
    ].map((university, index) => (
      <div key={index} className="bg-gray-100 p-3 rounded shadow">
        <ul className="list-disc pl-5">
          <li>{university}</li>
        </ul>
      </div>
    ))}
  </div>
</div>


        {/* UK Section */}
        <div className=" p-4 ">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">UK</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-lg text-gray-800">
    {[
      "Anglia Ruskin",
      "Aston University",
      "Brunel University London",
      "Coventry University (London Campus)",
      "Durham University",
      "Leeds International Study Center",
      "Manchester Metropolitan University",
      "New Castle",
      "Northumbria University",
      "Queen Mary University of London",
      "Teesside University",
      "The University of Sheffield",
      "University College London",
      "University of Central Lancashire",
      "University of Dundee",
      "University of Hertfordshire",
      "University of Leeds",
      "University of North London",
      "University of Nottingham",
      "University of Strathclyde",
      "Queen’s University Belfast",
      "Swansea University",
    ].map((university, index) => (
      <div key={index} className="bg-gray-100 p-3 rounded shadow">
        <ul className="list-disc pl-5 ">
          <li>{university}</li>
        </ul>
      </div>
    ))}
  </div>
</div>



        {/* Germany Section */}
        <div className="p-4 ">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Germany</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-lg text-gray-800">
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>RWTH Aachen University</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>Technical University of Munich (TUM)</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>University of Stuttgart</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>Humboldt University of Berlin</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>University of Freiburg</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>University of Mannheim</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>Karlsruhe Institute of Technology (KIT)</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>Ludwig Maximilian University of Munich</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>TU Berlin</li>
      </ul>
    </div>
    <div className="bg-gray-100 p-3 rounded shadow">
      <ul className="list-disc pl-5">
        <li>University of Hamburg</li>
      </ul>
    </div>
  </div>
</div>


        {/* Other Countries Section */}
        <div className=" p-4">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Others</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-800">
    
    {/* Canada */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Canada</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Canadore College</li>
        <li>University of Ottawa</li>
        <li>Cambrian College</li>
        <li>Algonquin</li>
        <li>Centennial</li>
        <li>Lambton</li>
        <li>Evergreen College</li>
      </ul>
    </div>

    {/* Italy */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Italy</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>University of Padua</li>
        <li>Universita Di Siena</li>
        <li>Vesuvio International School of Hospitality</li>
      </ul>
    </div>

    {/* France */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">France</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li className="list-disc">College De Paris</li>
      </ul>
    </div>

    {/* Hungary */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Hungary</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>International Business School</li>
    </ul>
    </div>

    {/* Ireland */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Ireland</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>Dundalk Institute, UCD</li>
      </ul>
    </div>

    {/* Estonia */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Estonia</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>Tallinn University of Technology</li>
      </ul>
    </div>

    {/* Philippines */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Philippines</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Our Lady Fatima University</li>
        <li>AMA</li>
        <li>Angeles Foundation University</li>
        <li>Perpetual Help</li>
      </ul>
    </div>

    {/* Australia */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Australia</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Monash University</li>
        <li>Deakin University</li>
      </ul>
    </div>

    {/* Netherlands */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Netherlands</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Radboud University</li>
        <li>University of Groningen</li>
        <li>University of Twente</li>
        <li>Enschede</li>
      </ul>
    </div>

    {/* Dubai */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Dubai</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>BITS Pilani - Dubai Campus</li>
      <li>Manipal University</li>
      </ul>
    </div>

    {/* China */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">China</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>China Medical University</li>
      <li>Sichuan University</li>
    </ul>
    </div>

    {/* Lithuania */}
    <div className="bg-white p-4 rounded-lg shadow">
    <ul className="list-disc pl-5 space-y-1">
      <h3 className="font-semibold text-gray-900">Lithuania</h3>
      <li>VGTU</li>
      </ul>
    </div>

    {/* Singapore */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Singapore</h3>
      <ul className="list-disc pl-5 space-y-1">
      <li>Raffles, Amity University</li>
      </ul>
    </div>

    {/* Ukraine */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">Ukraine</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ivano Frankivisk NMU</li>
        <li>Kharkiv National Medical University NMU</li>
        <li>Bogomolets National Medical University</li>
        <li>Vinnytsia National Medical University</li>
        <li>LVIV</li>
      </ul>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default ListComponents;
