import axios from '../../axios-api'
import {FETCH_ARTISTS_SUCCESS} from "./musicTypeActions";

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => {
    return dispatch => {
        return axios.get('/artists').then(response => {
            dispatch(fetchArtistsSuccess(response.data));
        });
    };
};

