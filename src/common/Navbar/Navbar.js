

import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";import "./Navbar.css"


import Modal from "../modals/modals";
/*
   <div className="container">
<div className={click?"nav-menu1 active":"nav-menu1"}>
       <div className="login-area">
       <NavLink to="/Sign-in" ><i class="fa-solid fa-chevron-right"></i>Sign-in</NavLink>
       </div>
   
       <div className="register-area">
       <NavLink to="/Register" >
       <i class="fa-solid fa-chevron-right"></i> Register</NavLink>
       </div>
      
       </div>

         
   
       
   </div>*/

   /*<div className="container-fluid flex_space ">

<div className="logo">
  <img src="https://wildlifesos.org/wp-content/uploads/2020/11/wsos-Bear-Logo-border-85x130-1.png" alt="animalphoto"></img>
</div>

<div className="contact-details flex_space">
<div className="box flex_space">
  <div className="icons">
    <i className="fas fa-clock"></i>
  </div>
  <div className="text">
    <h3>working hours</h3>
    <NavLink to='/contact'>Monday to sunday :9.00am to 9:00pm</NavLink>
  </div>
</div>

<div className="box flex_space">
  <div className="icons">
    <i className="fas fa-phone-volume"></i>
  </div>
  <div className="text">
    <h3>Call Us</h3>
    <NavLink to='/contact'>+01001010101010</NavLink>
  </div>
  </div>
  <div className="box flex_space">
  <div className="icons">
    <i className="fas fa-envelope"></i>
  </div>
  <div className="text">
    <h3>Mail Us</h3>
    <NavLink to='/contact'>Kashutosh727@gmail.com</NavLink>
  </div>
</div>
</div>

</div>
 */

const Navbar=()=>{

    const [click,setClick]=useState(false);
    const [modalOpen,setModelOpen]=useState(false);
  const handleClick=()=>setClick(!click);
  const closeMobileMenu=()=>setClick(false);

    return (
              
      <>
   <header>

   <div className="menu-icons"  onClick={handleClick}  >
  <i className={click?"fas fa-times":"fas fa-bars"}></i>
         
  </div>

      
     
       <div className="navbar" >
       <div className={click?"nav-menu active":"nav-menu"}>
       <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
               <NavLink to="/About" onClick={closeMobileMenu}>About</NavLink>
               <NavLink to="/gallery"  onClick={closeMobileMenu}>Gallery</NavLink>
               <NavLink to="/Pack"  onClick={closeMobileMenu}>services</NavLink>
               <NavLink to="/Testimonials"  onClick={closeMobileMenu}>review</NavLink>
   
               <NavLink to="/contact"  onClick={closeMobileMenu}>Contact</NavLink>
       </div>
       </div>


    
         
         <div className="d">
     <i class="fas fa-user" onClick={()=>{
            setModelOpen(true);
           }}></i>
           
            
            {modalOpen &&<Modal setOpenModal={setModelOpen}/>}
       </div>
        
       
    
   </header>


   <div className="container-fluid flex_space ">

<div className="logo">
  <img src="https://wildlifesos.org/wp-content/uploads/2020/11/wsos-Bear-Logo-border-85x130-1.png" alt="animalphoto"></img>
</div>

<div className="contact-details flex_space">
<div className="box flex_space">
  <div className="icons">
    <i className="fas fa-clock"></i>
  </div>
  <div className="text">
    <h3>working hours</h3>
    <NavLink to='/contact'>Monday to sunday :9.00am to 9:00pm</NavLink>
  </div>
</div>

<div className="box flex_space">
  <div className="icons">
    <i className="fas fa-phone-volume"></i>
  </div>
  <div className="text">
    <h3>Call Us</h3>
    <NavLink to='/contact'>+01001010101010</NavLink>
  </div>
  </div>
  <div className="box flex_space">
  <div className="icons">
    <i className="fas fa-envelope"></i>
  </div>
  <div className="text">
    <h3>Mail Us</h3>
    <NavLink to='/contact'>Kashutosh727@gmail.com</NavLink>
  </div>
</div>
</div>

</div>

   
</>
       
    )
}

export default Navbar;