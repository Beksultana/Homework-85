import React, {Fragment} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const MenuUser = ({user, logout}) => {
    return (
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
    );
};

export default MenuUser;