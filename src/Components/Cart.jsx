import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Image, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../feature/cart/cartSlice';
import OrderSummary from './OrderSummary';
import percent from "../assets/percent.png"


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2 ><Link to="/" className="text-dark text-decoration-none fw-bolder"><span className="h4" style={{color:"#A2A3B1" }} >Shopping  &gt; </span></Link>  <span className="fw-bolder">Cart</span></h2>
      <Row>
        
        <Col md={8}>
          <h4 className="" style={{color:"#A2A3B1" }}>{cartItems.length} Item{cartItems.length !== 1 && 's'}</h4>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="">
                <Row>
                  <Col sm={12} md={8}>
                    <Image src={item.image} rounded style={{ width: '310px' }} className="border border-0 shadow p-3"/>
                  </Col>
                  <Col sm={12} md={4}>
               
                    <div className="">
                      <div className="d-flex">
                        <h5>{item.name}</h5>
                        <p className="ms-4">{item.price}</p>
                      </div>
                      <p>Color: {item.color}</p>
                      <div className="">
                        <div className="d-flex align-items-center">
                          <div className="border rounded-4 w-50 p-1 d-flex justify-content-between" style={{ width: "30px" }}>
                            <Button className="bg-white border-0 text-dark text-start" size="sm" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                            <span className="mt-1">{item.quantity}</span>
                            <Button className="bg-white border-0 text-dark" size="sm" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                          </div>
                          <Button variant="link" className="text-danger text-decoration-none ms-3" onClick={() => dispatch(removeItem(item.id))}>Remove</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="p-4  text-dark d-none d-md-block border border-danger rounded" style={{background:"#FFD3B6", marginTop:"85px", borderRadius:"5px solid #DF1406", width:"650px", fontFamily:"Montserrat"}}>
            <img src={percent} /> <span className="ms-2" style={{fontFamily:"Montserrat"}} > Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA</span>
          </div>
        </Col>
        
        <Col md={4}>
          <Card className="border border-dark mt-4">
            <Card.Body>
              <OrderSummary />
            </Card.Body>
          </Card>
          <div className="mt-3 p-3 text-dark  d-flex rounded d-sm-block d-md-none" style={{background:"#FFD3B6", borderRadius:"5px solid #DF1406", width:"350px", fontFamily:"Montserrat"}}>
            <img src={percent} className="mt-2" style={{width:"30px", height:"30px"}}/>
            <p className="ms-2 mt-2 text-dark text-sm">10% Instant Discount with Federal<br/> Bank Debit Cards on a min spend of<br/> $150. TCA</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
