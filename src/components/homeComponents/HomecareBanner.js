import React from 'react'
import homecarebanner from "../../images/homecarebanner.jpg";

function HomecareBanner() {
  return (
    <div className="banner-container">
      <div className=" cat-text-cont ">
                      <div className=" cat-titles ">
                        HomeCare
                      </div>        
                </div>
      <img src={homecarebanner} alt="" className="banner" />
    </div>

  )
}

export default HomecareBanner;