import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './ContactLinks.css'

const ContactLinks = (props) => {

  const slideIcon = (element) => {
    const icon = element.querySelector("svg");
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
            href="https://www.instagram.com/joshbusley/"
            target="_blank"
          >
            <FontAwesomeIcon className="contact_icon" icon={faInstagram} />
          </a>
        </li>
      
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://github.com/buzz1675"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(e) => slideIcon(e.target)}
            href="https://www.linkedin.com/in/josh-busley-0237682aa/"
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
