import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import MainContainer from "./containers/MainContainer/MainContainer";
import Albums from "./components/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";
import Registers from "./containers/Registers/Registers";
import Login from "./containers/Login/Login";
import TrackHistory from "./components/TrackHistory/TrackHistory";
import NewArtists from "./containers/NewArtists/NewArtists";
import NewAlbums from "./containers/NewAlbums/NewAlbums";
import NewTrack from "./containers/NewTrack/NewTrack";

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
            <Route path="/new/artist" component={NewArtists}/>
            <Route path="/new/album" component={NewAlbums}/>
            <Route path="/new-track" component={NewTrack}/>
        </Switch>
    );
};

export default Routes;