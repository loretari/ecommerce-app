import React from "react";
import Footer from "../Components/Footer/Footer";
import SliderHome from "../Components/Slider/SliderHome";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import SelectionsProducts from "../Components/Selections/SelectionsProducts";
import Customer from "../Components/Customer/Customer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

        const Home = () => {
    return (
        <>
            <SliderHome/>
            <SelectionsProducts/>
            <TrendingSlider/>
            <Customer/>
            <NewsLetter/>
        <Footer />
        </>

    )
        }

        export default Home;