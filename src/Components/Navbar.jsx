// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon
// import { Fade as Hamburger } from 'hamburger-react';
// import './Navbar.css';
// import LOGO from "../assets/LOGO.png"

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const [isOpen, setOpen] = useState(false);

//   return (
     

//       <nav className="navbar-custom  "> 
//         <div className="navbar-brand ml-3">
//           <Link to="/" className="nav-link navbar-brand mx-3">
//             <img src={LOGO} alt="Logo"  />
//           </Link>
//         </div>
//         <div className="navbar-right">
//           <Link to="/cart" className="cart-link ">
//             <FaShoppingCart className="cart-icon" />
//              ({cartItems.length})
//           </Link> 
//           <Hamburger toggled={isOpen} toggle={setOpen} />
//         </div>
//       </nav>
     
    
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import shoppingcart from "../assets/shoppingcart.png"
import { Fade as Hamburger } from 'hamburger-react';
import './Navbar.css';
import LOGO from "../assets/LOGO.png";

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
            {/* <FaShoppingCart className="cart-icon" /> */}
            <img src={shoppingcart} className="cart-icon" />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

