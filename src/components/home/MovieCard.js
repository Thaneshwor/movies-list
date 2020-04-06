import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';

class MovieCard extends Component {

    render() {

        const { movie } = this.props;
        // console.log(movie + 'lsldkdldk');
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <img src={require('../../images/m.jpeg')} alt='Movie cover' />
                    <h5>{movie.title} - {movie.year}</h5>
                    <Link to='#'><span>Movie Details</span></Link>
                </div>
            </div>
        )
    }
}

export default MovieCard;
