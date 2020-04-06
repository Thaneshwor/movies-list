import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovie } from './../../actions/SearchActions';

class SearchForm extends Component {

    onInput = (e) => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovie(this.props.text);
    }

    render() {
        return (
            <div className='search-form'>
                <h1>
                    Search for moives, TV series
                </h1>
                <div>
                    <form className='form-container' onSubmit={this.onSubmit}>
                        <input type='text'
                            name='serchText'
                            placeholder='Search for moives, TV series..(Searching is blocked by API).'
                            className='search-input'
                            onChange={this.onInput} />
                        <button className='search-btn'>Search</button>
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovie })(SearchForm);
