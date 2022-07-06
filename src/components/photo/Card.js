import React from "react";
import "./gallery.css"

const Card=(props)=>{
  

    return (
        <>
      
          <div className="items">
            
                <img src={props.imgaes} alt='gallery_image'></img>
          
         <div className="title12">
          <h3>{props.title} </h3>
        </div>
          </div>


        </>
    )
}


export default Card;