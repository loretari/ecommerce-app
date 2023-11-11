import React from "react";
import Footer from "../Components/Footer/Footer";
import SliderHome from "../Components/Slider/SliderHome";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import SelectionsProducts from "../Components/Selections/SelectionsProducts";

        const Home = () => {
    return (
        <>
            <SliderHome/>
            <SelectionsProducts/>
            <TrendingSlider/>

        <Footer />
        </>

    )
        }

        export default Home;