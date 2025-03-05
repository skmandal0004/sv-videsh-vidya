import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ratings = [
  {
    text: "S V Videsh Vidya Enterprises\nRating: 5 out of 5",
    author: " Sulekha",
  },
  {
    text: "S V Videsh Vidya Enterprises\nRating: 4.8 · 67 votes",
    author: "  British School of language",
  },
  {
    text: "S V Videsh Vidya Enterprises\nRating: 4.7 · 88 votes",
    author: " Justdial",
  },
];

const RatingComponents = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % ratings.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + ratings.length) % ratings.length);
  };

  return (
    <div className="bg-[#1A152D] text-white py-10 px-4 relative flex justify-center items-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 text-white hover:text-gray-400 text-lg"
      >
        <FaChevronLeft />
      </button>

      {/* Content */}
      <div className="text-center max-w-2xl">
        <h2 className="text-red-500 font-bold text-lg md:text-3xl mb-12 mt-8">Ratings</h2>
        <p className="mt-2 whitespace-pre-line">{ratings[current].text}</p>
        <div className="w-10 mt-6 mb-6 h-0.5 bg-white mx-auto my-3"></div>
        <p className="italic text-lg mb-10">- {ratings[current].author}</p>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {ratings.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-white" : "border border-white"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 text-white hover:text-gray-400 text-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default RatingComponents;
