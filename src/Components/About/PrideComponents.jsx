import React from "react";

const PrideComponents = () => {
  return (
    <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-900  py-12 px-6 md:px-12">
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
        Your Success Is Our Pride!
      </h2>
      <p className="text-lg max-w-3xl leading-relaxed text-gray-700 dark:text-white">
        At <span className="font-semibold">S V Videsh Vidya</span>, we don’t leave any stone unturned when it comes to servicing our clients.
        Patience is our Virtue and Knowledge is Power. We believe overseas education has to be customized to individual needs, and hence we
        ensure the best fit for our clients. Study abroad options are plenty, but we know what suits your profile. We ensure almost 100% success till date.
        We take pride in your success.
      </p>

      <p className="text-xl font-semibold mt-6 text-indigo-900 dark:text-white">
        Hear it from our students who know us!
      </p>

      {/* Videos Section */}
      <div className="flex justify-center w-full">
        <h3 className="text-xl font-normal mt-12 mb-6 ml-4 text-black dark:text-white">
          All Videos
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 w-full px-4 md:px-6">
        {/* Video 1 */}
        <div className="w-full md:w-[470px]">
          <iframe
            className="w-full h-[200px] md:h-[280px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/MPwnQHPJHJE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Text Below Video 1 */}
          <p className="text-xs font-medium text-gray-800 mt-3 text-left">
            <span className="font-semibold text-black dark:text-white">Student of SV Videsh Vidya</span>
          </p>
        </div>

        {/* Video 2 */}
        <div className="w-full md:w-[470px]">
          <iframe
            className="w-full h-[200px] md:h-[280px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/No6Ea4gTnk4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Text Below Video 2 */}
          <p className="text-xs font-extralight dark:text-white text-gray-800 mt-3 text-left line-clamp-2 overflow-hidden">
            <span className="font-bold mb-2 inline-block">MBBS IN PHILIPPINES</span>
            <br />
            OUR LADY FATHIMA UNIVERSITY is recognized as one of the leading universities in the field of medicine.
            It's located in Manila, Philippines, and is recognized by MCI (Medical Council of India). Since many Indian students...
          </p>
        </div>
      </div>

    </div>
  );
};

export default PrideComponents;
