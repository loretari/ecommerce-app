import React, {useState} from 'react';
import './SelectionsProducts.css';
import { items } from "../../Data/AllData";
import {addToCart} from "../../Store/cartSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";



function SelectionsItem() {

    // const filteredItems = items.filter((item) => item.id <= 8);
    const filteredItems = items.filter((item) => item.selections);

    const dispatch = useDispatch();
    const handleAdd = (item) => {
    dispatch(addToCart({ product: item, num: 1 }));
    }

    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
    }




    return (
        <>
            <div
            onAnimationEnd={() => setNotify(false)}
            className= {`notify ${notify ? "slide-in" : ""}`}
        >
            <p>Item has been added to the cart &nbsp; ✅</p>
        </div>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "product normal">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= {(`/shop/${item.id}`)}
                    >
                        <div className= "product-header">
                            <img src={item.img} alt= "product1"/>
                        </div>

                    </Link>
                        <div className="product-like">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
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

            ))}
        </>

    )
}
export default SelectionsItem;