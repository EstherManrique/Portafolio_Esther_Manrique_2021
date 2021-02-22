import React from 'react'

const MainNav = () => {
  return (
    <div>
      <nav className="main-nav">
        <div>
          <ul id="js-menu">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./sobre_mi.html">Sobre Mí</a></li>
            <li><a href="./tech_skills.html">Tech Skills</a></li>
            <li><a href="./soft_skills.html">Soft Skills</a></li>
            <li><a href="./proyectos.html">Proyectos</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
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
  )
}

export default MainNav;
