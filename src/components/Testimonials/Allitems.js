import React from "react";
import Tdata from "./Tdata";
import Card from "./Card";


const Allitems=()=>{
    return(
        <>
        <section>
        <h1 class="heading">
            <span>R</span>
            <span>E</span>
            <span>V</span>
            <span>I</span>
            
            <span>E</span>
            <span>W</span>
            

        </h1>
       
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