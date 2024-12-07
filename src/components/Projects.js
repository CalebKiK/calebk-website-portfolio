import React from 'react';
import { useNavigate } from "react-router-dom"; 
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects({ allProjects }) {

    const navigate = useNavigate();

    const handleAllProjects = () => {
        navigate('/all-projects');
    };

    const limitedProjects = allProjects.slice(0, 5)

    return (
        <div className="projects">
            <h2>Projects</h2>
            <p>A collection of projects I've worked on.</p>
            <div className="projects-component">
                <div className="project-component-card">
                    {limitedProjects.length > 0 ? (
                        limitedProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p>No projects available.</p>
                    )} 
                </div>
            </div>
            <h4 onClick={handleAllProjects}>To more projects -&gt;</h4>
        </div>
    )
};

export default Projects;