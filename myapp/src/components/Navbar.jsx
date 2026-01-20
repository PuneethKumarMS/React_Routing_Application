import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink
                    to = "/"
                    className = {({isActive}) => (isActive ? 'Active': '')}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to = "/About"
                    className = {({isActive}) => (isActive ? 'Active': '')}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to = "/Contact"
                    class
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
