import React, { useState, useEffect } from 'react';
import { Footer, CampaignsGroup } from '../../components';
import { Intro, OurStory, TheApp, GetInvolved } from './components/index';
import classes from './Homepage.module.scss';

const Homepage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch('https://now-u-api.herokuapp.com/api/v1/campaigns');
      const campaigns = await resp.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className={classes.homepageContainer}>
      <Intro />
      <OurStory />
      <div id="campaigns" className={classes.liveCampaignsContainer}>
        <CampaignsGroup title="Coming soon: Live Campaigns" campaigns={campaigns} />
      </div>
      <TheApp />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Homepage;
