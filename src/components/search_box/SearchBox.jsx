import React, { useState } from 'react';
import classes from  './SearchBox.module.scss';
import PropTypes from 'prop-types';
import { searchIcon } from '../../assets';

const SearchBox = ({ title, placeholder, onSubmit }) => {

    const [searchText, setSearchText] = useState('');

    const search = () => {
        if(onSubmit) {
            onSubmit(searchText);
        }
    }

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <div>
            <div className={classes.title}>{title}</div>
            <div className={classes.input}>
                <input type="text" placeholder={placeholder} value={searchText} onChange={handleChange} />
                <img src={searchIcon} onClick={search} />
            </div>
        </div>
    );
}

SearchBox.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func
}

export default SearchBox;
