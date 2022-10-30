import React from 'react';
import categoryData from '../../data/categoryData';
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className=" cat-container " >
      <div className=" cat-map  ">
      {/* map through data file for info and generate individual files */}
          {categoryData.map(item=> (
            <div className=" cat-img-cont ">
              <Link to={`/${item.cat}`}>
                <img src={item.image} alt="" className=" cat-img "/>
                <div className=" cat-text-cont ">
                    <div className="cat-title ">
                      <h1 className=" cat-head " >{item.title}</h1>
                    </div>
                    <div className="cat-btn-cont ">
                      <button className=" cat-btn ">
                          SHOP NOW
                      </button>
                    </div>
                </div>
              </Link>
          </div>
          
          ))}
      </div>
    </div>
  )
}

export default Categories