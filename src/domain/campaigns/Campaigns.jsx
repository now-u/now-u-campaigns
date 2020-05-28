import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppDownload } from '../../components';
import CampaignSection from './campaigns_section/CampaignsSection';
import classes from './Campaigns.module.scss';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [upcomingCampaigns] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch('https://now-u-api.herokuapp.com/api/v1/articles');
      const campaigns = await resp.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();
  }, []);
  return (
    <div className={classes.campaignsContainer}>
      <CampaignSection title="Active Campaigns" campaigns={campaigns} />
      {upcomingCampaigns && <CampaignSection title="Upcoming Campaigns" campaigns={upcomingCampaigns} />}
      <AppDownload />
    </div>
  );
};

Campaigns.propTypes = {
  activeCampaigns: PropTypes.array,
  upcomingCampaigns: PropTypes.array,
};

export default Campaigns;
