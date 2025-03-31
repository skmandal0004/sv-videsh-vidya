import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceComponents = () => {
  const navigate = useNavigate();

  const handleInternshipClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/internships") {
      // Scroll immediately if already on About page
      document.getElementById("internship-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/applications");

      setTimeout(() => {
        const galleryElement = document.getElementById("internship-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    };

  }

  return (
    <div className="bg-indigo-500 py-10">
      <h1 className="text-center text-5xl font-bold mb-8 tracking-wide">Services</h1>
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
          <Link to="/internships" onClick={handleInternshipClick} className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Internships (CPT)
          </Link>
          <Link to="/scholarships" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Scholarships and Loans
          </Link>
          <Link to="/visa" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            VISA Guidance
          </Link>
          <Link to="/post-landing" className="bg-indigo-500 text-white px-6 py-3 w-10/12 mx-auto block text-lg rounded-md text-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Post Landing Services
          </Link>
        </div>

        {/* Right Side - Image (Increased width) */}
        <div className="w-full lg:w-7/12">
          <img
            src="https://images.pexels.com/photos/7551637/pexels-photo-7551637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Students in classroom"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceComponents;
