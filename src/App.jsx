import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallx</section>
      <section>Services</section>
      <section id="About">About</section>
      <section id="Portfolio">Parallx</section>
      <section>Portfolio</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contacts">Contacts</section>
    </div>
  );
};

export default App;
