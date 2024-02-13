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
          <h3 className="">
            {title}
          </h3>
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
    <motion.div
      id="overview"
      className="overview_container"
      variants={textVariant(0.25)}
      initial="hidden"
      whileInView="show"
    >
      <div className="overview_container_content">
        <div className="overview_title_container">
          <p>See What I Have Learned So Far</p>
          <h2>What Can I Do</h2>
        </div>

        <p variants={fadeIn("", "", 0.1, 1)} className="overview_description">
          Through the various projects I have worked on, I have managed to
          develop skills and techniques to cover and solve a wide range of
          problems. I have successfully come up with innovative solutions for a
          variety of projects whilst maintaining high quality, readable code,
          all totally self taught!
        </p>

        <div className="card_container" variants={fadeIn("", "", 0.2, 1)}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
