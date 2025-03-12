import React from "react";

const CountryComponents = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto bg-gray-100 px-4 py-10">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl bg-gray-200 shadow-lg rounded-lg p-8 lg:p-10">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-900 text-center leading-loose">
            SVV Abroad <br /> University <br /> Admission List
          </h1>
        </div>

        {/* Countries List Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Countries :
          </h2>
          <div className="grid grid-cols-2 gap-y-3 text-lg font-medium text-gray-700 text-center">
            <p>USA</p> <p>China</p>
            <p>Canada</p> <p>France</p>
            <p>UK</p> <p>Estonia</p>
            <p>Germany</p> <p>Hungary</p>
            <p>Dubai</p> <p>Lithuania</p>
            <p>Italy</p> <p>Ireland</p>
            <p>Australia</p> <p>Singapore</p>
            <p>Netherlands</p> <p>France</p>
            <p>Ukraine</p> <p>Philippines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryComponents;
