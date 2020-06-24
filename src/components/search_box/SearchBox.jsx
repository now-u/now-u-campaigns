import React from 'react';
import classes from  './SearchBox.module.scss';
import PropTypes from 'prop-types';
import { searchIcon } from '../../assets';

const SearchBox = ({ title, placeholder }) => {
    return (
        <div>
            <div className={classes.title}>{title}</div>
            <div className={classes.input}>
                <input type="text" placeholder={placeholder} />
                <img src={searchIcon} />
            </div>
        </div>
    );
}

SearchBox.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string
}

export default SearchBox;
