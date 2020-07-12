import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';

const Card = ({ imageUrl, title, mediaName, link }) => {
  return (
    <div className={classes.cardStyle}>
        <a href={link}>
            <img src={imageUrl} className={classes.cardImage}/>
        </a>
        <p className={classes.cardTitle}>{title}</p>
        <div className={classes.mediaName}>{mediaName}</div>
    </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    mediaName: PropTypes.string,
    link: PropTypes.string
};

export default Card;
