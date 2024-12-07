import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';
import AllProjects from './components/AllProjects';

function App() {

  const [ allProjects, setAllProjects ] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/projects")
    .then(response => response.json())
    .then(data => setAllProjects(data))

  }, []);

  return (
    <div className="App">
      <HeroSection />
      
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects allProjects={allProjects}/>
      </div>
      <Routes>
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
