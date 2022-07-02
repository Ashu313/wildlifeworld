import React from "react"
import data from "./picdata"
import "./pic.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Pic = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
   
      <section className='collection'>
        <div className='container-top1'>
        <Slider {...settings}>
            {data.map((value) => {
              return (
              
                <div className='box'>
                  <img src={value.cover} alt='as' />
                </div>
              )
            })}
        </Slider>
        </div>
      </section>
   
  )
}

export default Pic;