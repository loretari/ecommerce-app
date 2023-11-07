import React, {useState} from "react";
import SideNav from "./SideNav";
import Nav from "./Navbar";


        const Header = () => {
            const [isOpen, setIsOpen] = useState(false);

            const toggle = () => {
                setIsOpen(!isOpen);
            };

            return <header>
                <SideNav toggle={ toggle} isOpen={ isOpen }/>
                <Nav toggle = {toggle}/>
            </header>
        }

        export default Header;