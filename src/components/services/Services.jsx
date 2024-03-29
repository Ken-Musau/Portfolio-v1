import "./services.scss";
import { motion } from "framer-motion";

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
          <h2>FrontEnd Development</h2>
          <p>
            I specialize in crafting engaging and responsive user interfaces
            using the latest frontend technologies. With expertise in HTML, CSS,
            JavaScript, React, Tailwind CSS, and Sass, I create seamless user
            experiences that captivate audiences across all devices and
            browsers. From intuitive UI designs to performance optimization and
            accessibility enhancements, I strive to deliver websites that not
            only look great but also drive results. Lets collaborate to bring
            your vision to life!
          </p>
        </div>

        <div className="box">
          <h2>Backend Development</h2>
          <p>
            With a focus on backend development, I specialize in building robust
            and scalable web applications using industry-leading technologies.
            My toolkit includes frameworks such as Ruby on Rails for rapid
            development and Python with Flask for lightweight and efficient
            solutions. Whether its crafting RESTful APIs, designing database
            schemas, or implementing complex business logic, I bring expertise
            and dedication to every project. Lets collaborate to turn your ideas
            into powerful backend solutions!
          </p>
        </div>

        <div className="box">
          <h2>Maintenance and Support</h2>
          <p>
            Ensuring your website remains secure, up-to-date, and performing
            optimally is crucial for your online presence. I offer comprehensive
            maintenance and support services to keep your website running
            smoothly. From regular updates to security patches, performance
            optimization, and troubleshooting, Ill handle all aspects of
            maintaining your website so you can focus on your core business.
            Lets work together to ensure your website stays at its best!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
