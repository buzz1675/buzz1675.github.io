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

  const svgVariants = {
    hidden: { rotate: -45, opacity: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      translateY: isHovered ? -100 : 0, // Translate reduced if hovered
      transition: {
        delay: isHovered ? 0 : 5, // Delay reduced if hovered
        duration: 1,
        type: "tween",
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      opacity: 1,
      pathLength: isHovered ? 1 : 0, // Gradual fill when hovered
      transition: {
        delay: isHovered ? 0 : 0.5, // Delay reduced if hovered
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="project_card"
      style={{ backgroundColor }}
      onClick={handleCardClick}
      whileHover={{ scale: 1.2 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
    >
      {/* Background fill animation */}
      <motion.div className="fill-background"></motion.div>

      {/* SVG with drawing animation */}
      <motion.svg
        key={key} // Reset animation when key changes
        width="470"
        height="522"
        viewBox="0 0 470 522"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.5 }}
      >
        <motion.path
          d="M34.9071 354.764C29.5741 351.03 28.9614 346.23 33.0691 340.363L181.392 128.536C185.5 122.669 190.22 121.603 195.553 125.338L272.829 179.446C303.654 201.03 321.913 222.399 327.606 243.553C333.406 264.781 329.696 284.834 316.477 303.713C304.826 320.352 289.443 330.404 270.327 333.868C251.318 337.407 230.923 332.823 209.143 320.115L208.919 320.435C214.122 336.159 216.99 347.387 217.522 354.118C218.129 360.742 218.118 369.158 217.487 379.367L212.531 463.401C211.975 473.503 208.55 476.35 202.257 471.944L184.018 459.173C179.005 455.663 176.729 450.969 177.188 445.091L183.904 364.673C184.855 353.1 183.614 340.23 180.181 326.063C176.748 311.897 168.365 300.146 155.033 290.81L127.194 271.318L63.7873 361.872C59.6796 367.739 54.9593 368.805 49.6263 365.071L34.9071 354.764ZM146.057 245.079L191.804 277.455C212.603 292.018 230.506 300.501 245.515 302.903C260.598 305.199 274.3 297.547 286.623 279.948C296.034 266.509 297.299 253.805 290.421 241.835C283.617 229.759 271.415 217.56 253.817 205.237L199.9 167.484L145.567 245.079Z"
          fill={isHovered ? "black" : "none"} // Fill only if hovered
          stroke="black"
          variants={pathVariants}
        />
      </motion.svg>

      {/* Your existing content goes here */}
      <div className="title-container">
        <h2 className="title">{project.title}</h2>
      </div>
    </motion.div>
  );
};

export default ClosedProjectCard;