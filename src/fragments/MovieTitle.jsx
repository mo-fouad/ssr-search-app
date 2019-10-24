import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import ReactHtmlParser from "react-html-parser";

class MovieTitle extends PureComponent {
    render() {
        const { searchKeyWord, movieTitle } = this.props;

        return (
            <>
                {ReactHtmlParser(movieTitle.replace(new RegExp(searchKeyWord, "gi"), `<span> ${searchKeyWord}</span>`))}
            </>
        );
    }
}

export default MovieTitle;

MovieTitle.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    searchKeyWord: PropTypes.string.isRequired
};
