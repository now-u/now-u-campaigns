import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nowUOrange } from '../../assets';
import { navLinks } from '../../utils/constants';
// import { Button } from '../index';
import classes from './TopNav.module.scss';

const TopNav = () => {
  const [navOpen, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);

  window.console.log(navOpen);

  return (
    <div className={classes.navContainer}>
      <div className={classes.navItems}>
        <Link to={'/'}>
          <img className={classes.logo} src={nowUOrange} alt="logo" />
        </Link>
        <input className={classes.menuBtn} type="checkbox" id="menu-btn" checked={navOpen} />
        <span className={classes.navIcon} onClick={toggleNav} />
        <ul className={classes.menu}>
          {navLinks.map(({ display, path }) => {
            return (
              <NavLink key={display} className={classes.navLink} to={path}>
                {display}
              </NavLink>
            );
          })}
        </ul>
        {/* <Button className={classes.headerBtn} variant="flat">
          Sign up to our newsletter
        </Button> */}
      </div>
    </div>
  );
};

export default TopNav;
