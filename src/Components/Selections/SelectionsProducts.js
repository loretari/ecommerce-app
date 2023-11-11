import React from 'react';
import './SelectionsProducts.css'
import SelectionsItem from "./SelectionsItem";


function SelectionsProducts() {
    return (
        <div className= "selections-container">
                <h2 className= "container selections-h2 " >
                    The Selections</h2>
            <div className= "container">
                <div className= "selections-grid">
                    <SelectionsItem/>
                </div>

            </div>
        </div>
    )
}

export default SelectionsProducts;