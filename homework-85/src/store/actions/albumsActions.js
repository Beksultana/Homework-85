
import axios from '../../axios-api';
import {CREATE_ALBUM_SUCCESS, FETCH_ALBUM_SUCCESS, FETCH_ALBUMS_SUCCESS} from "./musicTypeActions";
import {push} from 'connected-react-router';

export const fetchAlbumSuccess = album => ({type: FETCH_ALBUM_SUCCESS, album});
export const createAlbumSuccess = () => ({type: CREATE_ALBUM_SUCCESS});
export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});

export const fetchAlbum = (id) => {
    return dispatch => {
        return axios.get('/albums/' + id).then(response => {
            dispatch(fetchAlbumSuccess(response.data))
        });
    };
};

export const fetchAlbums = () => {
    return dispatch => {
        return axios.get('/albums').then(response => {
            dispatch(fetchAlbumsSuccess(response.data))
        })
    };
};

export const createAlbum = albumData => {
    return dispatch => {
        return axios.post('/albums', albumData).then(
            () => dispatch(createAlbumSuccess())
        )
    };
};

export const deleteAlbum = id => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.delete(`/albums/${id}`, config).then(
            () => {
                dispatch(push('/'))
            }
        )
    };
};
