import React from 'react';
import './searchInput.styles.scss';
import {AiOutlineSearch} from "react-icons/ai";

function SearchInput({handleChange,...otherProps}) {
    return (
        <div className="searchinput">
            <input {...otherProps} onChange={handleChange}  />
            <AiOutlineSearch />
        </div>
    )
}

export default SearchInput;
