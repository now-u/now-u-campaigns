import React from 'react';
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

    const findNavOutput = ({ display, path, external, modal }) => {
        switch (true) {
            case path !== undefined:
                return (
                    <Link
                        key={display}
                        className={classes.link}
                        to={path}
                        onClick={
                            toggleDisplayNav ? () => toggleDisplayNav() : null
                        }
                    >
                        {display}
                    </Link>
                );
            case external !== undefined:
                return (
                    <a
                        key={display}
                        className={classes.link}
                        href={external}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={
                            toggleDisplayNav ? () => toggleDisplayNav() : null
                        }
                    >
                        {display}
                    </a>
                );
            case modal !== undefined:
                return (
                    <a
                        key={display}
                        className={classes.link}
                        rel='noopener noreferrer'
                        onClick={handleNewsletterClick}
                    >
                        {display}
                    </a>
                );
            default:
                return;
        }
    };

    const list = [];
    navLinks.map((navLinkObj) => {
        list.push(findNavOutput(navLinkObj));
    });

    return list;
};

NavLinkSection.propTypes = {
    navLinks: PropTypes.arrayOf(PropTypes.object),
    toggleDisplayNav: PropTypes.func,
    toggleNewsletterSignupModal: PropTypes.func,
};

export default NavLinkSection;
