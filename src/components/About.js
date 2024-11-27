import React from 'react';
import './About.css'

function About() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>Hello, I’m Caleb Karimi based in Nairobi, Kenya. I am a <span>Web/Software Developer</span> with an <span>Architect’s Mindset</span>. My journey from architecture to web development is more than a career shift - it is a continuation of my passion for creating impactful, well-structured designs. I bring a unique perspective to software development, combining my architectural training with a commitment to building clean, efficient and beautiful digital products.</p>
            <p>I hold a degree in Architecture, a discipline that taught me how to approach complex problems, think critically, and translate abstract ideas into tangible outcomes. These skills naturally extend into my work as a developer, where I apply the same principles of design, collaboration, spatial awareness, communication and problem-solving to create software solutions that are both functional and user-centric.</p>
            <p>Development is more than just a job for me - it’s a craft. I am committed to continuously learning and evolving with the ever-changing tech landscape, and I thrive on the challenge of pushing the boundaries of what technology can do. Whether it’s building websites that drive business growth or developing applications that simplify processes, I pour my enthusiasm and energy into every project.</p>
            <p>The skills, tools and technologies I use to bring products to life:</p>
            <div className="tech-skills">
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>HTML</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>CSS</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>React</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>Github</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>Python</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>Flask</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>RESTful APIs</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>Command Line</p>
                </div>
                <div className="skill-card">
                    <img src="" alt=""/>
                    <p>VS Code</p>
                </div>
            </div>
        </div>
    )
};

export default About;