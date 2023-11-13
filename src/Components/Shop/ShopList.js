import React from "react";
import {Link} from "react-router-dom";
import { items } from "../../Data/AllData";
import './ShopList.css';
import ArrowLeft from '../../Assets/arrow-left.png';

function ShopList () {

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
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to={`/shop/${item.id}`}>
                                <div className= "product-header">
                                    <img src={item.img} alt= "product1"/>
                                </div>
                                <div className= "product-details">
                                    <p>{item.description}</p>
                                    <p className= "item-price">USD {item.price}</p>
                                </div>
                            </Link>


                        </div>
                    )) }
                </div>

            </div>
            </div>
        </div>
    )

}

export default ShopList;