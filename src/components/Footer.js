import React from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import './Footer.css'

function Footer() {

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
        <motion.div 
            className="footer" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
        >
            <motion.div className="footer-logo" variants={itemVariants}>
                <h2>Caleb Karimi</h2>
                <h6>© 2025. Built and Desiged by Caleb Karimi</h6>
            </motion.div>
            <motion.div className="footer-clickables" variants={itemVariants}>
                <motion.div className="footer-links" variants={itemVariants}>
                    <h3>Links</h3>
                    <ul className="footer-links-list">
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contacts" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </motion.div>
                <motion.div className="footer-socials" variants={itemVariants}>
                    <h3>Get in Touch</h3>
                    <motion.div className="socials" variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/caleb-karimi" target="_blank" rel="noopener noreferrer">
                            <img className="linkedin-link" src="images/linkedin.png" alt="Caleb-LinkedIn"/>
                        </a>

                        <a href="https://github.com/CalebKiK" target="_blank" rel="noopener noreferrer">
                            <img className="github-link" src="images/github.png" alt="Caleb-Github"/>
                        </a>

                        <a href="mailto:karimicaleb@gmail.com">
                            <img className="email-link" src="images/email.png" alt="Caleb-Email"/>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Footer;