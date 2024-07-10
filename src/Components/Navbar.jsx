


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import shoppingcart from "../assets/shoppingcart.png"
import { Fade as Hamburger } from 'hamburger-react';
import './Navbar.css';
import LOGO from "../assets/LOGO.png";
import arrow from "../assets/arrow.png"

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-brand ml-3">
        <Link to="/" className="nav-link navbar-brand mx-3">
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-link">
          <div className="cart-icon-container ">
            <img src={shoppingcart} className="cart-icon" />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </Link>
        <div className="d-sm-block d-md-none">
        <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
        <div className="d-none d-md-block">
        <Link to="/cart" className="nav-link navbar-brand mx-1">
        <button className="d-flex bg-dark text-white ms-3 rounded-5">
          <p className="mt-2  px-2">Go to Cart</p>
          <img src={arrow} className="px-3" style={{marginTop:"12px", marginLeft:"-10px"}} />
        </button>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

