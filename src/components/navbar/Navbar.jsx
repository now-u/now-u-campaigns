import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { nowUOrange } from "../../assets";
import {
  topNavLinks,
} from "../../utils/constants";
import NavLinkSection from "./navLinkSection/NavLinkSection";
import NavDropdown from "./navDropdown/NavDropdown";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [displayNavDropdown, setDisplayNavDropdown] = useState(false);
  const toggleDisplayNav = (toggle) => {
    if (toggle) {
      if (toggle === "off") {
        setDisplayNavDropdown(false);
      } else {
        setDisplayNavDropdown(true);
      }
    } else {
      setDisplayNavDropdown((prevState) => !prevState);
    }
  };

  return (
    <header className={classes.navContainer}>
      <nav className={classes.bottomNavbar}>
        <Link to={"/"} className={classes.logoContainer}>
          <img className={classes.logo} src={nowUOrange} alt='logo' />
        </Link>
        <ul className={classes.linkContainer}>
          <NavLinkSection navLinks={topNavLinks} />
        </ul>
        <div
          className={classes.navBurgerContainer}
          onClick={() => toggleDisplayNav()}
        >
          <i
            className={classNames(
              "large material-icons",
              classes.burger
            )}
          >
                        menu
          </i>
        </div>

        <NavDropdown
          navLinks={topNavLinks}
          displayNavDropdown={displayNavDropdown}
          toggleDisplayNav={toggleDisplayNav}
        />
      </nav>
    </header>
  );
};

export default Navbar;
