import React, {Fragment} from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';


const Toolbar = ({user}) => {
    return (
        <Navbar dark color="primary" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Music</NavbarBrand>

            <Nav className="ml-auto" navbar>
               <NavItem>
                   <NavLink tag={RouterNavLink} to="/" >Music</NavLink>
               </NavItem>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                </NavItem>
                {user ? (
                    <Link to='/trackHistory'>Track History</Link>
                ) : (
                    <Fragment>

                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
                        </NavItem>
                    </Fragment>
                )}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;