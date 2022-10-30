import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/userActions";
import logo from "./../images/afrikarelogo.jpeg";

const Header = () => {

  const [keyword, setKeyword] = useState();

    const dispatch = useDispatch();

    let history = useHistory();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/")
    }
  };


  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+27 78 776 0294</p>
              <p>info@afrikare.co.za</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <a href="https://www.facebook.com/AfriKareSA" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/afrikare" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/afrikare4" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-banner">
        <Link  to="/">
          <img alt="logo" src={logo} className="logo" />
        </Link>
      </div>


      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Menu
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/hairproducts">
                        Hair
                      </Link>

                      <Link className="dropdown-item" to="/bodybath" >
                        Bath & Body
                      </Link>

                      <Link className="dropdown-item" to="/homecare">
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                {
                  userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#" onClick={logoutHandler} >
                        Logout
                      </Link>
                    </div>
                  </div>
                  )
                  :
                  (
                     <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>

                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                  )
                }
                 
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  {/* <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
              </form> */}
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className=" col-md-3 col-4 d-flex align-items-center">
                
                <span className="link-text"> <Link to={`/hairproducts`} > Hair </Link></span>
                <span className="link-text"> <Link to={`/bodybath`} > Bath </Link></span>
                <span className="link-text"> <Link to={`/homecare`} > Home </Link></span>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                {/*<form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
            </form> */}
              </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">

                    {
                  userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#" onClick={logoutHandler} >
                        Logout
                      </Link>
                    </div>
                  </div>
                  )
                  :
                  (
                     <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>

                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                  )
                }

                      

                      <Link to="/cart">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="badge">{cartItems.length}</span>
                      </Link>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
