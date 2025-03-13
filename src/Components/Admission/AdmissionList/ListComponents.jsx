import React from "react";

const ListComponents = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full bg-gray-100 px-4 pt-6">
      <div className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">USA</h2>
        <div className="grid grid-cols-2 gap-6 text-lg text-gray-800">
          <ul className="list-disc pl-5 space-y-2">
            <li>Adelphi</li>
            <li>Arizona State University</li>
            <li>California State University</li>
            <li>East Bay and CAL State - Riverside</li>
            <li>Eastern Illinois</li>
            <li>Findlay, Johnson and Wales</li>
            <li>Florida Atlantic University</li>
            <li>George Mason University</li>
            <li>PACE University</li>
            <li>Purdue University</li>
            <li>Texas A & M University Corpus Cristy</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>UM-Dearborn</li>
            <li>Univ of Cincinnati</li>
            <li>University of Alabama at Birmingham</li>
            <li>University of Arlington</li>
            <li>University of Central Missouri</li>
            <li>University of Colorado, Denver</li>
            <li>University of Houston</li>
            <li>University of Massachusetts Boston (UMass Boston)</li>
            <li>University of New Haven</li>
            <li>University of North Texas University of South Florida</li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">UK</h2>
        <div className="grid grid-cols-2 gap-6 text-lg text-gray-800">
          <ul className="list-disc pl-5 space-y-2">
            <li>Anglia Ruskin</li>
            <li>Aston University</li>
            <li>Brunel University London</li>
            <li>Coventry University (London Campus)</li>
            <li>Durham University</li>
            <li>Leeds International Study Center</li>
            <li>Manchester Metropolitan University</li>
            <li>New Castle</li>
            <li>Northumbria University</li>
            <li>Queen Mary University of London</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>Teesside University</li>
            <li>The University of Sheffield</li>
            <li>University College London</li>
            <li>University of Central Lancashire</li>
            <li>University of Dundee</li>
            <li>University of Hertfordshire</li>
            <li>University of Leeds</li>
            <li>University of North London</li>
            <li>University of Nottingham</li>
            <li>University of Strathclyde</li>
            <li>Queen’s University Belfast</li>
            <li>Swansea University</li>
          </ul>
        </div>
      </div>


      <div className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg mt-6">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Germany</h2>
  <div className="grid grid-cols-2 gap-6 text-lg text-gray-800">
    <ul className="list-disc pl-5 space-y-2">
      <li>Darmstadt Business School</li>
      <li>Fachhochschule des Mittelstands (FHM)</li>
      <li>FH Aachen University of Applied Science</li>
      <li>Frankfurt University of Applied Sciences</li>
      <li>Hochschule Aalen</li>
      <li>Hochschule Karlsruhe University of Applied Sciences</li>
    </ul>
    <ul className="list-disc pl-5 space-y-2">
      <li>ISM – International School of Management</li>
      <li>IUBH</li>
      <li>RWTH International Academy</li>
      <li>SRH Heidelberg University of Kiel</li>
      <li>TU Dresden</li>
      <li>TUM</li>
      <li>University of Bonn</li>
      <li>University of Siegen</li>
    </ul>
  </div>
</div>

<div className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg mt-6 mb-10">
<h2 className="text-3xl font-bold text-center text-gray-900 mt-2 mb-6">Others</h2>
      <div className="grid grid-cols-2 gap-6 text-lg text-gray-800">
        <div>
          <h3 className="font-semibold">Canada :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Canadore College</li>
            <li>University of Ottawa</li>
            <li>Cambrian College</li>
            <li>Algonquin</li>
            <li>Centennial</li>
            <li>Lambton</li>
            <li>Evergreen College</li>
          </ul>

          <h3 className="font-semibold mt-2">Italy :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>University of Padua</li>
            <li>Universita Di Siena</li>
            <li>Vesuvio International School of Hospitality</li>
          </ul>

          <h3 className="font-semibold mt-2">France :</h3>
          <p>College De Paris</p>

          <h3 className="font-semibold mt-2">Hungary :</h3>
          <p>International Business School</p>

          <h3 className="font-semibold mt-2">Ireland :</h3>
          <p>Dundalk Institute, UCD.</p>

          <h3 className="font-semibold mt-2">Estonia :</h3>
          <p>Tallinn University of Technology</p>

          <h3 className="font-semibold mt-2">Philippines :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Our Lady Fatima University</li>
            <li>AMA</li>
            <li>Angeles Foundation University</li>
            <li>Perpetual Help</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Australia :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Monash University</li>
            <li>Deakin University</li>
          </ul>

          <h3 className="font-semibold mt-2">Netherlands :</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Radboud University</li>
            <li>University of Groningen</li>
            <li>University of Twente</li>
            <li>Enschede</li>
          </ul>

          <h3 className="font-semibold mt-2">Dubai :</h3>
          <p>BITS Pilani - Dubai Campus</p>
          <p>Manipal University</p>

          <h3 className="font-semibold mt-2">China :</h3>
          <p>China Medical University</p>
          <p>Sichuan University</p>

          <h3 className="font-semibold mt-2">Lithuania :</h3>
          <p>VGTU</p>

          <h3 className="font-semibold mt-2">Singapore :</h3>
          <p>Raffles, Amity University</p>

          <h3 className="font-semibold mt-2">Ukraine :</h3>
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
  );
};

export default ListComponents;
