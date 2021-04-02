import React, { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <div className="projects">
        <h1 className="gradient-title">Proyectos</h1>
          <div className="project-item">
            <div className="container">
            <h3 className="text-centered">Burger Queen</h3>
            <p>
              Aplicación diseñada para tablet (Ipad Pro) con el objetivo de
              facilitar la comunicación entre meseros, cocina y caja,
              optimizando tiempos para brindar un mejor servico. La App tiene
              dos roles de usuario: Meseros y Cocina.
            </p>
            <div className="grid">
              <div className="project-objectives">
                <h4 className="is-green">Objetivos:</h4>
                <ol>
                  <li>
                    Tomar las ordenes a los comensales de forma rápida y
                    eficiente.
                  </li>
                  <li>Agilizar la comunicación entre mesero, cocina y caja.</li>
                </ol>
              </div>
              <div className="project-results">
                <h4 className="is-green">Resultados:</h4>
                <ol>
                  <li>
                    Menos margen de error en la preparación de los alimentos.
                  </li>
                  <li>Mayor exactitud al registrar el consumo en caja.</li>
                  <li>Menos tiempo de espera para los comensales.</li>
                </ol>
              </div>
            </div>
            <div className="project-tech">
              <h4>Tech:</h4>
              <div className="project-tech-list">
                Figma, HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Firebase (Firestore), Git &amp; Github (Projects, Issues, Labels).
              </div>
            </div>
            <div className="project-links">
              <a href="https://esthermanrique.github.io/CDMX009-BurgerQueen" target="_blank ">
                <img src="/assets/icons/enlace2.png" alt=""/>
              </a>
              <a href="https://github.com/EstherManrique/CDMX009-BurgerQueen" target="_blank ">

              <img src="/assets/icons/github2.png" alt=""/>
              </a>
            </div>
            <div className="project-image">
              <img src="/assets/images/tablets.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
