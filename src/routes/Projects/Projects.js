import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = {
    Reddit: {
      title: "Reddit Clone",
      description:
        "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
      technologies: {
        js,
        css,
        react,
        node,
        git,
      },
    },
    Spotify: {
      title: "Spotify Clone",
      description:
        "A clone of Spotify, a music streaming platform where users can search for songs and add them to custom playlists to save.",
      technologies: {
        js,
        css,
        react,
        node,
        git,
      },
    },
    eCommerce_Site: {
      title: "eCommerce Site",
      description:
        "Final CodeCademy Project of an ecommerce site with Stripe integration, backend development and frontend design.",
      technologies: {
        js,
        css,
        react,
        node,
        git,
        stripe,
        sql,
      },
    },
  };

  return (
    <div id="projects" className="projects_container">
      <div className="projects_content">
        <div className="projects_title">
          <p>What I have done so far</p>
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
