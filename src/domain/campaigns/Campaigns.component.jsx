/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, CampaignPoster, AppDownload } from '../../components';
import classes from './Campaigns.module.scss';

const Campaigns = ({ activeCampaigns, upcomingCampaigns }) => {
  window.console.log(activeCampaigns);
  return (
    <div className={classes.campaignsContainer}>
      <div className={classes.campaigns}>
        <Text className={classes.sectionHeader} type="h2">
          Active Campaigns
        </Text>
        <div className={classes.campaignsRow}>
          {activeCampaigns.map(({ id, ...campaignProps }) => {
            return <CampaignPoster key={id} campaign={campaignProps} />;
          })}
        </div>
      </div>
      <div className={classes.campaigns}>
        <Text className={classes.sectionHeader} type="h2">
          Upcoming Campaigns
        </Text>
        <div className={classes.campaignsRow}>
          {upcomingCampaigns.map(({ id, ...campaignProps }) => {
            return <CampaignPoster key={id} campaign={campaignProps} />;
          })}
        </div>
      </div>
      <AppDownload />
    </div>
  );
};

Campaigns.propTypes = {
  activeCampaigns: PropTypes.array,
  upcomingCampaigns: PropTypes.array,
};

export default Campaigns;
