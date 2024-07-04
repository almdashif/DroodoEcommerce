import React from 'react'
import './homepage.css'

const Homepage = () => {
  return (
    <section id='Homepage'>
      <div className="homeContainer">
        <div className="imgcontainer">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="homeTitles">
            <h2>Tolus Spring Collection</h2>
            <div className="homeTitlesBottoms">
              <p>Find out best spring collections. Offering our best quality in a Tolus Spring Collection.</p>
              <a href="">Buy Now</a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Homepage