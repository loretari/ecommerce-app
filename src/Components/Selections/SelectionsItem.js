import React from 'react';
import './SelectionsProducts.css';
import { items } from "../../Data/AllData";
import {Link} from "react-router-dom";
import {addToCart} from "../../Store/cartSlice";
import {useDispatch} from "react-redux";

function SelectionsItem() {

    // const filteredItems = items.filter((item) => item.id <= 8);
    const filteredItems = items.filter((item) => item.selections);

    const dispatch = useDispatch();
    const handleAdd = (item) => {
    dispatch(addToCart({ product: item, num: 1 }));
    }


    return (
        <>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "product normal">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= {`/shop/${item.id}`}
                    >
                        <div className= "product-header">
                            <img src={item.img} alt= "product1"/>
                        </div>
                        <div className="product-like">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div className= "product-details">
                            <p>{item.description}</p>
                            <div className= "item-price">
                            <p >USD {item.price}</p>
                                <button
                                aria-label= "Add"
                                type= "submit"
                                className = "add"
                                onClick={() => handleAdd(item)}
                                >

                                    <ion-icon name="add"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </Link>

                </div>

            ))}
        </>

    )
}
export default SelectionsItem;