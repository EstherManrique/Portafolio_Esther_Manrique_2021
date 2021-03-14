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
    appendDots: dots => <div className="slider-home-dots" aria-label="dots slider change image"><ul>{dots}</ul></div>,
    /* beforeChange: (oldIndex, newIndex) => {
      const image = document.querySelector('#photo');
      if(oldIndex === 0){
        gsap.fromTo(image,
          {
            autoAlpha: 1
          },
          {
            autoAlpha: 0,
            duration: 2
          }
        );
      }
      if(oldIndex === 1){
        gsap.fromTo(image,
          {
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            duration: 2
          }
        );
      }
    },*/
    
    onInit: () => {
      const name = document.getElementById('name');
      var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:0});
      tl.to(name, 2, {text:{value:"FrontEnd Developer"},delay:2});
      tl.to(name, 2, {text:{value:"Esther Manrique"},delay:4});

      const image = document.querySelector('#photo');
      gsap.fromTo(image,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 4
        }
      );
    } 
  };
  return (
    <Fragment>
      <div className="hero-slider">
        <Slider {...settings}>
          <div>
            <div className="hero-slick hero-slick-first">
              <picture>
                <source srcSet="/assets/images/coding.png" media="(min-width: 1024px)" />
                <source srcSet="/assets/images/coding-tablet.png" media="(min-width: 768px)" />
                <img src="/assets/images/coding-mobile.png" alt="logo" />
              </picture>
              <span className="bg-gradient"></span>
              <div className="grid">
                <div className="name">
                  <h1 id="name">Esther Manrique</h1>
                  <h4>&lt;Laboratoria&gt;</h4>
                </div>
                <div className="heroImage">
                  <img src="/assets/images/EM_1.jpg" alt="photographie portfolio" className="foto" id="photo"/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero-slick hero-slick-second">
            <picture>
                <source srcSet="/assets/images/laptop-wall.png" media="(min-width: 1024px)" />
                <source srcSet="/assets/images/laptop-wall-tablet.png" media="(min-width: 768px)" />
                <img src="/assets/images/laptop-wall-mobile.png" alt="logo" />
              </picture>
              <span className="bg-gradient"></span>
              <div className="about-me-wrapper">
                <h2 className="about-me-title">About Me</h2>
                <p className="about-me-content">
                  Soy apasionada por naturaleza propia, entre las cosas que más me gustan en la vida, una de ellas es la programación, el diseño, desarrollo de software y páginas web.
                  Me encantan los retos, pero lo que más disfruto de ellos, es la busqueda y el logro de su correcta solución.
                  Me gusta perseguir mis sueños, lograr mis metas y pienso que no hay limites, sólo existen los que uno mismo se impone...
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="arrow-scroll">
          <span>Scroll Down <i className="fas fa-arrow-down"></i></span>
        </div>
      </div>
     
    </Fragment>
  )
}

export default HeroSlider
