import React from "react";
import HeadTitle from "../Headtitle/Headtitle";
import "./empty.css";

const Empty=()=>{
    return(
    <>
        <HeadTitle></HeadTitle>
        <section className="error">
            <h1>ERROR 404!</h1>
        </section>
        </>
    )
}
export default Empty;