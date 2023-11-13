import React from "react";
import ShopList from "../Components/Shop/ShopList";
import {Outlet} from "react-router";

function Shop () {


    return (
        <>
    <ShopList/>
    <Outlet />
    </>
    )
}

export default Shop;