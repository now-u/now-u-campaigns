import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';

import { openNewsletterSignupModal } from '../.././../utils/functions';

const NavLinkSection = ({ navLinks, toggleDisplayNav }) => {
    const handleNewsletterClick = () => {
        if (toggleDisplayNav) {
            toggleDisplayNav(false);
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
                        onClick={() => toggleDisplayNav()}
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
                        onClick={() => toggleDisplayNav()}
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
    toggleDisplayNav: PropTypes.func,
    toggleNewsletterSignupModal: PropTypes.func,
};

export default NavLinkSection;
