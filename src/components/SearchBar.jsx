import PropTypes from "prop-types";
import React, { Component } from "react";
import Movietitle from "../fragments/MovieTitle";

class SearchBar extends Component {
    state = {
        clear: false,
        searchKeyWord: ""
    };

    searchFor = event => {
        const keyWord = event.target.value;
        const { onSearchFor } = this.props;

        this.setState({ searchKeyWord: keyWord });

        onSearchFor(keyWord);
        if (keyWord.length > 0) {
            this.setState({ clear: true });
        } else {
            this.setState({ clear: false });
        }
    };

    restForm = () => {
        //resetting the form
        this.setState({ searchKeyWord: "" });
    };

    render() {
        const { searchResults: { results } = {} } = this.props;
        const { searchKeyWord } = this.state;

        return (
            <>
                <div className="search-bar" onSubmit={e => e.preventDefault()}>
                    <form role="search" aria-label="header-search">
                        <label aria-label="Search-this-site" className="SEOHidden" htmlFor="searchInput">
                            Search this site
                        </label>
                        <input
                            className="search-bar--input"
                            id="searchInput"
                            type="text"
                            name="search"
                            aria-label="Search"
                            placeholder="Search For Movies"
                            spellCheck="false"
                            autoComplete="off"
                            value={this.state.searchKeyWord}
                            onChange={this.searchFor}
                        />
                    </form>
                    {this.props.isSearching && <span className="search-bar--loading" />}
                    {this.state.clear && !this.props.isSearching && (
                        <span
                            role="button"
                            aria-pressed="false"
                            aria-label="delete-search-key-word"
                            onClick={this.restForm}
                            className="search-bar--clear"
                        />
                    )}

                    {results && searchKeyWord.length > 0 && (
                        <>
                            {results.length > 0 ? (
                                <div className="search-bar--result">
                                    <ul role="list">
                                        {results.map(movie => (
                                            <li role="listitem" key={movie.id} aria-label={movie.title}>
                                                <Movietitle movieTitle={movie.title} searchKeyWord={searchKeyWord} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <span className="search-bar--nothing">Nothing found for this search :(</span>
                            )}
                        </>
                    )}
                </div>
            </>
        );
    }
}

export default SearchBar;

SearchBar.propTypes = {
    isSearching: PropTypes.bool.isRequired,
    onSearchFor: PropTypes.func.isRequired,
    results: PropTypes.shape()
};
