import React from "react";
import Footer from "../Components/Footer/Footer";
import SliderHome from "../Components/Slider/SliderHome";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import SelectionsProducts from "../Components/Selections/SelectionsProducts";
import Customer from "../Components/Customer/Customer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Hero from "../Components/Hero/Hero";

        const Home = () => {
    return (
        <>
            <SliderHome/>
            <Hero />
            <SelectionsProducts/>
            <TrendingSlider/>
            <Customer/>
            <NewsLetter/>
        <Footer />
        </>

    )
        }

        export default Home;