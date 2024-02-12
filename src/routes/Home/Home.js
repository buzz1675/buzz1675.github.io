import React, { useEffect } from "react";
import "./Home.css";
import ContactLinks from "../../components/ContactLinks/ContactLinks";
import Ai from "../../imgs/ai.png";
import { Reveal } from "../../components/Reveals/Reveal";

const Home = () => {
  const THRESHOLD = 5;

  const addRubberBandClass = (element) => {
    element.classList.add("rubberBand");
    setTimeout(() => {
      element.classList.remove("rubberBand");
    }, 1000);
  };

  const handleHover = (e) => {
    const { clientX, clientY } = e;
    const { clientWidth, clientHeight } = document.documentElement;

    const vertical = (clientX / clientWidth - 0.5) * 2;
    const horizontal = (clientY / clientHeight - 0.5) * 2;
    const rotateY = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateX = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    document.querySelector(
      ".home_card"
    ).style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  };

  const resetStyles = () => {
    document.querySelector(".home_card").style.transform = "";
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleHover);
    document.addEventListener("mouseleave", resetStyles);

    return () => {
      document.removeEventListener("mousemove", handleHover);
      document.removeEventListener("mouseleave", resetStyles);
    };
  }, []);

  return (
    <div id="home" className="App">
      <div className="front_cover_container">
        {" "}
        <div className="title_container">
          <Reveal>
            <h3 id="hi-my-name">Hey There,</h3>
          </Reveal>
          <div className="name_container">
            <Reveal>
              <div className="name_topline">
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  I
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  '
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  M
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  &nbsp;
                </p>

                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  J
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  O
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  S
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  H
                </p>

                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  ,
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="name_bottomline">
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  A
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  &nbsp;
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  B
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  U
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  D
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  D
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  I
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  N
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  G
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  &nbsp;
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  D
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  E
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  V
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  E
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  L
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  O
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  P
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  E
                </p>
                <p
                  class="pop"
                  onMouseEnter={(e) => addRubberBandClass(e.target)}
                >
                  R
                </p>
              </div>
            </Reveal>
            <Reveal>
            <p className="name_description">
              I'm a totally self taught Full-Stack Engineer with a passion for
              coding. Welcome to my portfolio!
            </p>
            </Reveal>
          </div>
        </div>
        <div className="home_card">
          {" "}
          <img src={Ai} className="front_cover_image" />
        </div>
      </div>

      <ContactLinks />
    </div>
  );
};

export default Home;
