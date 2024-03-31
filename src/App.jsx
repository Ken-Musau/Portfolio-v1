import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>

      <section id="Contacts">
        <Contact />
      </section>
      {/* <section id="About">About</section> */}
    </div>
  );
};

export default App;
