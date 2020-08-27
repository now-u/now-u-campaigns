import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';

const NavLinkSection = ({ navLink, closeDropdownNav }) => {
    return (
        <Fragment>
            {navLink.map(({ display, path, external }) => {
                return path ? (
                    <Link
                        key={display}
                        className={classes.link}
                        to={path}
                        onMouseDown={closeDropdownNav}
                    >
                        {display}
                    </Link>
                ) : (
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
                );
            })}
        </Fragment>
    );
};

NavLinkSection.propTypes = {
    navLink: PropTypes.arrayOf(PropTypes.object),
    closeDropdownNav: PropTypes.func,
};

export default NavLinkSection;
