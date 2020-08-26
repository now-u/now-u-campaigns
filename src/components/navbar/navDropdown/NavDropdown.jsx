import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavDropdown.module.scss';
import PropTypes from 'prop-types';
import NavLinkSection from '../navLinkSection/NavLinkSection';

const NavDropdown = ({ navLink, logo, toggleBurgerNavDisplay }) => {
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleBurgerNavDisplay();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleBurgerNavDisplay]);

    return (
        <nav className={classes.dropdownContainer} ref={ref}>
            <header className={classes.dropdownHead}>
                <Link to={'/'} className={classes.mobileLogoContainer}>
                    <img className={classes.logo} src={logo} alt='logo' />
                </Link>
                <i
                    id={classes.close}
                    className='material-icons medium'
                    onClick={toggleBurgerNavDisplay}
                >
                    close
                </i>
            </header>

            <ul className={classes.mobileLinksList}>
                <NavLinkSection
                    navLink={navLink}
                    toggleBurgerNavDisplay={toggleBurgerNavDisplay}
                />
            </ul>
        </nav>
    );
};

NavDropdown.propTypes = {
    navLink: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.String,
    toggleBurgerNavDisplay: PropTypes.func,
};

export default NavDropdown;
