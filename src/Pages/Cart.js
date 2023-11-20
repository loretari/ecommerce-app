import React, {useEffect} from "react";
import { Container, Row, Col  } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseQty, deleteProduct} from "../Store/cartSlice";
import {Link} from "react-router-dom";
import ArrowLeft from "../Assets/arrow-left.png";



const Cart = () => {

    const { cartList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cartList.reduce(
        (price, item) => price + item.qty * item.price,
        0
    );

    return (
        <>

        <div className= "cart-home">
            <h3 className= "shopping-bag">Shopping Bag</h3>
        {/*<Link*/}
        {/*    onClick={() => window.scrollTo(0, 0)}*/}
        {/*    to= "/">*/}
        {/*    <img src={ArrowLeft} alt= "arrow" />*/}
        {/*    Back*/}
        {/*</Link>*/}
        </div>
        <section className= "cart-items">
            <Container>
                <Row className= "justify-content-center">
                    <Col md={8}>
                        {cartList.length === 0 && (
                            <h1 className= "no-items productCard">No Items are add in Cart</h1>
                        )}
                        {cartList.map((item) => {
                            const productQty = item.price * item.qty;
                            return (
                                <div className= "cart-list" key={item.id}>
                                    <Row>
                                        <Col className= "image-holder" sm={4} md={3}>
                                            <Link
                                                onClick={() => window.scrollTo(0, 0)}
                                                to={`/shop/${item.id}`}>
                                                <div className= "product-header">
                                                    <img src={item.img} alt= "cartItem"/>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col sm={8} md={9}>

                                        <Row className= "cart-content justify-content-center">
                                            <Col xs={12} sm={9} className= "cart-details">
                                                <Link
                                                    onClick={() => window.scrollTo(0, 0)}
                                                    to={`/shop/${item.id}`}>
                                                <h3>{item.description}</h3>
                                                <h4>${item.price}.00 * {item.qty}
                                                <span>${productQty}</span>
                                                </h4>
                                                </Link>
                                            </Col>



                                            <Col xs={12} sm={3} className= "cartControl">
                                                <button
                                                className= "incCart"
                                                onClick={() =>
                                                    dispatch(addToCart({product: item, num: 1}))}
                                                >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <button
                                                className= "desCart"
                                                onClick={() => dispatch(decreaseQty(item))}
                                                >
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                            </Col>
                                        </Row>
                                        </Col>
                                        <button
                                        className= "delete"
                                        onClick={() => dispatch(deleteProduct(item))}
                                        >
                                            <ion-icon name="close"></ion-icon>
                                        </button>
                                    </Row>
                                </div>
                            );
                        })}
                    </Col>
                    <Col md={4}>
                        <div className= "cart-total">
                            <h2>Cart Summary</h2>
                            <div className= "d_flex">
                                <h4>Total Price: </h4>
                                <h3>${totalPrice}.00</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
           </>
    )
}

export default Cart;