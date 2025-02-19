import React, { useState } from "react";

const testimonials = [
  {
    name: "Dr. Sharma",
    designation: "From Guwahati on behalf of his son",
    message:
      "Thanks to S V Videsh Vidya and Mrs. Veena and her Team which helped my son, Chinmaye, to join Our Lady Fathima University for BS-MD course in Philippines. Also, I refer S V Videsh Vidya as they will help you in getting admission at Our Lady Fathima University, Philippines. They can help you and any of your relatives in getting MBBS admission Outside(abroad).",
  },
  {
    name: "Mr. Ashwath Narayan",
    designation: "Father of Divyashree ( Pursuing MS in Germany )",
    message:
      "I was seeking suitable consultant for my daughter’s higher studies in Germany and found SV Videsh Vidya through online search. We got all kind of guidelines and suggestions regarding MS in Germany based on academic profile of my daughter from S V Videsh Vidya. All the support in terms of documents and requirements in Germany were informed and valuable assistance by Mrs Veena got my daughter admission in a prestigious college for MS in Germany. S V Videsh Vidya should continue to support more students in future for higher studies. ",
  },
  {
    name: "Dr. Grover",
    designation: "Freshman Program in FH Aachen- Germany",
    message:
      "It was really a great accidental finding on the net through which we came in touch with SVV. Right from day one , Abhishek Tiwari sir’s online coaching was specially oriented towards the Freshman entrance test & it played the most pivotal role in cracking the test. My son got through in the very first attempt. We will always remember the late night classes taken by Abhishek sir sacrificing his own comfort. Veena ma’am was always keen to find time from her busy schedule to reply to our queries and guide us to our satisfaction , from starting the application process till my son took the test her team was always there with their full team spirit. SVV deserves a pat N I’m sure in future also they will enable more n more students to shine more n give their parents a sense of satisfaction! Sincere thanks n All the very best to SVV . ",
  },
];

const ParentsComponents = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#191634] text-white py-16 px-6 md:px-12 text-center relative">
      {/* Heading */}
      <h2 className="text-lg md:text-2xl font-semibold text-[#9ee01a] mb-9">
        Hear it from our Parents who know us!
      </h2>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {testimonials[index].name}
        </h3>
        <p className="text-sm md:text-base text-gray-300 ">
          {testimonials[index].designation}
        </p>

        {/* Separator */}
        <div className="w-10 border-b border-gray-400 mx-auto my-3 mb-8 mt-8"></div>

        {/* Testimonial Content */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300 px-4">
          "{testimonials[index].message}"
        </p>
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={prevTestimonial}
      >
        ❮
      </div>
      <div
        className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={nextTestimonial}
      >
        ❯
      </div>

      {/* Dots for Carousel */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-3xl mt-10">
        - View our complete list of Student reviews and ratings -
      </p>

        {/* Button */}
             <a href="#" className="mt-6 inline-block">
                <button className="mt-5 px-6 py-3 bg-white text-black font-semibold text-lg rounded-lg hover:opacity-90 transition duration-300">
                   Our Students Say
                </button>
      </a>

    </div>
  );
};

export default ParentsComponents;
