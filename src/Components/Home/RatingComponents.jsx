import React from "react";

const RatingComponents = () => {
  const reviews = [
    {
      name: "Jeetendra",
      degree: "B.Tech - China",
      text: "I thank you for your kind and excellent services provided to me from the beginning till the end. Thank you for helping me in getting admission for MS and MBA in Italy in 3 Universities. I appreciate your services and admire your knowledge in all programs , countries and various options students can get in pursuing higher education abroad. Wish you good luck! ",
    },
    {
      name: "Nikhil",
      degree: "MBA - Italy",
      text: "I Approached SV Videsh Vidya Enterprises very late with respect to admissions and Mrs Veena was very helpful in helping me find a suitable university as per my needs and helped in securing my admission to the very prestigious Sichuan University in China within a couple of weeks and also in obtaining all the necessary documents and completing all the formal procedures. I am very glad to have Approached S V Videsh vidya for assistance on furthering my education.",
    },
    {
      name: "Mayank Sharma",
      degree: "",
      text: "I spent more than 6 months in searching for good Univ and spent more 60 to 85000 for application and courier charges but I did not get admission anywhere. I was determined to do MS in Germany so, I visited SVVV and was given 100% guidance. I got admission in 4 Univs. It was very difficult to choose 1 out of 4.",
    },
  ];

  return (
    <div className="w-full">
      {/* Dark Background Section */}
      <div className="bg-slate-900 text-white py-12 px-6 md:px-20">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          - View our Student reviews and ratings -
        </h2>

        {/* Feedback Button */}
        <div className="flex justify-center mb-7">
          <button className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-gray-200 transition">
            Our Students feedback
          </button>
        </div>
      </div>

      {/* White Background Section (Reviews) */}
      <div className="bg-white text-black py-12 px-6 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {reviews.map((review, index) => (
      <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          {/* Quote Icon */}
          <span className="text-5xl text-purple-600">❝</span>
          {/* Name & Degree */}
          <h3 className="text-2xl font-bold mt-2">{review.name}</h3>
          <p className="text-2xl font-semibold text-gray-700">
            {review.degree ? review.degree : "\u00A0"} {/* Non-breaking space */}
          </p>
        </div>
        {/* Review Text */}
        <p className="mt-4 text-gray-700 text-sm leading-[2]">{review.text}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default RatingComponents;
