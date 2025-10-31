import React from 'react';
import { motion } from "framer-motion";
import '../styles/About.css'

function About() {

    const techSkills = [
        // "HTML",
        // "CSS",
        "JavaScript",
        "Node.js (Express.js)",
        "React",
        "Next.js",
        "CSS",
        "Github",
        "Python",
        "Django",
        "Flask",
        "RESTful APIs",
        "MySQL",
        "PostgreSQL",
        "Command Line",
        // "VS Code",
        "Docker",
        "Redis",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="about-me">
            <h2>About Me</h2>
            <motion.div 
                className='about-me-content' 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.div className='about-me-part-1' variants={itemVariants}>
                    <div className="caleb-image">
                        <img src="/images/Caleb-K Picture.jpg" alt="Caleb K"/>
                    </div>
                    <div className='about-me-description'>
                        <p>Hello, I’m Caleb Karimi based in Nairobi, Kenya. I am a <span>Web/Software Developer</span> with an <span>Architect’s Mindset</span>. My journey from architecture to software development is more than a career shift - it is a continuation of my passion for creating impactful, well-structured designs. I bring a unique perspective to software development, combining my architectural training with a commitment to building clean, efficient and beautiful digital products.</p>
                        <p>I hold a degree in Architecture, a discipline that taught me how to <span>approach complex problems</span>, <span>think critically</span>, and translate <span>abstract ideas into tangible outcomes</span>. These skills naturally extend into my work as a developer, where I apply the same principles of design, collaboration, spatial awareness, communication and problem-solving to create software solutions that are both functional and <span>user-centric</span>.</p>
                        <p>Development is more than just a job for me - <span>it’s a craft</span>. I am committed to continuously learning and evolving with the ever-changing tech landscape, and I thrive on the challenge of <span>pushing the boundaries</span> of <span>what technology can do</span>. Whether it’s building software that drive business growth or developing applications that simplify processes, I pour my enthusiasm and energy into every project.</p>
                    </div>
                </motion.div>
                <motion.div className="about-me-part-2" variants={itemVariants}>
                    <p>The skills, tools and technologies I use to bring products to life:</p>
                    <motion.div 
                        className="tech-skills" 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }} 
                    >
                        {techSkills.map((skill, index) => (
                            <motion.div key={index} className="skill-card" variants={itemVariants}>
                                <p>{skill}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default About;
