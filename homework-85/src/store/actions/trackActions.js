import axios from '../../axios-api';
import {FETCH_TRACK_SUCCESS} from "./musicTypeActions";

export const fetchTrackSuccess = tracks => ({type: FETCH_TRACK_SUCCESS, tracks});

export const fetchTrack = id => {
    return dispatch => {
        return axios.get(`/tracks/${id}`).then(response => {
            console.log(response.data);
            dispatch(fetchTrackSuccess(response.data))
        });
    };
};