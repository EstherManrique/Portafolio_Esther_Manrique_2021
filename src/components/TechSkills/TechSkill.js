import React, { Fragment, useState } from 'react'
import './styles.css';



const TechSkill = ({ done }) => {
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
      <div className="container" >
        <div className="progress">
          <div className="progress-done" style={style}>{done}%</div>
        </div>
      </div>




    </Fragment>
  )
}

export default TechSkill
