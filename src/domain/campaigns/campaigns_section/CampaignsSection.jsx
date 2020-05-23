import React from 'react';
import PropTypes from 'prop-types';
import { Text, CampaignPoster } from '../../../components';
import classes from '../Campaigns.module.scss';

const CampaignSection = ({ title, campaigns }) => {
  return (
    <div className={classes.campaignSection}>
      <Text className={classes.sectionHeader} type="h2">
        {title}
      </Text>
      <div className={classes.campaignsRow}>
        {campaigns ? (
          campaigns.map((campaign) => {
            return <CampaignPoster key={campaign.id} campaign={campaign} current />;
          })
        ) : (
          <Text type="h3" className={classes.noCampaigns}>
            Coming soon....
          </Text>
        )}
      </div>
    </div>
  );
};

CampaignSection.propTypes = {
  title: PropTypes.string.isRequired,
  campaigns: PropTypes.array || null,
};

export default CampaignSection;
