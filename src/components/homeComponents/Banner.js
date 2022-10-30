import React from 'react'
import banner from "../../images/banner.jpg";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} alt="" className="banner" />
        <Link to={`/hairproducts`} className=" ban-cat-btn ">
          <button className="ban-cat-btn-og">
            SHOP NOW
          </button>
        </Link>
        
    </div>
  )
}

export default Banner