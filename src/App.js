import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "./helpers/use-debounce";

import "./scss/app.scss";
import SearchBar from "./components/SearchBar";
import HistoryData from "./components/HistoryData";

// Usage
function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        // Make sure we have a value (user has entered something in input)
        if (debouncedSearchTerm) {
            // Adding to Search History
            let currentTime = getNow();
            setSearchHistory([...searchHistory, { debouncedSearchTerm, currentTime }]);

            // Set isSearching state
            setIsSearching(true);

            // Fire off our API call
            searchCharacters(debouncedSearchTerm).then(results => {
                // Set back to false since request finished
                setIsSearching(false);
                // Set results state
                setResults(results);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);

    const updateingSearch = keyWord => {
        setSearchTerm(keyWord);
    };

    const deleteSearchHistory = () => {
        setSearchHistory([]);
    };

    const deleteSearchHistoryItem = index => {
        let tempHistorySearch = [...searchHistory];
        if (index !== -1) {
            tempHistorySearch.splice(index, 1);
            setSearchHistory(tempHistorySearch);
        }
    };

    return (
        <div className="container">
            <h1 className="SEOHidden">Simple Search Application</h1>
            <header role="heading" aria-level="1">
                <SearchBar onSearchFor={updateingSearch} isSearching={isSearching} searchResults={results} />
            </header>
            <section aria-level="1">
                <HistoryData
                    searchHistoryWord={searchHistory}
                    deleteSearchHistory={deleteSearchHistory}
                    deleteOneITem={deleteSearchHistoryItem}
                />
            </section>
        </div>
    );
}

// API search function
function searchCharacters(search) {
    if (search.length > 0) {
        const apiKey = `efc3ede5b4a823ca3562c605cbc4ddf7`;
        return axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
            )
            .then(res => {
                return res.data;
            });
    }
}

// Get Time for Search History
function getNow() {
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();
    let timeArr = now.toLocaleTimeString().split(" ");
    let dayOrNight = timeArr[1];
    let timeNums = timeArr[0].split(":");

    return `${year}-${month}-${day}, ${timeNums[0]}:${timeNums[1]} ${dayOrNight}`;
}

export default App;

App.propTypes = {};
