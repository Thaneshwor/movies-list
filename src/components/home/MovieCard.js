import React, { Component } from 'react'

class MovieCard extends Component {

    render() {

        const { movie } = this.props;
        console.log(movie);
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <img className='' src={require('../../images/m.jpeg')} alt='Movie cover' />
                    <h5>Movie - 1991</h5>
                    <a href='#' >Movie Details</a>
                </div>
            </div>
        )
    }
}

export default MovieCard
