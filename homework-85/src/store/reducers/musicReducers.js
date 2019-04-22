import {
    FETCH_ALBUM_SUCCESS,
    FETCH_ARTISTS_SUCCESS,
    FETCH_TRACK_SUCCESS
} from "../actions/musicTypeActions";

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
    numberOfTracks: null
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state, artists: action.artists
            };
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state, albums: action.albums
            };
        case FETCH_TRACK_SUCCESS:
            return {
                ...state, tracks: action.tracks.tracks, numberOfTracks: action.tracks.number
            };
        default:
            return state;
    }
};

export default musicReducer;