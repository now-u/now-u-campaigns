import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components';
import classes from './CampaignCard.module.scss';
// import { useHistory } from 'react-router-dom';

const CampaignCard = ({ id, title, header_image }) => {
    // const history = useHistory();

    return (
        <Link to={`/campaigns/${id}`}>
            <figure
                className={classes.campaignCard}
                style={
                    {
                        // backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))`,
                    }
                }
            >
                <img
                    src={`${header_image}`}
                    alt={`dynamic picture of ${title}`}
                />
                <figcaption className={classes.campaignTitle}>
                    <Text type='h3'>{title}</Text>
                </figcaption>
            </figure>
        </Link>
    );
};

CampaignCard.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    header_image: PropTypes.string,
    campaigns: PropTypes.array || null,
};

export default CampaignCard;
