import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavbarComponents from "./Components/NavbarComponents";
import AboutComponents from "./Routes/About.jsx"
import Home from "./Routes/Home.jsx"
import FooterComponents from './Components/FooterComponents';

function App() {
  return (
    <Router>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutComponents />} />
        
      </Routes>
      <FooterComponents/>
    </Router>
  );
}

export default App;
