
import React from "react";
import "./Headtitle.css";

import { useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";


const Headtitle=()=>{

    const location=useLocation();
    console.log(location);
    return(
       <>
       <section className="image-heading">
        <div className='containerdetail'>
           
                {<h1 className="sssss">{location.pathname.slice(1)}</h1>}

              
                <button>
            <NavLink to='/'> Home / </NavLink>
            <span>{location.pathname.split("/")[1]}</span>
            {/*<span>{location.pathname.replace("/", " ")}</span>*/}
          </button>
        </div>

       </section>
       </>
    )
}

export default Headtitle;
