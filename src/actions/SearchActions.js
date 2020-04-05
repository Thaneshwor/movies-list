import { SEARCH_MOVIE, FETCH_MOVIES } from './types';
import axios from 'axios';
import API_KEY from './../APIKey'

export const searchMovie = text => dispatch => {
    dispatch(
        {
            type: SEARCH_MOVIE,
            payload: text
        }
    )
}

export const fetchMovie = text => dispatch => {

    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=50253db1&?s=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            // console.log(response);
            payload: response.data
        }))
        .catch(error => console.log(error))
}

