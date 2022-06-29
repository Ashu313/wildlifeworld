import React from "react"
import "./donate.css"
import { NavLink } from "react-router-dom"

const Donate=()=>{
  

    return (
        <>
        
        <section>
        <h1 class="heading">
            <span>D</span>
            <span>O</span>
            <span>N</span>
            <span>A</span>
            <span>T</span>
            <span>E</span>
          

        </h1>

       <div  className="donate">
       <div className="donate-image">
       
             <h1>DONATE TODAY</h1>
             <p>Your donations help support the lifesaving work of Wildlife SOS and provide the rescue and care for orphaned, injured, and exploited animals at our facilities.</p>
             <br>
             </br>
             <p>Your gift helps us protect India’s precious wildlife. Whether it’s an abused elephant, an orphaned leopard cub, a bear rescued from poachers, or an injured duck, we look out for all creatures great and small.</p>
            
             <NavLink to="/"><button type="button">GIVE TO SUPPORT THE LIFESAVING WORK OF WILDLIFE SOS</button></NavLink>
         
             <h2>Please consider becoming a monthly supporter!</h2>
            
            
      
       </div>
       <div className="donate-content">
             <h1>DONATE TODAY</h1>
             <p>Your donations help support the lifesaving work of Wildlife SOS and provide the rescue and care for orphaned, injured, and exploited animals at our facilities.</p>
             <br>
             </br>
             <p>Your gift helps us protect India’s precious wildlife. Whether it’s an abused elephant, an orphaned leopard cub, a bear rescued from poachers, or an injured duck, we look out for all creatures great and small.</p>
            <div className="bu">
            <NavLink to="/"><button type="button">GIVE TO SUPPORT THE LIFESAVING WORK OF WILDLIFE SOS</button></NavLink>
             </div>
             <h2>Please consider becoming a monthly supporter!</h2>

             <div className="bu">
              t<NavLink to="/about"><button type="button">Donate Now</button></NavLink>
             </div>
        </div>
        </div>
 
         
</section>

        </>
    )
}



export default Donate;