import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';
import { openNewsletterSignupModal } from '../.././../utils/functions';

const NavLinkSection = ({ navLinks, closeNavDropdown }) => {
    const handleNewsletterClick = () => {
        if (closeNavDropdown) {
            closeNavDropdown();
        }
        openNewsletterSignupModal(true);
    };

    return (
        <Fragment>
            {navLinks.map(({ display, path, external, modal }) => {
                return path ? (
                    <Link
                        key={display}
                        className={classes.link}
                        to={path}
                        onClick={closeNavDropdown}
                    >
                        {display}
                    </Link>
                ) : external ? (
                    <a
                        key={display}
                        className={classes.link}
                        href={external}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={closeNavDropdown}
                    >
                        {display}
                    </a>
                ) : modal ? (
                    <a
                        key={display}
                        className={classes.link}
                        rel='noopener noreferrer'
                        onClick={handleNewsletterClick}
                    >
                        {display}
                    </a>
                ) : null;
            })}
        </Fragment>
    );
};

NavLinkSection.propTypes = {
    navLinks: PropTypes.arrayOf(PropTypes.object),
    closeNavDropdown: PropTypes.func,
    toggleNewsletterSignupModal: PropTypes.func,
};

export default NavLinkSection;
