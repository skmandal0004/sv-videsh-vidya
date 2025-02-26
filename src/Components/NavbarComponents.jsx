import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        { name: "VISA Guidance", link: "/visa" },
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
      link: "/training",
      subMenu: [
        { name: "Online Training", link: "https://training.svvideshvidya.com/" },
        { name: "Training Time Table", link: "/timetable" },
        { name: "Spoken English", link: "/spoken-english" },
        { name: "Duolingo", link: "/duolingo" },
        { name: "IELTS (Academic & General)", link: "/ielts" },
        { name: "TOEFL", link: "/toefl" },
        { name: "SAT", link: "/sat" },
        { name: "GRE", link: "/gre" },
        { name: "German Language", link: "/german" },
        { name: "French Language", link: "/french" },
        { name: "PUC - Computer Science ( Offline )", link: "/puc" },
      ],
    },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  let timeoutId = null;

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

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
        </div>

        {/* Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-600">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-[#1A152D] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.link || "#"} className="hover:text-[#1A152D] px-4 py-2 block hover:bg-[#846be6] hover:scale-110 transition-transform ease-in-out duration-300">
                {item.name}
              </Link>

              {/* Dropdown Menu Animation */}
              <AnimatePresence>
                {item.subMenu && openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 top-full bg-[#1A152D] text-white shadow-lg rounded-lg mt-1 min-w-[200px] z-50"
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="block px-4 py-2 hover:bg-[#846be6] hover:scale-105 transition-transform ease-in-out duration-300 whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === index ? null : index)
                  }
                  className="flex justify-between w-full text-left py-2"
                >
                  {item.name}
                  {item.subMenu && (
                    <span>{mobileDropdown === index ? "▲" : "▼"}</span>
                  )}
                </button>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                  {item.subMenu && mobileDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block text-gray-300 hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavbarComponents;
