import React from "react";

import ImageData from "./ImageData";
import Slide from "./Slide"



import Downlood from "../download/download";
import Footer from "../Footer/footer";

import Works from "../Works/works";
import Pic from "../../common/picture/pic";
import Donate from "../Donate/donate";
import Subscribe from "../subscribe/subscribe";
import Book from "../book/book";
import A1 from "../A1/A1";
import Allitems from "../Packages/packages1";
import Get from "../getinvolve/get";
const Home=()=>{

    return(
    <>
    <Slide slides={ImageData}></Slide>
    
    <A1></A1>
     
     <Book></Book>

   <Allitems></Allitems>
       <Downlood></Downlood>
    
       <Works></Works>
       <Pic></Pic>
       <Get></Get>
       <Subscribe></Subscribe>
       <Donate></Donate>
     <Footer></Footer>
   

       </>
    )
}
export default Home;