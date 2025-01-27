import React from "react";
import Slider from "react-slick";
import men from './../assets/men.png'
import beg from './../assets/beg.png'
import women from './../assets/women.png'
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay : true ,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <img src={men}/>
      </div>
      <div>
       <img src={women} />
      </div>
      <div>
       <img src={beg} />
      </div>
     
    </Slider>
  );
}