import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <Navbar dark color="primary" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Music</NavbarBrand>

            <Nav className="ml-auto" navbar>
               <NavItem>
                   <NavLink tag={RouterNavLink} to="/" >Music</NavLink>
               </NavItem>

                <NavItem>
                    <NavLink tag={RouterNavLink} to="/register" >Sign Up</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Toolbar;