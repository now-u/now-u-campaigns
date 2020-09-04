import React, { useEffect, useState } from "react";
import { AppDownload, CampaignsGroup } from "../../components";
import { campaignsURL } from "../../utils/constants";
import classes from "./Campaigns.module.scss";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [upcomingCampaigns] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch(campaignsURL);
      const campaigns = await resp.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();
  }, []);
  return (
    <div className={classes.campaignsContainer}>
      <CampaignsGroup title="Active Campaigns" campaigns={campaigns} />
      {upcomingCampaigns && <CampaignsGroup title="Upcoming Campaigns" campaigns={upcomingCampaigns} />}
      <AppDownload />
    </div>
  );
};

export default Campaigns;
