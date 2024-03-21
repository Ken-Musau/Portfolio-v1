import Sidebar from "../sidebar/Sidebar";
import Links from "../sidebar/links/Links";
import "./navbar.scss";

import { motion } from "framer-motion";

function Navbar() {
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

        <div>
          <Links classStyle="socials" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
