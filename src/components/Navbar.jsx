import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="brand-icon">{"<>"}</span>
          <span className="brand-text"> Portfolio</span>
        </Link>

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
              <ScrollLink className="nav-link" to="front-portfolio" smooth={true} duration={200}>
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="projects"  smooth={true} duration={200}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="techStack" smooth={true} duration={200}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" smooth={true} duration={200}>
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
