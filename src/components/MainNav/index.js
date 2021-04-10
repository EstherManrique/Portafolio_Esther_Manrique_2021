import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <nav className="main-nav">
        <div>
          <ul id="js-menu">
            <li>
              <a href="./index.html">Inicio</a>
            </li>

            <li>
              <Link to="skills">Skills</Link>
            </li>
            <li>
              <Link to="projects">Proyectos</Link>
            </li>

            <li>
              <Link to="contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="hide-on-med-and-up">
          <div className="nav-burger" data-alloy-navbar-target="js-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
