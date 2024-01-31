import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './ContactLinks.css'

const ContactLinks = (props) => {

  const slideIcon = (element) => {
    const icon = element.querySelector("svg");
    // Add the slide-icon class when the mouse enters
    if (icon) {
      icon.classList.add("slide-icon");
      setTimeout(() => {
        icon.classList.remove("slide-icon");
      }, 1000);
    }
  };

  return (
    <div className="links-container">
      <ul className="contact-links">
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://twitter.com"
            target="_blank"
          >
            <FontAwesomeIcon className="contact_icon" icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://codepen.io/rickzanutta/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://github.com/Riccardo-Zanutta"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://linkedin.com/in/riccardozanutta"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
