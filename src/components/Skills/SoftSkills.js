import React, { Fragment } from "react";

const SoftSkills = () => {
  
  return (
    <Fragment>
      <div className="soft-skills">
        <h1 className="gradient-title">Soft Skills</h1>
        <ul className="soft-icons">
          <li>
            <img src="/assets/icons/brain.svg" alt=""/>
            Autoaprendizaje
          </li>
          <li>
            <img src="/assets/icons/partnership.svg" alt=""/>
            Trabajo en equipo
          </li>
          <li>
            <img src="/assets/icons/brainstorm_ok.png" alt=""/>
            Mentalidad de crecimiento
          </li>
          <li>
            <img src="/assets/icons/brainstorming.svg" alt=""/>
            Mentalidad y cultura ágil
          </li>
          <li>
            <img src="/assets/icons/feedback.svg" alt=""/>
            Comunicción eficaz y asertiva 
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SoftSkills;
