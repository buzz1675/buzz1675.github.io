import React, { useEffect, useState } from "react";
import "./scrollBar.css";
import { Link as ScrollLink } from "react-scroll";

const VerticalMenu = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(0);
  const verticalOffset = 115;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('[data-scroll-section]');

      sections.forEach((section) => {
        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionOffset - 500 && scrollY < sectionOffset + sectionHeight) {
          setActiveSection(section.id);

          const menu = document.querySelector('.vertical-menu-wrapper');
          const marker = document.querySelector('.active-marker');
          const activeLink = document.querySelector(`[data-section-id="${section.id}"]`);

          if (activeLink && marker && menu) {
            const markerOffset = activeLink.offsetTop - menu.offsetTop + verticalOffset;
            setMarkerPosition(markerOffset);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, markerPosition]);

  const toggleActive = (sectionId) => {
    setActiveSection(sectionId);

    window.scrollTo(sectionId, {
      smooth: true,
      duration: 1000,
    });

    const activeLink = document.querySelector(`[data-section-id="${sectionId}"]`);
    const menu = document.querySelector('.vertical-menu-wrapper');
    const marker = document.querySelector('.active-marker');

    if (activeLink && marker && menu) {
      const markerOffset = activeLink.offsetTop - menu.offsetTop;
      setMarkerPosition(markerOffset);
    }
  };

  return (
    <div className="vertical-menu-wrapper">
      <ul className="vertical-menu ul--reset">
        <li className={`vertical-menu-item ${activeSection === "home" ? "is-active" : ""}`} data-section-id="home" onClick={() => toggleActive("home")}>
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
        <li className={`vertical-menu-item ${activeSection === "about" ? "is-active" : ""}`} data-section-id="about" onClick={() => toggleActive("about")}>
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
        <li className={`vertical-menu-item ${activeSection === "overview" ? "is-active" : ""}`} data-section-id="overview" onClick={() => toggleActive("overview")}>
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
        <li className={`vertical-menu-item ${activeSection === "skills" ? "is-active" : ""}`} data-section-id="skills" onClick={() => toggleActive("skills")}>
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
        <li className={`vertical-menu-item ${activeSection === "projects" ? "is-active" : ""}`} data-section-id="projects" onClick={() => toggleActive("projects")}>
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
        <div className="active-marker" style={{ transform: `translateY(${markerPosition}px)` }}>
          <div className="red-box"></div>
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;
