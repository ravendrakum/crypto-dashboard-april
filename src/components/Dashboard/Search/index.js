import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
const Search = ({search,onSearchChange}) => {
    
    return (
        <div className='search-flex'>
            <SearchIcon />
            <input
                type="text"
                placeholder='Search'
                value={search}
                onChange={(e) => onSearchChange(e)}
            />
        </div>
    )
}

export default Search