import React from "react";
import { motion } from "framer-motion";
import "./OpenProjectCard.css";

const OpenProjectCard = ({ project, onClick }) => {
    return (
      <motion.div
        layoutId={`card-container`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="open_project_card"
      >
        <motion.div layout>
          <motion.button onClick={() => onClick(null)}>Close</motion.button>
          <motion.h2>{project.title}</motion.h2>
          <motion.h5>{project.title}</motion.h5>
          <motion.p>{project.description}</motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Additional content can go here!
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };
  
  export default OpenProjectCard;