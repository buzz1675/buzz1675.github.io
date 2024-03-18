import React from "react";
import "./About.css";
import { Reveal } from "../../components/Reveals/Reveal";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

const About = () => {
  return (
    <div id="about" data-scroll-section className="about_container">
      <div className="about_content_container">
        <motion.div
          variants={textVariant(0.25)}
          initial="hidden"
          whileInView="show"
          className="about_title"
        >
          <h2 className="about_h2_title">About Me</h2>

          <p>Learn more about my journey</p>
        </motion.div>

        <div className="about_text">
          <Reveal>
            <motion.div
              variants={textVariant(0.45)}
              initial="hidden"
              whileInView="show"
            >
              <p>
                Back in early 2023 I decided to start learning how to code and
                found myself completely intrigued by the complexity but beauty
                of it. Starting off with freeCodeCamp before moving onto
                CodeCdademy's Full Stack Engineer Course, I learned HTML, CSS,
                Javscript, SQL, Node.js and other essential technologies for
                software development from scratch.
              </p>
            </motion.div>
          </Reveal>
          <br />
          <Reveal>
            <motion.div
              variants={textVariant(0.65)}
              initial="hidden"
              whileInView="show"
            >
              <p>
                I have used the skills and knowledge I have acquired in the past
                12 months to build various different projects, including this
                one, to test and practise my skills and abilities. Not only have I made projects for fun, but I have also used
                these in great effect in a practical, real world scenarios to aid my business. Using the
                techniques and strategies I have learned I have constructed and developed several components to further aid in
                my business' development.
              </p>
            </motion.div>
          </Reveal>
          <br />
          <Reveal>
            <motion.div
              variants={textVariant(0.85)}
              initial="hidden"
              whileInView="show"
            >
              <p>
                I have many hobbies that I enjoy outside of work. When I am not
                coding or running my business, you can find me biking,
                mountaineering, climbing, hanging out with friends, playing
                pickleball or getting lost in the world of video games.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
