import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Cari Berdasarkan Nama"
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)} />
    )
}

SearchBar.prototype = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;