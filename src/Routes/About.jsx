import React from "react";
import MissionComponents from "../Components/About/MissionComponents"; // Fixed the import path
import AboutComponents from "../Components/About/AboutComponents";
import PrideComponents from "../Components/About/PrideComponents";
import ParentsComponents from "../Components/About/ParentsComponents";
import GalleryComponents from "../Components/About/GalleryComponents";

const About = () => {
  return (
    <div className="bg-indigo-500">
      <AboutComponents />
      <MissionComponents />
      <PrideComponents />
      <ParentsComponents />
      <GalleryComponents />
    </div>
  );
};

export default About;
