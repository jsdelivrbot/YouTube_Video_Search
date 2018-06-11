import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="header">
                <h1> YouTube Search API App with Reactjs </h1>
      
            <div className="search-bar">
                <input
                type="text"
                placeholder="Search..."
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;