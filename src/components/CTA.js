import React from 'react';
import './CTA.css'

function CTA() {
    return (
        <div className="cta">
            <h2>Let’s Chat!</h2>
            <div className="cta-content">
                <div className="cta-text">
                    <p>I’m excited to collaborate on projects that bring great ideas to life. If you’re looking for a developer who cares about both the big picture and the smallest details, let’s connect and create something extraordinary.</p>
                    <p>Let's Build Something Amazing Together.</p>
                    <h4>Email: <span>karimicaleb@gmail.com</span></h4>
                </div>
                <div className="cta-image">
                    <img src="images/communicate.png" alt="Let's chat vector"/>
                </div>
            </div>
        </div>
    )
};

export default CTA;