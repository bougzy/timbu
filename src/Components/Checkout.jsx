import React, { useState } from 'react';
import { Container, Image, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import plus from "../assets/plus.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Checkout.css"

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);
  const [paymentMethod, setPaymentMethod] = useState('visa');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleConfirmOrder = () => {
    alert('Your order has been confirmed. You can proceed to payment.');
  };

  return (
    
    <Container className="mt-5">
      <h2 ><Link to="/" className="text-dark text-decoration-none fw-bolder"><span className="h4" style={{color:"#A2A3B1" }} >Cart  &gt; </span></Link>  <span className="fw-bolder">Checkout</span></h2>
       {/* <h2 ><Link to="/" className="text-dark text-decoration-none">Cart</Link> &gt;Checkout</h2> */}
      <Row className="my-4">
        <Col md={8}>
          <div className="payment-method my-4">
            <h4>Payment Method</h4>
            <ListGroup className="border border-dark p-4">
              <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                <Form.Check
                  type="radio"
                  id="visa"
                  name="paymentMethod"
                  value="visa"
                  label="Visa **** 6754"
                  checked={paymentMethod === 'visa'}
                  onChange={handlePaymentMethodChange}
                />
                <span className="ml-auto">Expires 06/2021</span>
                <Button variant="link" className="text-danger">Remove</Button>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                <Form.Check
                  type="radio"
                  id="mastercard"
                  name="paymentMethod"
                  value="mastercard"
                  label="Mastercard **** 5643"
                  checked={paymentMethod === 'mastercard'}
                  onChange={handlePaymentMethodChange}
                />
                <span className="ml-auto">Expires 11/2025</span>
                <Button variant="link" className="text-danger">Remove</Button>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <hr className="" style={{ borderTop: "5px solid #000" }}></hr>
          <div className="d-flex">
            <Image src={plus} style={{ height: "200%" }} />
            <p>Add Payment method</p>
          </div>
        </Col>

        <div>
        <Col xs={12} md={4} className="border border-dark p-4 rounded">
          <h3>Order Summary</h3>
          <div className="d-flex justify-content-between">
            <p>Price</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Discount</p>
            <p>$0.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p className="text-danger">Free</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Coupon Applied</p>
            <p>$0.00</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h4>TOTAL</h4>
            <h4>${totalAmount.toFixed(2)}</h4>
          </div>
          <div className="d-flex justify-content-between estimated">
            <p>Estimated Delivery by</p>
            <h6>25 July, 2024</h6>
          </div>
          <Form.Group>
            <Form.Control type="text" placeholder="Coupon Code" />
          </Form.Group>
          <div className="text-center">
            <Button variant="danger" className="mt-2 p-2 rounded-4" style={{ width: "100%" }} onClick={handleConfirmOrder}>
              Proceed to Checkout
            </Button>
          </div>
        </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Checkout;
