import React from "react";
import HeroComponents from "../Components/Home/HeroComponents";
import WhyComponents from "../Components/Home/WhyComponents";
import ReasonComponents from "../Components/Home/ReasonComponents";
import StudyComponents from "../Components/Home/StudyComponents";
import TrainingComponents from "../Components/Home/TrainingComponents";
import YoutubeComponents from "../Components/Home/YoutubeComponents";
import RatingComponents from "../Components/Home/RatingComponents";

const Home = () => {
  return (
    <div>
      <HeroComponents />
      <WhyComponents />
      <ReasonComponents />
      <StudyComponents />
      <TrainingComponents />
      <YoutubeComponents />
      <RatingComponents />
    </div>
  );
};

export default Home;
