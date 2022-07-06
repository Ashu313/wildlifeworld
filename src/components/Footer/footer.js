import React from "react"
import "./footer.css"
import { NavLink } from "react-router-dom";


 const  Footer=()=>{
return(
<>
<section className="footer">

<div className="box-container">

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
        <h3>Our work</h3>
        <NavLink to="/animal/leopard">leopards</NavLink>
        <NavLink to="/animal/panda">Panda</NavLink>
        <NavLink to="/animal/reptiles">reptiles</NavLink>
        <NavLink to="/animal/elephants">elephants</NavLink>
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