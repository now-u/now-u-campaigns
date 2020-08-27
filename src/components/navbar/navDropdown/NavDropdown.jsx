import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavDropdown.module.scss';
import PropTypes from 'prop-types';
import NavLinkSection from '../navLinkSection/NavLinkSection';

const NavDropdown = ({
    display,
    navLink,
    logo,
    closeDropdownNav,
    toggleNewsModal,
}) => {
    const initTransitionStyle = {
        transform: 'translate3d(0, -110%, 0)',
        visibility: 'hidden',
    };
    const terminalTransitionStyle = {
        transform: 'translate3d(0, 0, 0)',
        visibility: 'visible',
    };
    const [transitionStyle, setTransitionStyle] = useState(initTransitionStyle);
    const ref = useRef();

    useEffect(() => {
        // mounting animation
        if (display) {
            setTransitionStyle((prevState) => {
                return {
                    ...prevState,
                    ...terminalTransitionStyle,
                };
            });
        } else {
            setTransitionStyle((prevState) => {
                return {
                    ...prevState,
                    ...initTransitionStyle,
                };
            });
        }

        // click outside to close component
        function handleClickOutside(event) {
            //if click is navBurgerContainer (ref.current.parentElement.children[2]) or if click is ref target (.dropdownContainer)
            if (event.target === ref.current.parentElement.children[2]) return;
            else if (ref.current && !ref.current.contains(event.target)) {
                closeDropdownNav();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeDropdownNav, display]);

    return (
        <nav
            className={classes.dropdownContainer}
            ref={ref}
            style={transitionStyle}
        >
            <header className={classes.dropdownHead}>
                <Link to={'/'} className={classes.mobileLogoContainer}>
                    <img className={classes.logo} src={logo} alt='logo' />
                </Link>
                <i
                    id={classes.close}
                    className='material-icons medium'
                    onMouseDown={closeDropdownNav}
                >
                    close
                </i>
            </header>

            <ul className={classes.mobileLinksList}>
                <NavLinkSection
                    navLink={navLink}
                    closeDropdownNav={closeDropdownNav}
                    toggleNewsModal={toggleNewsModal}
                />
            </ul>
        </nav>
    );
};

NavDropdown.propTypes = {
    display: PropTypes.bool,
    navLink: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.String,
    closeDropdownNav: PropTypes.func,
    toggleNewsModal: PropTypes.func,
};

export default NavDropdown;
