import React, {Component, Fragment} from 'react';
import MainContainer from "./container/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Albums from "./components/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Registers from "./container/Registers/Registers";
import TrackHistory from "./components/TrackHistory/TrackHistory";
import Login from "./container/Login/Login";

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Toolbar user={this.props.user}/>
                </header>
                <Container>
                    <Switch>
                        <Route path="/" exact component={MainContainer}/>
                        <Route path="/albums/:id" component={Albums}/>
                        <Route path="/tracks/:id" component={Tracks}/>
                        <Route path="/register" component={Registers}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/trackHistory" component={TrackHistory}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
};

export default withRouter(connect(mapStateToProps)(App));
