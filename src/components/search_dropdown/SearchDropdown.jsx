import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./SearchDropdown.module.scss";
import {
  dropDownArrow,
  dropUpArrow,
  checkboxActive,
  checkboxInactive,
} from "../../assets";

const SearchDropdown = ({ title, values, onListItemClick }) => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div
      className={classes.dropdownContainer}
      tabIndex='0'
      onBlur={() => setListOpen(false)}
    >
      <div
        className={classes.dropdownHeader}
        onClick={() => setListOpen(!listOpen)}
      >
        <div>{title}</div>
        {listOpen ? (
          <img src={dropUpArrow} alt='Drop Up Arrow' />
        ) : (
          <img src={dropDownArrow} alt='Drop Down Arrow' />
        )}
      </div>
      {listOpen && (
        <div className={classes.dropdownList}>
          {values.map((value) => (
            <div
              className={classes.listItem}
              key={value.id}
              onClick={() => onListItemClick(value)}
            >
              {value.selected ? (
                <img src={checkboxActive} alt='Selected' />
              ) : (
                <img
                  src={checkboxInactive}
                  alt='Value Deselected'
                />
              )}
              {value.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SearchDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onListItemClick: PropTypes.func,
};

export default SearchDropdown;
