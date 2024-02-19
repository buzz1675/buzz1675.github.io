import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  faNodeJs,
  faGit,
  faJs,
  faStripe,
  faHtml5,
  faCss3,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ClosedProjectCard from "../../components/ClosedProjectCard/ClosedProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import OpenProjectCard from "../../components/OpenProjectCard/OpenProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  const projects = [
    {
      title: "Reddit Clone",
      description:
        "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Git", icon: faGit },
      ],
    },
    {
      title: "Spotify Clone",
      description:
        "A clone of Spotify, a music streaming platform where users can search for songs and add them to custom playlists to save.",
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Git", icon: faGit },
      ],
    },
    {
      title: "eCommerce Site",
      description:
        "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Git", icon: faGit },
        { name: "Stripe", icon: faStripe },
        { name: "SQL", icon: faDatabase },
      ],
    },
    {
      title: "Reddit Clone",
      description:
        "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Git", icon: faGit },
      ],
    },
    {
      title: "Reddit Clone",
      description:
        "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Git", icon: faGit },
      ],
    },
  ];

  return (
    <div id="projects" className="projects_container">
      <div className="projects_content">
        <div className="projects_title">
          <p>What I have done so far</p>
          <h2>Projects</h2>
        </div>
        <div className="projects_cards_container">
          {projects.map((project) => (
            <ClosedProjectCard
              key={project.title}
              project={project}
              isOpen={selectedProject === project}
              onClick={() => setSelectedProject(project.title)}
              svgPath="../../images/reddit-1.svg"
            />
          ))}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="open_project_overlay"
              >
                <OpenProjectCard
                  onClick={() => setSelectedProject(null)}
                  project={
                    projects.find((proj) => proj.title === selectedProject) ||
                    {}
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
