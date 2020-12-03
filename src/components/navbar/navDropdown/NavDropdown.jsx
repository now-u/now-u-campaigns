import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "./NavDropdown.module.scss";
import { nowUOrange } from "../../../assets";
import NavLinkSection from "../navLinkSection/NavLinkSection";

const NavDropdown = ({ displayNavDropdown, navLinks, toggleDisplayNav }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    // click outside to close component
    function handleClickOutsideDropdown(event) {
      //if click is navBurgerContainer(dropdownRef.current.parentElement.children[2]) or if click is dropdownRef target (.dropdownContainer)
      if (
        event.target === dropdownRef.current.parentElement.children[2]
      ) {
        return;
      }
      if (!dropdownRef.current.contains(event.target)) {
        toggleDisplayNav("off");
      }
    }
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutsideDropdown
      );
  }, [toggleDisplayNav, displayNavDropdown]);

  return (
    <nav
      className={classNames(classes.dropdownContainer, {
        [classes.active]: displayNavDropdown,
      })}
      ref={dropdownRef}
    >
      <header className={classes.dropdownHead}>
        <Link
          to={"/"}
          className={classes.mobileLogoContainer}
          onClick={() => toggleDisplayNav()}
        >
          <img className={classes.logo} src={nowUOrange} alt='logo' />
        </Link>
        <i
          className={classNames(
            "medium material-icons",
            classes.close
          )}
          onClick={() => toggleDisplayNav()}
        >
                    close
        </i>
      </header>

      <ul className={classes.mobileLinksList}>
        <NavLinkSection
          navLinks={navLinks}
          toggleDisplayNav={toggleDisplayNav}
        />
      </ul>
    </nav>
  );
};

NavDropdown.propTypes = {
  displayNavDropdown: PropTypes.bool,
  navLinks: PropTypes.arrayOf(PropTypes.object),
  toggleDisplayNav: PropTypes.func,
};

export default NavDropdown;
