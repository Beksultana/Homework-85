import React, {Component, Fragment} from 'react';
import {Alert, Button, Form} from "reactstrap";
import FormElement from "../../components/FormElement/FormElement";
import './Login.css';
import {loginSuccess} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.loginUser({...this.state});
    };

    submitCancel = event => {
        event.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <div className="HeaderTitleInfo">
                    <h2
                        style={{
                            color: '#5e5e5e', fontWeight: "bold"}}
                    >
                        Login
                    </h2>
                </div>

                <div className="LoginBlock">

                    <div className="LoginTextBlock">
                        <h2 className="SignUpText">Login</h2>
                    </div>
                    {this.props.error && (
                        <Alert color="danger">
                            {this.props.error.error || this.props.error.global}
                        </Alert>
                    )}
                    <div className="Form">
                        <Form onSubmit={this.submitFormHandler}>
                            <FormElement
                                title="Username"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeHandler}
                                className="input"
                            />

                            <FormElement
                                title="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                className="input"
                            />

                            <div className="buttonBox">
                                <Button onClick={this.submitCancel} className="btn" color="danger">Cancel</Button>
                                <Button type="submit" className="btn" color="success">Login</Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    error: state.musicReducers.error
});

const mapDispatchToProps = dispatch => ({
    loginUser: (userData) => dispatch(loginSuccess(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);