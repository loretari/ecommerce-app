import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import React from "react";

const Layout = () => {
    return (
        <>
        <Header/>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Layout;