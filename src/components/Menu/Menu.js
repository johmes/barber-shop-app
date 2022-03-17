// Menu.js
import React from "react";
import { bool } from 'prop-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../Home';
import Booking from "../../Booking";
import Contact from "../../Contact";
import About from '../../About';
import NotFound from "../../NotFound";


import {
    NavBar,
    NavLink,
    NavMenu,
} from './Menu.styled';


function Menu({ open, visible, ...props }) {

    let isHidden = open ? true : false;
    let isVisible = visible ? true : false;
    const tabIndex = isHidden ? 0 : -1;


    return (

        <BrowserRouter>
            <NavBar visible={isVisible}>
                <NavMenu
                    open={isHidden}
                    aria-hidden={!isHidden}
                    {...props}
                >
                    <NavLink
                        className='menuLink'
                        to="/"
                        tabIndex={tabIndex}
                        onClick={() => isVisible === false}
                    >
                        <h1>Coffee Barber</h1>
                    </NavLink>

                    <NavLink
                        className='menuLink'
                        to="/"
                        tabIndex={tabIndex}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className='menuLink'
                        to="/Booking"
                        tabIndex={tabIndex}
                    >
                        Booking
                    </NavLink>

                    <NavLink
                        className='menuLink'
                        to="/About"
                        tabIndex={tabIndex}
                    >
                        About
                    </NavLink>

                    <NavLink
                        className='menuLink'
                        to="/Contact"
                        tabIndex={tabIndex}
                    >
                        Contact
                    </NavLink>
                </NavMenu>
            </NavBar>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;