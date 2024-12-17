import React from 'react';
import { Link } from 'react-scroll';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section-component">
            <div className="navbar">
                <h4>CalebKarimi._</h4>
                <div className="navbar-links">
                    <ul className="navbar-links-list">
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="cta" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero-section">
                <h5>Hi, my name is</h5>
                <h1>Caleb Karimi     |       Software Developer</h1>
                <h2>I craft robust, scalable and user-friendly for the web that drive innovation and enhance user experiences.</h2>
                <h3>As a passionate web/software developer, I combine a strong foundation in design principles with a deep commitment to delivering functional and intuitive solutions. Every line of code I write is crafted with the same care and attention to detail that goes into designing an architectural masterpiece.</h3>
                <h6>Get in touch: 
                    <a href="mailto:karimicaleb@gmail.com"><span>karimicaleb@gmail.com</span></a>  
                </h6>
            </div>
        </div>
    )
};

export default HeroSection;