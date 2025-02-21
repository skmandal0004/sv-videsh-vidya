import React from "react";

const VisitComponents = () => {
  return (
    <div className="w-full bg-white text-black py-10">
          <h1 className="text-7xl font-bold  text-center tracking-wide text-black mb-6">
          CONTACT US
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
            <p className="mb-6 font-bold underline">
              enquiry@svvideshvidya.com
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">CALL OUR MAINLINE</h3>
            <p className="mt-1 font-bold">+91 9739722211</p>
            <p className="font-bold">+91 9739799996</p>
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
            src="https://static.wixstatic.com/media/2e2a49_bf9f0581892b429089f2ffcbb9c17f62~mv2.jpg/v1/fill/w_641,h_790,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_bf9f0581892b429089f2ffcbb9c17f62~mv2.jpg"
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.836793574434!2d77.60012979160743!3d12.91296619958791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150318728565%3A0x90c3ec8ef1be5630!2sMico%20Layout%2C%20BTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1740117283158!5m2!1sen!2sin"
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
