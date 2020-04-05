import React, { Component } from 'react';
import serachMovie from './../../actions/SearchActions';

class SearchForm extends Component {
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

export default SearchForm
