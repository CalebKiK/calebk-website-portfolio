import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <h2>Caleb Karimi</h2>
                <h6>© 2025. Built and Desiged by Caleb Karimi</h6>
            </div>
            <div className="footer-clickables">
                <div className="footer-links">
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
                </div>
                <div className="footer-socials">
                    <h3>Get in Touch</h3>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/caleb-karimi" target="_blank" rel="noopener noreferrer">
                            <img className="linkedin-link" src="images/linkedin.png" alt="Caleb-LinkedIn"/>
                        </a>

                        <a href="https://github.com/CalebKiK" target="_blank" rel="noopener noreferrer">
                            <img className="github-link" src="images/github.png" alt="Caleb-Github"/>
                        </a>

                        <a href="mailto:karimicaleb@gmail.com">
                            <img className="email-link" src="images/email.png" alt="Caleb-Email"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;