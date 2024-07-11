import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Arrival.css'; 
import arrowleft from "../../assets/arrowleft.png"
import fireleft from "../../assets/fireleft.png"
// import arrowright from "../../assets/arrowright.png"
import fireright from "../../assets/fireright.png"


const TwoColumnGrid = () => {
  return (
    <Container className="arrival" style={{marginTop:"200px"}}>
      <Row>
        <Col>
        <h1 className="my-4 fw-bolder" style={{fontSize:"50px", fontFamily:"Prompt"}}>New <span style={{color:"#DF1406", fontSize:""}}>arrival</span> for you</h1>
        </Col>
        <Col className="d-flex justify-content-end align-items-center me-1">
          <div className="circle-icon">
            
            <Image src={fireleft} className="me-5"/>
          </div>
          <div className="circle-icon">
           
          <Image src={fireright} className="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnGrid;
