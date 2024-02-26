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
import SpotifyLogo from "../../imgs/Screenshot 2024-02-21 141936.png";
import SpotifyAppScreenshot from "../../imgs/SpotifyAppScreenshot.png";
import {projects} from "../../utils/data.js";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  

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
