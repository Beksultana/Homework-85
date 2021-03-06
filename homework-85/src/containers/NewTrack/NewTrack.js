import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {fetchAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {createTrack} from "../../store/actions/trackActions";

class NewTrack extends Component {

    state = {
        trackName: '',
        albums: '',
        duration: '',
        artists: ''
    };

    componentDidUpdate(prevState, prevProps) {
        if (this.state.artists !== prevProps.artists){
            this.props.fetchAlbum(this.state.artists)
        }
    };


    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.createTrack({...this.state})
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <div className="Form">
                    <FormGroup row>
                        <Label for="track" sm={2}>Track name</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="trackName"
                                id="track"
                                value={this.state.trackName}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="duration" sm={2}>Duration</Label>
                        <Col sm={10}>
                            <Input
                                type="number"
                                name="duration"
                                id="duration"
                                value={this.state.duration}
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
                                {this.props.artists.map(artist => {
                                    return (
                                        <option
                                            key={artist._id}
                                            value={artist._id}
                                        >
                                            {artist.artists}
                                        </option>
                                    )
                                })}
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="albums" sm={2}>Albums names</Label>
                        <Col sm={10}>
                            <Input
                                type="select"
                                name="albums"
                                id="albums"
                                value={this.state.albums}
                                onChange={this.inputChangeHandler}
                            >
                                <option value="">Place select categories</option>
                                {this.props.album.map(album => {
                                    return (
                                        <option key={album._id} value={album._id}>
                                            {album.albumName}
                                        </option>

                                    )

                                })}
                            </Input>
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
    artists: state.musicReducers.artists,
    album: state.musicReducers.album
});

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    createTrack: trackData => dispatch(createTrack(trackData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTrack);