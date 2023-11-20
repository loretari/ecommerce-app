import React from 'react';
import './NewsItems.css';
import NewsItems from "./NewsItems";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";

function NewsSlider () {
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
            <div className= "trendingContainer">

                <div className= "title-btns">
                    <div className= "newIn">
                        <h3>New In</h3>
                        <p>Stay ahead of the style cure with our latest arrivals</p>
                    </div>

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
                    <NewsItems/>
                </div>
            </div>
        </div>


    )
}

export default NewsSlider;