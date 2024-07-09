import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './HeroSection.css'
import calla from "../../assets/calla.png"
import hq from "../../assets/hq.png"
import pk from "../../assets/pk.png"

const Hero = () => {

    return (
    <div className="promotion-banner relative">
      <div className="container">
      <Row className="">
        <Col lg={6} className="d-flex justify-content-end">
          <div className="promotion-text">
          <h1 className="mt-5">
      <span class="grab">Grab</span><span className="highlight bg-danger  text-white rounded-4 ">50%</span> 
        </h1> 

             <h1>Off Smartphone</h1> 
             <h1>
             Collection
            </h1>
           
            <p style={{fontSize:"18px", width:"300px"}}>Shop the latest models from top brands at unbeatable prices.</p>
            <div className="d-flex">
              <Image src={pk} />
              <h2 className="mt-5 ms-4" style={{fontWeight:"600px", fontSize:"32px",}}>iPhone 14 <br></br>Edition</h2>
            </div>
          </div>
        </Col>
        <Col lg={6} className="d-flex justify-content-start d-none d-md-block">
          <Image src={calla} fluid style={{marginLeft:"-60px"}}/>
        </Col>
        <Col lg={6} className="text-center d-sm-block d-md-none">
          <Image src={hq} fluid style={{marginLeft:"-0px"}}/>
        </Col>
      </Row>
      </div>
    </div>

    )
}

export default Hero;




