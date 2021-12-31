import React from 'react';
import CardProject from '../components/CardProject';
import SideBar from '../components/Menu';
import projetos from '../ProjectList';
import Slider from "react-slick";
import '../styles/Projects.css';

export default function Projects() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: dots => (
      <div
        style={{
          color: "#FFFFFF",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="projects-section" id="outer-container">
     <SideBar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div className="project-cards-div" id="page-wrap">
        <Slider { ...settings }>
          { projetos.map((project, i) => (
            <div key={i}>
              <CardProject project={ project } />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
