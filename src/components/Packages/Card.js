import React from "react"
import "./package.css"
import { NavLink } from "react-router-dom"

const Card=(props)=>{
  

    return (
        <>
     
       
       <div className="box">
       <img src={props.profile} alt="jjdhdhd"/>
        <div className="content">
        <h3> <i className="fas fa-map-marker-alt"></i>{props.name} </h3>
            <p>{props.desc}</p>
            <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> $90.00 <span>$120.00</span> 
                   
                </div>
                <div className="btn">
                <NavLink to="" className="btn">book now</NavLink>
                </div>
        </div>
           </div>


        </>
    )
}



export default Card;