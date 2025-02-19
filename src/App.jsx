import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponents from "./Components/NavbarComponents";
import HeroComponents from "./Components/Home/HeroComponents";
import SignComponents from "./Components/Home/SignComponents";
import WhyComponents from "./Components/Home/WhyComponents";
import ReasonComponents from "./Components/Home/ReasonComponents";
import StudyComponents from "./Components/Home/StudyComponents";
import TrainingComponents from "./Components/Home/TrainingComponents";
import YoutubeComponents from "./Components/Home/YoutubeComponents";
import RatingComponents from "./Components/Home/RatingComponents";
import AboutComponents from "./Components/About/AboutComponents";

// Home Page
const Home = () => (
  <>
    <HeroComponents />
    <WhyComponents />
    <ReasonComponents />
    <StudyComponents />
    <TrainingComponents />
    <YoutubeComponents />
    <RatingComponents />
  </>
);

function App() {
  return (
    <Router>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
