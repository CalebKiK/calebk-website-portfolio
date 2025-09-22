import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import '../styles/Projects.css';
import projectsData from '../data/projectsData.json';

function AllProjects() {

    if (!projectsData || !Array.isArray(projectsData)) {
        return <div>Loading...</div>;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
        },
    };

    return (
        <div className="projects">
            <h2>Projects</h2>
            <p>A full collection of projects I've worked on.</p>
            <div className="projects-component">
                <motion.div 
                    className="project-component-card" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {projectsData.length > 0 ? (
                        projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p>No projects available.</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default AllProjects;
