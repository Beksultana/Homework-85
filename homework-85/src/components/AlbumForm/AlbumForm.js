import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";

class AlbumForm extends Component {

    state = {
        albumName: '',
        image: '',
        year: '',
        artists: ''
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
                        <Label for="albumName" sm={2}>Album name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="albumName"
                                id="albumName"
                                value={this.state.albumName}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="year" sm={2}>Year</Label>
                        <Col sm={10}>
                            <Input
                                type="number"
                                name="year"
                                id="year"
                                value={this.state.year}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="artists" sm={2}>Artists names</Label>
                        <Col sm={10}>
                            <Input
                                type="select"
                                name="artists"
                                id="artists"
                                value={this.state.artists}
                                onChange={this.inputChangeHandler}
                            >
                                <option value="">Place select categories</option>
                                {this.props.artists.map(artist => (
                                    <option key={artist._id} value={artist._id}>
                                        {artist.artists}
                                    </option>
                                ))}
                            </Input>
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

const mapStateToProps = state => ({
    artists: state.musicReducers.artists
});


export default connect(mapStateToProps)(AlbumForm);