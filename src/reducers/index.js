import { combineReducers } from 'redux';
import { serchReducer } from './searchReducer';

export default combineReducers(
    {
        movies: serchReducer
    }
);