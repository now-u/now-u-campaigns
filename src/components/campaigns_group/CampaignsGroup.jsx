import React from "react";
import PropTypes from "prop-types";
import { Text, CampaignPoster, Button } from "../index";
import classes from "./CampaignsGroup.module.scss";
import { proposeCampaignUrl } from "../../utils/constants";

const CampaignsGroup = ({ title, campaigns }) => {
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
            Check back to see campaigns you will be able to support on the app
          </Text>
        )}
      </div>
      <div className={classes.proposeCampaign}>
        <p>What cause do you think we should tackle next?</p>
        <Button className={classes.button} variant="primary" urlToLaunch={proposeCampaignUrl}>
            Propose a campaign
        </Button>
      </div>
    </div>
  );
};

CampaignsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  campaigns: PropTypes.array || null,
};

export default CampaignsGroup;
