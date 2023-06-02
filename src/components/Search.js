import React from 'react'

const Search =({search,onSearch})=>(
    <div>
        <label htmlFor='search'> Search :</label>
        <input value={search} id="search" type="text" onChange={onSearch}/>
      
    </div>)

    export default Search;