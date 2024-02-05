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
            <a>Home</a>
          </li>
          <li className="nav_link">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >About</Link>

            <a>About</a>
          </li>
          <li className="nav_link">
            <a>Skills</a>
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
