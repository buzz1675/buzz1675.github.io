import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  const addRubberBandClass = (element) => {
    element.classList.add("rubberBand");
    setTimeout(() => {
      element.classList.remove("rubberBand");
    }, 1000);
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

          
        </div>
      </div>
    </div>
  );
};

export default Home;
