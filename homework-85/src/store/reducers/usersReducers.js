import {REGISTER_USER_FAILURE} from "../actions/usersActions";

const initialState = {
    registerError: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_FAILURE:
            return {
                ...state, registerError: action.error
            };
        default:
            return state;
    };
};

export default userReducer;