import React from "react";
import Footer from "../Components/Footer/Footer";
import SliderHome from "../Components/Slider/SliderHome";
import TrendingSlider from "../Components/Trending/TrendingSlider";

        const Home = () => {
    return (
        <>
            <SliderHome/>
            <TrendingSlider/>
        <Footer />
        </>

    )
        }

        export default Home;