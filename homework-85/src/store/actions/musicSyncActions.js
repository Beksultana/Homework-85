import axios from '../../axios-api'
import {CREATE_ARTIST_SUCCESS, FETCH_ARTISTS_SUCCESS} from "./musicTypeActions";

const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
const createArtistSuccess = () => ({type: CREATE_ARTIST_SUCCESS});

export const fetchArtists =  () => {
    return (dispatch, getState) => {
        let con = null;
        try {
            const token = getState().users.user.token;
            const config = {headers: {'Authorization': token}};
            con = config;
        }catch (e) {

        }
        return axios.get('/artists', con).then(response => {
            dispatch(fetchArtistsSuccess(response.data));
        });
    };
};


export const createArtist = artistData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.post('/artists', artistData, config).then(
            response => {
                dispatch(createArtistSuccess())
            }
        )
    };
};

export const deleteArtist = id => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.delete('/artists/' + id, config).then(
            () => {
                dispatch(fetchArtists())
            }
        )
    };
};