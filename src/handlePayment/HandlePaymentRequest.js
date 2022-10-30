import React from 'react'
import { useSelector } from 'react-redux';

  

function HandlePaymentRequest() {
    const cart = useSelector((state) => state.cart);
  return (
    <div>{cart.orderId}</div>
  )
}

export default HandlePaymentRequest