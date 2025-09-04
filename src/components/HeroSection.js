import React, { useState, useEffect } from 'react';
import { animate, motion } from "framer-motion";
import { Link } from 'react-scroll';
import './HeroSection.css';

function useAnimatedText(text, delimiter = "") { // <-- now animates letter-by-letter
    const [cursor, setCursor] = useState(0);
    const [startingCursor, setStartingCursor] = useState(0);
    const [prevText, setPrevText] = useState(text);

    useEffect(() => {
        if (prevText !== text) {
            setPrevText(text);
            setStartingCursor(text.startsWith(prevText) ? cursor : 0);
        }
    }, [text, prevText, cursor]);

    useEffect(() => {
        const totalLength = text.split(delimiter).length;
        const controls = animate(startingCursor, totalLength, {
            duration: 5, 
            ease: "easeOut",
            onUpdate(latest) {
                setCursor(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [startingCursor, text, delimiter]);

    return text.split(delimiter).slice(0, cursor).join(delimiter);
} 

function HeroSection() {
    const animatedName = useAnimatedText("Caleb Karimi  |  Software Developer", "");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        },
    };

    return (
        <div className="hero-section-component">
            <div className="navbar">
                <h4>CalebKarimi._</h4>
                <div className="navbar-links">
                    <ul className="navbar-links-list">
                        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link to="cta" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </div>

            <motion.div 
                className="hero-section" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h5 variants={itemVariants}>Hi, my name is</motion.h5>

                {/* Animated text */}
                <motion.h1 variants={itemVariants}>{animatedName}</motion.h1>

                {/* Extra delay so h2 waits for h1 */}
                <motion.h2 
                    variants={itemVariants} 
                    transition={{ delay: 2 }} // adjust delay until it feels right
                >
                    I craft robust, scalable and user-friendly for the web that drive innovation and enhance user experiences.
                </motion.h2>

                <motion.h3 variants={itemVariants}>
                    As a passionate web/software developer, I combine a strong foundation
                    in design principles with a deep commitment to delivering functional
                    and intuitive solutions. Every line of code I write is crafted with
                    the same care and attention to detail that goes into designing an
                    architectural masterpiece.
                </motion.h3>

                <motion.h6 variants={itemVariants}>
                    Get in touch:{" "}
                    <a href="mailto:karimicaleb@gmail.com">
                        <span>karimicaleb@gmail.com</span>
                    </a>  
                </motion.h6>
            </motion.div>
        </div>
    )
};

export default HeroSection;