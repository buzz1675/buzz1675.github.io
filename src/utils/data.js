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
import SpotifyLogo from "../imgs/Screenshot 2024-02-21 141936.png";
import SpotifyAppScreenshot from "../imgs/SpotifyAppScreenshot.png";
import redditLogo from "../imgs/redditLogo.png";
import RedditScreenshot from "../imgs/RedditScreenshot.png";
import ecommerceScreenshot from "../imgs/ecommerceScreenshot.png";
import ecommerceThumbnail from "../imgs/ecommerceThumbnail.png";
import identityLogo from "../imgs/identityLogo.png";
import identityScreenshot from "../imgs/identityScreenshot.png";


export const projects = [
  
  {
    title: "Spotify Clone",
    ThumbnailImage: SpotifyLogo,
    screenshot: SpotifyAppScreenshot,
    shortDescription:
      "This is an app that allows users to search for songs and add them to custom playlists to save.",
    description:
      "This was my very first major project with CodeCademy. It uses React and makes API calls to Spotify to gather song data. It also use OAuth to allow users to log in and save their playlists to their own spotify account. I learned about state and login authentication and the project gave me the initial building blocks to move forward with the other projects I have completed.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
    ],
  },{
    title: "Reddit Clone",
    ThumbnailImage: redditLogo,
    screenshot: RedditScreenshot,
    backgroundColour: "#FFFFFF",
    shortDescription:
      "An app for users to navigate and search through Reddit Posts and Subreddits.",

    description:
      "This was my second large project with CodeCademy. It built on the initial Spotify Clone and i used the skills learned from that in this. It features multiple components that render based on the user's search results as well as the data from the Reddit API. This application doesn't actually use the users login details or account within Reddit itself, as this was beyond the scope of the project, but instead uses the Reddit JSON API to retrieve data and eliminate the need for OAuth. Using React I added extra features such as a light and dark mode toggle, a search bar, loading containers and made the app mobile friendly. ",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
    ],
  },
  {
    title: "eCommerce Site",
    ThumbnailImage: ecommerceThumbnail,
    screenshot: ecommerceScreenshot,
    backgroundColour: "#FFFFFF",
    shortDescription:
      "A fully working ecommerce site with user registration, and Stripe checkout",

    description:
      "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
      { name: "Stripe", icon: faStripe },
      { name: "SQL", icon: faDatabase },
    ],
  },
  {
    title: "Identity-Plus/Medical-Plus",
    ThumbnailImage: identityLogo,
    screenshot: identityScreenshot,
    backgroundColour: "#FFFFFF",

    description:
      "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
    technologies: [
      { name: "Wordpress", icon: faJs },
      { name: "HTML", icon: faHtml5 },
    ],
  },
];
