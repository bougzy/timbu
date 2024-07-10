import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../feature/cart/cartSlice';
import { FaCartPlus } from 'react-icons/fa';
import Samsungflip5 from '../assets/Samsungflip5.png';
import Samsungflip3 from '../assets/Samsungflip3.png';
import iphonexr from '../assets/iphonexr.png';
import iphone12pro from '../assets/iphone12pro.png';
import iphone13series from '../assets/iphone13series.png';
import ipadmini6 from '../assets/ipadmini6.png';
import iphone14 from '../assets/iphone14.png';
import iphone8plus from '../assets/iphone8plus.png';
import samsunggalaxytab from '../assets/samsunggalaxytab.png';
import love from '../assets/love.png';
import './ProductsList.css';
import FlashSale from './FlashSale';

const items = [
  { id: 1, name: 'iPhone 14 Plus', price: '$225.00', image: iphone14, rating: 5, className: 'iphone14-image', description: 'Experience the very best and latest technology with iPhone 14 Plus.' },
  { id: 2, name: 'Samsung Galaxy Flip 3', price: '$225.00', image: Samsungflip3, rating: 5, className: 'flip3-image', description: 'Innovative design meets cutting-edge performance.' },
  { id: 3, name: 'Samsung Galaxy Flip 5', price: '$225.00', image: Samsungflip5, rating: 5, className: 'flip5-image', description: 'The future of smartphones is here with Samsung.' },
  { id: 4, name: 'iPad Mini 6', price: '$225.00', image: ipadmini6, rating: 5, className: 'ipadmini6-image', description: 'Portable power: iPad Mini 6 is perfect for on-the-go use.' },
  { id: 5, name: 'iPhone 12 Pro', price: '$225.00', image: iphone12pro, rating: 5, className: 'iphone12pro-image', description: 'Capture every moment with iPhone 12 Pro’s advanced camera.' },
  { id: 6, name: 'iPhone XR', price: '$225.00', image: iphonexr, rating: 5, className: 'iphonexr-image', description: 'iPhone XR combines performance and style at a great price.' },
  { id: 9, name: 'iphone 8 Plus', price: '$225.00', image: iphone8plus, rating: 5, className: 'flipp5-image', description: 'The future of smartphones is here with Samsung Galaxy Flip 5.' },
  { id: 8, name: 'iPhone 13 Series', price: '$225.00', image: iphone13series, rating: 5, className: 'iphone13series-image', description: 'Discover the power and performance of the iPhone 13 Series.' },
  { id: 9, name: 'Samsung Galaxy Tab 8s', price: '$225.00', image: samsunggalaxytab, rating: 5, className: 'flipp5-image', description: 'The future of smartphones is here with Samsung.' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <> 
    <Container className="mt-5">
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="border-0">
              <div className="shadow text-center p-5 rounded-3">
                <div className="mb-5 text-end">
                  <Image src={love} />
                </div>
                <Card.Img variant="top" src={item.image} className={item.className} style={{  height: "200px", width:"230px" }} />
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
    <FlashSale />
    </>
  );
};

export default ProductList;
