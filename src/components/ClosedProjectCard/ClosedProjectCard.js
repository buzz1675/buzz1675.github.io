import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ClosedProjectCard.css";
import Spotify from "../../imgs/Screenshot 2024-02-21 141936.png";

const ClosedProjectCard = ({ project, onClick }) => {
  const handleCardClick = () => {
    onClick(project);
    setTimeout(() => {
      const element = document.querySelector(".open_project_overlay");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
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
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setKey((prevKey) => prevKey + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        onClick={handleCardClick}
        whileHover={{ scale: 1.2 }}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
        class="foldcard"
        style={{ background: project.backgroundColour }}
      >
        <div class="image">
          <img src={project.ThumbnailImage} />
        </div>
        <div style={{ background: backgroundColor }} class="details">
          <div class="center">
            <h1>{project.title}</h1>
            <p>{project.shortDescription}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClosedProjectCard;
