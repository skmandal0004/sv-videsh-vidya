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

function App() {
  return (
    <Router>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/service" element={<ServiceComponents/>}/>
        <Route path="/virtual-coaching" element={<Virtual/>}/>
        <Route path="/counselling" element={<Counselling/>}/>
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/internships" element={<Applications/>}/>
        <Route path="/scholarships" element={<Scholarships/>}/>
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/post-landing" element={<Post/>}/>

      </Routes>
      <FooterComponents/>
    </Router>
  );
}

export default App;
