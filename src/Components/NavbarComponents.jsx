import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const NavbarComponents = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "/about",
      subMenu: [
        { name: "Our Mission, Vision and Values", link: "/about/mission" },
        { name: "Our Students Say", link: "/about/students" },
        { name: "Testimonials", link: "/about/testimonials" },
        { name: "Gallery", link: "/about/gallery" },
      ],
    },
    {
      name: "Services",
      link: "/service",
      subMenu: [
        { name: "Virtual Coaching", link: "/virtual-coaching" },
        { name: "Counselling and Shortlisting", link: "/counselling" },
        { name: "Applications and Admissions", link: "/applications" },
        { name: "Internships (CPT)", link: "/internships" },
        { name: "Scholarships and Loans", link: "/scholarships" },
        { name: "VISA Guidance", link: "/visa-guidance" },
        { name: "Post Landing Services", link: "/post-landing" },
      ],
    },
    {
      name: "Admissions",
      subMenu: [
        { name: "Admissions List", link: "/admissions/list" },
        { name: "Engineering", link: "/admissions/engineering" },
        { name: "Medical", link: "/admissions/medical" },
        { name: "Medicine PG (UK, USA)", link: "/admissions/medicine-pg" },
        { name: "Management", link: "/admissions/management" },
        { name: "Arts, Sciences, Humanities", link: "/admissions/arts-sciences" },
      ],
    },
    {
      name: "Trainings",
      subMenu: [
        { name: "Online Training", link: "/trainings/online" },
        { name: "Training Time Table", link: "/trainings/timetable" },
        { name: "Spoken English", link: "/trainings/spoken-english" },
        { name: "Duolingo", link: "/trainings/duolingo" },
        { name: "IELTS (Academic & General)", link: "/trainings/ielts" },
        { name: "TOEFL", link: "/trainings/toefl" },
        { name: "SAT", link: "/trainings/sat" },
        { name: "GRE", link: "/trainings/gre" },
        { name: "German Language", link: "/trainings/german" },
        { name: "French Language", link: "/trainings/french" },
      ],
    },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
    { name: "Forum", link: "/forum" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 relative">
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-lg">
          <div className="flex items-center border-b border-gray-400 w-60">
            <FaSearch className="text-gray-500 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/">
            <img
              src="https://static.wixstatic.com/media/edbce3_7aacc3e198e747b5ab6e7a81308ec95e~mv2.png/v1/fill/w_179,h_86/logo.png"
              alt="SV Videsh Vidya Logo"
              className="w-36 h-auto"
            />
          </a>
          <div>
            <h1 className="text-lg font-bold text-gray-900">SV Videsh Vidya</h1>
            <p className="text-sm text-gray-500">Study Abroad Experts</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="text-gray-700 hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="text-gray-700 hover:text-red-600"><FaYoutube /></a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-[#1A152D] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to={item.link || "#"} className="hover:text-blue-400 px-4 py-2 block">
                {item.name}
              </Link>

              {/* Dropdown Menu */}
              {item.subMenu && openDropdown === index && (
                <div className="absolute left-0 top-full bg-white text-black shadow-lg rounded-lg mt-1 min-w-[200px] z-50">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 whitespace-nowrap"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#1A152D] text-white">
          <div className="flex flex-col py-4 px-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <Link to={item.link || "#"} className="hover:text-blue-400 block py-2">
                  {item.name}
                </Link>
                {item.subMenu && (
                  <div className="pl-4 space-y-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.link} className="block text-gray-300 hover:text-white">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavbarComponents;
