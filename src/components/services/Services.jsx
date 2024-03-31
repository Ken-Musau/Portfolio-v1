import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import { GrVmMaintenance } from "react-icons/gr";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Craft Innovative Solutions
          <br /> One tag at a Time
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>Building Modern Innovative Solutions</h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <FaLaptopCode className="icon" />
          <h2>FrontEnd Development</h2>
          <p>
            Crafting captivating and responsive user interfaces using HTML, CSS,
            JavaScript, React, Tailwind CSS, and Sass. From intuitive design to
            performance optimization, I deliver websites that excel across all
            devices and browsers. Let&apos;s turn your vision into reality!
          </p>
        </motion.div>

        <motion.div className="box">
          <BsDatabaseCheck className="icon" />
          <h2>Backend Development</h2>
          <p>
            Specializing in building robust web applications using Ruby on Rails
            and Python with Flask. Crafting RESTful APIs, designing database
            schemas, or implementing complex business logic—I bring expertise to
            every project. Let&apos;s turn your ideas into powerful backend
            solutions!
          </p>
        </motion.div>

        <motion.div className="box">
          <GrVmMaintenance className="icon" />
          <h2>Maintenance and Support</h2>
          <p>
            Offering comprehensive maintenance and support services to keep your
            website secure, up-to-date, and performing optimally. From updates
            to security patches and troubleshooting, I handle all aspects of
            maintaining your website. Let&apos;s collaborate to ensure your
            website stays at its best!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
