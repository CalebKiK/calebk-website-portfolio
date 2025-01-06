import React from 'react';
import './Projects.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-details-image">
                <img src={project.project_image} alt={project.project_title}/>
            </div>
            <div className="project-details-text">
                <h3>{project.project_title}</h3>
                <p className="project-description">{project.project_description}</p>
                <div className="project-languages-used">
                    <p>Technologies and tools used:</p>
                    <div className="languages">
                        {project.project_languages.language_1 && <h6>{project.project_languages.language_1}</h6>}
                        {project.project_languages.language_2 && <h6>{project.project_languages.language_2}</h6>}
                        {project.project_languages.language_3 && <h6>{project.project_languages.language_3}</h6>}
                        {project.project_languages.language_4 && <h6>{project.project_languages.language_4}</h6>}
                    </div>
                </div>
                <div className='project-links'>
                    {project.project_link && (
                        <a href={project.project_link} target="_blank" rel="noopener noreferrer" className='live-demo-link'>Live Demo</a>
                    )}
                    {project.project_github_frontend_link && (
                        <a href={project.project_github_frontend_link} target="_blank" rel="noopener noreferrer" className='github-frontend'>Github Frontend</a>
                    )}
                    {project.project_github_backend_link && (
                        <a href={project.project_github_backend_link} target="_blank" rel="noopener noreferrer" className='github-backend'>Github Backend</a>
                    )}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;