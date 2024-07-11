import React, { useState } from 'react';
import { Container, Image, Row, Col, Button, Card, Form, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import plus from "../assets/plus.png";
import visa from "../assets/visa.png"; 
import mastercard from "../assets/mastercard.svg"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import OrderSummaryCheckout from './OrderSummaryCheckout';
import "./Checkout.css";


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
      <h2>
        <Link to="/cart" className="text-dark text-decoration-none fw-bolder">
          <span className="h4" style={{ color: "#A2A3B1" }}>Cart &gt; </span>
        </Link>
        <span className="fw-bolder">Checkout</span>
      </h2>
      <Row className="my-4">
        <Col md={8}>
          <div className="payment-method my-4">
            <h4>Payment Method</h4>
            <ListGroup className="border border-dark p-4">
              <ListGroup.Item className="d-flex justify-content-start align-items-center flex-wrap border-0">
                <Form.Check
                  type="radio"
                  id="visa"
                  name="paymentMethod"
                  value="visa"
                  checked={paymentMethod === 'visa'}
                  onChange={handlePaymentMethodChange}
                />
                <Image src={visa} alt="Visa" className="ms-3" style={{ height: "30px" }} />
                <span className="ms-3">**** 6754</span>
                <span className="ms-auto text-center" style={{ flex: "1 0 auto" }}>Expires 06/2025</span>
                <Button variant="link" className="ms-auto text-danger text-underline-none" style={{ textDecoration: 'none' }}>Remove</Button>
              </ListGroup.Item>

              <hr className="w-100 border-dark my-2"></hr>
              
                <ListGroup.Item className="d-flex justify-content-start align-items-center flex-wrap border-0">
                  <Form.Check
                    type="radio"
                    id="mastercard"
                    name="paymentMethod"
                    value="mastercard"
                    checked={paymentMethod === 'mastercard'}
                    onChange={handlePaymentMethodChange}
                  />
                  <Image src={mastercard} alt="MasterCard" className="ms-3" style={{ height: "30px" }} />
                  <span className="ms-3">**** 5643</span>
                  <span className="ms-auto text-center" style={{ flex: "1 0 auto" }}>Expires 11/2025</span>
                  <Button variant="link" className="ms-auto text-danger" style={{ textDecoration: 'none' }}>Remove</Button>
                </ListGroup.Item>

            </ListGroup>
          </div>
          <hr className="border border-dark "></hr>
          <div className="d-flex">
            <Image src={plus} style={{ height: "200%" }} />
            <p>Add Payment method</p>
          </div>
        </Col>

        <Col md={4}>
          <Card className="border border-dark mt-4">
            <Card.Body>
              <OrderSummaryCheckout />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
