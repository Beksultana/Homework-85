
import axios from '../../axios-api';
import {FETCH_ALBUM_SUCCESS} from "./musicTypeActions";

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUM_SUCCESS, albums});

export const fetchAlbums = (id) => {
    return dispatch => {

        return axios.get('/albums/' + id).then(response => {
            dispatch(fetchAlbumsSuccess(response.data))
        });
    };
};