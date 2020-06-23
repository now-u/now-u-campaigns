import React, { useState, useEffect } from 'react';
import { Intro, TheApp, ActiveCampaigns, HowItWorks } from './components/index';
import classes from './Homepage.module.scss';

const Homepage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch('https://api.now-u.com/api/v1/campaigns');
      const campaigns = await resp.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className={classes.homepageContainer}>
      <Intro />
      <HowItWorks />
      <ActiveCampaigns campaigns={campaigns} />
      <TheApp />
    </div>
  );
};

export default Homepage;
