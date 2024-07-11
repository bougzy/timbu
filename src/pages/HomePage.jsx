import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrival from "../Components/Home/Arrival"
import ProductsList from '../Components/ProductsList';
import laptop from "../assets/laptop.png"
import tv from "../assets/tv.png"
import cam from "../assets/cam.png"
import phone from "../assets/phone.png"
import pad from "../assets/pad.png"
import ipod from "../assets/ipod.png"
import speaker from "../assets/speaker.png"
import "./Home.css"
import Hero from '../Components/Home/Hero';

const IconGrid = () => {
  const columns = [
    { icon: <img src={laptop} alt="Laptop" />, text: 'Laptop' },
    { icon: <img src={phone} alt="Phone" />, text: 'Phone' },
    { icon: <img src={cam} alt="Camera" />, text: 'Camera' },
    { icon: <img src={tv} alt="TV" />, text: 'TV' },
    { icon: <img src={speaker} alt="Speaker" />, text: 'Speaker' },
    { icon: <img src={ipod} alt="iPod" />, text: 'iPod' },
    { icon: <img src={pad} alt="Tablet" />, text: 'Tablet' },
  ];

  return (
    <div>
        <Hero />
      <Container className="" style={{marginTop:"250px"}}>
        <div className="mt-4">
                  <h1 className="my-4 fw-bolder text-center text-md-left" style={{ fontSize: "80px", fontFamily: "Prompt" }}>
            What <span style={{ color: "#DF1406" }}>we</span> provide
          </h1>
          <Row className="text-center">
            {columns.map((col, index) => (
              <Col key={index} className="mb-4"> 
                <div className="mb-2">{col.icon}</div>
                <div>{col.text}</div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Arrival />
       <ProductsList /> 
    </div>
  );
};

export default IconGrid;
