import React, { useEffect, useState } from 'react';
import { CampaignsGroup, AppDownloadButtons } from '../../components';
import { campaignsURL } from '../../utils/constants';
import classes from './Campaigns.module.scss';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

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
      <div className={classes.campaignsHeader}>
        <h4 className={classes.campaignsTitle}>Campaigns</h4>
        <div className={classes.appLinks}>
        <AppDownloadButtons />
        </div>
      </div>
      <div className={classes.campaignsAbout}>
        <p>We partner with trusted charities and social enterprises to bring you focused monthly campaigns with clear and attainable objectives. Each campaign contains informative resources and actions you can complete, curated to inform, involve and inspire now-u users to make a meaningful contribution to each charitable cause.</p>
      </div>
      <CampaignsGroup title="Active Campaigns" campaigns={campaigns} />
    </div>
  );
};

export default Campaigns;
