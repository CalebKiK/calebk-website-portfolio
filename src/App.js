import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
