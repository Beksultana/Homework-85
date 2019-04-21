import React, {Component, Fragment} from 'react';
import {Button,Form} from "reactstrap";
import './Register.css';
import FormElement from "../../components/FormElement/FormElement";
import {registerSuccess} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Registers extends Component {

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

        this.props.registerUser({...this.state});
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
                        Register
                    </h2>
                </div>
                <hr/>
                <div className="signUp">

                    <div className="SignUpTextBlock">
                        <h2 className="SignUpText">Sign Up</h2>
                    </div>

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
                                <Button type="submit" className="btn" color="primary">Register</Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.user.error
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerSuccess (userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registers);