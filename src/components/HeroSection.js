"use client";

import React, { useState, useEffect, useRef } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Link } from "react-scroll";
import "./HeroSection.css";

function useAnimatedText(text, delimiter = "") {
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
  
  const [isIdle, setIsIdle] = useState(true);
  const idleTimeout = useRef(null);

  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  // const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  // const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);

    setIsIdle(false);
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    idleTimeout.current = setTimeout(() => setIsIdle(true), 3000); 
  }
  
  // NEW: Functions to handle mouse enter and leave events
  // function handleMouseEnter() {
  //   setIsHovered(true);
  // }
  
  // function handleMouseLeave() {
  //   setIsHovered(false);
  // }

  useEffect(() => {
    if (isIdle) {
      const controlsX = animate(mouseX, [150, 300, 150], {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      });
      const controlsY = animate(mouseY, [150, 200, 150], {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      });
      return () => {
        controlsX.stop();
        controlsY.stop();
      };
    }
  }, [isIdle, mouseX, mouseY]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="hero-section-component relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="spotlight"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, #121B22, #052B28, #121B22), ${spotlight}` 
        }}
      />

      <div className="navbar relative z-10">
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
        className="hero-section relative z-10"
        variants={containerVariants}
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h5 variants={itemVariants}>Hi, my name is</motion.h5>
        <motion.h1 variants={itemVariants}>{animatedName}</motion.h1>
        <motion.h2 variants={itemVariants}>
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
  );
}

export default HeroSection;