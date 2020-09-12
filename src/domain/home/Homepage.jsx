import React, { useState, useEffect } from 'react';
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
import NewsletterSignupModal from '../../components/newsletter-signup-modal/NewsletterSignupModal';

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
            <Newsletter>
                <NewsletterSignupModal />
            </Newsletter>
        </main>
    );
};

export default Homepage;
