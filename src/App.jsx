import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavbarComponents from "./Components/NavbarComponents";
import AboutComponents from "./Routes/About.jsx"
import Home from "./Routes/Home.jsx"
import ServiceComponents from "./Routes/Services.jsx";
import FooterComponents from './Components/FooterComponents';
import Virtual from './Routes/Virtual.jsx';
import Counselling from './Routes/Counselling.jsx';

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

      </Routes>
      <FooterComponents/>
    </Router>
  );
}

export default App;
