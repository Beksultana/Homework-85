import axios from '../../axios-api';
import {
    FETCH_TRACK_HISTORY_ERROR,
    FETCH_TRACK_HISTORY_SUCCESS,
    FETCH_TRACK_SUCCESS,
    FETCH_USER_TOKEN, CREATE_TRACK_SUCCESS
} from "./musicTypeActions";
import {push} from 'connected-react-router';

const fetchTrackSuccess = tracks => ({type: FETCH_TRACK_SUCCESS, tracks});
const createTrackSuccess = () => ({type: CREATE_TRACK_SUCCESS});

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

export const createTrack = trackData => {
    return dispatch => {
        return axios.post('/tracks', trackData).then(
            response => {
                dispatch(createTrackSuccess());
                dispatch(push('/'))
            }
        )
    };
};

export const postNewTrack = trackId => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
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
        const token = getState().users.user.token;
        return axios.get('/track/history', {headers: {"Authorization": token}}).then(
            response => {
                dispatch(fetchTrackHistorySuccess(response.data))
            }
        )
    };
};