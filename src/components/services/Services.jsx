import "./services.scss";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import { GrVmMaintenance } from "react-icons/gr";

function Services() {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I Craft Innovative Solutions
          <br /> One tag at a Time
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <h1>Building Modern Innovative Solutions</h1>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <FaLaptopCode className="icon" />
          <h2>FrontEnd Development</h2>
          <p>
            Crafting captivating and responsive user interfaces using HTML, CSS,
            JavaScript, React, Tailwind CSS, and Sass. From intuitive design to
            performance optimization, I deliver websites that excel across all
            devices and browsers. Let's turn your vision into reality!
          </p>
        </div>

        <div className="box">
          <BsDatabaseCheck className="icon" />
          <h2>Backend Development</h2>
          <p>
            Specializing in building robust web applications using Ruby on Rails
            and Python with Flask. Crafting RESTful APIs, designing database
            schemas, or implementing complex business logic—I bring expertise to
            every project. Let's turn your ideas into powerful backend
            solutions!
          </p>
        </div>

        <div className="box">
          <GrVmMaintenance className="icon" />
          <h2>Maintenance and Support</h2>
          <p>
            Offering comprehensive maintenance and support services to keep your
            website secure, up-to-date, and performing optimally. From updates
            to security patches and troubleshooting, I handle all aspects of
            maintaining your website. Let's collaborate to ensure your website
            stays at its best!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
