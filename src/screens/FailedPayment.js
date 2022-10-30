import React, { useState, location } from "react";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {  payOrder } from "../Redux/Actions/OrderActions";
import successImage from "../images/paymentSuccessful.gif"
import { Redirect } from 'react-router-dom'



const FailedPayment = ({match, location,}) => {
  window.scrollTo(0, 0);


  const odrerID = match.params.id;
  const dispatch = useDispatch();


  const orderDetails = useSelector((state) => state.orderDetails);

   
  const orderPay = useSelector((state) => state.orderPay);



  const redirectId = location.pathname.split("/")[2]

  
const letsRedirect = () => {
  return null
}

function SplashScreen() {
  setTimeout(function () {
  letsRedirect()
    console.log("cello")
  }, 6000)
      
}

SplashScreen()

  

  return (
    <>
      <Header />
      <div>
      <div className="successHeader">
        <div className="logo-banner"><span className="heading">Redirecting....</span></div>
        // <div className="logo-banner"><img className="heading" src={successImage} alt="" /></div>
      </div>
      <Redirect to={`/order/${odrerID}`} onSubmit={letsRedirect()} />
      </div>
    </>
  );
};

export default FailedPayment;
