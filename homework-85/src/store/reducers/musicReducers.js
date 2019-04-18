import {FETCH_ALBUM_SUCCESS, FETCH_ARTISTS_SUCCESS} from "../actions/musicTypeActions";

const initialState = {
    artists: [],
    albums: []
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.artists
            };
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                albums: action.albums
            };
        default:
            return state;
    }
};

export default musicReducer;