import React from 'react';
import './Projects.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-details-text">
                <h3>{project.project_title}</h3>
                <p>{project.project_description}</p>
                <p>{project.project_link}</p>
                <div className="project-languages-used">
                    <p>Languages and tools used:</p>
                    <div className="languages">
                        <h6>{project.project_languages.language_1}</h6>
                        <h6>{project.project_languages.language_2}</h6>
                        <h6>{project.project_languages.language_3}</h6>
                        <h6>{project.project_languages.language_4}</h6>
                    </div>
                </div>
            </div>
            <div className="project-details-image">
                <img src={project.project_description} alt={project.project_title}/>
            </div>
        </div>
    )
};

export default ProjectCard;