import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_content_container">
        <div className="about_title">
          <h2 className="about_h2_title">About Me</h2>
          <p>Learn more about my journey so far</p>
        </div>
        <div className="about_text">
          <p>
            Back in early 2023 I decided to start learning how to code and found
            myself completely intrigued by the complexity but beauty of it.
            Starting off with freeCodeCamp before moving onto CodeCdademy's Full
            Stack Engineer Course, I learned HTML, CSS, Javscript, SQL, Node.js
            and other essential technologies for software development from
            scratch.
          </p>
          <br />
          <p>
            Back in early 2023 I decided to start learning how to code and found
            myself completely intrigued by the complexity but beauty of it.
            Starting off with freeCodeCamp before moving onto CodeCdademy's Full
            Stack Engineer Course, I learned HTML, CSS and Javscript from
            scratch
          </p>
          <br />
          <p>
            When I am not coding or running my business, you can find me biking,
            mountaineering, climbing, hanging out with friends, playing
            pickleball or getting lost in the world of video games
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
