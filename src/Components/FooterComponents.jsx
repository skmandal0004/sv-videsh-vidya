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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62226.753299987955!2d77.5790211!3d12.896654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1503c3476f73%3A0xe51550942817954f!2sS%20V%20VIDESH%20VIDYA%2C%20Study%20Abroad%20(Australia%2C%20USA%2C%20UK%20%26%20Europe)%2C%20Online%20LIVE-%20IELTS%2C%20TOEFL%2C%20GRE%2C%20Duolingo%2C%20PTE%20%26%20German%20lang!5e0!3m2!1sen!2sin!4v1740039203090!5m2!1sen!2sin"
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
