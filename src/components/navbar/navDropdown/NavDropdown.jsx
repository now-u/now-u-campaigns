import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classes from './NavDropdown.module.scss';
import PropTypes from 'prop-types';
import NavLinkSection from '../navLinkSection/NavLinkSection';

const NavDropdown = ({
    displayNavDropdown,
    navLinks,
    logo,
    closeNavDropdown,
}) => {
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
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeNavDropdown();
            }
        }
        document.addEventListener('mousedown', handleClickOutsideDropdown);
    }, [closeNavDropdown]);

    return (
        <nav
            className={classNames(classes.dropdownContainer, {
                [classes.active]: displayNavDropdown,
            })}
            ref={dropdownRef}
        >
            <header className={classes.dropdownHead}>
                <Link
                    to={'/'}
                    className={classes.mobileLogoContainer}
                    onMouseDown={closeNavDropdown}
                >
                    <img className={classes.logo} src={logo} alt='logo' />
                </Link>
                <i
                    className={classNames(
                        'medium material-icons',
                        classes.close
                    )}
                    onMouseDown={closeNavDropdown}
                >
                    close
                </i>
            </header>

            <ul className={classes.mobileLinksList}>
                <NavLinkSection
                    navLinks={navLinks}
                    closeNavDropdown={closeNavDropdown}
                />
            </ul>
        </nav>
    );
};

NavDropdown.propTypes = {
    displayNavDropdown: PropTypes.bool,
    navLinks: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.String,
    closeNavDropdown: PropTypes.func,
};

export default NavDropdown;
