import React, {Component, Fragment} from 'react';
import {Button,Form} from "reactstrap";
import './Register.css';
import FormElement from "../../components/FormElement/FormElement";

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

    render() {
        return (
            <Fragment>
                <div className="signUp">

                    <div className="SignUpTextBlock">
                        <h2 className="SignUpText">Sign Up</h2>
                    </div>

                    <div className="Form">
                        <Form>
                            <FormElement
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeHandler}
                                className="input"
                                placeholder="username"
                            />

                            <FormElement
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                className="input"
                                placeholder="password"
                            />

                            <div className="buttonBox">
                                <Button className="btn" color="danger">Cancel</Button>
                                <Button className="btn" color="primary">Send</Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Registers;