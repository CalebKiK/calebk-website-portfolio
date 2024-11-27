import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

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
      <About />
      <Projects allProjects={allProjects}/>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
