import axios from '../../axios-api';
import {
    FETCH_TRACK_HISTORY_ERROR,
    FETCH_TRACK_HISTORY_SUCCESS,
    FETCH_TRACK_SUCCESS,
    FETCH_USER_TOKEN
} from "./musicTypeActions";

const fetchTrackSuccess = tracks => ({type: FETCH_TRACK_SUCCESS, tracks});

const fetchUserSuccess = token => ({type: FETCH_USER_TOKEN, token});
const fetchTrackHistoryFaluier = error => ({type: FETCH_TRACK_HISTORY_ERROR, error});
const fetchTrackHistorySuccess = trackHistories => ({type: FETCH_TRACK_HISTORY_SUCCESS, trackHistories});

export const fetchTrack = id => {
    return dispatch => {
        return axios.get(`/tracks/${id}`).then(response => {
            dispatch(fetchTrackSuccess(response.data))
        });
    };
};


export const postNewTrack = trackId => {
    return (dispatch, getState) => {
        const token = getState().user.user.token;
        return axios.post('/track/history', {tracks: trackId}, {headers: {"Authorization": token}}).then(
            response => {
                dispatch(fetchUserSuccess(response.data));
            },
            error => {
                dispatch(fetchTrackHistoryFaluier(error.response.data));
            }
        )
    };
};

export const fetchTrackHistory = () => {
    return (dispatch, getState) => {
        const token = getState().user.user.token;
        return axios.get('/track/history', {headers: {"Authorization": token}}).then(
            response => {
                dispatch(fetchTrackHistorySuccess(response.data))
            }
        )
    };
};