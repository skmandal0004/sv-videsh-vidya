import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jeetendra",
    degree: "B.Tech - China",
    text: "I thank you for your kind and excellent services provided to me from the beginning till the end. Thank you for helping me in getting admission for MS and MBA in Italy in 3 Universities. I appreciate your services and admire your knowledge in all programs, countries, and various options students can get in pursuing higher education abroad. Wish you good luck!",
  },
  {
    name: "Nikhil",
    degree: "MBA - Italy",
    text: "I approached SV Videsh Vidya Enterprises very late with respect to admissions, and Mrs. Veena was very helpful in helping me find a suitable university as per my needs. She helped in securing my admission to the prestigious Sichuan University in China within a couple of weeks and also assisted in obtaining all the necessary documents and completing all the formal procedures. I am very glad to have approached SVVV for assistance.",
  },
  {
    name: "Mayank Sharma",
    degree: "MS - Germany",
    text: "I spent more than 6 months searching for a good university and spent more than 60,000 to 85,000 for applications and courier charges, but I did not get admission anywhere. I was determined to do an MS in Germany, so I visited SVVV and was given 100% guidance. I got admission to 4 universities, and it was very difficult to choose 1 out of 4.",
  },
];

const RatingComponents = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          - What Our Students Say -
        </motion.h2>

        {/* Feedback Button */}
        <div className="flex justify-center">
        <motion.button
      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/students")} // Navigate on click
    >
      View More Feedback
    </motion.button>

        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <span className="text-5xl text-purple-600 font-serif">❝</span>

                {/* Name & Degree */}
                <h3 className="text-2xl font-bold mt-4">{review.name}</h3>
                <p className="text-lg font-semibold text-gray-700">
                  {review.degree ? review.degree : "\u00A0"}
                </p>

                {/* Review Text */}
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingComponents;
