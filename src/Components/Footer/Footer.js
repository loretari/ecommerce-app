import React from "react"
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap"
import LogoImg from "../../Assets/logo.png";
import {Link} from "react-router-dom";
import useWindowScrollToTop from "../../useWindowScrollToTop";

const Footer = () => {
useWindowScrollToTop();

    return (
        <footer>
            <Container>
                <Row className="footer-row">
                    <Col md={3} sm={5} className='box'>
                        <div className="logo">
                            <Link
                            onClick={() => window.scrollTo(0, 0)}
                            to= '/'
                            >
                            <img
                                src={LogoImg}
                                alt= "logo"/>
                            </Link>
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to= '/'
                            >
                            <h1>LorDesIgn</h1>
                            </Link>
                        </div>
                        <p>Shop from over 500 of the
                            world's finest luxury designer brands & be dressed
                            for any occasion.</p>
                    </Col>
                    <Col md={3} sm={5} className='box'>
                         <h2>About Us</h2>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Careers
                                </Link>
                    </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    People & Planet
                                </Link>
                               </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Advertising
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Careers
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Modern Slavery Statement
                                </Link>
                                </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={5} className='box'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Track an Order
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Create a Return
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Contact Us
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Return Policy
                                </Link>
                                </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to= '/'>
                                    Privacy Policy
                                </Link>
                                </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={5} className='box'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>70 Washington Square South, New York, NY 10012, United States </li>
                            <li>Email: uilib.help@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
