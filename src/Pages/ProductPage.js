import React, {useEffect, useState} from "react";
import Footer from "../Components/Footer/Footer";
import TrendingSlider from "../Components/Trending/TrendingSlider";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Banner from "../Components/Banner/Banner";
import {useParams} from "react-router";
import {items} from "../Data/AllData";


function ProductPage () {

    const {id} = useParams();
    const [selectedItem, setSelectedItem] = useState(
        items.filter((item) => parseInt(item.id) === parseInt(id))[0]
    );

    useEffect(() => {
        setSelectedItem(items.filter((item) => parseInt(item.id) === parseInt(id))[0] );
    }, [selectedItem, id])

    return (
        <>
            <Banner title={selectedItem?.category}/>
           <ProductDetail />
            <TrendingSlider/>
            <Footer />
        </>
    )


}

export default ProductPage;
