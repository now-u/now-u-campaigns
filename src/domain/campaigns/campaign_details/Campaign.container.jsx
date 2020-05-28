import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Campaign from './Campaign.component';

const CampaignContainer = () => {
  const { params } = useRouteMatch();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      const resp = await fetch(`https://now-u-api.herokuapp.com/api/v1/articles/${params.id}`);
      const campaign = await resp.json();
      setCampaign(campaign.data);
    };
    fetchCampaign();
  }, []);

  if (!campaign) return null;
  return <Campaign campaign={campaign} />;
};

export default CampaignContainer;
