import React, { Fragment } from 'react';
import Slider from "react-slick";
import { gsap, TimelineMax } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: dots => <div className="slider-home-dots" aria-label="dots slider change image"><ul>{dots}</ul></div>,
    onInit: () => {
      const name = document.getElementById('name');
      var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:0});
      tl.to(name, 2, {text:{value:"FrontEnd Developer"},delay:5});
      tl.to(name, 2, {text:{value:"Esther Manrique"},delay:2});
    } 
  };
  return (
    <Fragment>
      <div className="hero-slider">
        <Slider {...settings}>
          <div>
            <div className="hero-slick hero-slick-first">
              <span className="bg-gradient"></span>
              <div className="grid">
                <div className="name">
                  <h1 id="name">Esther Manrique</h1>
                  <h4>&lt;Laboratoria&gt;</h4>
                </div>
                <div className="heroImage">
                  <img src="assets/images/EM_1.jpg" alt="photographie portfolio" className="foto" id="photo"/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero-slick hero-slick-second" id="about_me">
              <span className="bg-gradient"></span>
              <div className="about-me-wrapper">
                <h2 className="about-me-title">About Me</h2>
                <p className="about-me-content">
                  Soy apasionada por naturaleza propia, entre las cosas que más me gustan en la vida, una de ellas es la programación, el diseño, desarrollo de software y páginas web.
                  Me encantan los retos, pero lo que más disfruto de ellos, es la busqueda y el logro de su correcta solución.
                  Me gusta perseguir mis sueños, lograr mis metas y pienso que no hay límites, sólo existen los que uno mismo se impone...
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
     
    </Fragment>
  )
}

export default HeroSlider
