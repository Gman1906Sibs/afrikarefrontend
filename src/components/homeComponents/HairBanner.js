import React from 'react'
import hairbanner from "../../images/hairbanner.png";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <h1 className="banner-text">Hair Products</h1>
      <img src={hairbanner} alt="" className="banner" />
    </div>
  )
}

export default HomecareBanner;