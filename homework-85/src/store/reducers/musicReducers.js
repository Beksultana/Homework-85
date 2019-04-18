import {FETCH_ARTISTS_SUCCESS} from "../actions/musicTypeActions";

const initialState = {
    artists: []
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.artists
            };
        default:
            return state;
    }
};

export default musicReducer;