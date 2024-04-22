import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lounge Web App",
    img: "/lounge.png",
    description:
      "Lounge is an online marketplace that connects space owners with individuals seeking unique venues for their meetings, events, or activities.",
    live: "https://lounge-zeta.vercel.app/",
    github: "https://github.com/Ken-Musau/lounge-link-client",
  },
  {
    id: 2,
    title: "Food Menu App",
    img: "/feasty.png",
    description:
      "Feasty is an online platform that allows users to discover food from various restaurants. This project provides a frontend interface built with React.js to browse restaurants and their available meals, apply filters, and sort meals alphabetically.",
    live: "https://kenmusau-foodmenu.vercel.app/",
    github: "https://github.com/Ken-Musau/KennedyMusau-Frontend-Developer",
  },

  {
    id: 3,
    title: "Medical Appointment Planner",
    img: "/mediplan.png",
    description:
      "Healthcare Appointment Management System  aims to create an efficient and user-friendly platform for managing appointments between patients and doctors. This web application was be developed using Ruby on Rails for the backend and React for the frontend, providing a seamless experience for both patients and healthcare professionals.",
    live: "https://medi-plan-client.vercel.app/",
    github: "https://github.com/Ken-Musau/medi-plan-client",
  },
  {
    id: 4,
    title: "Movie Finder",
    img: "/moviefinder.png",
    description:
      "Movie Finder is a web application that allows users to search for movies by title. The application uses the OMDb API to retrieve movie information, including title, year, plot, and poster.",
    live: "https://ken-musau.github.io/Movie-Finder/",
    github: "https://github.com/Ken-Musau/Movie-Finder",
  },
  {
    id: 5,
    title: "Health Web App",
    img: "/healthapp.png",
    description:
      "MyHealth is a React-based health app that allows users to track their health goals and daily activities.",
    live: "https://wambuiwambugu.github.io/Group-8-Phase-2-project/",
    github: "https://github.com/Wambuiwambugu/Group-8-Phase-2-project",
  },
];

const ProjectCard = ({ project }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Project Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" id="Portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;
