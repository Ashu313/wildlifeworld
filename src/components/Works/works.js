import React from "react"

import "./works.css"
import Card from "./Card"
import Wdata from "./Wdata"

const Works = () => {
  return (
    <>
      <section className='popular-works'>
      <h1 class="heading">
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
            <span>S</span>

        </h1>

        <div className='container1'>
          <div className='heading'>
            <h1>How it Works </h1>
            <h1></h1>
          
</div>
          <div className='content-grid'>
            {Wdata.map((value, index) => {
              return <Card key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works