import React from "react";

function HistoryData(props) {
    const { serchHistroyWord, deleteSearchHistory, deleteOneITem } = props;

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
                <span onClick={ShouldDeleteSearchHistory}>clear search history</span>
            </div>
            <ul>
                {serchHistroyWord &&
                    serchHistroyWord.length > 0 &&
                    serchHistroyWord.map((historyItem, index) => (
                        <li key={index}>
                            <span>{historyItem.debouncedSearchTerm} </span>
                            <span>{historyItem.currentTime}</span>
                            <span onClick={() => deleteHistoryITem(index)} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default HistoryData;
