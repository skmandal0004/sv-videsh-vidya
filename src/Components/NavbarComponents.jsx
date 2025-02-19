import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaUser } from "react-icons/fa";

const NavbarComponents = () => {
  const menuItems = [
    { name: "Home", link: "#" },
    { 
      name: "About Us", 
      subMenu: ["Our Mission, Vision and Values", "Our Students Say", "Testimonials", "Gallery"] 
    },
    { 
      name: "Services", 
      subMenu: ["Virtual Coaching", "Counselling and Shortlisting", "Applications and Admissions", "Internships ( CPT )", "Scholarships and loans", "VISA Guidance", "Post Landing Services"] 
    },
    { 
      name: "Admissions", 
      subMenu: ["Admissions List", "Engineering", "Medical", "Medicine PG ( UK , USA)", "Management", "Arts, Sciences, Humanities and Other"] 
    },
    { 
      name: "Trainings", 
      subMenu: ["Online Training", "Training Time Table", "Spoken English", "Duolingo", "IELTS ( Academic and General )", "TOEFL", "SAT", "GRE", "German Language", "French Language", "PUC - Computer Science ( Offline )"] 
    },
    { name: "Contact", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Forum", link: "#" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
        
        {/* Search Bar (Left) */}
        <div className="flex-grow max-w-lg">
          <div className="flex items-center border-b border-gray-400 w-full">
            <FaSearch className="text-gray-500 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-32 py-2 px-2 outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Logo (Center) */}
        <div className="flex items-center space-x-3">
          <a href="https://yourwebsite.com">
            <img 
              src="https://static.wixstatic.com/media/edbce3_7aacc3e198e747b5ab6e7a81308ec95e~mv2.png/v1/fill/w_179,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-1.png" 
              alt="SV Videsh Vidya Logo" 
              className="w-44 h-24 object-contain"
            />
          </a>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">SV Videsh Vidya</h1>
            <p className="text-sm text-gray-500">Study Abroad Consultants</p>
          </div>
        </div>

        {/* Login & Social Icons (Right) */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FaUser className="text-lg" />
            <span className="hidden sm:inline">Log In</span>
          </button>

          <div className="flex space-x-3">
            <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-gray-700 hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-gray-700 hover:text-pink-600"><FaInstagram /></a>
            <a href="#" className="text-gray-700 hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Navigation Links with Dropdowns */}
      <nav className="bg-[#1A152D] text-white relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a 
                href={item.link || "#"} 
                className="hover:text-blue-400 transition duration-200 px-4 inline-block"
              >
                {item.name}
              </a>

              {/* Dropdown Menu */}
              {item.subMenu && openDropdown === index && (
                <div className="absolute left-0 top-full bg-white text-black shadow-lg rounded-lg mt-1 min-w-[200px] z-50">
                  {item.subMenu.map((subItem, subIndex) => (
                    <a 
                      key={subIndex} 
                      href="#" 
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 whitespace-nowrap"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponents;
