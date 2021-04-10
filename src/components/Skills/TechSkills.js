import React, { Fragment } from "react";
import Skill from "./Skill";

const TechSkills = () => {
  const skills = [
    {
      name: "HTML5",
      percentaje: 90,
    },
    {
      name: "CSS3",
      percentaje: 70,
    },
    {
      name: "Javascript",
      percentaje: 50,
    },
    {
      name: "React-JS",
      percentaje: 50,
    },
    {
      name: "Vue-JS",
      percentaje: 35,
    },
    {
      name: "Bootstrap",
      percentaje: 75,
    },
    {
      name: "Materialize",
      percentaje: 50,
    },
    {
      name: "Material UI",
      percentaje: 50,
    },
    {
      name: "Git/Git-Hub",
      percentaje: 60,
    },
    {
      name: "Figma",
      percentaje: 70,
    },
    {
      name: "Trello",
      percentaje: 70,
    },
    {
      name: "Trabajo remoto",
      percentaje: 95,
    },
  ];
  return (
    <Fragment>
      <div className="tech-skills">
        <div className="container">
          <h1 className="gradient-title">Tech Skills</h1>
          {skills.map((skill) => (
            <Skill key={skill.name} done={skill.percentaje} name={skill.name} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TechSkills;
