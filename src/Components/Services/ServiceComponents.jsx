import React from "react";
import { Link } from "react-router-dom";

const ServiceComponents = () => {
  return (
    <div className="bg-indigo-500 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg flex flex-col lg:flex-row shadow-lg">
        {/* Left Side - Buttons */}
        <div className="w-full lg:w-5/12 p-10 flex flex-col gap-7">
          <Link to="/virtual-coaching" className="px-6 py-3 text-white text-center bg-indigo-500 w-10/12 mx-auto block text-lg rounded-md hover:bg-white hover:text-black border-2 hover:border-black">
            Virtual Coaching
          </Link>
          <Link to="/counselling" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto  text-center block text-lg rounded-md hover:bg-white hover:text-black border-2 hover:border-black">
            Counselling and Shortlisting
          </Link>
          <Link to="/applications" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto text-center block text-lg rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Applications and Admissions
          </Link>
          <Link to="/internships" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Internships (CPT)
          </Link>
          <Link to="/scholarships" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Scholarships and Loans
          </Link>
          <Link to="/visa-guidance" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            VISA Guidance
          </Link>
          <Link to="/post-landing" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Post Landing Services
          </Link>
        </div>

        {/* Right Side - Image (Increased width) */}
        <div className="w-full lg:w-7/12">
          <img
            src="https://static.wixstatic.com/media/2e2a49_f6a544efc1334927b6bdc2ca7ab5b8e1~mv2.jpg/v1/fill/w_641,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_f6a544efc1334927b6bdc2ca7ab5b8e1~mv2.jpg"
            alt="Students in classroom"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceComponents;
