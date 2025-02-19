import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

const FooterComponents = () => {
  return (
    <footer className="bg-[#1A1232] text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold mb-2">
            <FaGraduationCap className="text-purple-400 text-2xl" />
            <span>S V Videsh</span>
          </div>
          <p className="text-gray-400 mb-4">Vidya Enterprises</p>
          <ul className="space-y-2">
            {[
              "Virtual Coaching and Counselling",
              "Applications Filing, Admissions",
              "Scholarships and Study Loans",
              "VISA Guidance",
              "Post Landing Services",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-semibold text-lg">Phone :</p>
            <p className="text-purple-400 font-bold">+91 9739722211</p>
            <p className="text-purple-400 font-bold">+91 9739799996</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Email :</p>
            <p className="text-purple-400 font-bold">
              enquiry@svvideshvidya.com
            </p>
          </div>
        </div>

        {/* Middle Section - Quick Navigation */}
        <div>
          <h3 className="text-purple-400 font-semibold mb-3">QUICK NAVIGATION</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Home",
              "About Us",
              "Services",
              "Admissions",
              "Trainings",
              "Contact us",
              "Forum",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Map & Address */}
        <div>
  <h3 className="text-purple-400 font-semibold mb-3">GET IN TOUCH</h3>
  <p className="text-gray-300 leading-relaxed">
    4, 1st Main Rd, 1st Cross, MICO Layout, BTM Stage 2, Bengaluru, Karnataka 560076
  </p>
  <div className="mt-6">
    <iframe
      className="w-full h-48 md:h-64 rounded-lg border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9183961988515!2d77.60270472531879!3d12.912966237397004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150318728565%3A0x90c3ec8ef1be5630!2sMico%20Layout%2C%20BTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1739989100972!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
  </div>
</div>

      </div>

      
    </footer>
  );
};

export default FooterComponents;
