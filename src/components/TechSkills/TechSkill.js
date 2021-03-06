import React, { Fragment, useState } from 'react'

const TechSkill = ({ done, name }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(newStyle);
    
  }, 1000);
  return (
    <Fragment>
      <div className="container">
        <div className="tech-name">{name}</div>
        <div className="progress">
          <div className="progress-done" style={style}>{done}%</div>
        </div>
      </div>
    </Fragment>
  )
}

export default TechSkill
