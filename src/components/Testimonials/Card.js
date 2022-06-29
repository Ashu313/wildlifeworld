import React from "react"
import "./testi.css"

const Card=(props)=>{
  

    return (
        <>
        
       <div className="box">
    <i className="fa fa-quote-left"></i>
        <div className="description">
            <p>{props.desc}</p>
        </div>
    
        <div className="name-details">
            <div className="img1">
                <img src={props.profile} alt="jjdhdhd"/>
            </div>
            <div className='name'>
                <h3>{props.name}</h3>
                <span>{props.post}</span>
              </div>
        </div>
    </div>
         


        </>
    )
}



export default Card;