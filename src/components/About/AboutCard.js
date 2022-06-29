import React from "react"
import "./about.css"
import { NavLink } from "react-router-dom";


const AboutCard = () => {
  return (
    
    <>
      <div className='aboutcard  flex_space'>
     
      <div className='row image'>
          <img src='https://wildlifesos.org/wp-content/uploads/2020/03/wildlife-sos-mission.jpg' alt='' />
          <div className='control-btn'>
         
          </div>
       
        </div>
        <div className='row row1'>
          <h4> OUR VISION</h4>
          
           
          
         <p> We <span>provide Solution</span> to grow your business</p>
<p>Coexisting in the same landscape in a manner in which both conservation and welfare is addressed for man and wildlife.</p>

<h4>OUR MISSION</h4>
<p>Wildlife SOS was established to make lasting change to protect and conserve India’s natural heritage, forest and biodiversity. We actively work towards protecting Indian wildlife, conserving habitat, studying biodiversity, conducting research and creating alternative and sustainable livelihoods for erstwhile communities that depend on wildlife for sustenance.</p>
      
      <div className="btn1"> <NavLink to="/about"> <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button></NavLink>
          </div>
        </div>
       
      </div>


    
      
     
   
    </>
  )
}


export default AboutCard;