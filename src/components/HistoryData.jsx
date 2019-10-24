import PropTypes from "prop-types";
import React from "react";

function HistoryData(props) {
    const { searchHistoryWord, deleteSearchHistory, deleteOneITem } = props;

    const ShouldDeleteSearchHistory = () => {
        deleteSearchHistory();
    };
    const deleteHistoryITem = index => {
        deleteOneITem(index);
    };

    return (
        <div className="search-history">
            <div className="search-history--title">
                <h3>History will be added Here</h3>
                <span role="button" aria-pressed="false" onClick={ShouldDeleteSearchHistory}>
                    clear search history
                </span>
            </div>
            <ul>
                {searchHistoryWord &&
                    searchHistoryWord.length > 0 &&
                    searchHistoryWord.map((historyItem, index) => (
                        <li key={index}>
                            <span>{historyItem.debouncedSearchTerm} </span>
                            <span>{historyItem.currentTime}</span>
                            <span role="button" aria-pressed="false" onClick={() => deleteHistoryITem(index)} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default HistoryData;

HistoryData.propTypes = {
    deleteOneITem: PropTypes.func.isRequired,
    deleteSearchHistory: PropTypes.func.isRequired,
    searchHistoryWord: PropTypes.arrayOf(PropTypes.object).isRequired
};
