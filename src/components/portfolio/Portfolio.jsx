import "./portfolio.sass";
import { motion, useScroll } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Movie Finder",
    img: "/moviefinder.png",
    description:
      "Movie Finder is a web application that allows users to search for movies by title. The application uses the OMDb API to retrieve movie information, including title, year, plot, and poster.",
  },
  {
    id: 2,
    title: "Food Menu App",
    img: "/feasty.png",
    description:
      "Feasty is an online platform that allows users to discover food from various restaurants. This project provides a frontend interface built with React.js to browse restaurants and their available meals, apply filters, and sort meals alphabetically.",
  },
  {
    id: 3,
    title: "Medical Appointment Planner",
    img: "/mediplan.png",
  },
  {
    id: 4,
    title: "Health Web App",
    img: "/healthapp.png",
    description:
      "Healthcare Appointment Management System project aims to create an efficient and user-friendly platform for managing appointments between patients and doctors. This web application will be developed using Ruby on Rails for the backend and React for the frontend, providing a seamless experience for both patients and healthcare professionals.",
  },
  {
    id: 5,
    title: "Lounge Web App",
    img: "/lounge.png",
    description:
      "Lounge an online marketplace that connects space owners with individuals seeking unique venues for their meetings, events, or activities. This README provides an overview of the project and guides you on setting it up and running.",
  },
];

const ProjectCard = ({ project }) => {
  return <section>{project.title}</section>;
};

function Portfolio() {
  cons;
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressbar"></div>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;
