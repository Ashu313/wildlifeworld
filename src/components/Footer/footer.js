import React from "react"
import "./footer.css"
import { NavLink } from "react-router-dom";


 const  Footer=()=>{
return(
<>
<section className="footer">

<div className="box-container">

    <div className="box">
        <h3>about us</h3>
        <p>Our mission is to create a better world for animals</p>
        <ul>
        <li>We end the needless suffering of animals</li>
        <li>We influence decision makers to put animals on the global agenda</li>
        <li>We help the world see how important animals are to all of us</li>
        <li>We move the world to protect animals</li>

        </ul>
    
    </div>
    <div className="box">
        <h3>Our work</h3>
        <NavLink to="/elephant/elephant.html">leopards</NavLink>
        <NavLink to="/panda/panda.html">bears</NavLink>
        <NavLink to="elephant/reptiles/reptiles.html">reptiles</NavLink>
        <NavLink to="/elephant/elephants/elephnats.html">elephants</NavLink>
    </div>
    <div className="box">
        <h3>quick links</h3>
        <NavLink to="/">home</NavLink>
        <NavLink to="/book">book</NavLink>
        <NavLink to="/About">About us</NavLink>
        <NavLink to="/services">services</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink to="/review">review</NavLink>
        <NavLink to="/contact">contact</NavLink>
    </div>
    <div className="box">
        <h3>follow us</h3>
        <NavLink to="#">facebook</NavLink>
        <NavLink to="#">instagram</NavLink>
        <NavLink to="#">twitter</NavLink>
        <NavLink to="#">linkedin</NavLink>
    </div>

</div>

<h1 className="credit"> created by <span>Ashutosh kumar </span> | all rights reserved! </h1>

</section>
</>

)};

export default Footer;