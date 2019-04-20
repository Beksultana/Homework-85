import axios from '../../axios-api';
import {push} from 'connected-react-router';

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
const registerUserFailure = (error) => ({type: REGISTER_USER_FAILURE, error});

export const registerSuccess = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess());
                dispatch(push('/'));
        },
            error => dispatch(registerUserFailure(error))
        );
    };
};
