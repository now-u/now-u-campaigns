import React from "react";
import PropTypes from "prop-types";
import classes from "./CampaignAd.module.scss";
import { Text } from "../../components";

const CampaignAd = ({ campaign }) => {
  return (
    <div className={classes.container}>
      <img src={campaign.header_image} />
      <div className={classes.imageText}>
        <Text type="p">This month campaign</Text>
        <Text type="p" className={classes.campaignShortName}>#{campaign.short_name}</Text>
      </div>
    </div>
  );
};


CampaignAd.propTypes = {
  campaign: PropTypes.object.isRequired
};


export default CampaignAd;
