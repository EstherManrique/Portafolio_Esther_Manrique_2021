import React, { Fragment } from "react";

const Contacto = () => {
  return (
    <Fragment>
      <div className="contacto">
        <div className="bg-gradient"></div>
        <div className="contacto-texto">
          <div className="contacto-info">
            <div className="datos-contacto">
              <h1>¿Trabajamos juntos?</h1>
            </div>
            <div className="email">
              <a href="mailto:dev.publicidadweb@gmail.com" target="_blank ">
                <img src={process.env.PUBLIC_URL + "/assets/icons/email.svg"} alt="" />
                <span>dev.publicidadweb@gmail.com</span>
              </a>
            </div>
            <div className="whatsapp">
              <a href="tel:5528529983">
              <img src={process.env.PUBLIC_URL + "/assets/icons/whatsapp.png"} alt="" />
              <span>55 2852 9983</span>
              </a>
            </div>
            <div className="git-hub">
              <a href="https://github.com/EstherManrique?tab=repositories" target="_blank ">
                <img src={process.env.PUBLIC_URL + "/assets/icons/github.svg"} alt=""/>
                <span>https://github.com/EstherManrique?tab=repositories</span>
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/esther-manrique/" target="_blank " >
                <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin.svg"} alt="" />
                <span>https://www.linkedin.com/in/esther-manrique/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacto;
