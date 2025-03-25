import React from "react";

const CountryComponents = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen bg-gray-900 px-4 py-16"
      style={{
        backgroundImage: "url('https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2016November/university-of-sydney-650_120516123119.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white w-full max-w-5xl px-4 sm:px-6">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg mb-4">
          SVV Abroad <br /> University Admission List
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold drop-shadow-lg mb-8">
          🌍 Countries Available
        </h2>

        {/* Countries List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-300 border-opacity-40">
          {[
            "🇺🇸 USA",
            "🇨🇳 China",
            "🇨🇦 Canada",
            "🇫🇷 France",
            "🇬🇧 UK",
            "🇪🇪 Estonia",
            "🇩🇪 Germany",
            "🇭🇺 Hungary",
            "🇦🇪 Dubai",
            "🇱🇹 Lithuania",
            "🇮🇹 Italy",
            "🇮🇪 Ireland",
            "🇦🇺 Australia",
            "🇸🇬 Singapore",
            "🇳🇱 Netherlands",
            "🇺🇦 Ukraine",
            "🇵🇭 Philippines",
          ].map((country, index) => (
            <p
              key={index}
              className="bg-white bg-opacity-80 text-gray-900 font-medium text-lg p-4 rounded-lg shadow-md text-center hover:bg-opacity-100 transition duration-300"
            >
              {country}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryComponents;
