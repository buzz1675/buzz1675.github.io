import React, { useState, useEffect } from "react";
import LetterJ from "../../imgs/Letter J.png";
import "./header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header_container ${isTop ? "show" : "hide"}`}>
      <div className="title">
        <p className="cyan">Josh</p>
        <p className="shift_right">Busley</p>
      </div>

      
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
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
