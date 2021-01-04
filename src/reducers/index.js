import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

const reducer = combineReducers ({
    posts: postReducer,
    user: userReducer
})

export default reducer;