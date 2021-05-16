import React, { useState } from "react";
import classes from './Search.module.css';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
      }

    return (
        <div className={classes.Search}>
            <input 
            type='text' 
            placeholder='Enter the name of book...'
            value={searchValue}
            onChange={handleSearchInputChanges} />
            <button
            onClick={callSearchFunction}
            type="submit">Search</button>
        </div>
    )
}

export default Search;