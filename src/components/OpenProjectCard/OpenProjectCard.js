import React from "react"
import { motion } from "framer-motion";

const OpenProjectCard = (project) => {
  return (
    <motion.div
                        layoutId={`card-container`}
                        key={project.name}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      >
                        <motion.div className="relative">
                          <motion.button onClick={() => setSelectedProject("")}>
                            Close
                          </motion.button>
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
  )
};

export default OpenProjectCard;
