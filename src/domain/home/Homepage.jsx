import React, { useState, useEffect } from 'react';
import classes from './Homepage.module.scss';
import {
    Intro,
    TakeAction,
    TheApp,
    ActiveCampaigns,
    HowItWorks,
} from './components/index';

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
            <TakeAction />
            <ActiveCampaigns campaigns={campaigns} />
            <HowItWorks />
            <TheApp />
        </div>
    );
};

export default Homepage;
