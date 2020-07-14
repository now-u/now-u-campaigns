import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';
import { Text } from '../../components';

const Card = ({ imageUrl, title, mediaName, link }) => {
  return (
    <div className={classes.cardStyle}>
        <a href={link}>
            <img src={imageUrl} className={classes.cardImage}/>
        </a>
        <Text type="h5" className={classes.cardTitle}>{title}</Text>
        <Text type="h6" className={classes.mediaName}>{mediaName}</Text>
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
