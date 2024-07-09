
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Checkout from './Components/Checkout';
import Hero from './Components/Home/Hero';
import Footer from "./Components/Home/Footer"

const App = () => {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
