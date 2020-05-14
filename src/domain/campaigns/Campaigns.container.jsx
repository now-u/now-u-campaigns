import React, { useEffect, useState } from 'react';
import Campaigns from './Campaigns.component';
import mockData from '../../utils/mockData.json';

const CampaignsContainer = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const promise = await new Promise((res) => {
        setTimeout(res(mockData), 2000);
      });
      setCampaigns(promise?.data);
    };
    fetchCampaigns();
  }, []);
  return <Campaigns activeCampaigns={campaigns} upcomingCampaigns={campaigns} />;
};

export default CampaignsContainer;
