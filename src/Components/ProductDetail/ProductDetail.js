import React, {useState} from "react";
import './ProductDetail.css'
import ArrowLeft from "../../Assets/arrow-left.png";
import {Link} from "react-router-dom";
import { useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../Store/cartSlice";
import { items } from "../../Data/AllData";


function ProductDetail() {

    const dispatch = useDispatch();

    const {id} = useParams();

    const item = items.filter((item) => item.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(item[0].img);

    // const { cartList } = useSelector((state) => state.cart);

    const handleAdd = () => {
         dispatch(addToCart({ product: item, num: quantity }));
    }



    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    // const calcPrice = cartList.reduce(
    //     (price, item) => price + item.qty * item.price, 0
    // );




    const changeImage = (e) => {
        setImage(e.target.src);
    }


    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    }


    return (
        <div className= "product-page-div">
            <div className= "container">
                <div className= "title-home">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= "/">
                        <img src={ArrowLeft} alt= "arrow" />
                        Back
                    </Link>

                </div>
                <div className= "product-div">
                    <h3 className= "product-big-name">{item[0].description}</h3>
                    <div className= "product-left">
                        <div className= "big-img">
                            <img src={image} alt= "product"/>
                        </div>
                        <div className= "small-imgs">
                            <img
                                onMouseOver={changeImage}
                                src={item[0].img}
                                alt= "product"/>
                            <img
                                onMouseOver={changeImage}
                                src={item[0].otherImgs[0]}
                                alt= "product"/>
                            <img
                                onMouseOver={changeImage}
                                src={item[0].otherImgs[1]}
                                alt= "product"/>
                        </div>
                    </div>
                    <div className= "product-right">
                        <p className= "product-spec">
                            {item[0].specs}
                        </p>
                        <div className= "product-quant">
                            <p>Quantity</p>
                            <div className= "product-btns">
                                <button onClick={decrease}>-</button>
                                <p className= "quantity">{quantity}</p>
                                <button onClick={increase}>+</button>
                            </div>
                            {/*<p className= "product-price">{calcPrice(quantity)}.00 $</p>*/}
                            {/*<p className= "product-price">{calcPrice}.00 $</p>*/}
                        </div>
                        <div className= "atc-buy">
                            <button
                                onClick={()=> {
                                    handleAdd(item[0], quantity);
                                    showNotify();
                                }}
                                className= "atc-btn">add to cart</button>
                            <button className= "buy-btn">buy now</button>
                        </div>
                    </div>
                </div>



                <div className= "specifications">
                    <div className= "spec">
                        <p className= "spec-title">Fabric:</p>
                        <p className= "title-desc">{item[0].fabric}</p>
                    </div>
                    <div className= "spec">
                        <p className= "spec-title">Color:</p>
                        <p className= "title-desc">{item[0].color}</p>
                    </div>
                    <div className= "spec">
                        <p className= "spec-title">Size:</p>
                        <p className= "title-desc">{item[0].size}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail;