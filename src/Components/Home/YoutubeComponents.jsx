import React from "react";

const YoutubeComponents = () => {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Students Say
      </h2>

      {/* Video Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* First Video */}
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/MPwnQHPJHJE"
              title="YouTube Video 1"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Second Video */}
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/No6Ea4gTnk4"
              title="YouTube Video 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeComponents;
