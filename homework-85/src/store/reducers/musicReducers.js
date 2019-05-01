import {
    FETCH_ALBUM_SUCCESS, FETCH_ALBUMS_SUCCESS,
    FETCH_ARTISTS_SUCCESS, FETCH_TRACK_HISTORY_SUCCESS,
    FETCH_TRACK_SUCCESS
} from "../actions/musicTypeActions";

const initialState = {
    artists: [],
    album: [],
    albums: [],
    tracks: [],
    trackHistories: {},
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
                ...state, album: action.album
            };
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_TRACK_SUCCESS:
            return {
                ...state, tracks: action.tracks.tracks, numberOfTracks: action.tracks.number
            };
        case FETCH_TRACK_HISTORY_SUCCESS:
            return {
                ...state, trackHistories: action.trackHistories
            };
        default:
            return state;
    }
};

export default musicReducer;