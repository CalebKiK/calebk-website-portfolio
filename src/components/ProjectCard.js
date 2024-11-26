import React from 'react';
import './Projects.css';

function ProjectCard() {
    return (
        <div className="project-card">
            <div className="project-details-text">
                <h3>Project Title</h3>
                <p>Project description</p>
                <p>Project link</p>
                <div className="project-languages-used">
                    <p>Languages and tools used:</p>
                    <div className="languages">
                        <h6>React</h6>
                        <h6>Flask</h6>
                        <h6>Python</h6>
                        <h6>PostgreSQL</h6>
                    </div>
                </div>
            </div>
            <div className="project-details-image">
                <img src="" alt=""/>
            </div>
        </div>
    )
};

export default ProjectCard;