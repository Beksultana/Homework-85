
import axios from '../../axios-api';
import {FETCH_ALBUM_SUCCESS} from "./musicTypeActions";

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUM_SUCCESS, albums});

export const fetchAlbums = () => {
    return dispatch => {

        return axios.get('/albums').then(response => {
            dispatch(fetchAlbumsSuccess(response.data))
        });
    };
};