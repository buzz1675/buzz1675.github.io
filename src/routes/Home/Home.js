import React, { useEffect } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const addRubberBandClass = (element) => {
    element.classList.add("rubberBand");
    setTimeout(() => {
      element.classList.remove("rubberBand");
    }, 1000);
  };

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
    <div className="App">
      <div className="title_container">
        <h3 id="hi-my-name">Hey There,</h3>

        <div className="name_container">
          <div className="name_topline">
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              I
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              '
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              M
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              &nbsp;
            </p>

            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              J
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              O
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              S
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              H
            </p>

            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              ,
            </p>
          </div>
          <div className="name_bottomline">
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              A
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              &nbsp;
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              B
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              U
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              D
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              D
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              I
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              N
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              G
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              &nbsp;
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              D
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              E
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              V
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              E
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              L
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              O
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              P
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              E
            </p>
            <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
              R
            </p>
          </div>
          <p className="name_description">
            I'm a totally self taught Full-Stack Engineer with a passion for
            coding. Welcome to my portfolio!
          </p>

          <div className="links-container">
            <ul className="contact-links">
              <li>
                <a
                  onMouseEnter={(e) => slideIcon(e.target)}
                  href="https://twitter.com/RiccardoZanutta"
                  target="_blank"
                >
                  <FontAwesomeIcon className="contact_icon" icon={faTwitter} />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
