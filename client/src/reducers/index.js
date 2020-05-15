import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import testReducer from './testReducer';

export default combineReducers({
    post: postReducer,
    auth: authReducer,
    error: errorReducer,
    test: testReducer,
})