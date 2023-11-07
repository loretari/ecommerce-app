import { BiX } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";
import './SideNav.css';


const SideNav = (props) => {

    const { toggle, isOpen } = props;

    return (
        <aside className={!isOpen ? "container_hidden" : "container"}>
            <i className= "close_icon">
                <BiX onClick={toggle}/>
            </i>
            <ul className= "links">
                <li>
                    <Link to="/categories/dresses" onClick={toggle}>
                        Dresses
                    </Link>
                </li>
                <li>
                    <Link to="/categories/convertibleDresses" onClick={toggle}>
                        Convertible Dresses
                    </Link>
                </li>
                <li>
                    <Link to="/categories/capes" onClick={toggle}>
                        Capes
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideNav;