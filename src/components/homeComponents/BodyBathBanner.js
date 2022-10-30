import React from 'react'
import bodybathbanner from "../../images/bodybathbanner.jpg";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <h1 className="banner-text">Body & Bath</h1>
      <img src={bodybathbanner} alt="" className="banner" />
    </div>
  )
}

export default HomecareBanner;