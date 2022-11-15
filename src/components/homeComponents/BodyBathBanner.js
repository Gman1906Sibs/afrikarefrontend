import React from 'react'
import bodybathbanner from "../../images/bodybathbanner.jpg";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <div className=" cat-text-cont ">
                      <div className=" cat-titles ">
                         Body & Bath
                      </div>        
                </div>
      <img src={bodybathbanner} alt="" className="banner" />
    </div>

  )
}

export default HomecareBanner;