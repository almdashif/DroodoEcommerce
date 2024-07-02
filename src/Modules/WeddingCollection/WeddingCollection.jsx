import React from 'react'
import './weddingCollection.css'
const WeddingCollection = () => {
  return (
    <section id='WeddingCollection'>
      <div className="weddingColContainer">
        <div className="WedImgContainer">
          <img src="https://imgs.search.brave.com/vpdvAvCO6PNHAYtKCnxXX7JaC1dneA6lKXC9xK9N0mc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VmLzEx/LzFmL2VmMTExZjNi/NWY0MGFiMDJkZGM0/NjVmOTEwMGJhM2I5/LmpwZw" alt="Wedding Image" />
        </div>
        <div className="wedTitles">
          <h3>Wear to Wedding</h3>
          <p>A symphony of exquistic design tailored for your unforgettable moments</p>
          <a href="">See Details</a>
        </div>
      </div>
    </section>
  )
}

export default WeddingCollection
