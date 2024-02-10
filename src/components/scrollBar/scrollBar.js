import React, { useEffect, useState } from "react";
import "./scrollBar.css";
import { Link } from "react-scroll";


const ScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercent = Math.floor(
        (scrollY / (documentHeight - windowHeight)) * 100
      );
      setScrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="scrollbar">
      <ul className="scrollbar_section_list">
      <li>
      <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              Home
            </Link>
        </li>
        <li>
        <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              About
            </Link>
        </li>
        <li>
          <p>Skills</p>
        </li>
        <li>
          <p>Projects</p>
        </li>
      </ul>
      <div className="progress_container">
        <div
          className="progress_fill"
          style={{ height: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollBar;
