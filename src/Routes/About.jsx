import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MissionComponents from "../Components/About/MissionComponents"; // Fixed the import path
import AboutComponents from "../Components/About/AboutComponents";
import PrideComponents from "../Components/About/PrideComponents";
import ParentsComponents from "../Components/About/ParentsComponents";
import GalleryComponents from "../Components/About/GalleryComponents";

const About = () => {

  // const galleryRef = useRef(null); // Reference for the Gallery section
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#gallery-section") {
      setTimeout(() => {
        document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
    if (location.hash === "#testimonials-section") {
      setTimeout(() => {
        document.getElementById("testimonials-section")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return (
    <div className="bg-indigo-500">
      <AboutComponents />
      <MissionComponents />
      <PrideComponents />
      <div id="testimonials-section">
      <ParentsComponents />
      </div>
      <div id="gallery-section">  {/* Add this wrapper */}
        <GalleryComponents />
      </div>
    </div>
  );
};

export default About;
