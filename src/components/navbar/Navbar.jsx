import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span className="logo">&lt; KenMusau /&gt;</span>
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
