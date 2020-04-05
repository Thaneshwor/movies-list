import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from './../../actions/SearchActions';

class SearchForm extends Component {

    onInput = (e) => {
        this.props.searchMovie(e.target.value);
    }

    render() {
        return (
            <div className='search-form'>
                <h1>
                    Search for moives, TV series
                </h1>
                <div>
                    <form className='form-container'>
                        <input type='text'
                            name='serchText'
                            placeholder='Search for moives, TV series...'
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

export default connect(mapStateToProps, { searchMovie })(SearchForm);
