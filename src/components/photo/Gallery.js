import React from "react";
import Card from "./Card";
import "./gallery.css"
import GalleryData from "./GalleryData";
import Footer from "../Footer/footer";
import HeadTitle from "../../common/Headtitle/Headtitle";

const Gallery=()=>{
return(
    
   <>
  <section>
    <HeadTitle></HeadTitle>
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
      <Footer></Footer>
      </>
)

}
export default Gallery;