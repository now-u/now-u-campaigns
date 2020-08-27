import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';

const NavLinkSection = ({ navLink, closeDropdownNav, toggleNewsModal }) => {
    return (
        <Fragment>
            {navLink.map(({ display, path, external, modal }) => {
                return path ? (
                    <Link
                        key={display}
                        className={classes.link}
                        to={path}
                        onMouseDown={closeDropdownNav}
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
                        onMouseDown={closeDropdownNav}
                    >
                        {display}
                    </a>
                ) : modal ? (
                    <a
                        key={display}
                        className={classes.link}
                        rel='noopener noreferrer'
                        onMouseDown={toggleNewsModal}
                    >
                        {display}
                    </a>
                ) : null;
            })}
        </Fragment>
    );
};

NavLinkSection.propTypes = {
    navLink: PropTypes.arrayOf(PropTypes.object),
    closeDropdownNav: PropTypes.func,
    toggleNewsModal: PropTypes.func,
};

export default NavLinkSection;
