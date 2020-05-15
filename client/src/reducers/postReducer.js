import { GET_POSTS, SINGLE_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, POST_LOADING } from '../actions/types';//UPDATE_POST,
//import { bindActionCreators } from "redux";

const initialState = {
    posts: [],
    post: {},
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case SINGLE_POSTS:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        case POST_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}