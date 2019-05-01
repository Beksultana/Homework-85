import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class ArtistsForm extends Component {

    state = {
        artists: '',
        description: '',
        image: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    inputFileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <div className="Form">
                    <FormGroup row>
                        <Label for="artists" sm={2}>Artist name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="artists"
                                id="artists"
                                value={this.state.artists}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                value={this.state.description}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="image" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input
                                type="file"
                                name="image"
                                id="image"
                                onChange={this.inputFileChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="success">Send</Button>
                        </Col>
                    </FormGroup>
                </div>
            </Form>
        );
    }
}

export default ArtistsForm;