import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const MainNav = () => {
  useEffect(() => {
    gsapNavbar();
  }, []);
  const gsapNavbar = () => {
    const navBar = document.querySelector("[data-navbar]");
    if (navBar) {
      const anchors = navBar.querySelectorAll("a");
      const trigger = navBar.querySelector("[data-alloy-navbar-target]");
      let target = navBar.querySelector(trigger.dataset.alloyNavbarTarget);
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", () => {
          trigger.classList.toggle("open");
          target.classList.remove("active");
            gsap.to(target, {
              right: "-100%",
            });
        });
      });
      if (trigger) {
        trigger.addEventListener("click", () => {
          trigger.classList.toggle("open");
          if (target.classList.contains("active")) {
            target.classList.remove("active");
            gsap.to(target, {
              right: "-100%",
            });
          } else {
            target.classList.add("active");
            gsap.to(target, {
              right: "0",
            });
          }
        });
      }
    }
  };
  return (
    <div>
      <nav className="main-nav" data-navbar>
        <div>
          <ul id="js-menu">
            <li>
              <Link to="/"  className="hvr-underline-from-center">Inicio</Link>
            </li>

            <li>
              <Link to="skills" className="hvr-underline-from-center">Skills</Link>
            </li>
            <li>
              <Link to="projects" className="hvr-underline-from-center">Proyectos</Link>
            </li>

            <li>
              <Link to="contacto" className="hvr-underline-from-center">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="hide-on-med-and-up">
          <div className="nav-burger" data-alloy-navbar-target="#js-menu">
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
