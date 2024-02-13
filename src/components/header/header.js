import React from "react";
import LetterJ from "../../imgs/Letter J.png";
import "./header.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header_container">
      <img src={LetterJ} alt="Letter J" className="LetterJ" />
      <div className="nav_menu">
        <ul>
          <li className="nav_link">
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="nav_link">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="nav_link">
            <Link
              activeClass="active"
              to="overview"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Overview
            </Link>
          </li>
          <li className="nav_link">
          <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className="nav_link">
            <a>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
