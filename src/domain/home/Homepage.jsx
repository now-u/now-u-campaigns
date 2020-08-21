import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { campaignsURL, partnersURL } from '../../utils/constants';
import {
    Intro,
    TakeAction,
    ActiveCampaigns,
    WaveBreak,
    HowItWorks,
    Partners,
    Newsletter,
} from './components/index';

const Homepage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            const resp = await fetch(campaignsURL);
            const campaigns = await resp.json();
            setCampaigns(campaigns?.data);
        };
        fetchCampaigns();

        const fetchPartners = async () => {
            const respPartners = await fetch(partnersURL);
            const partners = await respPartners.json();
            setPartners(partners?.data);
        };
        fetchPartners();
    }, []);

    return (
        <main>
            <Intro />
            <TakeAction />
            <ActiveCampaigns campaigns={campaigns} />
            <WaveBreak />
            <HowItWorks />
            <Partners partners={partners} />
            <Newsletter />
        </main>
    );
=======
import { Intro, TheApp, ActiveCampaigns, Partners, HowItWorks } from './components/index';
import classes from './Homepage.module.scss';

const Homepage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [partners, setPartners] = useState([]);

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
      <TheApp />
      <Partners partners={partners} />
    </div>
  );
>>>>>>> dev
};

export default Homepage;