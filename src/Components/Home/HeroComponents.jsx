import React from "react";
import { Carousel } from "@material-tailwind/react";

export function HeroComponents() {
  return (
    <div className="relative w-screen">
      <Carousel
        className="w-full"
        autoplay={true}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          >
            ❮
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          >
            ❯
          </button>
        )}
      >
        {/* Slide 1 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_952ec33f10d447ae84b13f5ae79df62f~mv2.jpg"
            alt="image 1"
            className="w-full max-h-[500px] object-cover"
          />
          <div className="absolute top-10 left-10 text-white text-left">
            <h2 className="text-4xl font-bold bg-black/50 px-7 py-1 rounded-md">
              Study <br />
              Abroad Now!
            </h2>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-5xl font-bold mb-4">
              Engineering | Arts & Management | Management
            </h2>
            <h2 className="text-5xl font-bold">Online Training</h2>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full">
              Start Today
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_e7e79b78496643029d562e3706e7b6c9~mv2.png"
            alt="image 2"
            className="w-full max-h-[500px] object-cover"
          />
          <h2 className="absolute top-10 left-10 ml-10 text-4xl md:text-6xl font-bold text-white">
            Study Abroad Now
          </h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-black text-center space-y-4">
            <p className="text-xl md:text-2xl max-w-lg mx-auto">
              Discover popular and high-ranked universities <br />
              with our help and fulfill your dream <br />
              of flying abroad.
            </p>
            <button className="w-32 bg-blue-600 hover:bg-blue-700 text-white text-md font-semibold rounded-full px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-screen">
          <img
            src="https://static.wixstatic.com/media/edbce3_6e2edf123eaf4db0b7f22d07ef444b11~mv2.jpg"
            alt="image 3"
            className="w-full max-h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6">
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full px-6">
              <h3 className="text-2xl md:text-5xl font-semibold mb-4">
                Pursue your goals with our expert faculties
              </h3>
              <p className="text-lg md:text-5xl mt-2">Get online live coaching:</p>
            </div>
            <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-x-10 gap-y-4 text-lg md:text-4xl">
              <p>IELTS</p>
              <p>DUOLINGO</p>
              <p>GRE</p>
              <p>French</p>
              <p>German</p>
              <p>English</p>
              <p>TOEFL</p>
              <p>SAT</p>
            </div>
            <p className="mt-4 text-2xl md:text-2xl font-semibold text-yellow-300">
              Join GRE + TOEFL Combo Offer
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroComponents;
