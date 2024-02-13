import React from "react";
import "./Projects.css";
import {
  faNodeJs,
  faGit,
  faJs,
  faStripe,
  faHtml5,
  faCss3,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const projects = {
    Reddit: {
      title: "Reddit Clone",
      description:
        "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
      technologies: {
        js: { name: "JavaScript", icon: faJs },
        html: { name: "HTML", icon: faHtml5 },
        css: { name: "CSS", icon: faCss3 },
        react: { name: "React", icon: faReact },
        node: { name: "Node.js", icon: faNodeJs },
        git: { name: "Git", icon: faGit },
      },
    },
    Spotify: {
      title: "Spotify Clone",
      description:
        "A clone of Spotify, a music streaming platform where users can search for songs and add them to custom playlists to save.",
      technologies: {
        js: { name: "JavaScript", icon: faJs },
        html: { name: "HTML", icon: faHtml5 },
        css: { name: "CSS", icon: faCss3 },
        react: { name: "React", icon: faReact },
        node: { name: "Node.js", icon: faNodeJs },
        git: { name: "Git", icon: faGit },
      },
    },
    eCommerce_Site: {
      title: "eCommerce Site",
      description:
        "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
      technologies: {
        js: { name: "JavaScript", icon: faJs },
        html: { name: "HTML", icon: faHtml5 },
        css: { name: "CSS", icon: faCss3 },
        react: { name: "React", icon: faReact },
        node: { name: "Node.js", icon: faNodeJs },
        git: { name: "Git", icon: faGit },
        stripe: { name: "Stripe", icon: faStripe },
        sql: { name: "SQL", icon: faDatabase },
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
        {Object.keys(projects).map((projectKey) => (
          <ProjectCard
            key={projectKey}
            title={projects[projectKey].title}
            description={projects[projectKey].description}
            technologies={Object.values(projects[projectKey].technologies)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

