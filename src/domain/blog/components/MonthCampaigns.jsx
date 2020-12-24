import React from "react";
import PropTypes from "prop-types";
import classes from "./MonthCampaigns.module.scss";
import { CampaignAd } from "../../../components";

const MonthCampaigns = ({ campaigns }) => {

  return (
    <div className={classes.container}>
      <div className={classes.title}>This month&apos;s campaign</div>
      {campaigns.map(campaign => (
        <CampaignAd campaign={campaign} key={campaign.id} />
      ))}
    </div>
  );
};

MonthCampaigns.propTypes = {
  campaigns: PropTypes.array.isRequired
};

export default MonthCampaigns;
