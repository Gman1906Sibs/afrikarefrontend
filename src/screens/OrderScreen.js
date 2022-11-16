import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions";
import Loading from "./../components/LoadingError/Loading"
import Message from "../components/LoadingError/Error";
import moment from "moment";
import axios from "axios";
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants";
import {handlePayfastSession} from "../handlePayment/handlePayfastSession"
import { URL } from "../Redux/Url";


const OrderScreen = ({match}) => {
  window.scrollTo(0, 0);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const [sdkReady, setSdkReady] = useState(false);

  const orderId = match.params.id;
  const dispatch = useDispatch();


  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

   
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;


 const destructureUrl =  () => {
  const url =  handlePayfastSession(orderId, order.totalPrice)
  console.log(url.actionURL)
  return url.actionURL
 }



  if (!loading) {
    const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  order.itemsPrice = addDecimals(
    order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
  );
  }


  useEffect(() => {

    const addPayPalScript = async() =>{
      const {data:clientId} = await axios.get(`${URL}/api/config/paypal`)
      const script = document.createElement("script")
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    };

    if (!order || successPay) {
      dispatch({type: ORDER_PAY_RESET})
      dispatch(getOrderDetails(orderId))
    } 
    else if (!order.isPaid){
      addPayPalScript()
    }
    else {
      setSdkReady(true);
    }  
  }, [dispatch, orderId, successPay, order]);
 

  return (
    <>
      <Header />
      <div className="container">
      {
        loading ? (<Loading />) : error ? (<Message variant="alert-danger">{error}</Message>)
        :
        (
          <>
                    <div className="row  order-detail">
                          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                            <div className="row">
                              <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                  <i className="fas fa-user"></i>
                                </div>
                              </div>
                              <div className="col-md-8 center">
                                <h5>
                                  <strong>Customer</strong>
                                </h5>
                                <p>{order.user.name}</p>
                                <p>
                                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* 2 */}
                          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                            <div className="row">
                              <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                  <i className="fas fa-truck-moving"></i>
                                </div>
                              </div>
                              <div className="col-md-8 center">
                                <h5>
                                  <strong>Order info</strong>
                                </h5>
                                  <p>Courier: {order.shippingAddress.country}</p>
                                  <p>Sent out on Mondays</p>
                                  <p>24hrs - 72hrs</p>
                                    {
                                      order.isPaid ? (
                                        <div className="bg-info p-2 col-12">
                                          <p className="text-white text-center text-sm-start">
                                            Paid on {moment(order.paidAt).calendar()}
                                          </p>
                                        </div>
                                      ) 
                                      :
                                      (
                                        <div className="bg-danger p-2 col-12">
                                          <p className="text-white text-center text-sm-start">
                                            Not Paid
                                          </p>
                                        </div>
                                      )
                                    }
                                
                              </div>
                            </div>
                          </div>
                          {/* 3 */}
                          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                            <div className="row">
                              <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                  <i className="fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                              <div className="col-md-8 center">
                                <h5>
                                  <strong>Deliver to</strong>
                                </h5>
                               <p>
                                  Address: {order.shippingAddress.city}, {" "} {order.shippingAddress.address}, {order.shippingAddress.postalCode}
                                </p>
                                <p>
                                  Free Delivery for orders above R1000.00
                                </p>
                                                {
                                      order.isDelivered? (
                                        <div className="bg-info p-2 col-12">
                                          <p className="text-white text-center text-sm-start">
                                            Delivered on {moment(order.deliveredAt).calendar()}
                                          </p>
                                        </div>
                                      ) 
                                      :
                                      (
                                        <div className="bg-danger p-2 col-12">
                                          <p className="text-white text-center text-sm-start">
                                            Not Delivered
                                          </p>
                                        </div>
                                      )
                                    }
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row order-products justify-content-between">
                          <div className="col-lg-8">

                            {
                              order.orderItems.length === 0 ? (
                                <Message variant="alert-info mt-5">Your order is empty</Message>
                              )
                              :
                              (
                                <>
                                {
                                  order.orderItems.map((item, index) => (
                                    <div className="order-product row" key={index}>
                                      <div className="col-md-3 col-6">
                                        <img src={item.image} alt={item.name} />
                                      </div>
                                      <div className="col-md-5 col-6 d-flex align-items-center">
                                        <Link to={`/products/${item.product}`}>
                                          <h6> <span> {item.name}</span> <span>{item.size}</span> </h6>
                                        </Link>
                                      </div>
                                      <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                        <h4>QUANTITY</h4>
                                        <h6>{item.qty}</h6>
                                      </div>
                                      <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                        <h4>SUBTOTAL</h4>
                                        <h6>R{item.qty * item.price}</h6>
                                      </div>
                                    </div>
                                  ))
                                }
                                </>
                              )
                            }
                          </div>
                          {/* total */}
                          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                            <table className="table table-bordered">
                                 <tbody>
                                  <tr>
                                    <td>
                                      <strong>Products</strong>
                                    </td>
                                    <td>R{order.itemsPrice}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Courier</strong>
                                    </td>
                                    {/*<td>
                                      <select>
                                        <option value="Pudo">Pudo R50</option>
                                        <option value="Aramex">Aramex R99</option>
                                      </select>
                                    </td>*/}
                               <td>R{addDecimals(order.shippingPrice)}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Tax</strong>
                                    </td>
                                    <td>R{addDecimals(order.taxPrice)}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Total</strong>
                                    </td>
                                    <td>R{addDecimals(order.totalPrice)}</td>
                                  </tr>
                                </tbody>
                            </table>
                            {
                              !order.isPaid && (
                                <div className="col-12">
                                {loadingPay && (<Loading />)}
                                {!sdkReady ? (
                                    <Loading />
                                  )
                                  :
                                  (
                                    <button><a href={`https:${destructureUrl()}`} >Pay R {addDecimals(order.totalPrice)}</a></button>
                                  )
                                }
                                  
                                </div>
                              )
                            }
                            
                          </div>
                        </div>
          </>
        )
      }

      </div>
    </>
  );
};

export default OrderScreen;
