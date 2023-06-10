import React from 'react'

const Search = ({ search, onSearch }) => (
    <div className="search-container">
      {/* Étiquette associée à l'entrée de recherche */}
      <label htmlFor="search" className="search-label">
        Search:
      </label>
      {/* Entrée de recherche */}
      <input
        value={search}
        id="search"
        type="text"
        className="search-input"
        onChange={onSearch}
      />
    </div>
  );
  
    export default Search;