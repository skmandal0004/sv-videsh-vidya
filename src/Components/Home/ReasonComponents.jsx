import React from "react";

const reasons = [
  {
    title: "Educational Benefits",
    image: "https://static.wixstatic.com/media/b2d561eab7d3416883b96a7088fb7497.jpg/v1/crop/x_656,y_0,w_2624,h_2624/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Graduation%20Caps.jpg",
    description:
      "Studying abroad, you will experience education in a completely new way due to the difference in the systems of education. This can be challenging at first, but it will broaden your mind to new ways of learning and enhance your skills and personality in countless ways.",
  },
  {
    title: "Enhance Your Career Opportunities",
    image: "https://static.wixstatic.com/media/11062b_d4b001695a67432f84fad8c7875bf03e~mv2.jpeg/v1/crop/x_1223,y_0,w_4896,h_4896/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business%20Consultation.jpeg",
    description:
      "After completing your overseas education, you are equipped with a globally recognised degree, enhanced language skills, a widened perspective on culture and willingness to take on new challenges whether you choose to stay and apply for visa or you return home and seek work.",
  },
  {
    title: "See The World",
    image: "https://static.wixstatic.com/media/47a44698310f4f9b845140d410b6b1c4.jpg/v1/crop/x_933,y_0,w_3731,h_3731/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Globe.jpg",
    description:
      "In between lectures and assignments, you will get plenty of time to explore whether you are visiting iconic landmarks or trying new cuisines. Your stay abroad is bound to make you a global citizen",
  },
];

const ReasonComponents = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Top Reasons to Study Abroad
      </h2>

      {/* Reason Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Image */}
            <img
              src={reason.image}
              alt={reason.title}
              className="w-24 h-24 rounded-full shadow-md mb-4 object-cover"
            />
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {reason.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Us Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
          <span>💬</span>
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );
};

export default ReasonComponents;
