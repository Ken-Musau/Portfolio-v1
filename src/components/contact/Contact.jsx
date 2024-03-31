import "./contact.scss";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Get in Touch</h1>
        <div className="contact-method">
          <h2>Mail</h2>
          <span>kennedy.musauu@gmail.com</span>
        </div>
        <div className="contact-method">
          <h2>Phone Number</h2>
          <span>+254 799 030 009</span>
        </div>

        <div className="socials">
          <div className="social">
            <span>
              <FaGithub />
            </span>
            <a
              href="https://github.com/Ken-Musau"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="social">
            <span>
              <FaXTwitter />
            </span>
            <a
              href="https://twitter.com/kenmusau_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="social">
            <span>
              <FaLinkedin />
            </span>
            <a
              href="https://www.linkedin.com/in/kennedy-musau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Write Your Message" />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
