import React, { useEffect, useRef, useState } from 'react';
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
    toggleNewsletterSignupModal,
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
        setTransitionStyle((prevState) => {
            return {
                ...prevState,
                ...(displayNavDropdown
                    ? terminalTransitionStyle
                    : initTransitionStyle),
            };
        });

        // click outside to close component
        function handleClickOutside(event) {
            //if click is navBurgerContainer (ref.current.parentElement.children[2]) or if click is ref target (.dropdownContainer)
            if (event.target === ref.current.parentElement.children[2]) {
                return;
            }
            if (ref.current && !ref.current.contains(event.target)) {
                closeNavDropdown();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeNavDropdown, displayNavDropdown]);

    return (
        <nav
            className={classes.dropdownContainer}
            ref={ref}
            style={transitionStyle}
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
                    toggleNewsletterSignupModal={toggleNewsletterSignupModal}
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
    toggleNewsletterSignupModal: PropTypes.func,
};

export default NavDropdown;
