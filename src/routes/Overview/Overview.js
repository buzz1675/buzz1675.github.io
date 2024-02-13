import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import ux from "../../imgs/ux.png";
import prototyping from "../../imgs/prototyping.png";
import frontend from "../../imgs/frontend.png";
import backend from "../../imgs/backend.png";
import "./Overview.css";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("right", "spring", 0.75 * index, 0.75)}
      className="card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="overview_card"
      >
        <img src={icon} alt={title} className="" />
        <h3 className="">{title}</h3>
      </div>
    </motion.div>
  );
};

const Overview = () => {
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Design",
      icon: ux,
    },
    {
      title: "Database Coding",
      icon: prototyping,
    },
  ];

  return (
    <div id="overview" className="overview_container">
      <div className="overview_container_content">
        <motion.div
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          className="overview_title_container"
        >
          <p>See What I Have Learned So Far</p>
          <h2>What Can I Do</h2>
        </motion.div>
        <motion.div
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
        >
          <p variants={fadeIn("", "", 0.1, 1)} className="overview_description">
            Through the various projects I have worked on, I have managed to
            develop skills and techniques to cover and solve a wide range of
            problems. I have successfully come up with innovative solutions for
            a variety of projects whilst maintaining high quality, readable
            code, all totally self taught!
          </p>
        </motion.div>

        <motion.div
          className="card_container"
          initial="hidden"
          whileInView="show"
          variants={fadeIn("", "", 0.25, 1)}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
