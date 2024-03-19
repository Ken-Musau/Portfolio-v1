import Sidebar from "../sidebar/Sidebar";
import Links from "../sidebar/links/Links";
import "./navbar.scss";

import { motion } from "framer-motion";

function Navbar() {
  const links = ["Home", "Services", "Portfolio", "About", "Contacts"];
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          KenMusau
        </motion.span>

        <div
        // className="socials"
        >
          <Links classStyle="socials" />
          {/* {links.map((link) => (
            <a href={`#${link}`} key={link}>
              {link}
            </a>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
