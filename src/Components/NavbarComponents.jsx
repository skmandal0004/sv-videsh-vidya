import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavbarComponents = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [query, setQuery] = useState(""); // Search input state
  const [filteredResults, setFilteredResults] = useState([]); // Search results

  const handleGalleryClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (location.pathname === "/gallery") {
      // Scroll immediately if already on About page
      document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/about");

      setTimeout(() => {
        const galleryElement = document.getElementById("gallery-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    }
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();
  
    if (location.pathname === "/testimonials") {
      // Scroll immediately if already on About page
      document.getElementById("testimonials-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/about");
  
      setTimeout(() => {
        const galleryElement = document.getElementById("testimonials-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    };
  
  }

  // Menu Items
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "/about",
      subMenu: [
        { name: "Our Mission, Vision and Values", link: "/about/mission" },
        { name: "Our Students Say", link: "/students" },
        { name: "Testimonials", link: "/testimonials", onClick: handleTestimonialsClick, },
        { name: "Gallery", link: "/gallery", onClick: handleGalleryClick, },
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
      link: "/admissions",
      subMenu: [
        { name: "Admissions List", link: "/admission-list" },
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
        { name: "Training Time Table", link: "/training-time-table" },
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

  // Handle Search Input
  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setFilteredResults([]);
      return;
    }

    // Filter menu items and submenus
    const results = [];
    menuItems.forEach((item) => {
      if (item.name.toLowerCase().includes(input.toLowerCase())) {
        results.push({ name: item.name, link: item.link });
      }
      if (item.subMenu) {
        item.subMenu.forEach((subItem) => {
          if (subItem.name.toLowerCase().includes(input.toLowerCase())) {
            results.push({ name: subItem.name, link: subItem.link });
          }
        });
      }
    });

    setFilteredResults(results);
  };

  // Handle Search Selection
  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setFilteredResults([]);
  };

  // Hover Handlers for Desktop Dropdown
  const handleMouseEnter = (index) => setOpenDropdown(index);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
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
        <div className="hidden md:flex flex-grow max-w-sm relative">
          <div className="flex items-center border-b border-gray-400 w-56 ml-4">
            <FaSearch className="text-gray-500 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Search Dropdown Results */}
          {filteredResults.length > 0 && (
            <ul className="absolute top-full left-0 mt-1 w-56 bg-white opacity-80 hover:opacity-100 border border-gray-300 shadow-md rounded-md z-10">
              {filteredResults.map((result, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(result.link)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-50 "
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-2 ml-40">
          <a href="/">
            <img
              src="https://static.wixstatic.com/media/edbce3_7aacc3e198e747b5ab6e7a81308ec95e~mv2.png/v1/fill/w_179,h_86/logo.png"
              alt="SV Videsh Vidya Logo"
              className="w-40 h-auto"
            />
          </a>
          <div className="flex flex-col">
            <h1 className="text-lg font-extrabold bg-gradient-to-r from-[#1A152D] to-[#4e60ff] text-transparent bg-clip-text">
              SV Videsh Vidya
            </h1>
            <p className="text-xs font-semibold text-gray-500">
              Study Abroad Experts
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-[#1A152D] text-white shadow-lg">
          <div className="flex flex-col py-4 px-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === index ? null : index)
                  }
                  className="flex justify-between w-full text-left py-2 font-semibold text-white hover:text-yellow-300"
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
                          className="block text-gray-300 hover:text-yellow-300 transition"
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

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.link || "#"} className="hover:text-[#1A152D] px-4 py-2 block hover:bg-yellow-300 font-semibold transition">
                {item.name}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.subMenu && openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-full bg-[#1A152D] text-white shadow-lg rounded-lg mt-1 min-w-[200px] z-50"
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                      key={subIndex}
                      to={subItem.link}
                      onClick={subItem.onClick}
                        className="block px-4 py-2 hover:bg-yellow-300 hover:text-[#1A152D] hover:font-semibold hover:scale-105 transition-transform ease-in-out duration-300 whitespace-nowrap"
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
    </header>
  );
};

export default NavbarComponents;
