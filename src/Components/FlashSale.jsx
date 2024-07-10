import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../feature/cart/cartSlice';
import { FaCartPlus } from 'react-icons/fa';
import ipadmini6 from '../assets/ipadmini6.png';
import ipadm1air from '../assets/ipadm1air.png';
import ipadmini10gen from '../assets/ipadmini10gen.png';
import off from '../assets/off.png';
import './FlashSale.css';

const items = [
  { id: 1, name: 'iPad Min 6', price: '$225.00', image: ipadmini6, rating: 5, className: 'iphone14-image', description: 'Experience the very best and latest technology with iPhone 14 Plus.' },
  { id: 2, name: 'ipad Mini 1 Air', price: '$225.00', image: ipadm1air, rating: 5, className: 'flip3-image', description: 'Innovative design meets cutting-edge performance.' },
  { id: 3, name: 'ipad Mini 10 Gen', price: '$225.00', image: ipadmini10gen, rating: 5, className: 'flip5-image', description: 'The future of smartphones is here with Samsung.' },
];

const FlashSale = () => {
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h1 className="my-4" style={{fontSize:"60px", fontFamily:"Prompt"}}>Flash sale for <span style={{color:"#DF1406"}}>best</span> sellers</h1>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="border-0">
              <div className="shadow text-center p-5 rounded-3">
                <div className="image-container">
                  <Image src={item.image} className={item.className} style={{  height: "200px", width:"230px", position:"relative" }} />
                  <Image src={off} className="off-image" />
                  <div className="mt-3">
                    <h5 className="text-primary fw-bold">$89.000 <span className="text-decoration-line-through" style={{color:"#9A9A9A", fontSize:"12px"}}>IDR 150.00</span></h5>
                    
                  </div>
                </div>
              </div>
              <Card.Body>
                <Row>
                  <Col className="">
                    <Card.Title>{item.name}</Card.Title>
                  </Col>
                  <Col className="text-end h5">
                    <Card.Text>
                      {item.price}
                    </Card.Text>
                  </Col>
                </Row>
                <p className="text-start">
                  {item.description}
                </p>
                <p className="text-start fs-3" style={{ color: "#04A904" }}>
                  {Array(item.rating).fill().map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                  <span className="fs-6 text-dark text-muted">(125)</span>
                </p>
                <Button className="bg-white text-dark border border-dark rounded-pill" style={{ width: "165px" }} onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}>
                  <FaCartPlus className="me-3" /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlashSale;
