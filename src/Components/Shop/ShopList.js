import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { items } from "../../Data/AllData";
import './ShopList.css';
import ArrowLeft from '../../Assets/arrow-left.png';
import {useDispatch} from "react-redux";
import {addToCart} from "../../Store/cartSlice";


function ShopList () {

    const dispatch = useDispatch();
    const handleAdd = (item) => {
        dispatch(addToCart({ product: item, num: 1 }));
    }

    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    }



    //
    //
    // useEffect(() => {}, [items]);
    // if (items.length === 0) {
    //     return <h1 className="not-found">Product Not Found !!</h1>;
    // }

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
            <div className= "container">
                <div className= "products-grid">


                    { items.map((item) => (
                        <div key={item.id} className= "product normal">
                            <div className="product-like">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to={`/shop/${item.id}`}>
                                <div className= "product-header">
                                    <img src={item.img} alt= "product1"/>
                                </div>
                            </Link>
                                <div className= "product-details">
                                    <p>{item.description}</p>
                                    <div className= "item-price">
                                    <p>USD {item.price}</p>
                                    <button
                                        aria-label= "Add"
                                        type= "submit"
                                        className = "add"
                                        onClick={() => {
                                            handleAdd(item);
                                            showNotify();
                                            window.scrollTo(0, 0)
                                        }}
                                    >
                                        <ion-icon name="add"></ion-icon>
                                    </button>
                                    </div>
                                </div>



                        </div>
                    )) }
                </div>

            </div>
            </div>
        </div>
    )

}

export default ShopList;