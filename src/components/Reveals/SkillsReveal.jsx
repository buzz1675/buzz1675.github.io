import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealSkillIcon = ({ children, loaderDuration = 2500, delay = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [revealStarted, setRevealStarted] = useState(false);

  useEffect(() => {
    let timeout;

    if (isInView && revealStarted) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, revealStarted, controls]);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setRevealStarted(true);
    }, loaderDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [loaderDuration]);

  return (
    <>
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
