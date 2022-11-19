import React from "react";
import "./App.css";
import "./tailwind.css";
import "./index.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import HomecareScreen from "./screens/HomecareScreen";
import BodyBathScreen from "./screens/BodyBathScreen";
import HairScreen from "./screens/HairScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import SuccessPayment from "./screens/SuccessPayment";
import FailedPayment from "./screens/FailedPayment";
import NotFound from "./screens/NotFound";
import Polices from "./screens/Polices";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} exact />
        <Route path="/homecare" component={HomecareScreen} />
        <Route path="/bodybath" component={BodyBathScreen} />
        <Route path="/hairproducts" component={HairScreen} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/polices" component={Polices} />
        <PrivateRoute path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRoute path="/shipping" component={ShippingScreen} />
        <PrivateRoute path="/payment" component={PaymentScreen} />
        <PrivateRoute path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRoute path="/order/:id" component={OrderScreen} />
        <PrivateRoute path="/success/:id" component={SuccessPayment} />
        <PrivateRoute path="/failed/:id" component={FailedPayment} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
