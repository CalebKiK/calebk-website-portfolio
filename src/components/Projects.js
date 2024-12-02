import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects({ allProjects }) {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-component">
                <div className="project-component-card">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
            <h4>To more projects -&gt;</h4>
        </div>
    )
};

export default Projects;