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
      <header className="App-header">
        <div></div>
        <h2 class="header">
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
            &nbsp;
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            B
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            U
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            S
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            L
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            E
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            Y
          </p>
          <p class="pop" onMouseEnter={(e) => addRubberBandClass(e.target)}>
            ,
          </p>
          <br />
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
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
