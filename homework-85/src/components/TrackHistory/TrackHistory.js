import React, {Component} from 'react';
import {fetchTrackHistory} from "../../store/actions/trackActions";
import {connect} from "react-redux";
import './TrackHistory.css';

class TrackHistory extends Component {

    componentDidMount() {
        this.props.fetchTrackHistory()
    }

    render() {
        console.log(this.props.trackHistories);
        const trackHistory = Object.keys(this.props.trackHistories).map(track => {
            return (
                <div className="TrackHistories">
                    <p>{this.props.trackHistories[track].numberTrack}</p>
                    <h5>{this.props.trackHistories[track].trackName}</h5>
                    <p>{this.props.trackHistories[track].duration}</p>
                    <p>{track.dateTime}</p>
                </div>
            )
        });
        return (
            <div>
                {trackHistory}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    trackHistories: state.musicReducers.trackHistories
});

const mapDispatchToProps = dispatch => ({
    fetchTrackHistory: () => dispatch(fetchTrackHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);