import React, { Fragment } from 'react'
import Slider from "react-slick";


const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Fragment>
      <div className="hero-slider">
      <Slider {...settings}>
        <div>
          <div className="hero-slick hero-slick-first">
            <img src="/assets/images/Compu_1.jpg"  className="bg-image" alt="photographie of computer"/> 
            <span className="bg-gradient"></span>

            <div className="grid">
              <div className="name">
                <h1>Esther Manrique</h1>
                <h4>Front End Developer</h4>
              </div>

              <div className="heroImage">
                <img src="/assets/images/EM_1.jpg" alt="photographie portfolio" className="foto"/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="hero-slick hero-slick-second">
            <img src="/assets/images/codigo_6.jpg"  className="bg-image" alt="photographie of computer"/> 
            <span className="bg-gradient"></span>

            <h2 className="about-me-title">About Me</h2>

            <p className="about-me-content">
              Soy apasionada por naturaleza propia, entre las cosas que más me gustan en la vida, una de ellas es la programación, el diseño, desarrollo de software y páginas web.
              Me encantan los retos, pero lo que más disfruto de ellos, es la busqueda y el logro de su correcta solución.
              Me gusta perseguir mis sueños, lograr mis metas y pienso que no hay limites, sólo existen los que uno mismo se impone.....
            
            </p>
          </div>
        </div>
        </Slider>
      </div>
    </Fragment>
  )
}

export default HeroSlider
