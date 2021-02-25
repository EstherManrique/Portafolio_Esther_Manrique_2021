import React, { Fragment } from 'react'
import TechSkill from './TechSkill'

const TechSkills = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="tech-skills">Tech Skills</h1>
        <h2>HTML</h2>
        <TechSkill done="90" />
        <h2>CSS</h2>
        <TechSkill done="70" />
        <h2>Javascript</h2>
        <TechSkill done="50" />
        <h2>React</h2>
        <TechSkill done="50" />
        <h2>Vue</h2>
        <TechSkill done="35" />
        <h2>Bootstrap</h2>
        <TechSkill done="75" />
      </div>
    </Fragment>
      

  )
}

export default TechSkills
