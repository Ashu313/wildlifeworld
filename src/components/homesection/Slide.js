import React from "react";
import { useState } from "react";
import "./slide.css"

import ImageData from "./ImageData";


/*<section className="slide-form">
      <div className="container">
        <h2>Enjoy the hoilday</h2>
        <span>search and book hotel</span>
      </div>
      <form>
        <input type='text' placeholder="Search here"></input>
        <div className="flex_space">
          <input type='number' placeholder='adult(18+)'></input>
          <input type='number' placeholder='childeren(0-17yrs)'></input>
        </div>
        <div className="flex_space">
          <input type='number' placeholder='adult(18+)'></input>
          <input type='number' placeholder='childeren(0-17yrs)'></input>
        </div>
        
        <input type='number' placeholder='rooms'></input>
          <input type='submit' value='search-here' className='submit'></input>
      </form>
     </section>
*/
const Home=({slides})=>{

    const [current,setCurrent]=useState(0);
    const length=slides.length;

    const nextSlide=()=>{
setCurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
            }

    return(
      <>
       
     <section className="slider">
     <div className="control-btn">
  <button className="prev" onClick={prevSlide}>
<i className="fas fa-caret-left"></i>
  </button>
  <button className="next" onClick={nextSlide}>
<i className="fas fa-caret-right"></i>
  </button>
   {
    ImageData.map((slide,index)=>{

        return(
            <div className={index===current?"silde active":"slide"} key={index}>
                {index===current && <img src={slide.image} alt="home-page"/>}
                </div>
        )
    })
   }
     </div>
     </section>

     

     </>
        
    )

}
export default Home;