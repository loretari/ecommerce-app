import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { BiUser, BiShoppingBag, BiSearch } from "react-icons/bi";

import LogoNav from "../Assets/logo_Smile2.png";

import "./Navbar.css";
import React from "react";

const Navbar = (props) => {
    const { toggle } = props;

    return (
        <nav className= "nav" id= "nav">
            <div className= "container_top">
                <Link to="/">
                    <img className= "logo" src={LogoNav} alt="Logo Nav" />
                </Link>
                <ul className= "icons_menu">
                    <li className= "search_icon">
                        <BiSearch />
                    </li>
                    <li className= "cart_icon">
                        <BiShoppingBag />
                    </li>
                    <li className= "user_icon">
                        <BiUser />
                    </li>
                    <li className= "mobile_icon">
                        <FaBars onClick={toggle} />
                    </li>
                </ul>
            </div>
            <div className= "container_bottom">
                <ul className= "links">
                    <li>
                        <Link to="/categories/dresses">Dresses</Link>
                    </li>
                    <li>
                        <Link to="/categories/convertibleDresses">Convertible Dresses</Link>
                    </li>
                    <li>
                        <Link to="/categories/capes">Capes</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;