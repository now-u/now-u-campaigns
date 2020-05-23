import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text, Button } from '../../components';
import classes from './CampaignPoster.module.scss';

const CampaignPoster = ({ campaign: { id, title = 'Coming soon..', participants = 22804, header_image } }) => {
  const history = useHistory();

  const onClick = ({ target: { id } }) => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <div key={id} className={classes.campaignPoster} style={{ backgroundImage: `url(${header_image})` }}>
      <Text type="h3">{title}</Text>
      <Text type="h4">
        <i className="material-icons">group</i>
        &nbsp;{participants} people have joined
      </Text>
      <Button id={id} className={classes.campaignBtn} variant="primary" onClick={onClick}>
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
