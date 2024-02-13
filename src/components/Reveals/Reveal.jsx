import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, loaderDuration = 1500 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const [revealStarted, setRevealStarted] = useState(false);

  useEffect(() => {
    let timeout;

    if (isInView && revealStarted) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, revealStarted, mainControls, slideControls]);

  useEffect(() => {
    let timeout
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
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: "absolute",
            top: 5,
            bottom: 5,
            left: 0,
            right: 0,
            background: "white",
            zIndex: 10,
          }}
        />
      </div>
    </>
  );
};
