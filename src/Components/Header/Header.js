import React, {useState} from "react";
import SideNav from "../SideNav/SideNav";
import Nav from "../Nav/Navbar";


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