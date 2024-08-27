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
import wordleScreenshot from "../imgs/Wordle Screenshot.png"; 
import wordleLogo from "../imgs/Wordle Logo.png"; 


export const projects = [
  {
    title: "Spotify Clone",
    ThumbnailImage: SpotifyLogo,
    screenshot: SpotifyAppScreenshot,
    link: "https://buzz1675.github.io/spotify/",
    shortDescription:
      "This is an app that allows users to search for songs and add them to custom playlists to save.",
    description:
      "This marked my inaugural significant undertaking with CodeCademy, a pivotal journey into the realm of web development. Employing React, the project involves making API calls to Spotify, enabling the extraction of valuable song data. One standout feature is the integration of OAuth, providing users with the ability to log in and seamlessly save playlists to their personal Spotify accounts. Throughout this project, I delved into fundamental concepts such as state management and login authentication, laying the cornerstone for subsequent endeavors. The invaluable lessons learned here equipped me with the essential building blocks, setting the trajectory for success in the various projects that followed.",
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
    title: "Reddit Clone",
    ThumbnailImage: redditLogo,
    screenshot: RedditScreenshot,
    link: "https://buzz1675.github.io/reddit/",

    backgroundColour: "#FFFFFF",

    shortDescription:
      "An app for users to navigate and search through Reddit Posts and Subreddits.",

    description:
      "This marked my second significant venture with CodeCademy, evolving from the initial Spotify Clone and incorporating skills honed from that project. This application is distinguished by its utilisation of multiple components, dynamically rendering content based on user search results and data fetched from the Reddit API. Unlike other applications, this project doesn't delve into users' login details or Reddit accounts due to project scope limitations. Instead, it harnesses the power of the Reddit JSON API, eliminating the need for OAuth. With React, I introduced additional features including a versatile light and dark mode toggle, an intuitive search bar, loading containers for a seamless user experience, and ensured optimal performance on mobile devices.",
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
    link: "",

    backgroundColour: "#FFFFFF",
    shortDescription:
      "A fully working ecommerce site with user registration, and Stripe checkout",

    description:
      "This marked my final endeavor in CodeCademy's Full Stack Engineer Course, encapsulating the entirety of my acquired knowledge. Encompassing a spectrum from React and CSS styling to SQL and database management, the project seamlessly integrated various technologies. Utilising Stripe for payment processing, the backend was constructed with Node.js and Express.js, ensuring a robust foundation. The implementation involved a database storing essential information like products, orders, user details, and categories. Key features include a functional account page for users to modify their login details, a mobile-friendly register and login page, and a streamlined Stripe checkout page leveraging the Stripe API. Employing GET and POST requests facilitated data communication with the backend, complemented by UPDATE and DELETE methods for handling data manipulation. The user experience was enhanced through dynamic functionalities like product search, sorting by price or category, and cart management—accomplished seamlessly with React Router, eliminating the need for page refreshes.",
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
    link: "http://identity-plus.co.uk/",

    backgroundColour: "#FFFFFF",

    description:
      "Identity-Plus serves as my business website, while Medical-Plus stands as its sister site. Originally developed by a company, Identity-Plus has undergone personal modifications and refinements under my guidance. With a solid grasp of WordPress, I've tailored layouts, introduced products, and created pages—all while prioritising effective SEO practices. Building upon my WordPress expertise gained from Identity-Plus, I independently crafted Medical-Plus from scratch. Using themes and plugins, I successfully developed a fully functional e-commerce site—an accomplishment I take great pride in.",
    technologies: [
      { name: "Wordpress", icon: faJs },
      { name: "HTML", icon: faHtml5 },
    ],
  },
  {
    title: "Wordle",
    ThumbnailImage: wordleLogo,
    screenshot: wordleScreenshot,
    link: "https://buzz1675.github.io/wordle/",

    shortDescription:
    "A fully working Wordle Game made with React",
    description:
    "This Wordle Game project was an exciting exploration of logic and interactivity in web development, utilising React for a dynamic and responsive user experience. The application challenges players to guess a hidden five-letter word within six attempts, with real-time feedback on their guesses, similar to the popular word puzzle game. Throughout this project, I focused on implementing state management and conditional rendering to handle the game's logic and UI updates. Additionally, the project reinforced my skills in using JavaScript to handle game mechanics, CSS for styling, and React for building the overall structure and flow of the application. This project not only enhanced my problem-solving skills but also served as a fun way to apply core web development concepts.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
            { name: "Git", icon: faGit },
     
    ],
  },
];
