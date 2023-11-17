import React from "react";
import './Banner.css';
import banner from "../../Assets/bannerBig.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Banner =({title}) => {
    return (
    <div className= "image-container">
        <img src={banner} alt= "Banner"/>
        <div className= "overlay">
            <Container>
                <Row>
                    <Col>
                        <h2>{ title }</h2>
                    </Col>

                </Row>
            </Container>
        </div>
    </div>
    )
}

export default Banner;