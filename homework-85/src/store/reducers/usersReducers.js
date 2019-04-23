import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS
} from "../actions/musicTypeActions";

const initialState = {
    registerError: null,
    register: null,
    loginError: null,
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_FAILURE:
            return {
                ...state, registerError: action.error
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state, register: action.userData
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state, user: action.user , loginError: null
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state, loginError: action.error
            };
        default:
            return state;
    };
};

export default userReducer;