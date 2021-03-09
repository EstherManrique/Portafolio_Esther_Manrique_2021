import React, { Fragment } from 'react'
import TechSkill from './TechSkill'

const TechSkills = () => {
  const skills = [
    {
      'name': 'HTML',
      'percentaje': 90
    },
    {
      'name':'CSS',
      'percentaje': 70
    },
    {
      'name':'Javascript',
      'percentaje': 50},
    {
      'name':'React',
      'percentaje': 50},
    {
      'name':'Vue',
      'percentaje': 35},
    {
      'name':'Bootstrap',
      'percentaje': 75},
    {
      'name':'Materialize/Material UI',
      'percentaje': 50},
    {
      'name':'Git',
      'percentaje': 60},
    {
      'name':'Firebase',
      'percentaje': 50},
    {
      'name':'Figma',
      'percentaje': 70},
    {
      'name':'Trello',
      'percentaje': 70}
  ];
  return (
    <Fragment>
      <div className="tech-skills">
        <h1 className="tech-skills-title">Tech Skills</h1>
        { skills.map((skill) => 
          <TechSkill key={skill.name} done={skill.percentaje} name={skill.name} />
        )}
      </div>
    </Fragment>
      

  )
}

export default TechSkills
