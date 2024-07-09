import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price} USD</p>
      <button onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
