import React from "react";
import ShopList from "../Components/Shop/ShopList";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import MyPagination from "../Components/Pagination/Pagination";


function Shop () {




    return (
        <>
    <Banner title={"Shop By "}/>
    <ShopList/>
    <MyPagination />
    <NewsLetter/>
    <Footer/>
    </>
    )
}

export default Shop;