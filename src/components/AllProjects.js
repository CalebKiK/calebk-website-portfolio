import React, { useEffect, useState } from 'react';
import AllProjectsCard from './AllProjectsCard';
import './Projects.css';

function AllProjects() {

    const [ allProjects, setAllProjects ] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/projects")
    .then(response => response.json())
    .then(data => setAllProjects(data))

  }, []);

    if (!Array.isArray(allProjects)) {
        return <div>Loading...</div>;
    };

    return (
        <div className="all-projects">
            <h2>Projects</h2>
            <p>A full collection of projects I've worked on.</p>
            <div className="all-projects-component">
                <div className="all-projects-component-card">
                    {allProjects.length > 0 ? (
                        allProjects.map((project) => (
                            <AllProjectsCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p>No projects available.</p>
                    )} 
                </div>
            </div>
        </div>
    )
};

export default AllProjects;