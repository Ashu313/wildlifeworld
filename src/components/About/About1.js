import React from "react";
import AboutCard from "./AboutCard";
import "./about.css"
import { NavLink } from "react-router-dom";
import Footer from "../Footer/footer";
import Headtitle from "../../common/Headtitle/Headtitle";

const About1=()=>{

 
    return(
        <>
         <Headtitle></Headtitle>
        <section>
       <AboutCard></AboutCard>
       <div className='aboutcard  flex_space'>
     
     <div className='row row1'>
       <h4>
OUR APPROACH TO SAVING WILDLIFE</h4>
    <p>Our mission has three key areas of focus:</p>
      <ul>
      <li>conservation and protection of wild populations and habitat</li>

<li>(2) rescue of injured and displaced wildlife, and care for captive populations</li>

<li>(3) research to better protect and care for wildlife.</li>
</ul>

<p>But protecting and caring for wildlife isn’t enough. Lasting solutions also address alternative livelihoods for people and communities who have traditionally relied on wildlife exploitation to survive.</p>
       
    <div className="btn1">
       <button className='secondary-btn'>
         Explore More <i className='fas fa-long-arrow-alt-right'></i>
       </button>
       </div>
     </div>
     <div className='row image'>
       <img src='https://wildlifesos.org/wp-content/uploads/2020/03/wildlife-sos-approach.png' alt='' />
       
    
     </div>
   </div>
   <div className='aboutcard  flex_space'>
     
     <div className='row row1'>
       <h4>Locations</h4>
       <h1>
         We <span>provide Solution</span> to grow your business
       </h1>
      
<ul>
    <li>Agra Bear Rescue Facility</li>
    <li>Bannerghatta Bear Rescue Centre</li>
    <li>Dachigam Rescue Centre</li>
    <li>Elephant Conservation and Care Centre</li>
    <li>Elephant Hospital Campus</li>
    <li>Elephant Rehabilitation Centre</li>
    <li>Human Primate Conflict Mitigation Centre
</li>
    <li>Manikdoh Leopard Rescue Centre</li>
    <li>Pahalgam Rescue Centre</li>

<li>Wildlife SOS Transit Facility </li>
   
   
</ul>
<div className="btn1">
       <NavLink to="/About"><button className='secondary-btn'>
         Explore More <i className='fas fa-long-arrow-alt-right'></i>
       </button></NavLink>
       </div>
     </div>
     <div className='row image'>
       <img src='https://wildlifesos.org/wp-content/uploads/2021/11/map-websitte.png' alt='' />
       <div className='control-btn'>
         <button className='prev'>
           <i className='fas fa-play'></i>
         </button>
       </div>
    
     </div>
   </div>
   </section>
<Footer></Footer>
   
       </>
    )
}
export default About1;