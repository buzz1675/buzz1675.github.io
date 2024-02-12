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

const Skills = () => {
  const skillsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div id="skills" className="skills_container">
      <div className="skills_content_container">
        <div className="skills_title">
          <h2>My Skills</h2>

          <p>
            I have worked with a wide variety of technologies in web and
            software development. From Back-End to Front-End
          </p>
        </div>
        <div className="technologies_list">
          <div className="frontend_technologies">
            <Reveal>
              <h3>Front-End Technologies</h3>
            </Reveal>
            <div className="skill_icon_container">
              <RevealSkillIcon delay={0.6}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon css" icon={faCss3} />
                  </a>
                  <p className="icon_name">CSS</p>
                </div>{" "}
              </RevealSkillIcon>
              <RevealSkillIcon delay={0.7}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon html" icon={faHtml5} />
                  </a>
                  <p className="icon_name">HTML</p>
                </div>{" "}
              </RevealSkillIcon>
              <RevealSkillIcon delay={0.8}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon js" icon={faJs} />
                  </a>
                  <p className="icon_name">JavaScript</p>
                </div>{" "}
              </RevealSkillIcon>
              <RevealSkillIcon delay={0.9}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon react" icon={faReact} />
                  </a>
                  <p className="icon_name">React</p>
                </div>
              </RevealSkillIcon>
            </div>
          </div>
          <div className="backend_technologies">
            <Reveal>
              <h3>Back-End Technologies</h3>
            </Reveal>
            <div className="skill_icon_container">
              <RevealSkillIcon delay={0.6}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon node" icon={faNodeJs} />
                  </a>
                  <p className="icon_name">Node.js</p>
                </div>
              </RevealSkillIcon>
              <RevealSkillIcon delay={0.7}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon github" icon={faGitAlt} />
                  </a>
                  <p className="icon_name">Git</p>
                </div>
              </RevealSkillIcon>{" "}
              <RevealSkillIcon delay={0.8}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon
                      className="icon database"
                      icon={faDatabase}
                    />
                  </a>
                  <p className="icon_name">SQL</p>
                </div>
              </RevealSkillIcon>{" "}
              <RevealSkillIcon delay={0.9}>
                <div className="skill_container">
                  <a className="skills_icon">
                    <FontAwesomeIcon className="icon stripe" icon={faStripe} />
                  </a>
                  <p className="icon_name">Stripe Integration</p>
                </div>
              </RevealSkillIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
