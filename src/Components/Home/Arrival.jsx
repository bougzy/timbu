import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Arrival.css'; 
import arrowleft from "../../assets/arrowleft.png"
import arrowright from "../../assets/arrowright.png"

const TwoColumnGrid = () => {
  return (
    <Container className="arrival">
      <Row>
        <Col>
        <h1 className="my-4" style={{fontSize:"60px", fontFamily:"Prompt"}}>New <span style={{color:"#DF1406"}}>arrival</span> for you</h1>
        </Col>
        <Col className="d-flex justify-content-end align-items-center me-1">
          <div className="circle-icon">
            
            <Image src={arrowleft} className="me-5"/>
          </div>
          <div className="circle-icon">
           
          <Image src={arrowright} className="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnGrid;
