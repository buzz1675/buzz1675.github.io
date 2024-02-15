import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ClosedProjectCard.css";

const ClosedProjectCard = ({ project, onClick }) => {
  const handleCardClick = () => {
    onClick(project);
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor);
  
  return (
    <motion.div
      className="project_card"
      style={{ background: backgroundColor }}
      onClick={handleCardClick}
    >
      <motion.div layout>
        <motion.h2 className="title">{project.title}</motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default ClosedProjectCard;
