import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from "../../assets/LOGO.png"

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4">
      <Container className="mt-5">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <Image src={LOGO} className="mb-4" style={{marginTop:"-15px"}}/>
            <p>
            Shop the latest models from top brands at unbeatable prices. Limited time offer – don't miss out!
            </p>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-dark text-dark text-decoration-none">About Us</a></li>
              <li><a href="#services" className="text-dark text-dark text-decoration-none">Products Digital</a></li>
              <li><a href="#contact" className="text-dark text-dark text-decoration-none">Customer Reviews</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#blog" className="text-dark text-dark text-decoration-none">Help Center</a></li>
              <li><a href="#help" className="text-dark text-dark text-decoration-none">Payment Methods</a></li>
              <li><a href="#privacy" className="text-dark text-dark text-decoration-none">Return & Refund</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#address" className="text-dark text-decoration-none">(+1)123-456-7890</a></li>
              <li><a href="#email" className="text-dark text-decoration-none">email@example.com</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
