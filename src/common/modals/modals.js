import React, { useState } from "react";
import "./modals.css";

const Modal=({ setOpenModal })=>
 {

    const [toggle,setToggle]=useState(1);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false)   
                  }}
          >
           <i class="fas fa-times" id="close-form"></i>
          </button>
        </div>
        <div className="login-form">
        <button  className={toggle===1?"tabs active-tabs":"tabs"} onClick={()=>
            setToggle(1)
        }>
        <div>Login</div>
        </button>
     
        <button  className={toggle===2?"tabs active-tabs":"tabs"} onClick={()=>
            setToggle(2)
        }>
        <div>Signup</div>
        </button>
        </div>
      <div className="content-tabs">
        <div className={toggle===1?"content active-content ":"content"}>
        <div class="login-form-container">
       
        <form method="POST" action="/login">
          
            <input type="email" class="box" placeholder="enter your email" name="email" required="true"/>
            <input type="password" class="box" placeholder="enter your password"required="true" name="password"/>
           
            <input type="submit" value="login" class="btn"/>
            
            <p>forget password</p><a href="#">click here</a>
          
           
        </form>

        <h1 >OR Sign Using</h1>
        
    </div>
          
        </div>
        <div className={toggle===2?"content active-content ":"content"}>
        <div class="signup-form-container">
        
        <form action="/register" method="post">
        
            <input type="name" class=" box"required="true" placeholder="enter your name"/>
            <input type="email" class="box"required="true" placeholder="enter your email"/>
            <input type="password" class="box"required="true" placeholder="enter your password"/>
           
            <input type="password" class="box"required="true" placeholder="Confirmpassword"/>
            <input type="number" class="box"required="true" placeholder="enter yout phone number"/>
            <input type="submit" value="Signup" class="btn"/>
          
    
        </form>
        <h1>OR SignUp Using</h1>
    </div>
   
        </div>


        <div className="icons-sign">
        <i class="fa-brands fa-google"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram-square"></i>
        </div>
      </div>

       
        
        
        
      </div>
    </div>
  );
}

export default Modal;