import React from 'react';
import './Trending.css';
import TrendingItem from "./TrendingItem";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";

function TrendingSlider () {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 220;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 220;
    }

    return (
        <div className= "trending">
            <div className= "container">
                <div className= "title-btns">
                    <h3>Our expert curation of consciously crafted, lasting luxury</h3>
                    <div className= "btns">
                        <button title= "scroll-left" onClick={slideLeft}>
                            <IconArrowLeft/>
                        </button>
                        <button title= "scroll-right" onClick={slideRight}>
                            <IconArrowRight />
                        </button>
                    </div>
                </div>

                <div className= "row-container" id= "slider">
                    <TrendingItem/>

                </div>
            </div>
        </div>


    )
}

export default TrendingSlider;