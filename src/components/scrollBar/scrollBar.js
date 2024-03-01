import React, { useEffect, useState, useRef } from "react";
import "./scrollBar.css";
import { Link as ScrollLink, scroller } from "react-scroll";

const VerticalMenu = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(0);
  const verticalOffsetPercentage = 150; // 5% of menu height
  const markerRef = useRef(null); // Add a ref for the marker

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("[data-scroll-section]");
      const menuItems = menuRef.current.querySelectorAll(".vertical-menu-item");

      sections.forEach((section, index) => {
        const sectionId = section.id;
        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollY >= sectionOffset - 500 &&
          scrollY < sectionOffset + sectionHeight
        ) {
          setActiveSection(sectionId);
          const adjustmentValue = 64; // You can experiment with different values
          const menuItemOffsetTop = menuItems[index].offsetTop - adjustmentValue;
          const menuItemHeight = menuItems[index].offsetHeight;
          setMarkerPosition(menuItemOffsetTop + menuItemHeight);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [markerPosition]);

  return (
    <div className="vertical-menu-wrapper" ref={menuRef}>
      <ul className="vertical-menu ul--reset">
        <li
          className={`vertical-menu-item ${
            activeSection === "home" ? "is-active" : ""
          }`}
          data-section-id="home"
        >
          <ScrollLink
            className="link--inverse-menu"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Home
          </ScrollLink>
        </li>
        <li
          className={`vertical-menu-item ${
            activeSection === "about" ? "is-active" : ""
          }`}
          data-section-id="about"
        >
          <ScrollLink
            className="link--inverse-menu"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            About
          </ScrollLink>
        </li>
        <li
          className={`vertical-menu-item ${
            activeSection === "overview" ? "is-active" : ""
          }`}
          data-section-id="overview"
        >
          <ScrollLink
            className="link--inverse-menu"
            to="overview"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Overview
          </ScrollLink>
        </li>
        <li
          className={`vertical-menu-item ${
            activeSection === "skills" ? "is-active" : ""
          }`}
          data-section-id="skills"
        >
          <ScrollLink
            className="link--inverse-menu"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Skills
          </ScrollLink>
        </li>
        <li
          className={`vertical-menu-item ${
            activeSection === "projects" ? "is-active" : ""
          }`}
          data-section-id="projects"
        >
          <ScrollLink
            className="link--inverse-menu"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Projects
          </ScrollLink>
        </li>
      </ul>
      {activeSection && (
        <div
          className="active-marker"
          ref={markerRef}
          style={{ transform: `translateY(${markerPosition}px)` }}
        >
          <div className="red-box"></div>
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;
