import React, {Fragment} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink, UncontrolledDropdown
} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';


const Toolbar = ({user, logout}) => {
    return (
        <Navbar dark color="primary" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Music</NavbarBrand>

            <Nav className="ml-auto" navbar>
               <NavItem>
               </NavItem>
                {user ? (
                    <Fragment>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret >
                                Menu
                            </DropdownToggle>
                            <DropdownMenu right >
                                <DropdownItem onClick={logout}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavLink tag={RouterNavLink} to='/trackHistory'>Track History</NavLink>
                    </Fragment>
                ) : (
                    <Fragment>

                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                        </NavItem>

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