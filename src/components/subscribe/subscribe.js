import React from "react"
import "./subscribe.css"

const Subscribe=()=>{
  

    return (
        <>
        
        <section>
        <h1 class="heading">
            <span>S</span>
            <span>U</span>
            <span>B</span>
            <span>S</span>
        
            <span>C</span>
            <span>R</span>
            <span>I</span>
            <span>B</span>
            <span>E</span>

        </h1>

      <div className="subscribe">
      
        <div className="subscribe-button">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p>Follow the adventures of Wildlife SOS as we save India’s elephants, leopards, bears and other amazing wildlife!</p>
        <div className="sub1">
        <div className="sub">
            <input type="text" placeholder="Enter your email" ></input>
            </div>
            <div className="sub">
            <input type="text" placeholder="enter your country" ></input>
            </div>
            <div className="sub">
            <button type="submit">Send</button>
            </div>
        </div>
        </div>
      </div>
 
         
</section>

        </>
    )
}



export default Subscribe;