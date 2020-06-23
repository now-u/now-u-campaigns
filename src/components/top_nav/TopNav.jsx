import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { nowUOrange } from '../../assets';
import { navLinks, mobileNavLinks } from '../../utils/constants';
import classes from './TopNav.module.scss';

const TopNav = () => {
  const [navClose, setNav] = useState(false);
  const toggleNav = () => setNav((prev) => !prev);

  return (
    <div className={classNames(classes.navContainer, { [classes.navClose]: navClose })}>
      <div className={classes.navContent}>
        <Link to={'/'} className={classes.logoContainer}>
          <img className={classes.logo} src={nowUOrange} alt="logo" />
        </Link>
        <nav id="navigation" className={classes.navigation}>
          <div className={classes.navIcon} onClick={toggleNav}>
            <div />
            <div />
            <div />
          </div>
          <div className={classes.mobileMenu}>
            <div className={classes.mobileMenuHeader}>
              <img className={classes.logo} src={nowUOrange} alt="logo" />
              <i className="material-icons" onClick={toggleNav}>
                close
              </i>
            </div>
            {mobileNavLinks.map(({ display, path, external }) => {
              return path ? (
                <Link key={display} className={classes.mobileNavLink} to={path}>
                  {display}
                </Link>
              ) : (
                <a
                  key={display}
                  className={classes.mobileNavLink}
                  href={external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {display}
                </a>
              );
            })}
          </div>
          <ul className={classes.navRow}>
            {navLinks.map(({ display, path }) => {
              return (
                <li key={display}>
                  <Link activeClassName="selected" className={classes.navLink} to={path}>
                    {display}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
