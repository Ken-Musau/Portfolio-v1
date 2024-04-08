import "./hero.scss";

import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 1,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 0.9,
    transition: { duration: 3 },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      staggerChildren: 0.1,
    },
  },
};
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Kennedy Musau</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href="#Portfolio"
              variants={textVariants}
              className="btn draw-border"
            >
              See latest works
            </motion.a>
            {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
            <motion.a href="#Contacts" variants={textVariants}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="imageContainer"
        >
          <motion.img variants={imageVariants} src="/passport.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        K3nMusau - WebDev.
      </motion.div>
    </div>
  );
}

export default Hero;
