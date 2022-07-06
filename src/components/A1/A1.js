import React from "react";
import "./a1.css";
import { NavLink } from "react-router-dom";
const A1=()=>{
    

    return (
        <>
      <section>

      <h1 class="heading">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
         
            <span>T</span>
            <span class="space"></span>
            <span>U</span>
            <span>S</span>

        </h1>
      <div className="about-us">

<div className="box">
    <div className="image">
    <img src="https://wildlifesos.org/wp-content/uploads/2020/03/our-mission.png" alt=""/>
    </div>
    <h1>OUR VISION</h1>
    <p>Coexisting in the same landscape in a manner in which both conservation and welfare is addressed for man and wildlife.</p>

</div>

<div className="box">
<div className="image">
    <img src="https://wildlifesos.org/wp-content/uploads/2020/03/our-mission.png" alt=""/>
    </div>
    <h1>OUR VISION</h1>
    <p>Coexisting in the same landscape in a manner in which both conservation and welfare is addressed for man and wildlife.</p>

</div>
<div className="box">
<div className="image">
    <img src="https://wildlifesos.org/wp-content/uploads/2020/03/our-mission.png" alt=""/>
    </div>
    <h1>OUR VISION</h1>
    <p>Coexisting in the same landscape in a manner in which both conservation and welfare is addressed for man and wildlife.</p>

</div>
</div>
<div className="button1">
   <NavLink to="/about"> <button type="button">READ MORE</button></NavLink>
</div>
      </section>
         


        </>
    )
}


export default A1;