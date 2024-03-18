import "./navbar.scss";

import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          KenMusau
        </motion.span>

        <div className="socials">
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Portfolio</a>

          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
