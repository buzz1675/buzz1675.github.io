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
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
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
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
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
      title: "Software Prototyping",
      icon: prototyping,
    },
  ];

  return (
    <div id='overview' className="overview_container">
      <div className="overview_container_content">
        <motion.div variants={textVariant()}>
          <p>Introduction</p>
          <h2>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="overview_description"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae
          ea quaerat alias accusamus voluptas autem! Alias odit voluptates in
          totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam
          obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
          veniam dolorum ipsum doloribus.
        </motion.p>

        <div className="card_container">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
