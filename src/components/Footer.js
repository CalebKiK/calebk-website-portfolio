import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <h2>Caleb Karimi</h2>
                <h6>© 2024. Built and Desiged by Caleb Karimi</h6>
            </div>
            <div className="footer-links">
                <h3>Links</h3>
                <ul className="footer-links-list">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-socials">
                <h3>Get in Touch</h3>
                <div className="socials">
                    <img src="" alt="Caleb-LinkedIn"/>
                    <img src="" alt="Caleb-Github"/>
                    <img src="" alt="Caleb-Email"/>
                </div>
            </div>
        </div>
    )
};

export default Footer;