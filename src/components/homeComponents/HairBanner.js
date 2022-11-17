import React from 'react'
import hairbanner from "../../images/hairbanner.jpg";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <div className=" cat-text-cont ">
                      <div className=" cat-titles ">
                          Hair Products
                      </div>        
                </div>
      <img src={hairbanner} alt="" className="banner" />
    </div>
  )
}

export default HomecareBanner;