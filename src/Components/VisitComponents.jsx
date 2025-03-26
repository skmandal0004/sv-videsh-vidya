import React from "react";

const VisitComponents = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900  text-black py-10">
          <h1 className="text-7xl font-bold  text-center tracking-wide text-black dark:text-white mb-6">
          CONTACT <span className="text-indigo-500">US</span>
          </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto">
        {/* Left Contact Info */}
        <div className="w-full lg:w-1/2 bg-[#1A1A2E] text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-normal tracking-wide mt-12 text-center text-indigo-400 mb-6">
            Visit the Office
          </h2>

          {/* Address */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-9">ADDRESS</h3>
            <p className="text-gray-300 mb-5">
              4, 1st Main Rd, 1st Cross, MICO Layout, BTM <br />
              Stage 2, Bengaluru, Karnataka 560076
            </p>
          </div>

          {/* Email */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-7">E-MAIL US</h3>
            <p className="mb-6 font-bold underline text-yellow-400">
              enquiry@svvideshvidya.com
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">CALL OUR MAINLINE</h3>
            <p className="mt-1 font-bold text-yellow-400">+91 9739722211</p>
            <p className="font-bold text-yellow-400">+91 9739799996</p>
          </div>

          {/* Office Hours */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">OFFICE HOURS</h3>
            <p className="mt-1">Monday - Saturday</p>
            <p className="text-gray-400">Weekly Holiday - Sunday</p>
            <p className="text-indigo-400 text-lg font-semibold mt-1">
              10:30 am - 6:00 pm
            </p>
            <p className="text-indigo-400 text-lg font-semibold mt-1">
              Lunch Hours - 1 PM to 2 PM
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/young-happy-businesswoman-using-cell-phone-making-phone-call-office_637285-5301.jpg?t=st=1742982832~exp=1742986432~hmac=6d1cc9f6d4d7ee4f8de59dac532f5e0ce22cf0a309803d361a280793f7260e87&w=996"
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto ">
        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-auto">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62226.753299987955!2d77.5790211!3d12.896654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1503c3476f73%3A0xe51550942817954f!2sS%20V%20VIDESH%20VIDYA%2C%20Study%20Abroad%20(Australia%2C%20USA%2C%20UK%20%26%20Europe)%2C%20Online%20LIVE-%20IELTS%2C%20TOEFL%2C%20GRE%2C%20Duolingo%2C%20PTE%20%26%20German%20lang!5e0!3m2!1sen!2sin!4v1740039203090!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#1A1A2E] text-white p-10 flex flex-col">
          <h2 className="text-3xl font-normal text-center text-indigo-400 tracking-wide mb-10 mt-9 leading-normal">
            You Can Also <br/>
            Contact Us by Form
          </h2>
          <form>
            <div className="flex space-x-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border border-gray-400 rounded bg-[#1A1A2E] text-white mb-6"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border border-gray-400 rounded bg-[#1A1A2E] text-white mb-6"
              />
            </div>
            <div className="flex space-x-6 mt-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-1/2 p-2 border border-gray-400 rounded bg-[#1A1A2E] text-white mb-6"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-2 border border-gray-400 rounded bg-[#1A1A2E] text-white mb-6"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full mt-4 p-2 border border-gray-400 rounded bg-[#1A1A2E] text-white h-32"
            ></textarea>
            <button className="w-full bg-purple-600 text-white p-3 mt-4 rounded hover:bg-purple-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisitComponents;
