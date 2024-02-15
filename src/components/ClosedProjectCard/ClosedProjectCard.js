import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ClosedProjectCard.css";

const ClosedProjectCard = ({ project, onClick }) => {
  const handleCardClick = () => {
    onClick(project);
  };

  return (
    <motion.div className="project_card" onClick={handleCardClick}>
      <motion.div layout>
        <motion.h2 className="title">{project.title}</motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default ClosedProjectCard;
