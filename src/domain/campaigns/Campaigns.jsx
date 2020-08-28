import React, { useEffect, useState } from 'react';
import { CampaignsGroup, AppDownloadButtons } from '../../components';
import { campaignsURL, pastCampaignsURL } from '../../utils/constants';
import classes from './Campaigns.module.scss';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [pastCampaigns, setPastCampaigns] = useState([]);
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentDate = new Date()
  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsResponse = await fetch(campaignsURL);
      const campaigns = await campaignsResponse.json();
      const pastCampaignsResponse = await fetch(pastCampaignsURL);
      const pastCampaigns = await pastCampaignsResponse.json();
      setCampaigns(campaigns?.data);
      setPastCampaigns(pastCampaigns?.data);
    };
    fetchCampaigns();
  }, []);
  return (
    <div className={classes.campaignsContainer}>
      <div className={classes.campaignsHeader}>
        <p className={classes.campaignsTitle}>Campaigns</p>
        <div className={classes.appLinks}>
        <AppDownloadButtons />
        </div>
      </div>
      <div className={classes.campaignsAbout}>
        <p>We partner with trusted charities and social enterprises to bring you focused monthly campaigns with clear and attainable objectives. Each campaign contains informative resources and actions you can complete, curated to inform, involve and inspire now-u users to make a meaningful contribution to each charitable cause.</p>
      </div>
      <CampaignsGroup title={Months[currentDate.getMonth()] + "'s Campaigns"} campaigns={campaigns} /> 
      <CampaignsGroup title="Past Campaigns" campaigns={pastCampaigns} /> 
    </div>
  );
};

export default Campaigns;
