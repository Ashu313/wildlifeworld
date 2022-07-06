import React from "react";
import Tdata from "./packagedata";
import Card from "./Card";
import HeadTitle from "../../common/Headtitle/Headtitle";


const Allitems=()=>{
    return(
        <>
        <section>
            <HeadTitle></HeadTitle>
        <h1 class="heading">
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>S</span>
            

        </h1>
       
        <div className="box-container">
            {Tdata.map((value,index)=>{
                return <Card key={index}{...value}/>
            })}
        </div>
        </section>
        </>
    )
}

export default Allitems;