import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavbarComponents from "./Components/NavbarComponents";
import AboutComponents from "./Routes/About.jsx"
import Home from "./Routes/Home.jsx"
import ServiceComponents from "./Routes/Services.jsx";
import FooterComponents from './Components/FooterComponents';
import Virtual from './Routes/Virtual.jsx';
import Scholarships from './Routes/Scholarships.jsx';
import Visa from './Routes/Visa.jsx';
import Contact from './Routes/Contact';
import FAQ from './Routes/FAQ';
import AdminPanel from './Routes/AdminSide.jsx'
import Trainings from './Routes/Trainings';
import Online from './Routes/Online';
import Table from './Routes/Table';
import ShortlistComponents from './Components/Services/ShortlistComponents';
import AdmissionComponents from './Components/Services/AdmissionComponents';
import LandingComponents from './Components/Services/LandingComponents';
import SpokenComponents from './Components/Trainings/SpokenComponents';
import DuolingoComponents from './Components/Trainings/DuolingoComponents';
import ExamComponents from './Components/Trainings/ExamComponents';
import ToeflComponents from './Components/Trainings/ToeflComponents';
import SatComponents from './Components/Trainings/SatComponents';
import GreComponents from './Components/Trainings/GreComponents';
import GermanComponents from './Components/Trainings/GermanComponents';
import FrenchComponents from './Components/Trainings/FrenchComponents';

function App() {
  return (
    <Router>
      <NavbarComponents />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/service" element={<ServiceComponents/>}/>
        <Route path="/virtual-coaching" element={<Virtual/>}/>
        <Route path="/counselling" element={<ShortlistComponents/>}/>
        <Route path="/applications" element={<AdmissionComponents/>}/>
        <Route path="/internships" element={<AdmissionComponents/>}/>
        <Route path="/scholarships" element={<Scholarships/>}/>
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/post-landing" element={<LandingComponents/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>
        <Route path="/training" element={<Trainings/>}/>
        <Route path="/online" element={<Online/>}/>
        <Route path="/timetable" element={<Table/>}/>
        <Route path="/spoken-english" element={<SpokenComponents/>}/>
        <Route path="/duolingo" element={<DuolingoComponents/>}/>
        <Route path="/ielts" element={<ExamComponents/>}/>
        <Route path="/toefl" element={<ToeflComponents/>}/>
        <Route path="/sat" element={<SatComponents/>}/>
        <Route path="/gre" element={<GreComponents/>}/>
        <Route path="/german" element={<GermanComponents/>}/>
        <Route path="/french" element={<FrenchComponents/>}/>
        <Route path="/puc" element={<Trainings/>}/>
        

      </Routes>
      <FooterComponents/>
    </Router>
  );
}

export default App;
