import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contactVariant = {
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

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jhve53l", "template_38uvypd", formRef.current, {
        publicKey: "PYyvqYafIsq7OeNsW",
      })
      .then(
        () => {
          setSuccess(true);
          // console.log("SUCCESS!");
        },
        (error) => {
          // setError("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      variant={contactVariant}
    >
      <motion.div className="textContainer" variants={contactVariant}>
        <h1>Get in Touch</h1>
        <motion.div className="contact-method" variants={contactVariant}>
          <h2>Mail</h2>
          <span>kennedy.musauu@gmail.com</span>
        </motion.div>
        <motion.div className="contact-method" variants={contactVariant}>
          <h2>Phone Number</h2>
          <span>+254 799 030 009</span>
        </motion.div>

        <motion.div className="socials" variants={contactVariant}>
          <div className="social">
            <a
              href="https://github.com/kenmusau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="social">
            <a
              href="https://twitter.com/kenmusau_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/kennedy-musau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={contactVariant}>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Write Your Message" name="message" />

          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
