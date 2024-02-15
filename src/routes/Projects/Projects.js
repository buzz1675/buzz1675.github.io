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
import ClosedProjectCard from "../../components/ProjectCard/ClosedProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

useEffect(()=>{
  console.log(selectedProject)
}, [selectedProject])

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
            />
          ))}
          <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {projects.map((project) => (
              project.title === selectedProject && (
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                  layoutId={`card-container`}
                  key={project.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <motion.div className="relative">
                    <motion.button
                      className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                      onClick={() => setSelectedProject('')}
                    >
                      Close
                    </motion.button>
                    <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{project.title}</motion.h2>
                    <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{project.title}</motion.h5>
                    <motion.p className="text-md text-gray-700 mb-4">{project.description}</motion.p>
                    <motion.p
                      className="text-md text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Additional content can go here!
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
