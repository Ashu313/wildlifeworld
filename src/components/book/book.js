import React from "react"
import "./Book.css"



 const  Book=()=>{
return(
<>
<section className="book">


<h1 class="heading">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span class="space"></span>
            <span>n</span>
            <span>o</span>
            <span>w</span>

        </h1>

<div class="row">
            <div class="image">
                <img src="https://cdn2.vectorstock.com/i/1000x1000/43/06/scene-with-animals-and-kids-at-open-zoo-vector-27894306.jpg"
                    alt=""/>
            </div>
            <form action="">
                <div class="inputbox">
                    <h3>COUNTRY</h3>
                    <input type="text" placeholder="india.."/>
                </div>
                <div class="inputbox">
                    <h3>city</h3>
                    <input type="text" placeholder="india.."/>
                </div>
                <div class="inputbox">
                    <h3>locations</h3>
                    <input type="text" placeholder="india.."/>
                </div>
                <div class="inputbox">
                    <h3>total person</h3>
                    <input type="number"/>
                </div>
                <div class="inputbox">
                    <h3>booking date</h3>
                    <input type="date"/>
                </div>
                <div class="inputbox">
                    <h3>leaving date</h3>
                    <input type="date"/>
                </div>
                <div class="inputbox ">
                    <h3>amount</h3>
                    <input type="number"/>
                </div>
               <div className="btn">
                <button type="submit" class="btn" value="book now">Book Now</button>
                </div>
            </form>
        </div>

</section>
</>

)};

export default Book;