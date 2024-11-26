import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-component">
                <div className="project-component-card">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
};

export default Projects;