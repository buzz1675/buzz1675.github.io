import React from "react";
import { motion } from "framer-motion";
import "./OpenProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faX } from "@fortawesome/free-solid-svg-icons";
const OpenProjectCard = ({ project, closeProject }) => {
  const openLink = window.location.replace;
  return (
    <>
      <motion.div
        layoutId={`card-container`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="open_project_card"
      >
        <motion.div layout>
          {project.link ? (
            <a href={project.link}>
              <motion.img src={project.screenshot} className="project_image" />
            </a>
          ) : (
            <a>
              <motion.img
                src={project.screenshot}
                className="project_image"
                transition={{ duration: 0 }}
              />
            </a>
          )}

          <div className="openProjectCard_content">
            <motion.h2>{project.title}</motion.h2>
            <div className="description_technologies_container">
              <div className="description_container">
                <h3>Description</h3>
                <motion.p>{project.description}</motion.p>
              </div>
              <div className="technologies_container">
                <h3>Technologies</h3>
                <ul>
                  {project.technologies.map((tech) => (
                    <motion.li
                      layout
                      key={tech}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="tech-list-item"
                    >
                      <FontAwesomeIcon icon={tech.icon} />
                      <span>{tech.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.button
        className="close_button"
        onClick={() => closeProject(null)}
      >
        <FontAwesomeIcon icon={faX} />
      </motion.button>
    </>
  );
};

export default OpenProjectCard;
