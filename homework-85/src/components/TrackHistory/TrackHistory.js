import React, {Component, Fragment} from 'react';
import {fetchTrackHistory} from "../../store/actions/trackActions";
import {connect} from "react-redux";
import './TrackHistory.css';

class TrackHistory extends Component {

    componentDidMount() {
        this.props.fetchTrackHistory()
    }

    render() {
        console.log(this.props.trackHistories);
        const history = this.props.trackHistories;
        const trackHistory = !history ? null : Object.keys(history).map(track => {
            if (!history[track]){
                return null
            }else {
                return (
                    <div key={history[track]._id} className="TrackHistories">
                        <p>{history[track].numberTrack}</p>
                        <h5>{history[track].trackName}</h5>
                        <p>{history[track].duration}</p>
                        <p>{track.dateTime}</p>
                    </div>
                )
            }
        });
        return (
            <Fragment>
                {trackHistory}
            </Fragment>
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