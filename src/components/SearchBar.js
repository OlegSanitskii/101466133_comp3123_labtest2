import React from "react";

function SearchBar({ city, onCityChange, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name..."
      />
      <button className="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
