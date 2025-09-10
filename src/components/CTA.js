import React from 'react';
import { motion } from "framer-motion";
import '../styles/CTA.css'

function CTA() {

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
        <div className="cta">
            <h2>Let’s Chat!</h2>
            <motion.div 
                className="cta-content" 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.div className="cta-text" variants={itemVariants}>
                    <motion.p variants={itemVariants}>I’m excited to collaborate on projects that bring great ideas to life. If you’re looking for a developer who cares about both the big picture and the smallest details, let’s connect and create something extraordinary.</motion.p>
                    <motion.p variants={itemVariants}>Let's Build Something Amazing Together.</motion.p>
                    <motion.h4 variants={itemVariants}>Email: <span>karimicaleb@gmail.com</span></motion.h4>
                </motion.div>
                <motion.div className="cta-image" variants={itemVariants}>
                    <img src="images/communicate.png" alt="Let's chat vector"/>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default CTA;