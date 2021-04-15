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
              Aplicación diseñada para <strong> tablet (Ipad Pro) </strong> con el
              objetivo de facilitar la comunicación entre meseros, cocina y
              caja, optimizando tiempos para brindar un mejor servicio. La App
              tiene dos roles de usuario: Meseros y Cocina.
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
                Figma, HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Firebase
                (Firestore), Git &amp; Github (Projects, Issues, Labels).
              </div>
            </div>
            <div className="project-image text-centered v-align-center">
              <a
                href="https://esthermanrique.github.io/CDMX009-BurgerQueen"
                target="_blank "
              >
                <img src="assets/images/tablets2.png" alt="" />
              </a>
            </div>
            <div className="project-links">
              <a
                href="https://esthermanrique.github.io/CDMX009-BurgerQueen"
                target="_blank "
              >
                <img src="assets/icons/enlace2.png" alt="" />
              </a>
              <a
                href="https://github.com/EstherManrique/CDMX009-BurgerQueen"
                target="_blank "
              >
                <img src="assets/icons/github2.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-item bg-gray">
          <div className="container">
            <h3 className="text-centered">Social Network</h3>
            <div className="grid">
              <div className="project-image-1 text-centered v-align-center">
                <a
                  href="https://esthermanrique.github.io/CDMX009-Social-Network/src/"
                  target="_blank "
                >
                  <img src="assets/images/mobile.png" alt="" />
                </a>
              </div>
              <div>
                <p>
                  La aplicación es una Red Social pensada en los amantes del
                  código. Con el objetivo de crear un espacio donde la comunidad Tech pueda compartir información y conocimientos.
                </p>
                <div className="project-objectives">
                  <h4 className="is-green">Objetivos:</h4>
                  <ol>
                    <li>
                      Conectar a usuarios interesados en el mundo de la tecnología.
                    </li>
                    <li>
                    Crear, Leer, Actualizar y/o Borrar sus Post o imágenes.
                    </li>
                    <li>
                    Leer y comentar los post de otros usuarios.
                    </li>
                  </ol>
                </div>                
                <div className="project-results">
                  <h4 className="is-green">Resultados:</h4>
                  <ol>
                    <li>
                      Mantener conectados a los usuarios.
                    </li>
                    <li>
                      Compartir experiencias, conocimientos e información.
                    </li>
                    <li>
                      Crear, leer, editar, actualizar y borrar publicaciones.
                    </li>
                  </ol>
                </div>
              
                <p>
                  Es un proyecto colaborativo por lo que usamos Trello para la
                  planeación y Github para el control de versiones de código.
                </p>

                <div className="project-tech">
                  <h4>Tech:</h4>
                  <div className="project-tech-list">
                    Figma, HTML5, CSS3, JavaScript, Materialize, Firebase,
                    Firestore, Github colaborativo, SPA, MVC, Responsive Design.
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://esthermanrique.github.io/CDMX009-Social-Network/src/"
                    target="_blank "
                  >
                    <img src="assets/icons/enlace2.png" alt="" />
                  </a>
                  <a
                    href="https://github.com/esthermanrique/CDMX009-Social-Network"
                    target="_blank "
                  >
                    <img src="assets/icons/github2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div className="project-item">
          <div className="container">
            <h3 className="text-centered">Data Lovers</h3>
            <div className="grid">
              <div>
              <p>Aplicación para el manejo de datos, visualización de gráficas y tablas de información.
              
              Los usuarios pueden visualizar la data de Personas heridas por medio de transporte en EEUU, seleccionando el tipo de transporte y el período. La aplicación les mostrará como resultado de su solicitud, la data representada en una <strong>Gráfica de Pie 3D y una lineal, así como la tabla correspondiente a los datos.</strong>
              </p>
                <div className="project-objectives">
                  <h4 className="is-green">Objetivos:</h4>
                  <ol>
                    <li>
                      Diseñar y construir una interfaz web donde se pueda visualizar y manipular data.
                    </li>
                    <li>
                      Permitir al usuario interactuar con la interfaz para obtener la información que necesita.
                    </li>
                  </ol>
                </div>
                
                <div className="project-results">
                  <h4 className="is-green">Resultados:</h4>
                  <ol>
                    <li>
                      La interacción del usuario con la interfaz
                    </li>
                    <li>
                      Filtrar la informacion por tipo de transporte y periodo.
                    </li>
                    <li>
                      Visualizar la solicitud del usuario en forma de gráficas así como la tabla correspondiente a la data.
                    </li>
                  </ol>
                </div>
                <div className="project-tech">
                  <h4>Tech:</h4>
                  <div className="project-tech-list">
                   Figma, HTML5, CSS3, JavaScript y Google Charts.
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://esthermanrique.github.io/CDMX009-Data-Lovers/src/"
                    target="_blank "
                  >
                    <img src="assets/icons/enlace2.png" alt="" />
                  </a>
                  <a
                    href="https://github.com/EstherManrique/CDMX009-Data-Lovers"
                    target="_blank "
                  >
                    <img src="assets/icons/github2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="project-image-2 text-centered v-align-center">
                <a
                  href="https://esthermanrique.github.io/CDMX009-Data-Lovers/src/"
                  target="_blank "
                >
                  <img src="assets/images/laptop2.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item bg-gray">
          <div className="container">
            <h3 className="text-centered">Cipher</h3>
            <div className="grid">
              <div className="project-image-1 text-centered v-align-center">
                <a
                  href="https://esthermanrique.github.io/CDMX009-cipher/src/"
                  target="_blank "
                >
                  <img src="assets/images/macbookpro.png" alt="" />
                </a>
              </div>
              <div>
              <p>Aplicación para la generación de sellos digitales y facturación electrónica. Mediante el cifrado y descifrado de clabes.
              Los usuarios son  los Contribuyentes (Personas físicas y morales), que pagan impuestos y facturan sus productos y/o servicios.
              Con esta aplicación y por medio de un despacho de contadores, obtener ante la SHCP la autorización para la generación de sellos digitales que incluye la facturación electrónica. 
              </p>
                <div className="project-objectives">
                  <h4 className="is-green">Objetivos:</h4>
                  <ol>
                    <li>
                      Crear una interfaz para registro y alta de usuarios.
                    </li>
                    <li>
                      Cifrado de plabara clabe.
                    </li>
                  </ol>
                </div>                
                <div className="project-results">
                  <h4 className="is-green">Resultados:</h4>
                  <ol>
                    <li>
                      Generacion de clabes mediante Cifrado Cesar (Caesar Cipher).
                    </li>
                  </ol>
                </div>
                <div className="project-tech">
                  <h4>Tech:</h4>
                  <div className="project-tech-list">
                    Figma, HTML5, CSS3 y JavaScript.
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://esthermanrique.github.io/CDMX009-cipher/src/"
                    target="_blank "
                  >
                    <img src="assets/icons/enlace2.png" alt="" />
                  </a>
                  <a
                    href="https://github.com/EstherManrique/CDMX009-cipher"
                    target="_blank "
                  >
                    <img src="assets/icons/github2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
