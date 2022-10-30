import React from 'react'
import homecarebanner from "../../images/homecarebanner.jpg";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <h1 className="banner-text">HomeCare</h1>
      <img src={homecarebanner} alt="" className="banner" />
    </div>
  )
}

export default HomecareBanner;