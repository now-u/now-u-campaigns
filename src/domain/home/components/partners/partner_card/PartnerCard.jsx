import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components';
import classes from './PartnerCard.module.scss';

const PartnerCard = ({ id, name, logo_link }) => {
    return (
        <Link key={id} to={`/partners/${id}`}>
            <figure className={classes.partnerCard}>
                <div className={classes.imageSection}>
                    <img src={logo_link} alt='one of our beloved partners' />
                </div>
                <figcaption className={classes.textSection}>
                    <Text type='p' className={classes.partnerName}>
                        {name}
                    </Text>
                </figcaption>
            </figure>
        </Link>
    );
};

PartnerCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    logo_link: PropTypes.string,
};

export default PartnerCard;
