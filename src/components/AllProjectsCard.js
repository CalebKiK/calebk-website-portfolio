import React from 'react';
import './Projects.css';

function AllProjectsCard({ project }) {
    return (
        <div className="all-projects-card">
            <div className="all-project-details-image">
                <img src={project.project_image} alt={project.project_title}/>
            </div>
            <div className="all-project-details-text">
                <h3>{project.project_title}</h3>
                <p>{project.project_description}</p>
                <div className="all-project-languages-used">
                    <p>Languages and tools used:</p>
                    <div className="languages">
                        {project.project_languages.language_1 && <h6>{project.project_languages.language_1}</h6>}
                        {project.project_languages.language_2 && <h6>{project.project_languages.language_2}</h6>}
                        {project.project_languages.language_3 && <h6>{project.project_languages.language_3}</h6>}
                        {project.project_languages.language_4 && <h6>{project.project_languages.language_4}</h6>}
                    </div>
                </div>
                <div className='project-links'>
                    <a href={project.project_link} target="_blank" rel="noopener noreferrer" className='live-demo-link'>Live Demo</a>
                    <a href={project.project_github_link} target="_blank" rel="noopener noreferrer" className='github-repo-link'>Github repo</a>
                </div>
            </div>
        </div>
    )
};

export default AllProjectsCard;