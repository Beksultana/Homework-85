import React, {Fragment} from 'react';
import './BtnLinks.css';
import {NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const BtnLinks = () => {
    return (
        <Fragment>
            <div className="menuCreate">
                <NavLink tag={RouterNavLink} to="/new/artist">
                    <p className="new">
                        Create artist
                    </p>
                </NavLink>
                <NavLink tag={RouterNavLink} to="/new/album">
                    <p className="new">
                        Create album
                    </p>
                </NavLink>
                <NavLink tag={RouterNavLink} to="/new-track">
                    <p className="new">
                        Create track
                    </p>
                </NavLink>
            </div>
        </Fragment>
    );
};

export default BtnLinks;