import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Form } from 'react-bootstrap';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div>
      <h3>Order Summary</h3>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Price</span>
          <span>${totalAmount.toFixed(2)}</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Discount</span>
          <span>$0.00</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Shipping</span>
          <span className="text-danger">Free</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Coupon Applied</span>
          <span>$0.00</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <strong>TOTAL</strong>
          <strong>${totalAmount.toFixed(2)}</strong>
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">Estimated Delivery by <strong>25 July, 2024</strong></p>
      <Form>
        <Form.Group controlId="couponCode">
          <Form.Control type="text" placeholder="Coupon Code" />
        </Form.Group>
      </Form>
      <Link to="/checkout">
        <Button variant="danger" className="mt-3 w-100">Proceed to Checkout</Button>
      </Link>
    </div>
  );
};

export default OrderSummary;
