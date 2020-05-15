import axios from 'axios';
import { returnErrors } from './errorAction';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            })
        })
};

//Register
export const register = ({ name, email, password }) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //request body
    const body = JSON.stringify({ name, email, password })

    axios.post('/api/auth/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })

};

//Login
export const login = ({ email, password }) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //request body
    const body = JSON.stringify({ email, password })

    axios.post('/api/auth/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })

}

//Logout
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

//setup config/headerand token
export const tokenConfig = getState => {
    //get token from local storage
    const token = getState().auth.token;

    //Request header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //if token then add to header
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};