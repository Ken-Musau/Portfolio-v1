import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Cursor />
        <Navbar />
        <Hero />
      </section>
      <section>
        <Services />
      </section>

      <Portfolio />

      {/* <section id="Contacts">
        <Contact />
      </section> */}
      {/* <section id="About">About</section> */}
    </div>
  );
};

export default App;
