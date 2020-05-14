import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from '../../components';
import classes from './CampaignPoster.module.scss';

const CampaignPoster = ({ campaign: { id, title, participants = 22804, header_image } }) => {
  return (
    <div key={id} className={classes.campaignPoster} style={{ backgroundImage: `url(${header_image})` }}>
      <Text type="h3">{title}</Text>
      <Text type="h4">
        <i className="material-icons">group</i>
        &nbsp;{participants} people have joined
      </Text>
      <Button className={classes.campaignBtn} variant="primary">
        See more
        <i className="material-icons">chevron_right</i>
      </Button>
    </div>
  );
};

CampaignPoster.propTypes = {
  campaign: PropTypes.any.isRequired,
};

export default CampaignPoster;
