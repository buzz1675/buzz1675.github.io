import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faNodeJs,
  faGit,
  faJs,
  faSql,
  faStripe,
  faHtml5,
  faCss3,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { RevealSkillIcon } from "../../components/Reveals/SkillsReveal";
import { Reveal } from "../../components/Reveals/Reveal";
import { fadeIn, textVariant } from "../../utils/motion";

const Skills = () => {
  const skillsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div id="skills" className="skills_container">
      <div className="skills_content_container">
        <motion.div
          variants={textVariant(0.25)}
          initial="hidden"
          whileInView="show"
          className="skills_title"
        >
          <h2>My Skills</h2>

          <p>
            I have worked with a wide variety of technologies in web and
            software development. From Back-End to Front-End
          </p>
        </motion.div>
        <div className="technologies_list">
          <div className="frontend_technologies">
            <motion.div
              variants={textVariant(0.45)}
              initial="hidden"
              whileInView="show"
            >
              {" "}
              <h3>Front-End Technologies</h3>
            </motion.div>

            <div className="skill_icon_container">
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 1, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon css" icon={faCss3} />
                </a>
                <p className="icon_name">CSS</p>
              </motion.div>{" "}
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 2, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon html" icon={faHtml5} />
                </a>
                <p className="icon_name">HTML</p>
              </motion.div>{" "}
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 3, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon js" icon={faJs} />
                </a>
                <p className="icon_name">JavaScript</p>
              </motion.div>{" "}
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 4, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon react" icon={faReact} />
                </a>
                <p className="icon_name">React</p>
              </motion.div>
            </div>
          </div>
          <div className="backend_technologies">
            <motion.div
              variants={textVariant(0.45)}
              initial="hidden"
              whileInView="show"
            >
              {" "}
              <h3>Back-End Technologies</h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("right", "spring", 0.35 * 5, 0.75)}
              className="skill_icon_container"
            >
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon node" icon={faNodeJs} />
                </a>
                <p className="icon_name">Node.js</p>
              </div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 6, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon github" icon={faGitAlt} />
                </a>
                <p className="icon_name">Git</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 7, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon
                    className="icon database"
                    icon={faDatabase}
                  />
                </a>
                <p className="icon_name">SQL</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("right", "spring", 0.35 * 8, 0.75)}
                className="skill_container"
              >
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon stripe" icon={faStripe} />
                </a>
                <p className="icon_name">Stripe Integration</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
