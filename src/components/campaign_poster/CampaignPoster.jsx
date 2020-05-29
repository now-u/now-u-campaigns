import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text, Button } from '../../components';
import classes from './CampaignPoster.module.scss';

const CampaignPoster = ({ campaign: { id, title = 'Coming soon..', number_of_campaigners, header_image } }) => {
  return (
    <div key={id} className={classes.campaignPoster} style={{ backgroundImage: `url(${header_image})` }}>
      <Text type="h3">{title}</Text>
      {number_of_campaigners > 1 && (
        <Text className={classes.participants} type="h4">
          <i className="material-icons">group</i>
          &nbsp;{number_of_campaigners} people have joined
        </Text>
      )}
      <Link to={`/campaigns/${id}`}>
        <Button id={id} className={classes.campaignBtn} variant="primary">
          See more
          <i className="material-icons">chevron_right</i>
        </Button>
      </Link>
    </div>
  );
};

CampaignPoster.propTypes = {
  campaign: PropTypes.any.isRequired,
};

export default CampaignPoster;
