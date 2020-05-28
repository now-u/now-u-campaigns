import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Button } from '../../components';
import { nowUOrange } from '../../assets';
import { navLinks } from '../../utils/constants';
import classes from './TopNav.module.scss';

const TopNav = () => {
  const location = useLocation();
  const [navClose, setNav] = useState(false);
  const [active, setActive] = useState('');
  const toggleNav = () => setNav((prev) => !prev);

  useEffect(() => {
    setActive(location.hash);
    setNav(false);
  }, [location.hash]);

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
          <ul className={classes.navRow}>
            {navLinks.map(({ display, path }) => {
              return (
                <li key={display}>
                  <Link
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    className={classes.navLink}
                    activeClassName={'/' + active === path ? 'selected' : undefined}
                    to={path}
                  >
                    {display}
                  </Link>
                </li>
              );
            })}
            <li id="signup_btn">
              <Link scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/#get_involved">
                <Button id="sign up" type="primary">
                  Sign up!
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
