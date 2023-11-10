import React, {useState} from "react";
import './navBar.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import LogoImg from '../../Assets/logo.png'
import {Link} from "react-router-dom";
import useWindowScrollToTop from "../../useWindowScrollToTop";


const NavBar = () => {

    const [isFixed, setIsFixed] = useState(false);
    const [expand, setExpand] = useState(false);

    //fixed Header
    function scrollHandler() {
if (window.scrollY >= 100) {
    setIsFixed(true);
} else if (window.scrollY <= 50) {
    setIsFixed(false)
}
    }

    window.addEventListener("scroll", scrollHandler);

    useWindowScrollToTop();

    return (
        <Navbar
            fixed= "top"
            expand= "md"
            className = {isFixed ? "navbar fixed" : "navbar"}>

            <Container className= "navbar-container">
                <Navbar.Brand>

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
                    <h1 className= "logo">LorDesIgn</h1>
                </Link>

                </Navbar.Brand>


            {/*    media cart and toggle*/}
            <div className= "d-flex">
                <div className= "media-cart">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="nav-icon"
                        xmlns="http://www.w3.org/2000/svg"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>

                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= '/cart'
                        className= "cart"
                        data-num={3}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="nav-icon"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z" fill="currentColor"></path></svg>
                    </Link>
                </div>

                <Navbar.Toggle
                aria-controls = "basic-navbar-nav"
                onClick = {() => {
                   setExpand(expand ? false : "expanded")
                }}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="nav-icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.54 5.48H3.5a.48.48 0 01-.463-.662.47.47 0 01.443-.288h13A.48.48 0 0117 5a.49.49 0 01-.46.48zM16.54 15.48H3.5A.49.49 0 013 15a.48.48 0 01.48-.47h13A.471.471 0 0117 15a.48.48 0 01-.46.48zM16.54 10.48H3.5A.49.49 0 013 10a.48.48 0 01.48-.47h13A.48.48 0 0117 10a.49.49 0 01-.46.48z" fill="currentColor"></path></svg>

                </Navbar.Toggle>
            </div>



                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Item>
                            <Link
                                className="navbar-link"
                                to="/"
                                onClick={() => setExpand(false)}
                            >
                                <span className="nav-link-label">Home</span>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link
                                className="navbar-link"
                                to="/shop"
                                onClick={() => setExpand(false)}>
                                <span className="nav-link-label">Shop</span>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link
                                className="navbar-link"
                                to="/cart"
                                onClick={() => setExpand(false)}>
                                <span className="nav-link-label">Cart</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="expanded-cart">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to= '/'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="nav-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zM10 11c-5 0-7 2-7 7h14c0-5-2-7-7-7zm0 1c4.08 0 5.73 1.33 6 5H4c.27-3.67 1.92-5 6-5z" fill="currentColor"></path></svg>
                            </Link>
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to='/cart'
                                className='cart'
                                data-num={3}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="nav-icon"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z" fill="currentColor"></path></svg>


                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;