import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthinticated: false,
    isLoading: false,
    user: null,
    name: 'Jays'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthinticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            //console.log({ msg: 'auth reducer login success called', payload: action.payload })
            return {
                ...state,
                ...action.payload,
                isAuthinticated: true,
                isLoading: false,
                testname: 'jays'
            };
        case REGISTER_SUCCESS:
            //localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthinticated: false,
                isLoading: false,

            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            //console.log('auth reducer login fail called')
            return {
                ...state,
                token: null,
                isAuthinticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state;

    }
}