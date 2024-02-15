import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ClosedProjectCard.css";

const ClosedProjectCard = ({ project, isOpen, onClick }) => {
  const handleCardClick = () => {
    onClick(project);
  };

  return (
     <motion.div
      
      onClick={handleCardClick}
    >
      <motion.div layout >
        <motion.h2 >
          {project.title}
        </motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div >
              <motion.p >
                {project.description}
              </motion.p>
              <motion.div >
                {project.technologies.map((icon, index) => (
                  <motion.div key={index} >
                    <FontAwesomeIcon icon={icon} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ClosedProjectCard;
