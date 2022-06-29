import React from "react";
import Hero from "./Hero";
import ImageData from "./ImageData";
import Slide from "./Slide"
import AboutCard from "../About/AboutCard";
import Gallery from "../photo/Gallery";
import Testimonial from "../Testimonials/Testimonial";
import Downlood from "../download/download";
import Footer from "../Footer/footer";
import Contact from "../contact/contact";
//import Headtitle from "../../common/Headtitle/Headtitle";
import Works from "../Works/works";
import Pic from "../../common/picture/pic";
import Donate from "../Donate/donate";
import Subscribe from "../subscribe/subscribe";
import Book from "../book/book";
import A1 from "../A1/A1";
const Home=()=>{

    return(
    <>
    <Slide slides={ImageData}></Slide>
    
    <A1></A1>
     
     <Book></Book>
       <Gallery></Gallery>
       <Downlood></Downlood>
    
       <Works></Works>
       <Pic></Pic>
       <Subscribe></Subscribe>
       <Donate></Donate>
     <Footer></Footer>
   

       </>
    )
}
export default Home;