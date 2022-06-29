import React from "react";
import Tdata from "./Tdata";
import Card from "./Card";


const Allitems=()=>{
    return(
        <>
        <section>
         <h4>Testimonial</h4>
        <div className="container-review">
            {Tdata.map((value,index)=>{
                return <Card key={index}{...value}/>
            })}
        </div>
        </section>
        </>
    )
}

export default Allitems;