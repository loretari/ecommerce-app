import React from "react";
import './Customer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { serviceData } from "../../Data/AllData";
import Col from "react-bootstrap/Col";

;

const Customer = () => {
    return (
       <section className= "customer background">
           <Container>
               <Row>
                   {serviceData.map((val, index) => {
                       return (
                           <Col md= {3} sm= {5} xs= {9}
                                style= {{backgroundColor: val.bg}}
                                className= "feature"
                                key={ index }
                           >
                               <div className= "icon">
                                   {val.icon}
                               </div>
                               <h3>{val.title}</h3>
                               <p>{val.subtitle}</p>
                           </Col>
                       )
                   })}
               </Row>
           </Container>
       </section>
    )
}

export default Customer;