import { Link as ScrollLink } from "react-scroll";

function MainPortfolio() {
  return (
    <section className="portfolio-hero" id="front-portfolio">
      <h1 id="main-name">Shiv Kumar</h1>
      <p id="main-p">full stack dev</p>
      <div className="role-underline"></div>

      <p id="main-p2">
        Passionate full-stack developer crafting intuitive digital experiences
        with modern technologies. Specializing in React, Node.js, and MongoDB to
        build scalable and user-centered applications.
      </p>

      <div className="hero-buttons">
        <ScrollLink id="herobtn1" to="contact" smooth={true}>
          Contact me
        </ScrollLink>
        <ScrollLink id="herobtn2" to="resume" smooth={true}>
          Resume
        </ScrollLink>
      </div>
    </section>
  );
}

export default MainPortfolio;
