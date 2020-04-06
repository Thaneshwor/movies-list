import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovieCard extends Component {

    render() {

        const { movie } = this.props;
        console.log(movie);
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <img className='' src={require('../../images/m.jpeg')} alt='Movie cover' />
                    <h5>Movie - 1991</h5>
                    <Link to='#' >Movie Details</Link>
                </div>
            </div>
        )
    }
}

export default MovieCard
