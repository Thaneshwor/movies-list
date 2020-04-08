import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';

class MovieCard extends Component {

    render() {

        const { movie } = this.props;
        console.log(movie.Poster);
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <div className='poster-container'>
                        <img src={movie.Poster} alt='Movie cover' />
                    </div>
                    <h5>{movie.title} - {movie.year}</h5>
                    <Link to='#'><span>Movie Details</span></Link>
                </div>
            </div>
        )
    }
}

export default MovieCard;
