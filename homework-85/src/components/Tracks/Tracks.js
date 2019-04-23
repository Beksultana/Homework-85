import React, {Component, Fragment} from 'react';
import {fetchTrack, postNewTrack} from "../../store/actions/trackActions";
import {connect} from "react-redux";
import {Card, CardGroup} from "reactstrap";
import './Tracks.css';
import HeaderInfo from "../HeaderInfo/HeaderInfo";

class Tracks extends Component {

    componentDidMount() {
        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {

        const tracks = this.props.tracks ? this.props.tracks.map(track => {
            return (
                <div className="TrackItem" key={track._id}>
                    <CardGroup>
                        <Card>
                            <div className="TrackInfo">
                                <div className="NumberTrack">
                                    <p><strong>{track.numberTrack}</strong></p>
                                    <button onClick={() => this.props.postTrack(track._id)} className="Play"/>
                                </div>
                                <h5><strong>{track.trackName}</strong></h5>
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
    numberOfTracks: state.musicReducers.numberOfTracks
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: (id) => dispatch(fetchTrack(id)),
    postTrack: (trackId) => dispatch(postNewTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);