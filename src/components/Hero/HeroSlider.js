import React, { Fragment } from 'react'

const HeroSlider = () => {
  return (
    <Fragment>
      <div className="hero-slider">
        <div>
          <img src="/assets/images/bg-1.jpg"  className="bg-image" alt="photographie of computer"/> 
          <span className="bg-gradient"></span>

          <div className="grid">
            <div className="name">
              <h1>Esther</h1>
              <h1>Manrique González</h1>
              <h2>Front End Developer</h2>
            </div>

            <div className="heroImage">
              <img src="/assets/images/User.jpg" alt="photographie portfolio"/>
            </div>
          </div>
        </div>

        <div>
          {/* About me */}
        </div>

      </div>
    </Fragment>
  )
}

export default HeroSlider
