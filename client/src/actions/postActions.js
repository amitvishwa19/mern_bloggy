import axios from 'axios';
import { GET_POSTS, SINGLE_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, POST_LOADING } from './types';//UPDATE_POST
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios.get('/api/post')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

};

export const getSinglePost = (id) => dispatch => {
    axios.get(`/api/post/${id}`)
        .then(res => dispatch({
            type: SINGLE_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addPost = (post) => (dispatch, getState) => {
    axios.post('/api/post', post, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_POST,
            payload: post
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const updatePost = (post, id) => (dispatch, getState) => {
    console.log(id)
    axios.post(`/api/post/update/${id}`, post, tokenConfig(getState))
        .then(res => dispatch({
            type: UPDATE_POST,
            payload: post
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deletePost = (id) => (dispatch, getState) => {
    axios.delete(`/api/post/delete/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}