import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Kennedy Musau</h2>
          <h1>Software Developer</h1>
          <div className="buttons">
            <button>See latest works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/passport.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
