import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import MainContainer from "./container/MainContainer/MainContainer";
import Albums from "./components/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";
import Registers from "./container/Registers/Registers";
import Login from "./container/Login/Login";
import TrackHistory from "./components/TrackHistory/TrackHistory";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props}/> : <Redirect to="/login"/>
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/albums/:id" component={Albums}/>
            <ProtectedRoute
                isAllowed={user && user.token}
                path="/tracks/:id"
                component={Tracks}
            />
            <Route path="/register" component={Registers}/>
            <Route path="/login" component={Login}/>
            <Route path="/trackHistory" component={TrackHistory}/>
        </Switch>
    );
};

export default Routes;