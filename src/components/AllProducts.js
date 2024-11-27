import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function AllProjects({ allProjects }) {
    return (
        <div className="all-projects">
            <h2>Projects</h2>
            <div className="all-projects-component">
                <div className="all-project-component-card">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AllProjects;