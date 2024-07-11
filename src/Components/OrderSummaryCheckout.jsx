
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Form, Image, Modal } from 'react-bootstrap';
import tee from '../assets/tee.png';
import order from '../assets/order.png';
import './OrderSummary.css';

const OrderSummaryCheckout = () => {
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      <p className="mt-3">
        Estimated Delivery by <strong>25 July, 2024</strong>
      </p>
      <Form className="">
        <Form.Group controlId="couponCode" className="coupon-form-group">
          <Form.Control className="p-3" type="text" placeholder="Coupon Code" />
          <Image src={tee} alt="Coupon" className="coupon-image" />
        </Form.Group>
      </Form>
      <Button variant="danger" className="mt-3 w-100 p-3 rounded-4" onClick={handlePlaceOrder}>
        Place Your Order And Pay
      </Button>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
          <img src={order} />
          </div>
        </Modal.Body>
        <h4 className="text-center mt-3 fw-bolder">Your Order is confirmed!</h4>
          <p className="text-center">We’ll send you a shipping confirmation email as soon as your order ships.</p>

              <Link to="/" className="text-center mt-3" >
              <Button variant="primary mx-auto" className="mb-4 bg-danger border-0 p-3 w-75">
                Continue Shopping
              </Button>
              </Link>
          <div className="p-3 mx-4">
          </div>
      </Modal>
    </div>
  );
};

export default OrderSummaryCheckout;

