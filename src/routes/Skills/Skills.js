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
  faReact,faGitAlt
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
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
            <h3>Front-End Technologies</h3>
            <div className="skill_icon_container">
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon css" icon={faCss3} />
                </a>
                <p className="icon_name">CSS</p>
              </div>{" "}
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon html" icon={faHtml5} />
                </a>
                <p className="icon_name">HTML</p>
              </div>{" "}
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon js" icon={faJs} />
                </a>
                <p className="icon_name">JavaScript</p>
              </div>{" "}
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon react" icon={faReact} />
                </a>
                <p className="icon_name">React</p>
              </div>
            </div>
          </div>
          <div className="backend_technologies">
            <h3>Back-End Technologies</h3>
            <div className="skill_icon_container">
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon node" icon={faNodeJs} />
                </a>
                <p className="icon_name">Node.js</p>
              </div>
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon github" icon={faGitAlt} />
                </a>
                <p className="icon_name">Git</p>
              </div>
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon
                    className="icon database"
                    icon={faDatabase}
                  />
                </a>
                <p className="icon_name">SQL</p>
              </div>
              <div className="skill_container">
                <a className="skills_icon">
                  <FontAwesomeIcon className="icon stripe" icon={faStripe} />
                </a>
                <p className="icon_name">Stripe Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
