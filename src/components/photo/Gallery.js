import React from "react";
import Card from "./Card";
import "./gallery.css"
import GalleryData from "./GalleryData";

const Gallery=()=>{
return(
    
   
  <section>
      <h1 class="heading">
            <span>G</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            
            <span>E</span>
            <span>R</span>
            <span>Y</span>

        </h1>

  <div className="ss">
  
     <div className='gallery top'>
        <div className='container-grid'>
          {GalleryData.map((value) => {
            return <Card imgaes={value.img} title={value.title} />
          })}
        </div>
        </div>
    </div>
   </section>
)

}
export default Gallery;