import React from 'react'
import './searchbar.css'

export const Searchbar = () => {
  return (
    <div className='searchbar'>
       <div className="searchIcon"><img src="images/search-icon.png" alt="search icon" />
        <input type="text" placeholder="Search for content" />
       </div>
        <button className='button1' id='search'>Search</button>
    </div>
  )
}
