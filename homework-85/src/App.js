import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {logoutUser} from './store/actions/usersActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {NotificationContainer} from "react-notifications";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar
                        user={this.props.user}
                        logout={this.props.logoutUser}
                    />
                </header>
                <Container>
                    <Routes user={this.props.user}/>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
