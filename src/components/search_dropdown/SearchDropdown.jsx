import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./SearchDropdown.module.scss";
import { dropDownArrow, dropUpArrow } from "../../assets";

const SearchDropdown = ({ title, values }) => {
  const [listOpen, setListOpen] = useState(false);

  const onListItemClick = () => {
    setListOpen(false);
  };

  return (
    <div className={classes.dropdownContainer} tabIndex="0" onBlur={() => setListOpen(false)}>
      <div className={classes.dropdownHeader} onClick={() => setListOpen(!listOpen)}>
        <div>{title}</div>
        {listOpen ?
          <img src={dropUpArrow} alt="Drop Up Arrow" />
          :
          <img src={dropDownArrow} alt="Drop Down Arrow" />
        }
      </div>
      {listOpen &&
                <div className={classes.dropdownList}>
                  {values.map((value, index) => (
                    <div className={classes.listItem} key={index} onClick={onListItemClick}>{value}</div>
                  ))}
                </div>
      }
    </div>
  );
};


SearchDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func
};


export default SearchDropdown;
