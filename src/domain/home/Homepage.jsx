import React, { useState, useEffect } from 'react';
import { Intro, TheApp, ActiveCampaigns, HowItWorks } from './components/index';
import classes from './Homepage.module.scss';

const Homepage = () => {
  const [campaigns, setCampaigns, partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const respCampaigns = await fetch('https://api.now-u.com/api/v1/campaigns');
      const campaigns = await respCampaigns.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();

    const fetchPartners = async () => {
      const respPartners = await fetch('https://api.now-u.com/api/v1/organisations');
      const partners = await respPartners.json();
      setPartners(partners?.data);
    };
    fetchPartners();
  }, []);

  return (
    <div className={classes.homepageContainer}>
      <Intro />
      <HowItWorks />
      <ActiveCampaigns campaigns={campaigns} />
      <p>{campaigns[1]?.title}</p>
      <p>{partners[1]?.title}</p>
      <TheApp />
    </div>
  );
};

export default Homepage;
