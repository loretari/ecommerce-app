import React from "react";
import Footer from "../Components/Footer/Footer";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

function ProductPage () {
    return (
        <>
           <ProductDetail/>
            <TrendingSlider/>
            <Footer />
        </>
    )


}

export default ProductPage;
