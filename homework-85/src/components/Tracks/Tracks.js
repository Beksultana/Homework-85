import React, {Component, Fragment} from 'react';
import {deleteTrack, fetchTrack, postNewTrack} from "../../store/actions/trackActions";
import {connect} from "react-redux";
import {Button, Card, CardGroup} from "reactstrap";
import './Tracks.css';
import HeaderInfo from "../HeaderInfo/HeaderInfo";

class Tracks extends Component {

    componentDidMount() {
        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {
        console.log(this.props.tracks);
        const tracks = this.props.tracks ? this.props.tracks.map(track => {
            return (
                <div className="TrackItem" key={track._id}>
                    <CardGroup>
                        <Card>
                            <div className="TrackInfo">
                                <div className="NumberTrack">
                                    <p><strong>{track.number}</strong></p>
                                    <button
                                        onClick={() => this.props.postTrack(track._id)}
                                        className="Play"/>
                                </div>
                                <h5><strong>{track.trackName}</strong></h5>
                                {
                                    this.props.user && this.props.user.username
                                    && this.props.user.username === 'admin' ?
                                        <Button onClick={() => this.props.deleteTrack(track._id)} color="danger">
                                            Delete
                                        </Button> : null
                                }
                                <p>{track.duration}</p>
                            </div>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        const numberOfTracks = this.props.numberOfTracks;

        return (
            <Fragment>
                <HeaderInfo title="Tracks" sum={numberOfTracks} musicOfNumber="tracks"/>

                <div className="Tracks">
                    <div className="headerInfo">
                        <p><strong>Number</strong></p>
                        <p><strong>Name</strong></p>
                        <p><strong>duration</strong></p>
                    </div>
                    {tracks}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.musicReducers.tracks,
    numberOfTracks: state.musicReducers.numberOfTracks,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: (id) => dispatch(fetchTrack(id)),
    postTrack: (trackId) => dispatch(postNewTrack(trackId)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);