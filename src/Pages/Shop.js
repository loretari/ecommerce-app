import React from "react";
import ShopList from "../Components/Shop/ShopList";
import {Outlet} from "react-router";
import Footer from "../Components/Footer/Footer";

function Shop () {


    return (
        <>
    <ShopList/>
    <Outlet />
    <Footer/>
    </>
    )
}

export default Shop;