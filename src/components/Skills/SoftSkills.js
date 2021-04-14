import React, { Fragment, useEffect } from "react";
import { TimelineLite } from "gsap/all";

const SoftSkills = () => {
  useEffect(() => {
    const softSkillWrapper = document.querySelector(".soft-skills");
    const softSkills = document.querySelectorAll(".soft-icons li");

    let tl = new TimelineLite();
    softSkills.forEach((skill) => {
      let child = new TimelineLite();

      child.fromTo(
        skill,
    
        {
          autoAlpha: 0,
          scrollTrigger: softSkillWrapper
        },
  
        {
          autoAlpha: 1,
          duration: 1,
        }
      );
      tl.add(child);
    });
  }, []);
  
  return (
    <Fragment>
      <div className="soft-skills">
        <h1 className="gradient-title">Soft Skills</h1>
        <ul className="soft-icons">
          <li>
            <img src="/assets/icons/brain.png" alt="" />
            Autoaprendizaje
          </li>
          <li>
            <img src="/assets/icons/partnership.png" alt="" />
            Trabajo en equipo
          </li>
          <li>
            <img src="/assets/icons/brainstorm_ok.png" alt="" />
            Mentalidad de crecimiento
          </li>
          <li>
            <img src="/assets/icons/brainstorming.png" alt="" />
            Mentalidad y cultura ágil
          </li>
          <li>
            <img src="/assets/icons/feedback.png" alt="" />
            Comunicción eficaz y asertiva
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SoftSkills;
