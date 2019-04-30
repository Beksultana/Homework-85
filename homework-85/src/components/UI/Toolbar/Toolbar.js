import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem
} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import MenuUser from "./Menus/MenuUser";
import AnonymousMenu from "./Menus/AnonymousMenu";


const Toolbar = ({user, logout}) => {
    return (
        <Navbar dark color="primary" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Music</NavbarBrand>
            <Nav className="ml-auto" navbar>
               <NavItem>
               </NavItem>
                {user ? <MenuUser user={user} logout={logout}/> : <AnonymousMenu/>}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;