import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "./musicTypeActions";

const registerUserSuccess = userData => ({type: REGISTER_USER_SUCCESS, userData});
const registerUserFailure = (error) => ({type: REGISTER_USER_FAILURE, error});

const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const registerSuccess = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess(response.data));
                dispatch(push('/'));
        },
            error => {
                if (error.response && error.response.data) {
                    dispatch(registerUserFailure(error.response.data));
                }else {
                    dispatch(registerUserFailure({global: 'No internet!'}))
                }
            }
        );
    };
};

export const loginSuccess = loginData => {
  return dispatch => {
      return axios.post('/users/sessions', loginData).then(
          response => {
              dispatch(loginUserSuccess(response.data.user));
              dispatch(push('/'));
          },
          error => {
              if (error.response && error.response.data) {
                  dispatch(loginUserFailure(error.response.data));
              }else {
                  dispatch(loginUserFailure({global: 'No internet!'}))
              }
          }
      );
  };
};