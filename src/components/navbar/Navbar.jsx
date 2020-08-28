import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { nowUOrange } from '../../assets';
import {
    topNavLinks,
    bottomNavLinks,
    mobileNavLinks,
} from '../../utils/constants';
import NavLinkSection from './navLinkSection/NavLinkSection';
import NavDropdown from './navDropdown/NavDropdown';
import classes from './Navbar.module.scss';

const Navbar = () => {
    const [displayNavDropdown, setDisplayNavDropdown] = useState(false);
    const openNavDropdown = () => setDisplayNavDropdown(true);
    const closeNavDropdown = () => setDisplayNavDropdown(false);

    return (
        <header className={classes.navContainer}>
            <nav className={classes.topNavbar}>
                <ul className={classes.linkContainer}>
                    <NavLinkSection navLinks={topNavLinks} />
                </ul>
            </nav>
            <nav className={classes.bottomNavbar}>
                <Link to={'/'} className={classes.logoContainer}>
                    <img className={classes.logo} src={nowUOrange} alt='logo' />
                </Link>
                <ul className={classes.linkContainer}>
                    <NavLinkSection navLinks={bottomNavLinks} />
                </ul>
                <div
                    className={classes.navBurgerContainer}
                    onMouseDown={openNavDropdown}
                >
                    <i
                        className={classNames(
                            'large material-icons',
                            classes.burger
                        )}
                    >
                        menu
                    </i>
                </div>

                <NavDropdown
                    navLinks={mobileNavLinks}
                    displayNavDropdown={displayNavDropdown}
                    closeNavDropdown={() => closeNavDropdown()}
                    logo={nowUOrange}
                />
            </nav>
        </header>
    );
};

export default Navbar;
