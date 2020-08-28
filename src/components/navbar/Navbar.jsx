import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
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

const Navbar = ({ newsletterSignupModal }) => {
    const [displayNavDropdown, setDisplayNavDropdown] = useState(false);
    const openNavDropdown = () => setDisplayNavDropdown(true);
    const closeNavDropdown = () => setDisplayNavDropdown(false);

    const [showNewsletterSignupModal, setShowNewsletterSignupModal] = useState(
        false
    );
    const toggleNewsletterSignupModal = () => {
        setShowNewsletterSignupModal((state) => !state);
        setDisplayNavDropdown(false);
    };

    useEffect(() => {
        if (showNewsletterSignupModal) {
            newsletterSignupModal(true);
            toggleNewsletterSignupModal();
        }
    }, [showNewsletterSignupModal, newsletterSignupModal]);

    return (
        <header className={classes.navContainer}>
            <nav className={classes.topNavbar}>
                <ul className={classes.linkContainer}>
                    <NavLinkSection
                        navLinks={topNavLinks}
                        toggleNewsletterSignupModal={
                            toggleNewsletterSignupModal
                        }
                    />
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
                    closeNavDropdown={closeNavDropdown}
                    logo={nowUOrange}
                    toggleNewsletterSignupModal={toggleNewsletterSignupModal}
                />
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    newsletterSignupModal: PropTypes.func,
};

export default Navbar;
