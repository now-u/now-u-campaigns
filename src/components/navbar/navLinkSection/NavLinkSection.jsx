import React, { Fragment } from 'react';
// import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';

const NavLinkSection = ({ navLink, toggleBurgerNavDisplay }) => {
    return (
        <Fragment>
            {navLink.map(({ display, path, external }) => {
                return path ? (
                    <Link
                        key={display}
                        className={classes.link}
                        to={path}
                        onClick={toggleBurgerNavDisplay}
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
                        onClick={toggleBurgerNavDisplay}
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
    toggleBurgerNavDisplay: PropTypes.func,
};

export default NavLinkSection;
