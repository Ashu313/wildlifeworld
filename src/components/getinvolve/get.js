import React from "react";
import Slider from "react-slick";
import CardsData from "./cardsdata";
import Cards from "./card";
import "./get.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Get=()=>{
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
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
  return(
      
     <>
    <section className="eeee">
       
  
    <div className="ss">
    
       <div className='gallery top'>
   
          <div className='containerdata'>
          <Slider {...settings}>
            {CardsData.map((value) => {
              return <Cards imgaes={value.image}  />
            })}
            </Slider>
          </div>
         
        </div>
  
     
         
            </div>
     
     </section>
     
     </>
  );
          }
  
  export default Get;