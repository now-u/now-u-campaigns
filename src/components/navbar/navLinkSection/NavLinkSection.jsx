import React, { Fragment } from 'react';
// import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classes from './NavLinkSection.module.scss';
import PropTypes from 'prop-types';

const NavLinkSection = ({ navLink }) => {
    return (
        <Fragment>
            {navLink.map(({ display, path, external }) => {
                return path ? (
                    <Link key={display} className={classes.link} to={path}>
                        {display}
                    </Link>
                ) : (
                    <a
                        key={display}
                        className={classes.link}
                        href={external}
                        target='_blank'
                        rel='noopener noreferrer'
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
};

export default NavLinkSection;
