

import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">

        <span className="navbar-brand">{"<>"} Portfolio</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <ScrollLink className="nav-link" to="front-portfolio" smooth={true}>
                Home
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink className="nav-link" to="projects" smooth={true}>
                Projects
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink className="nav-link" to="techStack" smooth={true}>
                Tech
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" smooth={true}>
                Contact
              </ScrollLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;