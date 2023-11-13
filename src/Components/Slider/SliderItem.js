import React from "react";
import "./SliderItem.css";
import { Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";



const SliderItem = ({ title, desc, cover}) => {



    return (
       <Container className= "box">
       <Row>
           <Col md={6}>
               <h1>{ title }</h1>
               <p>{ desc }</p>
               <Link
                   onClick={() => window.scrollTo(0, 0)}
                   to= {(`/shop`)}
               >
                   <button className= "btn-primary">Visit Collection</button>
               </Link>
           </Col>
           <Col md={6} className= "imageFlex">
               <img src={ cover } alt= "#"/>
           </Col>
       </Row>
   </Container>



    )
}

export default SliderItem;
