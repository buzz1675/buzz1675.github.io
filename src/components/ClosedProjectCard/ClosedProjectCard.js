import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0); // Add a key state to reset animation on hover

  const handleMouseEnter = () => {
    setIsHovered(true);
    setKey((prevKey) => prevKey + 1); // Increment key to reset animation
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        className="project_card"
        style={{ backgroundColor }}
        onClick={handleCardClick}
        whileHover={{ scale: 1.2 }}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
      >
        <div className="title-container">
          <h2 className="title">{project.title}</h2>
        </div>
      </motion.div>
      <motion.div
        onClick={handleCardClick}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
        class="container"
      >
        <div class="card">
          <h2>{project.title}</h2>
          <i class="fas fa-arrow-right"></i>
          <p>a lonely trip.</p>
          <div class="pic"></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <button style={{ backgroundColor: backgroundColor }}></button>
        </div>
      </motion.div>
      <motion.div onClick={handleCardClick}
        whileHover={{ scale: 1.2 }}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave} class="foldcard">
        <div class="image">
          <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" />
        </div>
        <div style={{ background: backgroundColor }} class="details">
          <div class="center">
            <h1>
              Someone famous
              <br />
              <span>team leader</span>
            </h1>
            <p>
              Lorem ipsum is simple dummy text on the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClosedProjectCard;
