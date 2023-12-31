import React from 'react';
import './NewsItems.css';
import { items } from "../../Data/AllData";
import {Link} from "react-router-dom";

function NewsItems () {

    const filteredItems = items.filter((item) => item.trend);



    return (
        <>
            {filteredItems.map((item) => (
                <div
                    key={item.id} className= "row-item">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to= {(`/shop/${item.id}`)}
                    >
                        <div className= "item-header">
                            <img src={item.img} alt= "product" />
                        </div>
                        <div className= "item-description">
                            <p>{item.description}</p>
                            <p className= "item-price">USD {item.price}</p>
                        </div>
                    </Link>

                </div>
            ))}

        </>
    )
}

export default NewsItems;