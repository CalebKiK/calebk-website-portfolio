import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect (() => {
    const fetchedProjects = [
      {
        "id": 1,
        "project_title": "Electrohub",
        "project_description": "This is a full-stack e-commerce website specifically to sell electronics to customers. The platform allows customers to browse a wide range of electronics products, add them to their shopping cart, and make secure purchases. The website has an admin panel that empowers administrators to manage the products by adding, updating and deleting product listings and their details.",
        "project_image": "images/electrohub-landing-page.JPG",
        "project_link": "https://electrohubshop.netlify.app/",
        "project_github_frontend_link": "https://github.com/CalebKiK/electrohub-frontend",
        "project_github_backend_link": "https://github.com/CalebKiK/electrohub_backend",
        "project_languages": {
            "language_1": "ReactJS",
            "language_2": "Python(Flask)",
            "language_3": "PostgreSQL",
            "language_4": "RESTful APIs"
        }
      },
      {
        "id": 2,
        "project_title": "Shopsphere",
        "project_description": "This is an all-in-one full-stack e-commerce website designed to provide a seamless shopping experience for both customers and business owners. This platform allows users to browse and purchase products from various categories and manage their cart.",
        "project_image": "images/shopsphere-landing-page.JPG",
        "project_link": "https://shopsphereshop.netlify.app/",
        "project_github_frontend_link": "https://github.com/CalebKiK/shopsphere-frontend",
        "project_github_backend_link": "https://github.com/CalebKiK/shopsphere-backend",
        "project_languages": {
            "language_1": "ReactJS",
            "language_2": "Python(Flask)",
            "language_3": "PostgreSQL",
            "language_4": "RESTful APIs"
        }
      },
      {
        "id": 3,
        "project_title": "PlanIt Task Manager",
        "project_description": "This is a user-friendly frontend website designed to help individuals efficiently manage their daily tasks, projects, and responsibilities. With a clean and simple interface, users can easily create, organize, and track their tasks, set deadlines, and prioritize their work. The website aims to improve productivity and organization, offering features that allow users to plan their day and visualize progress.",
        "project_image": "images/planit-landing-page.JPG",
        "project_link": "https://planittaskmanager.netlify.app/",
        "project_github_frontend_link": "https://github.com/CalebKiK/group-3-planit-task-manager",
        "project_languages": {
            "language_1": "HTML",
            "language_2": "CSS",
            "language_3": "JavaScript",
            "language_4": "JSON server(db.json)"
        }
      },
      {
        "id": 4,
        "project_title": "MuseMatch",
        "project_description": "This is a frontend networking website designed to foster collaboration between architects, interior designers and potential customers. The platform offers a space for creative professionals within th design community to network, collaborate and grow their businesses while allowing customers to find the right professionals for their projects.",
        "project_image": "images/musematch-landing-page.JPG",
        "project_link": "https://musematch.netlify.app/",
        "project_github_frontend_link": "https://github.com/CalebKiK/musematch-networking-project",
        "project_languages": {
            "language_1": "HTML",
            "language_2": "CSS",
            "language_3": "JavaScript",
            "language_4": "JSON server(db.json)"
        }
      },
      {
        "id": 5,
        "project_title": "Quizzical",
        "project_description": "This is an interactive frontend website that provides users with a vast collection of general knowledge questions on a variety of topics such as history, science, geography, literature and current events. This helps make learning more accessible and engaging.",
        "project_image": "images/quizzical-landing-page.JPG",
        "project_link": "https://quizzicalknowledge.netlify.app/",
        "project_github_frontend_link": "https://github.com/CalebKiK/Quizzical-general-knowledge-website",
        "project_languages": {
            "language_1": "HTML",
            "language_2": "CSS",
            "language_3": "JavaScript",
            "language_4": "JSON server(db.json)"
        }
      },
      {
        "id": 6,
        "project_title": "BotBattlr",
        "project_description": "This is a React web application where users can browse a list of robots, view their details and build their own bot army. Users can enlist bots to their army, remove them or discharge them permanantly.",
        "project_image": "images/botbattlr-landing-page.JPG",
        "project_link": "",
        "project_github_frontend_link": "https://github.com/CalebKiK/phase2-wk2-code-challenge",
        "project_languages": {
            "language_1": "React",
            "language_2": "JSON server(db.json)"
        }
      },
      {
        "id": 7,
        "project_title": "Gym Management CLI App",
        "project_description": "The Fitness Classes Scheduling System helps gyms efficiently manage class schedules, trainers, and member participation. It enables seamless updates to class details, member enrollments, and trainer assignments while ensuring class capacity limits are maintained. The system streamlines communication and management, improving the overall gym experience for both members and administrators.",
        "project_image": "images/gym management cli image.png",
        "project_link": "https://drive.google.com/file/d/1DwVjf8OGrd7rjsjy4f6Vf6IPM-DhCfpX/view?usp=sharing",
        "project_github_backend_link": "https://github.com/CalebKiK/gym-management-cli",
        "project_languages": {
            "language_1": "Python",
            "language_2": "SQLAlchemy",
            "language_3": "CLI"
        }
      },
      {
        "id": 8,
        "project_title": "CloudNest Cloud Storage (Coming Soon!)",
        "project_description": "",
        "project_image": "",
        "project_link": "",
        "project_github_frontend_link": "",
        "project_github_backend_link": "",
        "project_languages": {
            "language_1": "ReactJS",
            "language_2": "Python(Flask)",
            "language_3": "PostgreSQL",
            "language_4": "RESTful APIs"
        }
      }
    ];
    setProjects(fetchedProjects);
  }, []);
  

  return (
    <div className="App">
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects allProjects={projects}/>
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
