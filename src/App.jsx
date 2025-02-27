import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavbarComponents from "./Components/NavbarComponents";
import AboutComponents from "./Routes/About.jsx"
import Home from "./Routes/Home.jsx"
import ServiceComponents from "./Routes/Services.jsx";
import FooterComponents from './Components/FooterComponents';
import Virtual from './Routes/Virtual.jsx';
import Counselling from './Routes/Counselling.jsx';
import Applications from './Routes/Applications.jsx';
import Scholarships from './Routes/Scholarships.jsx';
import Visa from './Routes/Visa.jsx';
import Post from './Routes/Post';
import Contact from './Routes/Contact';
import FAQ from './Routes/FAQ';
import AdminPanel from './Routes/AdminSide.jsx'
import Trainings from './Routes/Trainings';
import Online from './Routes/Online';
import Table from './Routes/Table';
import Spoken from './Routes/Spoken';
import Duolingo from './Routes/Duolingo';
import IELTS from './Routes/IELTS';
import TOEFL from './Routes/TOEFL';
import SAT from './Routes/SAT';
import GRE from './Routes/GRE';
import German from './Routes/German';
import French from './Routes/French';
import About from './Routes/About.jsx';
import Students from './Routes/Students.jsx';

function App() {
  return (
    <Router>
      <NavbarComponents />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/service" element={<ServiceComponents/>}/>
        <Route path="/virtual-coaching" element={<Virtual/>}/>
        <Route path="/counselling" element={<Counselling/>}/>
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/internships" element={<Applications/>}/>
        <Route path="/scholarships" element={<Scholarships/>}/>
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/post-landing" element={<Post/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>
        <Route path="/training" element={<Trainings/>}/>
        <Route path="/online" element={<Online/>}/>
        <Route path="/timetable" element={<Table/>}/>
        <Route path="/spoken-english" element={<Spoken/>}/>
        <Route path="/duolingo" element={<Duolingo/>}/>
        <Route path="/ielts" element={<IELTS/>}/>
        <Route path="/toefl" element={<TOEFL/>}/>
        <Route path="/sat" element={<SAT/>}/>
        <Route path="/gre" element={<GRE/>}/>
        <Route path="/german" element={<German/>}/>
        <Route path="/french" element={<French/>}/>
        <Route path="/puc" element={<Trainings/>}/>
        <Route path="/mission" element={<About/>}/>
        <Route path="/students" element={<Students/>}/>

      </Routes>
      <FooterComponents/>
    </Router>
  );
}

export default App;
