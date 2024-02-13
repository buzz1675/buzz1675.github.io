import React, { useState } from "react";
import { motion } from "framer-motion";
import './ProjectCard.css'

const ProjectCard = (title, description, technologies) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
  );
};

export default ProjectCard;
