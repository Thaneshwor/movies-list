import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        let content = '';

        content = movies.length > 0 ? movies.map((movie, index) =>
            <MovieCard key={movie.id} movie={movie} />) : null;
        return (
            <div className='movie-row'>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // movies: state.movies.movies
        movies: [
            {
                "title": "The Shawshank Redemption",
                "year": 1991,
                "rank": "1",
                "id": "tt0111161",
                "Poster": require("../../images/rock.jpeg")
            },
            {
                "title": "The Godfather",
                "year": 1991,
                "rank": "2",
                "id": "tt0068646",
                "Poster": require("../../images/m.jpeg")
            },
            {
                "title": "The Godfather: Part II",
                "year": 1991,
                "rank": "3",
                "id": "tt0071562",
                "Poster": require("../../images/mon.jpeg")
            },
            {
                "title": "Pulp Fiction",
                "year": 1991,
                "rank": "4",
                "id": "tt0110912",
                "Poster": require("../../images/oo7.jpg")
            },
            {
                "title": "The Good, the Bad and the Ugly",
                "year": 1991,
                "rank": "5",
                "id": "tt0060196",
                "Poster": require("../../images/xman.jpeg")
            }
        ]
    }
}

export default connect(mapStateToProps)(MoviesContainer)
