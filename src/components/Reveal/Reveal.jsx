import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const getWidth = () => {
    if (ref.current) {
      return ref.current.clientWidth;
    }
    return 0;
  };

  return (
    <>
      <div ref={ref} style={{ position: "relative", width:'fit-content',overflow: "hidden" }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5,}}
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
