import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section-component">
            <div className="navbar">
                <h4>C</h4>
                <div className="navbar-links">
                    <ul className="navbar-links-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="hero-section">
                <h5>Hi, my name is</h5>
                <h1>Caleb Karimi     |       Software Developer</h1>
                <h2>I craft robust, scalable and user-friendly for the web that drive innovation and enhance user experiences.</h2>
                <h3>As a passionate web/software developer, I combine a strong foundation in design principles with a deep commitment to delivering functional and intuitive solutions. Every line of code I write is crafted with the same care and attention to detail that goes into designing an architectural masterpiece.</h3>
                <h6>Get in touch: karimicaleb@gmail.com</h6>
            </div>
        </div>
    )
};

export default HeroSection;