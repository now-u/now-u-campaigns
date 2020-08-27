import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

// import NewsletterSignupModal from '../newsletter-signup-modal/NewsletterSignupModal';

const Navbar = ({ newsModal }) => {
    const [dropdownNavDisplay, setDropdownNavDisplay] = useState(false);
    const openDropdownNav = () => setDropdownNavDisplay(true);
    const closeDropdownNav = () => setDropdownNavDisplay(false);

    const [showNewsModal, setShowNewsModal] = useState(false);
    const toggleNewsModal = () => {
        setShowNewsModal((state) => !state);
        setDropdownNavDisplay(false);
    };

    useEffect(() => {
        if (showNewsModal) {
            newsModal(true);
            toggleNewsModal();
        }
    }, [showNewsModal, newsModal]);

    return (
        <header className={classes.navContainer}>
            <nav className={classes.topNavbar}>
                <ul className={classes.linkContainer}>
                    <NavLinkSection
                        navLink={topNavLinks}
                        toggleNewsModal={toggleNewsModal}
                    />
                </ul>
            </nav>
            <nav className={classes.bottomNavbar}>
                <Link to={'/'} className={classes.logoContainer}>
                    <img className={classes.logo} src={nowUOrange} alt='logo' />
                </Link>
                <ul className={classes.linkContainer}>
                    <NavLinkSection navLink={bottomNavLinks} />
                </ul>
                <div
                    className={classes.navBurgerContainer}
                    onMouseDown={openDropdownNav}
                >
                    <div className={classes.burger} />
                </div>

                <NavDropdown
                    display={dropdownNavDisplay}
                    navLink={mobileNavLinks}
                    closeDropdownNav={closeDropdownNav}
                    logo={nowUOrange}
                    toggleNewsModal={toggleNewsModal}
                />
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    newsModal: PropTypes.func,
};

export default Navbar;
