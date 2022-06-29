import React from "react"
import data from "./picdata"
import "./pic.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Pic = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
   
      <section className='collection'>
        <div className='container-top1'>
        <Slider {...settings}>
            {data.map((value) => {
              return (
              
                <div className='box'>
                  <img src={value.cover} alt='' />
                </div>
              )
            })}
        </Slider>
        </div>
      </section>
   
  )
}

export default Pic;