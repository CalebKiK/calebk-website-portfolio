import React from 'react';
import { useNavigate } from "react-router-dom"; 
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import '../styles/Projects.css';
import projectsData from '../data/projectsData.json';

function Projects() {

    const navigate = useNavigate();

    const handleAllProjects = () => {
        navigate('/all-projects');
    };

    const limitedProjects = projectsData.slice(0, 5);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <div className="projects">
            <h2>Projects</h2>
            <p>A collection of projects I've worked on.</p>
            <div className="projects-component">
                <motion.div 
                    className="project-component-card" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {limitedProjects.length > 0 ? (
                        limitedProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p>No projects available.</p>
                    )} 
                </motion.div>
            </div>
            <h4 onClick={handleAllProjects}>View all projects -&gt;</h4>
        </div>
    )
};

export default Projects;